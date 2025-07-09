# 🥦 VegLife - A Healthy Food Lifestyle Web App

VegLife is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It promotes healthy eating by offering features like recipe browsing, diet planning, and user tracking.

---

## 🌐 Live Demo

[Click Here to View Live](https://your-deployed-url.com) *(Add this once deployed)*

---

## 🛠️ Tech Stack

### Frontend (`veglife-frontend`)
- React.js
- Axios
- React Router DOM
- Tailwind CSS / CSS Modules (as applicable)

### Backend (`veglife-backend`)
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication (if implemented)
- RESTful APIs

---

## 📁 Project Structure
veglife/
├── veglife-frontend/ # React Frontend
├── veglife-backend/ # Node.js + Express Backend
├── .gitignore
├── README.md

## 🚀 Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/Yasmin2412/vegLife.git
cd vegLife
2. Set Up Backend
bash
Copy
Edit
cd veglife-backend
npm install
Create a .env file in the veglife-backend/ folder with:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start backend server:

bash
Copy
Edit
npm start
3. Set Up Frontend
Open another terminal:

bash
Copy
Edit
cd veglife-frontend
npm install
npm start
Runs on: http://localhost:3000
✨ Features
🍽️ Browse healthy recipes

📝 User login/signup

📅 Diet plan recommendations

🔐 JWT authentication

📊 Track nutrition (if applicable)

📦 Deployment (Optional)
You can deploy:

Frontend: Vercel / Netlify

Backend: Render / Cyclic / Railway / Heroku

MongoDB: Atlas Cloud




