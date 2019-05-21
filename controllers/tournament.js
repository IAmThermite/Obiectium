const utils = require('../src/utils');
const Tournament = require('../models').tournament;

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    Tournament.findOne({where: {id}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    Tournament.findAll().then((output) => {
      resolve(output);
    }).catch((error) => {
      reject(error);
    });
  }),

  add: (tournament) => new Promise((resolve, reject) => {
    Tournament.create({
      // create
    }).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
