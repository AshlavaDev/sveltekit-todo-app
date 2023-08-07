const { updateTodo } = require('../../controller');

exports.handler = async (event) => {
  try {
    const { id } = event.params.id;
    const requestBody = JSON.parse(event.body);

    const updatedTodo = await updateTodo(id, requestBody);

    return {
      statusCode: 200,
      body: JSON.stringify(updatedTodo),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};