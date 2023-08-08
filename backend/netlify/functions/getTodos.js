const { getTodos } = require('/controller');

exports.handler = async (event, context) => {
  try {
    console.log("testing... getTodos.js");
    const response = await getTodos(event, context);
    return response;
  } catch (err) {
    return { 
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }) 
    };
  }
}