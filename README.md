🌌 NASA APOD Explorer

A full-stack application delivering NASA’s Astronomy Picture of the Day (APOD) through a secure backend service and an intuitive frontend interface. The solution is designed for performance, scalability, and a seamless user experience.

🚀 Executive Summary

NASA APOD Explorer enables users to view daily and historical astronomy images using NASA’s public API.
The platform integrates:

A robust Node.js backend with caching and API governance

A responsive React-based frontend

Strong environment variable security

Clean REST architecture & modular controllers

🏗️ Solution Architecture
Frontend (React + Vite)

Real-time rendering of APOD content

Responsive UI across Home, Gallery, and Detail sections

Environment-variable–driven API URLs

Component-based architecture

Backend (Node.js + Express)

RESTful API structure

NASA APOD data fetch & transform

Centralized caching for performance

Secure environment variable management

Clear controller–route separation

📁 Project Structure

NASA-APOD-EXPLORER/
│
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   └── nasaClient.js
│   │   ├── cache/
│   │   │   └── cacheManager.js
│   │   ├── controllers/
│   │   │   └── apodController.js
│   │   ├── routes/
│   │   │   └── apodRoutes.js
│   │   └── app.js
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   ├── .gitignore
│   └── package.json
│
└── README.md

🔑 Environment Configuration
Backend .env
NASA_API_KEY=YOUR_API_KEY
PORT=5000

Backend .env.example
NASA_API_KEY=YOUR_API_KEY_HERE
PORT=5000

Frontend .env (Create this manually)
VITE_BACKEND_URL=http://localhost:5000

🧪 Local Development Setup
1️⃣ Run Backend
bash
Copy code
cd backend
npm install
npm run dev
Backend available at:

bash
Copy code
http://localhost:5000/api/apod

2️⃣ Run Frontend
bash
Copy code
cd frontend
npm install
npm run dev

Frontend available at:

http://localhost:5173

🌐 API Endpoints
Method	Endpoint	                                  Purpose
GET	    /api/apod	                    Returns today’s APOD (cached)
GET   	/api/apod?date=YYYY-MM-DD      	Historical APOD
GET  	/api/apod/gallery	            APOD gallery (multiple items)

🧠 Key Engineering Features
Modular Node.js application structure

Centralized caching with expiry policy

Error-resilient NASA API fetch layer

Reusable React components

Responsive layout for all screen sizes

Environment-variable compliance for API key protection

Clear separation of concerns (API, controller, cache, routes)

📸 User Experience Journey
Home → Today’s APOD

Gallery → Grid of APOD entries

Detail → High-resolution image + description, metadata

🚀 Deployment Readiness
Backend can be deployed to:

Render

Railway

AWS / Azure / GCP

Dockerized container

Frontend can be deployed to:

Netlify

Vercel

GitHub Pages (with config)

🤝 Contributing
Fork the repo

Create your feature branch

Add meaningful commits

Submit a Pull Request

Ensure .env is never committed

📄 License
his project is licensed under the **MIT License**.

🙌 Acknowledgements
NASA APOD API

Node.js Community

React Ecosystem

