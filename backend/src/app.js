import express from 'express';
import * as Sentry from '@sentry/node';
import path from 'path';
import Youch from 'youch';
// Must import import express async before routes
import 'express-async-errors';
import sentryConfig from './config/sentry';
import routes from './routes';

import './database';

class App {
  // Create the server instance
  constructor() {
    this.server = express();

    // Keep checking if server has any error
    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  // Create Middlewares for server
  middlewares() {
    // Must enable Sentry REQUEST before any route
    this.server.use(Sentry.Handlers.requestHandler());
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
    // Must enable Sentry ERROR before after all routes
    this.server.use(Sentry.Handlers.errorHandler());
  }

  // Middleware to handle request errors
  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
