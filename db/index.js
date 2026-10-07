const { Pool } = require('pg'); // беру з бібліотеки pg спеціальний інструмент Pool

const pool = new Pool({
  database: 'task_manager',
});

module.exports = pool;