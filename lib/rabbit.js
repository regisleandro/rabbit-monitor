const axios = require('axios');
require('dotenv').config();

module.exports = async () => {
  const url = process.env.RABBITMQ_URL;
  const username = process.env.RABBITMQ_USERNAME;
  const password = process.env.RABBITMQ_PASSWORD;
  const vhost = process.env.RABBITMQ_VHOST;

  try {
    const response = await axios.get(`${url}/api/queues/`, {
      auth: {
        username: username,
        password: password
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
