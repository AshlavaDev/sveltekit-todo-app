const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} = require('./controller');

app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);
app.get('/todos', getTodos);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
