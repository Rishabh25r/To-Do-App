Collaborative Todo App

A modern, real-time collaborative Todo app with drag-and-drop Kanban functionality, user authentication, activity logs, and smart team features. Built with a full-stack MERN architecture and styled with a clean  UI.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project-Overview:
 The app facilitates multiple users to collaborate and list their tasks simultaneously , allowing them to track their work and progress as teams. It also allows them to drag and drop their tasks between different stauts columns among TO-DO , In-Pgrogress and Dne, so that the status of completion of the project can be updated seamlessly.

 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 Key goals:
- Improve task collaboration for teams
- Real-time task updates using WebSockets
- Smart features like task auto-assignment and conflict handling
- Clean, responsive, and intuitive UI

  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 🛠 Tech Stack Used

 🔧 Frontend:
- React 19 (with Hooks and React Router)
- React Beautiful DnD (for drag-and-drop)
- Axios (for API requests)
- CSS Modules (custom white-based theme with curved layouts)

 💻 Backend:
- Node.js + Express.js
- MongoDB (with Mongoose ODM)
- Socket.IO (for real-time communication)
- JWT-based authentication
- Bcrypt (for password hashing)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 1. Clone the Repository

2. 🔌 Backend Setup
```
cd backend
npm install
```

4. Create a .env file in the backend/ folder with the following:
   
```
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```
In the terminal run: 
```
npm run dev
````

4. Frontend Setup
 ``` 
cd frontend
npm install
npm run dev
```
(The frontend will be served on: http://localhost:5173)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Features
🧑‍💼 User Authentication – Register and log in securely using JWT.

🧩 Kanban Board – Tasks organized into "Todo", "In Progress", and "Done" columns.

🧲 Drag & Drop – Reorder and update task statuses using react-beautiful-dnd.

📩 Task Creation – Create new tasks with title, description, status, and priority.

🔄 Real-Time Sync – Updates and changes are broadcast live to all connected users.

📜 Activity Log Sidebar – Shows recent task changes (created, updated, deleted).

👨‍🔧 Smart Assign – Automatically assign tasks to users with the least workload.

⚔️ Conflict Handling – Detects simultaneous edits and prompts for resolution.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📖 Usage Guide
Register → Login via the form and create your workspace.

Create Tasks → Use the "Create Task" form to add new tasks under "Todo".

Drag Tasks → Move tasks between columns as status changes.

Activity Log → Check who changed what and when in the sidebar.

Smart Assign → Click "Smart Assign" on a task to assign it automatically to the least busy user.

Conflict Handling → If two users edit the same task, you'll be prompted to merge or overwrite changes.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧠 Smart Assign (Task Auto-Assignment)

Smart Assign is a logic layer in the app which checks which user has the least number of incomplete tasks (tasks not yet marked as "Done"). When a user clicks the Smart Assign button on any task, the backend queries all users and counts how many tasks each has that are still active. It then selects the user with the lowest number and assigns the task to them.

🧠 Conflict Handling (Simultaneous Edits)
If two users edit the same task at roughly the same time , conflict handlling detects this (using timestamps) and the users are presented with a UI that allowsthem to either:

-Merge both versions

-Overwrite the current one

-Or cancel and start again with the updated copy

This prevents accidental overwrites and enhances collaborative reliability.


For a more detailed explanatin on Smart Assign and Conflict Handling , read this : https://docs.google.com/document/d/1us7RJYZ-j4HuyJwGjlL6tVXesATsfplkCNvl09B1PGk/edit?usp=sharing




















