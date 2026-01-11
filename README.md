# 🍅 Tomato-Care

A smart agriculture web application that helps farmers detect tomato leaf diseases and get personalized treatment recommendations based on disease severity, budget, and farming type.

---

## 📸 Screenshots

**Homepage**  
![Homepage](screenshots/homepage.png)  
*Landing page with drag-and-drop upload interface*

**Image Upload**  
![Upload](screenshots/upload.png)  
*Tomato leaf image upload with real-time preview*

**Disease Detection Results**  
![Detection](screenshots/detection.png)  
*AI-powered disease identification with confidence score*

**Treatment Input Form**  
![Input Form](screenshots/input-form.png)  
*User inputs for severity, budget, and farming type*

**Treatment Recommendations**  
![Recommendations](screenshots/recommendations.png)  
*Personalized treatment suggestions based on user constraints*

**News Section**  
![News](screenshots/news.png)  
*Live agricultural news updates*

---

## 🎯 Problem Statement

Farmers struggle with:
- Identifying tomato leaf diseases early
- Choosing treatments based on their budget
- Finding solutions suitable for their farming type (organic/inorganic)
- Staying updated with agricultural news

Tomato-Care solves these problems with AI-powered disease detection and smart treatment recommendations.

---

## ✨ Features

### 🔐 Authentication
- Firebase Authentication for secure login/signup
- User session management

> ⚠️ **Testing Note:** Use dummy credentials only. Don't use personal information.

### 🖼️ Disease Detection
- Upload tomato leaf images (drag-and-drop or click)
- AI-powered disease identification using MobileNetV2
- Confidence score and severity assessment
- Image storage in Firebase Storage

### 💊 Treatment Recommendations
- Personalized suggestions based on:
  - Disease type
  - Severity level (user input)
  - Budget (Low/Medium/High)
  - Farming type (Organic/Inorganic/Integrated)

### 📰 Agricultural News
- Live news feed using GNews API
- Auto-refreshes every 30 minutes
- Latest agriculture and farming updates

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React.js, Bootstrap |
| **Backend** | Node.js, Express.js |
| **Authentication** | Firebase Authentication |
| **Storage** | Firebase Storage, Firestore |
| **ML Model** | Python, Flask, TensorFlow, MobileNetV2 |
| **APIs** | GNews API |

---

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- Firebase account
- GNews API key

### Step 1: Clone Repository
```bash
git clone https://github.com/Taniya-1234/tomato-care.git
cd tomato-care
```

### Step 2: Configure Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Enable Storage and Firestore
4. Add your config to `frontend/src/utils/firebaseConfig.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
```

### Step 3: Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file:
```env
VITE_GNEWS_API_KEY=your_gnews_api_key
```

Start the app:
```bash
npm run dev
```

### Step 4: Access Application
Open browser: `http://localhost:5173`

---

## 🚀 Usage

1. **Sign Up/Login** - Create account with dummy credentials
2. **Upload Image** - Drag and drop tomato leaf photo
3. **View Results** - See detected disease and confidence score
4. **Enter Details** - Input severity, budget, and farming type
5. **Get Recommendations** - View treatment suggestions
6. **Read News** - Stay updated with latest agriculture news

---

## ⚠️ Important Notes

- ML model file not included (large size ~200MB)
- Use dummy credentials for testing
- GNews API has rate limits on free tier

---

## 🔮 Future Enhancements

- Automated severity detection from images
- Multi-crop support (potato, pepper, cucumber)
- Offline PWA mode
- Multi-language support (Hindi, Marathi, Tamil)
- Weather-based alerts
- Mobile app version

---

## 🤝 Contributing

Contributions welcome! Fork the repo and submit a pull request.

---

## 👨‍💻 Developer

**Taniya Ghuse**

Full-stack developer passionate about agricultural technology solutions.

🔗 [LinkedIn](https://www.linkedin.com/in/taniya-ghuse/) 


💻 [GitHub](https://github.com/Taniya-1234)

---

**⭐ If you find this helpful, please star the repository!**
