# Task Manager

A simple full-stack task management application built as a junior developer pet project.

The project includes a REST API built with Node.js and Express, a PostgreSQL database, and a simple frontend built with HTML, CSS, and vanilla JavaScript.

## Features

* Add new tasks
* View all tasks
* View a single task
* Edit task titles
* Mark tasks as completed or not completed
* Delete tasks
* Store tasks permanently in PostgreSQL
* Connect the frontend to the backend using the Fetch API
* Update the interface dynamically without reloading the page

## Technologies

* Node.js
* Express.js
* PostgreSQL
* JavaScript
* HTML5
* CSS3
* REST API
* Fetch API
* Git / GitHub

## Project Structure

```text
task-manager-api/
│
├── controllers/
│   └── taskController.js
│
├── db/
│   └── index.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── taskRoutes.js
│
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

### Backend

The backend is built with Express.js.

The application provides REST API endpoints for creating, reading, updating, and deleting tasks.

### Database

The application uses PostgreSQL to store tasks.

The `tasks` table contains:

| Column      | Type    | Description            |
| ----------- | ------- | ---------------------- |
| `id`        | integer | Unique task ID         |
| `title`     | text    | Task title             |
| `completed` | boolean | Task completion status |

The `id` column is the primary key and is generated automatically.

The `completed` column defaults to `false`.

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a task by ID  |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

## How the Application Works

The application has three main parts:

```text
Frontend
   ↓
Fetch API
   ↓
Express REST API
   ↓
PostgreSQL
```

For example, when a user creates a task:

1. The user enters a task in the frontend.
2. JavaScript sends a `POST` request to `/tasks`.
3. Express receives the request.
4. The controller sends an SQL query to PostgreSQL.
5. PostgreSQL creates the task.
6. The API returns the new task.
7. JavaScript adds the task to the page.

The same approach is used for editing, completing, and deleting tasks.

## How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/adelinadev/task-manager-api.git
```

Move into the project folder:

```bash
cd task-manager-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up PostgreSQL

Make sure PostgreSQL is installed and running on your computer.

Create a database called:

```text
task_manager
```

You can create it from the PostgreSQL terminal with:

```sql
CREATE DATABASE task_manager;
```

Connect to the database:

```bash
psql task_manager
```

### 4. Create the tasks table

Inside `psql`, run:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
```

Check the table:

```sql
\d tasks
```

### 5. Start the server

From the project folder, run:

```bash
npm start
```

You should see:

```text
Server is running on port 3000
```

### 6. Open the application

Open the following address in your browser:

```text
http://localhost:3000
```

The frontend will load and communicate with the Express API.

## Testing the API

The API can also be tested separately using a tool such as Thunder Client.

For example:

```text
GET http://localhost:3000/tasks
```

To create a task:

```text
POST http://localhost:3000/tasks
```

with JSON:

```json
{
  "title": "Learn Node.js"
}
```

## What I Practiced in This Project

This project helped me practice:

* Building a REST API with Express
* Working with HTTP methods and routes
* Separating routes and controllers
* Working with PostgreSQL
* Writing SQL queries
* Connecting Node.js to PostgreSQL
* Handling request parameters and request bodies
* Using asynchronous JavaScript
* Connecting a frontend to a backend with Fetch API
* Working with the DOM
* Using Git and GitHub
* Structuring a small full-stack application

## Future Improvements

Possible improvements for the project:

* Add user authentication
* Add task filtering and sorting
* Add task categories
* Improve error handling
* Add loading and empty states
* Add form validation
* Deploy the application online
