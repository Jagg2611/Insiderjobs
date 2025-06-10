# InsiderJobs

**InsiderJobs** is a full-stack MERN application built to simplify the job application and recruitment process for both students and recruiters.

Students can browse job listings and apply with their resumes. Recruiters can post jobs, view student applications, and manage hiring decisions.

## Features

### Student
1. Browse and search for jobs
2.  Apply to jobs by uploading a resume
3. View all submitted applications

### Recruiter
1. Login securely to access dashboard
2. Add, manage, and delete job postings
3. View student applications and resumes
4 Accept or reject applications

## Tech Stack

1. **Frontend:** React, React Router, Tailwind CSS
2. **Backend:** Node.js, Express.js
3. **Database:** MongoDB Atlas
4. **Authentication:** Clerk and JWT Based
5. **Media Storage:** Cloudinary
6. **Monitoring:** Sentry
7. **Deployment:** Vercel (Frontend), and Vercel (backend) deployment.

## Live Site

Deployed at: (https://job-portal-frontend-tau-ecru.vercel.app/)

## Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/Jagg2611/insiderjobs.git
cd insiderjobs

```
### 2. Environment Variables
Create a .env file in both frontend/ and backend/ folders.

for backend/server add the following keys
```bash
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLERK_SECRET_KEY=your-clerk-secret-key
CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_WEBHOOK_SECRET=your-clerk-webhook-secret
SENTRY_DSN=your-sentry-dsn
```

for frontend/client add the following keys
```bash
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your-publishable-key
```


### 3. Install the required dependencies

#Backend
```bash
cd server
npm install
```

```bash
#Frontend
cd client 
npm install
```


### 4. Run the app locally

#Backend/server
```bash
npm run server
```

#Frontend/client
```bash
npm run dev
```


### 5. Access the required assets from the following link
1. Download all the assets of the project using the link (open in new tab) - (https://drive.google.com/drive/folders/1zVN793MdaqFNS7Wzt6zjU2YKy9Blf1fL?usp=sharing)
2. View the schema of the Mongodb for a better understanding using this link (open in new tab) - (https://drive.google.com/file/d/1afiabC_eBKvpAnGR3gYpyLvO3oVT523q/view?usp=sharing)



