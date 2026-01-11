# 🍅 Tomato-Care

A smart agriculture web application that allows farmers to upload images of tomato leaves, detect diseases and provide **personalized treatment recommendations** based on disease severity, budget, and farming type.
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
3. **Disease Detection** → MobileNetV2 model identifies disease
4. **User Input** → Farmer provides severity score budget and farming type
5. **Treatment Matching** → Rule engine finds best recommendations
6. **Display Results** → User receives actionable treatment plan

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

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+

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

### Step 4: Access Application
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
   - Shows confidence score

3. **Input Treatment Constraints**
   - input the severity score
   - Select your budget range (Low / Medium / High)
   - Choose farming type (Organic / Inorganic / Integrated)

5. **Get Recommendations**
   - View treatment suggestions
---

## ⚠️ Important Notes

### ML Model Availability
The trained model file (`tomato_disease_model.h5`) is **not included** in this repository due to:
- Large file size (~200MB) exceeding GitHub limits
- Environment-specific dependencies (TensorFlow, CUDA versions)
- Dataset licensing considerations

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

## 👨‍💻 About the Developer

**Taniya Ghuse**

I'm a full-stack developer passionate about leveraging technology to solve real-world agricultural problems. Tomato-Care represents my commitment to building practical, farmer-centric solutions that combine modern ML with traditional agricultural wisdom.

🔗 **LinkedIn:** [(https://www.linkedin.com/in/taniya-ghuse/)]
💻 **GitHub:** [https://github.com/Taniya-1234]

---

**⭐ If you find this project helpful, please star the repository!**
