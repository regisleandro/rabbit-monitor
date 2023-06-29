# Rabbit Monitor

This repository contains the source code and documentation for Rabbit Monitor, a tool to help to monitor RabbitMQ, sending metrics and statistics of a RabbitMQ cluster to a Slastic Search Server.

Rabbit Monitor is a Node.js application built with [Node.js](https://nodejs.org/) and [Axios](https://github.com/axios/axios), aiming to retrieve data for monitoring the health and performance of your RabbitMQ cluster. Please note that you need to enable the [RabbitMQ Management Plugin](https://github.com/whitfin/rabbitmq-manager#:~:text=Please%20note%20that%20your%20server%20must%20have%20the%20RabbitMQ%20Management%20Plugin%20enabled%20to%20work%20with%20this%20utility) on your RabbitMQ server to work with this utility.

## Prerequisites

Before getting started, make sure you have the following requirements installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [RabbitMQ](https://www.rabbitmq.com/) (version 3.7 or higher)

## Installation

Follow the steps below to set up and run Rabbit Monitor:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/regisleandro/rabbit-monitor.git
   ```

2. Navigate to the project directory:

   ```
   cd rabbit-monitor
   ```

3. Install the Node.js dependencies:

   ```
   npm install
   ```

4. Configure the environment variables:

   ```
    - RABBITMQ_URL
    - RABBITMQ_USERNAME
    - RABBITMQ_PASSWORD
    - RABBITMQ_VHOST
    - ELASTIC_URL
    - ELASTIC_AUTHORIZATION
   ```

6. Start the Rabbit Monitor server:

   ```
   node index.js
   ```

## Contribution

Contributions are welcome! If you would like to contribute to Rabbit Monitor, follow these steps:

1. Fork this repository.

2. Create a branch for your new feature or fix:

   ```
   git checkout -b my-new-feature
   ```

3. Make the necessary changes and commit:

   ```
   git commit -m "Add new feature"
   ```

4. Push the changes to your fork:

   ```
   git push origin my-new-feature
   ```

5. Open a pull request to the original repository.
