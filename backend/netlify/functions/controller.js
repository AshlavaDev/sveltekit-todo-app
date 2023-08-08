const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, './tododatabase.sqlite');
console.log(dbPath);
const db = new sqlite3.Database('./../../tododatabase.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the todos database.');
  }
});

exports.getTodos =() => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM todos', [], (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Test getter success");
        resolve({
          statusCode: 200,
          body: JSON.stringify(rows),
        });
      }
    });
  });
};

exports.createTodo = async (data) => {
  return new Promise((resolve, reject) => {

    const { content, editing, checked } = data;
    db.run('INSERT INTO todos (content, editing, checked) VALUES (?, ?, ?)',
      [content, editing, checked],
      err => {
        if (err) {
          reject(err);
        } else {
          db.get('SELECT * FROM todos WHERE id = ?', [this.lastID], (err, todo) => {
            if (err) {
              reject(err);
            } else {
              resolve(todo);
            }
          });
        }
      }
    );
  });
};

exports.updateTodo = async (id, data) => {
  return new Promise((resolve, reject) => {
    const { content, editing, checked } = data;

    db.run('UPDATE todos SET content = ?, editing = ?, checked = ? WHERE id = ?',
      [content, editing, checked, id],
      err => {
        if (err) {
          reject(err);
        } else {
          db.get('SELECT * FROM todos WHERE id = ?', [id], (err, todo) => {
            if (err) {
              reject(err);
            } else {
              resolve(todo);
            }
          });
        }
      });
  });
};

exports.deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM todos WHERE id = ?', [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: 'Todo deleted successfully' });
      }
    });
  });
};

process.on('exit', () => {
  db.close();
});