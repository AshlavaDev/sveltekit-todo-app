const { deleteTodo } = require('../../controller');

exports.handler = async (event, context) => {
  try {
    const { id } = event.queryStringParameters; // Get the todo ID from the query string

    await deleteTodo(id);

    return {
      statusCode: 204, // 204 No Content
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};