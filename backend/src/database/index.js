// Load all models and connect to the DB postgress
import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // Connection to DB
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection));
  }

}

export default new Database();
