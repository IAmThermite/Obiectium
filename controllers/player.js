const utils = require('../src/utils');
const Player = require('../models/').player;

module.exports = {
  findOne: (steamid) => new Promise((resolve, reject) => {
    Player.findOne({where: {steamid}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneByAlias: (alias) => new Promise((resolve, reject) => {
    Player.findOne({where: {alias}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    Player.findAll().then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (player) => new Promise((resolve, reject) => {
    Player.create({
      steamid: player.steamid,
      alias: player.alias,
      avatar: player.avatar,
    }).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
