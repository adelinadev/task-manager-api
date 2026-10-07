const pool = require('../db')


const getTasks = async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');

  res.json(result.rows);
};

const getTask = async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Invalid task ID',
    });
  }

  const result = await pool.query(
    'SELECT * FROM tasks WHERE id = $1',
    [id]
  );

  if(result.rows.length == 0) {
    return res.status(404).json({
      message: 'Task not found',
    });
  } 
  res.json(result.rows[0]);
};

const createTask = async (req, res) => {
  const { title } = req.body;

  const result = await pool.query(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
    [title]
  );

  return res.status(201).json(result.rows[0]);
};

const deleteTask = async (req, res) => {
  const id = Number(req.params.id);

  const result = await pool.query(
    'DELETE FROM tasks WHERE id = $1 RETURNING *',
    [id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  return res.status(200).json(result.rows[0]);
};

const updateTask = async (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;

  const result = await pool.query(
    'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
    [title, completed, id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  return res.status(200).json(result.rows[0]);
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
};