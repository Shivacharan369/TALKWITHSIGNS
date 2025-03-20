
---

# 🖐️ TALKWITHSIGNS – Indian Sign Language Translator  

## **📖 About the Project**  
**TALKWITHSIGNS** is a **real-time Indian Sign Language (ISL) to Text & Speech Translator** that bridges communication gaps for the deaf and hard-of-hearing community. The system uses **Deep Learning, Computer Vision, and NLP** to recognize ISL gestures and convert them into text and speech.  

---

## **🎯 Objectives**  
- ✅ **Real-time ISL Gesture Recognition**  
- ✅ **Convert recognized gestures into text & speech**  
- ✅ **Ensure accessibility for deaf & hard-of-hearing individuals**  
- ✅ **Provide an interactive web-based interface**  
- ✅ **Enhance AI model accuracy with better training data**  

---

## **🛠️ Tech Stack**  
| Category       | Technology Used |
|---------------|----------------|
| **Frontend**  | React.js, HTML, CSS, JavaScript |
| **Backend**   | Flask, Express.js, Node.js |
| **Machine Learning** | TensorFlow, MediaPipe, OpenCV |


---

## **🚀 Features**  
✔️ **Real-time Sign Language Recognition**  
✔️ **Text & Speech Output**  
✔️ **AI-powered NLP for Sentence Formation**  
✔️ **Hand Tracking & Bounding Box Detection**  
✔️ **Interactive Web Interface**  

---

## **📌 Installation & Setup**  

### **Prerequisites**  
Before running the project, ensure you have the following installed:  
- **Python 3.x**  
- **Node.js & npm**  
- **Git**  
- **Virtual Environment (venv)**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/shivachara369/TALKWITHSIGNS.git
cd TALKWITHSIGNS
```

### **2️⃣ Backend Setup (Flask Server)**  
```sh
cd server
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
python app.py
```

### **3️⃣ Frontend Setup (React.js)**  
```sh
cd ../talkwithsigns
npm install
npm start
```

### **4️⃣ Open the App**  
Visit **`http://localhost:3000`** in your browser.

---

## **📂 Project Structure**  
```
TALKWITHSIGNS/
│── talkwithsigns/  # Frontend (React.js)
│── server/         # Backend (Flask)
│   ├── model/      # Machine Learning Model
│   ├── dataset/    # ISL Training Data
│   ├── app.py      # Flask API
│── README.md       # Project Documentation
│── .gitignore      # Ignored Files
```

---

## **📌 How It Works**  
1. The **user performs an ISL gesture** in front of a webcam.  
2. The **Flask backend processes the video feed** and detects hand gestures using **MediaPipe & TensorFlow**.  
3. The **AI model classifies the sign** and converts it into text.  
4. The **text is displayed** on the screen and converted into speech using **Text-to-Speech (TTS)**.  

---

## **🖼️ Screenshots**  
![t1](https://github.com/user-attachments/assets/7d79c3d4-2130-4a53-982e-a43305414d04)
![Screenshot 2025-03-10 202141](https://github.com/user-attachments/assets/8a577eec-2630-4607-a0a0-f9e4a4406aee)
![Screenshot 2025-03-10 202152](https://github.com/user-attachments/assets/ccd73cd9-c884-4ef1-b505-4682edbbb93b)
![Screenshot 2025-03-10 202205](https://github.com/user-attachments/assets/0da0ae9f-4fa1-4e50-9d72-2d09db395541)
![Screenshot 2025-03-10 202224](https://github.com/user-attachments/assets/70529dd1-4a75-4a66-bb35-a41a555daab4)
![Screenshot 2025-03-10 202238](https://github.com/user-attachments/assets/b9ee13e5-df08-453d-a2b9-8e31b7e5ab55)
![Screenshot 2025-03-10 202247](https://github.com/user-attachments/assets/25bfea47-593e-47fd-a5a6-730738dd4d50)
![Screenshot 2025-03-10 202255](https://github.com/user-attachments/assets/2fda24d1-fc40-47c6-b8f9-6fd812440922)
![Screenshot 2025-03-10 202342](https://github.com/user-attachments/assets/308f3e4c-3532-4afc-831b-422cc1f3511c)



---

## **📌 Troubleshooting**  
**1. Virtual Environment Not Activating?**  
Try running:  
```sh
source venv/bin/activate  # (Mac/Linux)
venv\Scripts\activate      # (Windows)
```

**2. Flask Server Not Running?**  
Check if all dependencies are installed:  
```sh
pip install -r requirements.txt
```

**3. Frontend Not Starting?**  
Make sure you're in the `talkwithsigns` directory and run:  
```sh
npm install
npm start
```

---

## **🎯 Future Enhancements**  
🔹 **Mobile App Development** (Android/iOS)  
🔹 **Multi-language Support**  
🔹 **Better NLP for Sentence Formation**  
🔹 **Improved Sign Recognition with More Training Data**  

---

## **🤝 Contributing**  
Want to contribute? Follow these steps:  
1. **Fork** the repository  
2. **Create a new branch** (`feature-xyz`)  
3. **Commit your changes** (`git commit -m "Added new feature"`)  
4. **Push to your branch** and open a **Pull Request**  

---
---

## **📞 Contact & Acknowledgments**  
👤 **Developed by:
                  1)Shivacharan 
                  2)Hema prakash reddy
                  3)Aroosh reddy
📧 **Email:** shivacharan.deshetti@gmail.com 
🌐 **Project URL:** [GitHub Repository](https://github.com/shivachara369/TALKWITHSIGNS)  

---
