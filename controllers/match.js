const utils = require('../src/utils');
const Match = require('../models/match');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    Match.findOne({where: {id}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    Match.findOne({where: {name}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAllByTournament: (id) => new Promise((resolve, reject) => {
    Match.findAll({where: {tournament: id}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (match) => new Promise((resolve, reject) => {
    Match.add({

    }).then((output) => {
      resolve(output);
    }).catch((error) => {
      reject(output);
    });
  }),
};
