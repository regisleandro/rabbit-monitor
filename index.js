const elastic = require('./lib/elastic');
const rabbit = require('./lib/rabbit');
require('dotenv').config();

monitorQueues = async () => {
  try {
    const queues = await rabbit();
    await elastic(queues);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const interval = process.env.INTERVAL || (15 * 1000 * 60); // 15 minutes;

console.log(`Monitoring RabbitMQ queues every ${interval / 1000 / 60} minutes`)

monitorQueues();

setInterval(() => {
  monitorQueues();
}, interval);
