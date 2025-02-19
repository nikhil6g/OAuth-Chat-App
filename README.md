# OAuth Login & Gemini AI Chat App

## 📌 Overview

This project is a simple web application that includes:

- ✅ OAuth 2.0 Login (Google/Microsoft)
- ✅ User Authentication (Displays logged-in username)
- ✅ AI-Powered Streaming Chat (Using Google's Gemini API)
- ✅ Deployment on Render

## 🚀 Features

- Single-click login using Google OAuth 2.0
- User authentication: Displays "Logged in as <username>"
- Real-time chat powered by Gemini AI API
- Deployed on Render

## 🛠 Tech Stack

### Frontend

- HTML, CSS, JavaScript
- Google Sign-In API
- Fetch API for making API calls

### Backend

- Node.js with Express.js
- Google OAuth 2.0 Authentication
- Google Gemini AI API
- CORS for cross-origin requests

## 🛠 Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/OAuth-Gemini-Chat-App.git
   cd OAuth-Gemini-Chat-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a [.env](http://_vscodecontentref_/4) file in the backend folder with the following:

   ```ini
   NODE_ENV="production"
   PORT=5000
   GOOGLE_CLIENT_ID=your-google-client-id
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Run the Backend**

   ```bash
   npm start
   ```

   By default, the backend runs on 5000 port

5. **Run the Frontend**
   Simply type "localhost:5000" in a browser.

## 🌍 Deployment on Render

https://oauth-chat-app.onrender.com

## 💡 How It Works?

1. User clicks "Login with Google"
2. OAuth 2.0 popup appears → User logs in
3. server verifies the token and send users info to client
4. User sees: "Logged in as <username>"
5. Gemini Chat Window allows AI-powered chat
