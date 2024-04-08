# Task Manager Web App

The Task Manager Web App is a simple and intuitive web-based application designed to help users organize and manage their tasks effectively. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this app provides a seamless user experience for creating, viewing, updating, and deleting tasks.


## Features

- **User Authentication:** Secure user registration and login functionality using JWT (JSON Web Tokens) for authentication.
- **Task Management:** Create, view, update, and delete tasks effortlessly.
- **MVC Architecture:** Follows the Model-View-Controller architectural pattern for organized code structure.
- **RESTful API:** Utilizes RESTful API endpoints for communication between the frontend and backend.
- **Environment Variables:** Configured to use environment variables for sensitive data protection (e.g., MongoDB URI, JWT Secret).


## API Endpoints:

##### Users:

-   **POST** /api/users: Register a new user
-   **POST** /api/users/login: Login a user
-   **GET** /api/profile: Retrives a user details



##### Tasks:

-   **GET** /api/tasks (Requires authentication): Get all tasks for the current user
-   **POST** /api/tasks (Requires authentication): Create a new task
-   **GET** /api/tasks/:id (Requires authentication): Get a single task by ID
-   **PUT** /api/tasks/:id (Requires authentication): Update a task
-   **DELETE** /api/tasks/:id (Requires authentication): Delete a task

## Getting Started with API

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SurendraSingh97/Task-Manager-App.git
   cd task-manager-web-app

2. **Install dependencies:**
    ```bash
    npm install express mongoose cors body-parser bcryptjs dotenv

3. **Set up enviornment variables:**
    ```bash
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=5555

4. **Run the server:**
    ```bash
    cd backend
    node app.js

5. **Start using the API:**
    - Access the Task Manager Web App at http://localhost:5555 in frontend codebase..

6. **Run the frontend UI:**
    ```bash
    cd frontend
    npm start

7. **Start using the UI:**
    - Access the Task Manager Web App UI at http://localhost:3000 in your web browser.


    
## Thank you for visiting this repository. Happy Coding 💻😎