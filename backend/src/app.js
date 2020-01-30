const express = require('express');
const routes = require('./routes');

class App {
  // Create the server instance
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  // Create Middlewares for server
  middlewares() {
    // Enable server to handle json data
    this.server.use(express.json());
  }

  // User CRUD in routes
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
