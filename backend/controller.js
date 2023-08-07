const sqlite3 = require('sqlite3').verbose();

// Set up database connection
const db = new sqlite3.Database('my-database.sqlite');

// Controller function to get all todos
exports.getTodos = (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(rows);
    }
  });
};

// Controller function to create a todo
exports.createTodo = (req, res) => {
  const { content } = req.body;
  db.run('INSERT INTO todos (content) VALUES (?)', content, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Todo created successfully' });
    }
  });
};

// Controller function to update a todo
exports.updateTodo = (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  db.run('UPDATE todos SET content = ? WHERE id = ?', [content, id], err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ message: 'Todo updated successfully' });
    }
  });
};

// Controller function to delete a todo
exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM todos WHERE id = ?', id, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ message: 'Todo deleted successfully' });
    }
  });
};
