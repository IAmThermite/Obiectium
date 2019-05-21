const utils = require('../src/utils');
const Game = require('../models').game;

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    Game.findOne({where: {id}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneByName: (name) => new Promise((resolve, reject) => {
    Game.findOne({where: {name}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    Game.findAll().then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
