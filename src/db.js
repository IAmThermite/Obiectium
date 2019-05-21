const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('config').get('db');
const utils = require('./utils');
const db = {};

const sequelize = new Sequelize(config.database, config.username,
    config.password, config);

sequelize.authenticate().then(() => {
  utils.log('info', 'Connected to database');
}).catch((error) => {
  utils.log('error', 'Could not connect to database!');
  throw new Error(error);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

fs.readdirSync(path.join(__dirname, '../models')).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
      && (file.slice(-3) === '.js');
}).forEach((file) => {
  const model = sequelize['import'](path.join(__dirname, '../models', file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
