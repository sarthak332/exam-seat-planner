# College Exam Seat Planner

This project is a MERN stack application that helps allocate classrooms for exams based on the number of students.  
The system tries to use the **minimum number of rooms** and **prefers lower floor classrooms first**.

---

## Features

- Add new classrooms
- View all available classrooms
- Allocate exam seats based on student count
- Uses greedy allocation logic
- Handles cases when seats are insufficient

---

## Tech Stack

Frontend  
- React (Vite)
- Axios
- Tailwind CSS

Backend  
- Node.js
- Express.js

Database  
- MongoDB
- Mongoose

---

## Project Structure


exam-seat-planner
│
├── backend
│ ├── models
│ ├── routes
│ ├── controllers
│ └── server.js
│
└── frontend
├── src
│ ├── pages
│ └── App.jsx


---

## How the Allocation Works

1. All classrooms are fetched from the database.
2. Classrooms are sorted by **floor number (ascending)**.
3. Seats are filled starting from lower floors.
4. The system stops when all students are allocated.
5. If capacity is insufficient, it returns an error.

This ensures:
- Minimum number of classrooms used
- Lower floors preferred

---



## Running the Project Locally

### Backend

```
cd backend
npm install
node server.js
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## Example Input

Classrooms

```
A101 - 40 seats - Floor 1
A102 - 30 seats - Floor 1
B201 - 50 seats - Floor 2
```

Students

```
90
```

Output

```
A101 → 40
A102 → 30
B201 → 20
```
##AUTHOR
Sarthak Gupta