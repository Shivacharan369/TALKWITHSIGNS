import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, LSTM, Dense, TimeDistributed, Reshape
from tensorflow.keras.utils import to_categorical
from sklearn.model_selection import train_test_split

# ✅ 1️⃣ Load dataset
DATA_PATH = "C:/websites/signdetection/server/Model/dataset"
X_data = np.load(os.path.join(DATA_PATH, "train_data.npy"))  # (N, 64, 64, 1)
y_data = np.load(os.path.join(DATA_PATH, "train_labels.npy"))  # (N,)

# ✅ 2️⃣ Convert labels to one-hot encoding
num_classes = len(set(y_data))  # Number of unique classes (A-Z and 1-9)
y_data = to_categorical(y_data, num_classes=num_classes)

# ✅ 3️⃣ Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X_data, y_data, test_size=0.2, random_state=42)

# ✅ 4️⃣ Reshape data for LSTM
X_train = X_train.reshape(X_train.shape[0], 64, 64)  # (N, 64, 64)
X_test = X_test.reshape(X_test.shape[0], 64, 64)

# ✅ 5️⃣ Define Model: CNN + LSTM
model = Sequential([
    Reshape((64, 64, 1), input_shape=(64, 64)),  # Ensure correct shape
    Conv2D(32, (3, 3), activation='relu', padding="same"),
    MaxPooling2D((2, 2)),
    
    Conv2D(64, (3, 3), activation='relu', padding="same"),
    MaxPooling2D((2, 2)),
    
    Flatten(),
    Reshape((16, -1)),  # Convert to (time_steps, features)
    
    LSTM(64, return_sequences=False),  # LSTM for sequence learning
    Dense(64, activation="relu"),
    Dense(num_classes, activation="softmax")  # Output layer
])

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
model.summary()

# ✅ 6️⃣ Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# ✅ 7️⃣ Save the trained model
os.makedirs("server/model/", exist_ok=True)
model.save("server/model/isl_rnn_model.h5")

print("🎉 Model training complete! Saved as 'server/model/isl_rnn_model.h5'")
