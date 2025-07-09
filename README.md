###Collaborative Todo App

A modern, real-time collaborative Todo app with drag-and-drop Kanban functionality, user authentication, activity logs, and smart team features. Built with a full-stack MERN architecture and styled with a clean  UI.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

###Project-Overview:
 The app facilitates multiple users to collaborate and list their tasks simultaneously , allowing them to track their work and progress as teams. It also allows them to drag and drop their tasks between different stauts columns among TO-DO , In-Pgrogress and Dne, so that the status of completion of the project can be updated seamlessly.

 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 ###Key goals:
- Improve task collaboration for teams
- Real-time task updates using WebSockets
- Smart features like task auto-assignment and conflict handling
- Clean, responsive, and intuitive UI

  
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## 🛠 Tech Stack Used

### 🔧 Frontend:
- React 19 (with Hooks and React Router)
- React Beautiful DnD (for drag-and-drop)
- Axios (for API requests)
- CSS Modules (custom white-based theme with curved layouts)

### 💻 Backend:
- Node.js + Express.js
- MongoDB (with Mongoose ODM)
- Socket.IO (for real-time communication)
- JWT-based authentication
- Bcrypt (for password hashing)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 1. 📁 Clone the Repository
git clone https://github.com/yourusername/collab-todo-app.git
cd collab-todo-app

### 2. 🔌 Backend Setup
cd backend
npm install

###4. Create a .env file in the backend/ folder with the following:
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

###In the terminal run: 
npm run dev


### 5. Frontend Setup
cd frontend
npm install
npm run dev
(The frontend will be served on: http://localhost:5173)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




































