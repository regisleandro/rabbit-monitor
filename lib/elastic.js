
const axios = require('axios');
require('dotenv').config();

module.exports = async (data) => {
  try {
    const url = process.env.ELASTIC_URL;
    const authorization = process.env.ELASTIC_AUTHORIZATION;
    const rabbitmq = process.env.RABBITMQ_VHOST;

    // Generate the current date in the format: YYYY.MM.DD
    const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '.');

    // Define the index and document to be created
    const index = `rabbit-${currentDate}`;

    // Set the basic authorization header
    const headers = {
      'Authorization':authorization,
      'Content-Type': 'application/json',
    };

    const elasticUrl = `${url}/${index}/_doc`;

    data.forEach( async element => {
      delete element.backing_queue_status.delta

      element.date = new Date().toISOString();
      element.rabbit = rabbitmq;

      const response = await axios.post(elasticUrl, element, { headers });


      console.log(`${element.date}: Document indexed successfully: ${element.name} - ${response.data._id}`);      
    });

  } catch (error) {
    console.error('Error indexing document:', error);
  }
}
