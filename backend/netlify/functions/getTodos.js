const { getTodos } = require('./controller');

console.log("testing... getTodos.js");

exports.handler = async (event, context) => {
  try {
    const response = await getTodos(event, context);
    return response;
  } catch (err) {
    return { 
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }) 
    };
  }
}