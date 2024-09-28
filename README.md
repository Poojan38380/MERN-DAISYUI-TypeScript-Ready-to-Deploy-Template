# MERN DAISYUI(100% TypeScript) Ready-to-Deploy Template

This repository provides a fully functional web app template using the MERN stack(100% TypeScript), along with login/signup functionality. The app is fully responsive and uses **Prisma**, **Daisy UI**, **Tailwind CSS**, and includes an example `.env` file for easy configuration.

## Features

- **MERN stack** (MongoDB, Express, React, Node.js)
- Frontend and backend fully in TypeScript
- **Prisma** for database ORM
- **Daisy UI** and **Tailwind CSS** for responsive design
- Login/Signup functionality
- Ready for local development and deployment

## Project Structure

The project contains two main directories:

1. `backend`: Handles the server-side logic.
2. `frontend`: Contains the React-based frontend.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)

## Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Poojan38380/MERN-DAISYUI-Ready-to-Deploy-Template.git
   cd MERN-DAISYUI-Ready-to-Deploy-Template
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server::
   ```bash
   npx prisma generate
   npm run dev
   ```

### Frontend Setup

In a separate terminal:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Run the frontend in development mode:
   ```bash
   npm run dev
   ```

## Environment Configuration

Make sure to set up your .env file for both backend and frontend using the provided example.env.
