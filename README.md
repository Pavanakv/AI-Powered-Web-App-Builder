# 🚀 AI-Powered Web App Builder

An intelligent full-stack application that transforms natural language prompts into functional web applications using AI. This platform enables users to generate, preview, and manage web apps in real-time without writing code manually.

---

## 🌟 Features

* 🤖 **AI Code Generation** – Convert text prompts into working HTML/CSS/JavaScript using AI
* ⚡ **Real-Time Preview** – Instantly visualize generated applications
* 🔐 **Authentication System** – Secure login/signup using JWT
* 📁 **Project Management** – Create, update, and manage multiple projects
* 💬 **Conversational UI** – Iteratively improve apps through prompts
* 🌐 **Full-Stack Architecture** – Seamless frontend-backend integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS (or CSS)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### AI Integration

* Google Gemini API

---

## 📂 Project Structure

```
ai-powered-web-app-builder/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node/Express)
├── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Pavanakv/AI-Powered-Web-App-Builder.git
cd AI-Powered-Web-App-Builder
```

---

### 2. Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
```

Run backend:

```
npm start
```

---

### 3. Setup Frontend

```
cd ../client
npm install
npm run dev
```

---

## 🌍 Environment Variables

| Variable       | Description                   |
| -------------- | ----------------------------- |
| MONGODB_URI    | MongoDB connection string     |
| JWT_SECRET     | Secret key for authentication |
| GEMINI_API_KEY | API key for AI generation     |
| VITE_API_URL   | Backend API URL (frontend)    |

---

## 🚀 Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 🌐 Live Demo

🔗 https://ai-powered-web-app-builder-six.vercel.app/
---

## 📌 Author

**Pavana K.V**

