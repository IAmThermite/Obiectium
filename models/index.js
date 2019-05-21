const fs = require('fs');

const db = require('../src/db');

const models = {};

fs.readdirSync(__dirname).filter((file) => {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
      && (file.slice(-3) === '.js');
}).forEach((file) => {
  const fileName = file.slice(0, file.indexOf('.'));
  models[fileName] =
      require(`./${fileName}`)(db.sequelize, db.Sequelize.DataTypes);
});

module.exports = models;
