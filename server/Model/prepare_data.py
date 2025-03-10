import os
import numpy as np
import cv2
from glob import glob

# Path to dataset
DATASET_PATH = "Indian/"  # Update if needed
OUTPUT_PATH = "dataset/"   # Where to save processed data

# Get class names from folder names (sorted for consistency)
CLASSES = sorted(os.listdir(DATASET_PATH))
print("Detected Classes:", CLASSES)

# Initialize lists for data and labels
data, labels = [], []

for label, class_name in enumerate(CLASSES):
    class_path = os.path.join(DATASET_PATH, class_name)
    image_paths = glob(os.path.join(class_path, "*.jpg"))  # Change to "*.png" if needed

    for img_path in image_paths:
        img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)  # Read image in grayscale
        img = cv2.resize(img, (64, 64))  # Resize to 64x64
        img = img / 255.0  # Normalize pixel values

        data.append(img)
        labels.append(label)

# Convert to NumPy arrays
data = np.array(data, dtype="float32").reshape(-1, 64, 64, 1)  # Add channel dimension
labels = np.array(labels, dtype="int")

# Save data
os.makedirs(OUTPUT_PATH, exist_ok=True)
np.save(os.path.join(OUTPUT_PATH, "train_data.npy"), data)
np.save(os.path.join(OUTPUT_PATH, "train_labels.npy"), labels)

print(f"Data saved to {OUTPUT_PATH}")
    