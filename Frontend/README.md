# BlinkChat 💬

🚀 **BlinkChat** is a real-time chat and video calling application built with the **MERN stack** (MongoDB, Express, React, Node.js). It combines seamless communication, modern UI, and a robust backend to deliver a full-featured messaging experience.

---

## ✨ Key Features

- **Tech Stack:** Node.js, Express, MongoDB, React, TanStack Query, Tailwind CSS
- **Authentication:** JWT-based login & signup flows
- **Onboarding Flow:** Smooth onboarding for new users
- **Friends System:** Add, remove, and manage friends
- **Real-Time Chat:** Send and receive messages instantly
- **Video Calling:** High-quality peer-to-peer video calls
- **Themes:** 32 customizable UI themes
- **Protected Routes:** Ensure secure access to private pages
- **Custom Hooks & Best Practices:** Organized, reusable code
- **API Testing:** Endpoints are tested for reliability and performance

---

## 🛠 Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React    | Node.js | MongoDB  |
| Tailwind CSS | Express.js | |

**Additional Tools:** TanStack Query, JWT, Socket.io, WebRTC

---

## 🔐 Authentication

- Users can **register and log in** securely with JWT-based authentication
- Passwords are hashed for security
- Protected routes ensure only authorized users can access sensitive pages

---

## 📄 Onboarding Flow

- Guided onboarding for new users
- Easy-to-follow instructions to set up profile and preferences

---

## 👥 Friends System

- Send, accept, and remove friend requests
- Manage friend list dynamically

---

## 💬 Real-Time Chat

- Instant messaging powered by **Socket.io**
- Real-time message updates for all connected clients
- Support for text, emojis, and media sharing

---

## 📹 Video Calling

- Peer-to-peer video calls using **WebRTC**
- Works in real-time with minimal latency
- Can handle multiple concurrent calls

---

## 🎨 UI Themes

- 32 customizable UI themes
- Light/dark mode toggle
- Responsive design for mobile and desktop

---

## 🚨 Protected Routes

- Secure routes to prevent unauthorized access
- Only authenticated users can access chat and video features

---

## 🧪 API Testing

- All backend routes are tested for reliability
- CRUD functionality for chats, friends, and user management

---

## 📦 Installation

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Farwa-Khalid/Blink-Chat.git
cd backend

### 2️⃣ Install dependencies
npm install

### 3️⃣ Configure environment variables

Create a .env file and add:
# Server Port
PORT=5000

# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# JWT Secret for authentication
JWT_SECRET=your_jwt_secret

# Steam API credentials
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret

### 4️⃣ Start the backend
npm run server

### 5️⃣ Start the frontend
cd frontend
npm install
npm start
