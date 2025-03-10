from flask import Flask, Response, jsonify, request
import cv2
from flask_cors import CORS
from predict import predict_gesture, sentence
import mediapipe as mp

app = Flask(__name__)
CORS(app)

cap = None  # Global variable for video capture
recognized_text = ""  # Store last recognized word

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.7)
mp_draw = mp.solutions.drawing_utils

def generate_frames():
    """
    Capture video frames, predict ISL gestures, and send the processed frames.
    """
    global cap, recognized_text
    while cap and cap.isOpened():
        success, frame = cap.read()
        if not success:
            break
        else:
            frame = cv2.flip(frame, 1)  # Flip horizontally
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands.process(rgb_frame)

            # Draw bounding box and skeleton if hands detected
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                    # Get bounding box
                    h, w, c = frame.shape
                    x_min, y_min = w, h
                    x_max, y_max = 0, 0

                    for lm in hand_landmarks.landmark:
                        x, y = int(lm.x * w), int(lm.y * h)
                        x_min, y_min = min(x, x_min), min(y, y_min)
                        x_max, y_max = max(x, x_max), max(y, y_max)

                    cv2.rectangle(frame, (x_min, y_min), (x_max, y_max), (0, 255, 0), 2)  # Draw bounding box

            # Predict gesture
            predicted_class, full_sentence = predict_gesture(frame)
            recognized_text = f"Gesture: {predicted_class}"

            # Encode and send frame
            _, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

@app.route('/video_feed')
def video_feed():
    """
    Start the webcam stream and return frames.
    """
    global cap
    if cap is None:
        cap = cv2.VideoCapture(0)
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/stop_feed', methods=['POST'])
def stop_feed():
    """
    Stop the video feed.
    """
    global cap
    if cap is not None:
        cap.release()
        cap = None
    return "Feed stopped", 200

@app.route('/get_recognized_text')
def get_recognized_text():
    """
    Return the last recognized ISL gesture.
    """
    global recognized_text
    return jsonify({"recognized_text": recognized_text})

@app.route('/get_sentence')
def get_sentence():
    """
    Return the full sentence formed from gestures.
    """
    global sentence
    return jsonify({"sentence": "".join(sentence)})

if __name__ == "__main__":
    app.run(debug=True)
