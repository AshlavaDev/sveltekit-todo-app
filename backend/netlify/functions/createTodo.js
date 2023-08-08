const { createTodo } = require('./controller');

exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const newTodo = await createTodo(requestBody);

    return {
      statusCode: 201,
      body: JSON.stringify(newTodo)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};