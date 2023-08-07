const { deleteTodo } = require('../../controller');

exports.handler = async (event, context) => {
  try {
    const { id } = event.queryStringParameters; 

    await deleteTodo(id);

    return {
      statusCode: 204,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};