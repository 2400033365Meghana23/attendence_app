# attendence_app
📋 Student Attendance Tracker

A simple and efficient ReactJS web application to manage and track students’ daily attendance dynamically using the useReducer hook.

🚀 Features

Display list of students with names and roll numbers

Mark students as Present or Absent instantly

Reset all attendance with one click

Dynamic UI updates without page reload

Clean, responsive, and minimal design

🛠️ Technologies Used

ReactJS

JavaScript (ES6)

HTML / JSX

CSS (inline styling)

📂 Folder Structure
attendance-tracker/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js       # Main attendance component
│   ├── index.js     # React entry file
│   └── App.css      # Optional styling file
│
└── README.md

⚙️ Installation & Setup

Clone or create a new React app

npx create-react-app attendance-tracker
cd attendance-tracker


Replace the contents of src/App.js with your Attendance Tracker code.

Start the application

npm start


Open the app in your browser
👉 http://localhost:3000

🖥️ Usage

Click Mark Present or Mark Absent to update a student’s status.

Use the Reset Attendance button to clear all records.

The page updates instantly without reloading.

📸 Preview (Example Table)
Name	Attendance	Actions
Student 1	Present	Mark Present / Mark Absent
Student 2	Absent	Mark Present / Mark Absent
Student 3	Present	Mark Present / Mark Absent
🧩 Core Concepts

useReducer Hook: For managing complex state transitions

Immutable State Updates: Ensures predictable and clean UI rendering

Component-Based Design: Scalable and maintainable architecture

📈 Future Enhancements

Add checkbox toggle for attendance

Store attendance in localStorage

Include date-wise records

Add search and filter functionality
