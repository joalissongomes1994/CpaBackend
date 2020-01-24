import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import News from '../app/models/News';

const models = [News];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map( model => model.init(this.connection));
  }
}

export default new Database();