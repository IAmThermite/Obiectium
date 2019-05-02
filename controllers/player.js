const db = require('../src/db');
const utils = require('../src/utils');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players WHERE id = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneBySteamID: (steamid) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players WHERE steamid = $1 LIMIT 1`;
    db.query(query, [steamid]).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneByAlias: (alias) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players WHERE alias = $1 LIMIT 1`;
    db.query(query, [alias]).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players`;
    db.query(query, []).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (player) => new Promise((resolve, reject) => {
    const query = `INSERT INTO players(steamid, alias,
        avatar, description, default_game)
        VALUES($1, $2, $3, $4, $5)`;
    db.query(query, [
      player.steamid,
      player.alias,
      player.avatar,
      player.description,
      player.default_game,
    ]).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
