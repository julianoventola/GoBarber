import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

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
    // Enable an url to access each file(user avatar)
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  // User CRUD in routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
