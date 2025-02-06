# MERN User Management System

A full-stack user management system built using the MERN stack (MongoDB, Express, React, Node.js) with authentication functionality including login and logout.

## Features
- User registration with encrypted passwords
- User login with JWT authentication
- User logout and session management
- Role-based access control (if implemented)
- Secure API endpoints
- User profile management

## Tech Stack
- **Frontend:** React, Tailwind CSS / Chakra UI (as per your preference), Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Token), bcrypt for password hashing
- **Environment Management:** dotenv

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Clone the repository
```bash
git clone https://github.com/Dinesh-Patil01/digitalFlake-.git
cd digitalFlake-
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```







