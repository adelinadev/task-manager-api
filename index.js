const express = require('express'); //Підключаємо бібліотеку Express.

const app = express(); //Створюємо наш сервер.

app.get('/', (req, res) => { //Коли користувач відкриває /, сервер повертає текст.
  res.send('Task Manager API is running!');
});

const PORT = 3000; //Запускає сервер на порту 3000.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});