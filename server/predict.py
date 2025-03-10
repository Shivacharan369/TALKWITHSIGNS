import os
import numpy as np
import tensorflow as tf
import cv2
import time
import mediapipe as mp

MODEL_PATH = "model/isl_rnn_model.h5"
model = tf.keras.models.load_model(MODEL_PATH)

# Load class labels
CLASSES = sorted(os.listdir("C:/websites/signdetection/server/Model/Indian"))  # Ensure training order matches
sentence = []  # Store full recognized sentence
last_recognized_time = time.time()

# MediaPipe Hand Tracking
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7)
mp_draw = mp.solutions.drawing_utils

def predict_gesture(frame):
    global sentence, last_recognized_time
    img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    img = cv2.resize(img, (64, 64))
    img = img / 255.0
    img = img.reshape(1, 64, 64, 1)

    predictions = model.predict(img)
    class_index = np.argmax(predictions)
    recognized_word = CLASSES[class_index]

    # Add recognized word to sentence
    if time.time() - last_recognized_time > 2:
        sentence.append(" ")  # Add space after 2s pause
    sentence.append(recognized_word)
    last_recognized_time = time.time()

    return recognized_word, "".join(sentence)  # Return word + full sentence
