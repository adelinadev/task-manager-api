const express = require('express'); //Підключаємо бібліотеку Express із node_modules
const pool = require('./db');
const {getTasks, getTask, createTask, deleteTask, updateTask} = require('./controllers/tasksController')
const router = require('./routes/tasks');


const app = express(); //Створюємо наш сервер.
app.use(express.json());
app.use(express.static('public'));
app.use(router);



pool.query('SELECT * FROM tasks')
  .then(result => {
    console.log(result.rows);
  })
  .catch(error => {
    console.error(error);
  });


app.get('/', (req, res) => { //Коли користувач відкриває /, сервер повертає текст (це маршрут)
  res.send('Task Manager API is running!');
});




const PORT = 3000; //Запускає сервер на порту 3000.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});