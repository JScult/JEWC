# JEWC

This project is a full-stack application built with MongoDB, Express, React (Next.js), and Node.js.

## Table of Contents

- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

---

## Getting Started

To get started, clone the repository and install the dependencies for both the backend and frontend.

```bash
git clone <repository-url>
cd JEWC

## Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
2.  npm install
3.  cp .env.example .env
4.  npm run dev

## Frontend Setup
1.  cd frontend
2.  npm install
3.  cp .env.local.example .env.local
4.  npm run dev


##Enironment Variables 
Backend (backend/.env)
PORT: The port on which the backend server runs.
DB_URL: MongoDB connection string.
JWT_SECRET: Secret key for signing JWT tokens.
JWT_EXPIRATION: Expiration time for JWT tokens.
Frontend (frontend/.env.local)
NEXT_PUBLIC_API_URL: The URL of the backend API.

##Database Setup
Install MongoDB on your machine or use a cloud-based MongoDB service like MongoDB Atlas.
Update the DB_URL in the backend .env file with your MongoDB connection string.
Use a tool like MongoDB Compass to manage your database.

##Running the Application
1.  Start the backend server:
cd backend
npm run dev
2.  Start the frontend server:
cd frontend
npm run dev
3.  Open your browser and navigate to http://localhost:3000.
##Project Structure
    backend/
├── .env
├── package.json
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
└── index.js
    Frontend
    frontend/
├── .env.local
├── package.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── next.config.js
└── tsconfig.json