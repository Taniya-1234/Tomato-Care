# 🍅 Tomato-Care

A smart agriculture web application that allows farmers to upload images of tomato leaves, detects diseases using **deep learning**, and provides **personalized treatment recommendations** based on disease severity, budget, and farming type. Built with React, Node.js, and a CNN-based ML microservice.

---

## 📸 Demo

### Screenshots

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

**Dashboard**  
![Dashboard](screenshots/dashboard.png)  
*Analytics and disease history tracking*

---

## 🎥 Video Demo
🎥 [Watch Full Demo Video](#) *(Add your demo video link here)*

---

## 🚀 Live Demo
🔗 **GitHub Repository:** https://github.com/yourusername/tomato-care  

⚠️ **Note:** The ML model requires specific dependencies and trained weights to run locally. The repository includes the complete architecture, frontend implementation, and integration logic for review.

---

## 🎯 Problem Statement

Farmers face significant challenges in:
- **Early disease identification** in tomato crops
- **Choosing appropriate treatments** based on budget constraints
- **Understanding severity levels** and urgency of action
- **Selecting farming-practice-specific solutions** (organic vs. inorganic)

**Tomato-Care** addresses these challenges through an intelligent, user-friendly platform that combines ML-based detection with practical, budget-aware recommendations.

---

## ✨ Features

- **Image Upload Interface** - Drag-and-drop support for tomato leaf images (JPEG, PNG)
- **Disease Detection** - CNN-based identification of 10+ common tomato diseases
- **Severity Classification** - Automatic assessment (Mild / Moderate / Severe)
- **Smart Treatment Engine** - Context-aware recommendations based on:
  - Disease type and severity
  - Farmer's budget (Low / Medium / High)
  - Farming practice (Organic / Inorganic / Integrated)
- **History Tracking** - View past diagnoses and treatment plans
- **Responsive Design** - Mobile-optimized interface for field use
- **Light & Dark Mode** - Toggle between themes for comfortable viewing
- **Dashboard Analytics** - Visual insights into disease patterns and trends

---

## 🏗️ System Architecture
```
┌─────────────────┐
│  React Frontend │
│  - Image Upload │
│  - Result View  │
│  - Dashboard    │
└────────┬────────┘
         │
         │ REST API
         │
┌────────▼────────┐
│  Express.js API │
│  - Routes       │
│  - Auth         │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐  ┌─▼──────────┐
│ Flask │  │ Treatment  │
│  ML   │  │  Engine    │
│  API  │  │ (Rules)    │
└───┬───┘  └─┬──────────┘
    │         │
┌───▼─────────▼───┐
│    MongoDB      │
│  - Detections   │
│  - User Data    │
└─────────────────┘
```

**Workflow:**

1. **Image Upload** → User uploads tomato leaf image
2. **Preprocessing** → Image is resized and normalized
3. **Disease Detection** → CNN model identifies disease
4. **Severity Analysis** → System calculates severity level
5. **User Input** → Farmer provides budget and farming type
6. **Treatment Matching** → Rule engine finds best recommendations
7. **Display Results** → User receives actionable treatment plan

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI
- **Tailwind CSS** - Responsive styling
- **Axios** - API communication
- **React Router** - Navigation
- **React Dropzone** - Image upload
- **Recharts** - Data visualization

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Machine Learning
- **Python 3.8+** - ML runtime
- **Flask** - ML API framework
- **TensorFlow / Keras** - Deep learning
- **OpenCV** - Image preprocessing
- **NumPy** - Numerical operations

### Database
- **MongoDB** - NoSQL database for disease records and user history

---

## 🧠 Machine Learning Component

### Disease Detection Model
- **Architecture:** Convolutional Neural Network (CNN)
- **Base Model:** MobileNetV2 / Custom CNN
- **Dataset:** PlantVillage Tomato Leaf Dataset (~18,000 images)
- **Training Accuracy:** ~94%
- **Inference Time:** ~200ms per image

### Supported Diseases
- Early Blight
- Late Blight
- Leaf Mold
- Septoria Leaf Spot
- Bacterial Spot
- Yellow Leaf Curl Virus
- Mosaic Virus
- Target Spot
- Spider Mites (Two-spotted)
- Healthy Leaf

### Severity Classification Logic

| Severity | Criteria | Action Required |
|----------|----------|-----------------|
| **Mild** | < 30% leaf affected | Preventive measures |
| **Moderate** | 30-60% affected | Active treatment |
| **Severe** | > 60% affected | Immediate intervention |

---

## 🌱 Treatment Recommendation System

### Design Philosophy
Treatment recommendations use a **rule-based decision engine** rather than machine learning for:
- ✅ **Transparency** - Farmers understand why treatments are suggested
- ✅ **Explainability** - Easy validation with agricultural experts
- ✅ **Reliability** - Deterministic, proven agricultural practices
- ✅ **Flexibility** - Simple updates with new treatments

### Recommendation Example

**Input:**
```json
{
  "disease": "Early Blight",
  "severity": "Moderate",
  "budget": "Low",
  "farmingType": "Organic"
}
```

**Output:**
```json
{
  "treatments": [
    {
      "name": "Neem Oil Spray",
      "dosage": "3-5ml per liter of water",
      "frequency": "Weekly for 3 weeks",
      "cost": "₹200-300",
      "effectiveness": "75-80%"
    },
    {
      "name": "Remove Infected Leaves",
      "instructions": "Prune and destroy affected foliage",
      "cost": "Free (labor only)"
    },
    {
      "name": "Improve Air Circulation",
      "instructions": "Maintain 60cm plant spacing",
      "preventive": true
    }
  ]
}
```

---

## 📁 Project Structure
```
tomato-care/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── DiseaseResult.jsx
│   │   │   ├── TreatmentCard.jsx
│   │   │   ├── TreatmentForm.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Detection.jsx
│   │   │   ├── History.jsx
│   │   │   └── About.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Detection.js
│   │   └── Treatment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── detection.js
│   │   └── treatment.js
│   ├── controllers/
│   ├── middleware/
│   ├── utils/
│   │   └── treatmentEngine.js
│   ├── data/
│   │   └── treatments.json
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── ml-service/
│   ├── model/
│   │   └── README.md
│   ├── utils/
│   │   ├── image_processor.py
│   │   └── severity_analyzer.py
│   ├── app.py
│   ├── requirements.txt
│   └── .env
│
├── screenshots/
│   ├── homepage.png
│   ├── upload.png
│   ├── detection.png
│   ├── input-form.png
│   ├── recommendations.png
│   └── dashboard.png
│
├── .gitignore
└── README.md
```

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- MongoDB (local installation or MongoDB Atlas account)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/tomato-care.git
cd tomato-care
```

### Step 2: Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
VITE_ML_API_URL=http://localhost:5001
```

Start the React application:
```bash
npm run dev
```

### Step 3: Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
ML_SERVICE_URL=http://localhost:5001
```

Start the backend server:
```bash
npm start
```

### Step 4: ML Service Setup
```bash
cd ml-service
pip install -r requirements.txt
```

Create a `.env` file in the ml-service directory:
```env
PORT=5001
MODEL_PATH=./model/tomato_disease_model.h5
```

Start the ML service:
```bash
python app.py
```

### Step 5: Access Application
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🚀 Usage

1. **Upload Tomato Leaf Image**
   - Click the upload area or drag and drop an image
   - Supported formats: JPEG, PNG
   - Maximum file size: 5MB

2. **View Detection Results**
   - System displays detected disease
   - Shows confidence score and severity level

3. **Input Treatment Constraints**
   - Select your budget range (Low / Medium / High)
   - Choose farming type (Organic / Inorganic / Integrated)

4. **Get Recommendations**
   - View personalized treatment suggestions
   - See cost estimates and effectiveness ratings
   - Access step-by-step application instructions

5. **Track History**
   - Review past detections in dashboard
   - Monitor disease patterns over time

**Testing Tip:** Sample tomato leaf images are available in the `/sample-images/` folder for testing.

---

## ⚠️ Important Notes

### ML Model Availability
The trained model file (`tomato_disease_model.h5`) is **not included** in this repository due to:
- Large file size (~200MB) exceeding GitHub limits
- Environment-specific dependencies (TensorFlow, CUDA versions)
- Dataset licensing considerations

**To obtain the model:**
- Train using the provided scripts in `/ml-service/training/`
- Contact the development team for pre-trained weights
- Model architecture is fully documented for reproduction

### Environment Dependencies
The ML service requires specific Python packages and may need environment-specific configuration. Refer to `/ml-service/README.md` for detailed setup instructions.

---

## 🔮 Future Enhancements

- [ ] **Automated Severity Detection** - Eliminate manual severity input
- [ ] **Multi-Crop Support** - Expand to potato, pepper, cucumber diseases
- [ ] **Offline PWA Mode** - Work without internet in remote areas
- [ ] **Multi-Language Support** - Hindi, Marathi, Tamil, Telugu interfaces
- [ ] **Voice Input** - For farmers with limited literacy
- [ ] **Weather Integration** - Preventive alerts based on conditions
- [ ] **Community Forum** - Farmer knowledge sharing platform
- [ ] **SMS Notifications** - Treatment reminders via text
- [ ] **AR Camera Mode** - Real-time detection using device camera
- [ ] **Expert Consultation** - Connect with agricultural specialists

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 About the Developer

**[Your Name]**

I'm a full-stack developer passionate about leveraging technology to solve real-world agricultural problems. Tomato-Care represents my commitment to building practical, farmer-centric solutions that combine modern ML with traditional agricultural wisdom.

📧 **Email:** your.email@example.com  
🔗 **LinkedIn:** [Your LinkedIn Profile]  
🌐 **Portfolio:** [Your Portfolio Website]  
💻 **GitHub:** [Your GitHub Profile]

---

## 🙏 Acknowledgments

- **PlantVillage** for the comprehensive disease image dataset
- **Agricultural experts** who validated treatment recommendations
- **Open-source community** for excellent tools and frameworks

---

**⭐ If you find this project helpful, please star the repository!**

---

## 📞 Support

For questions, suggestions, or collaboration opportunities:
- Open an issue on GitHub
- Reach out via email
- Connect on LinkedIn

---
