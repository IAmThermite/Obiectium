const db = require('../src/db');
const utils = require('../src/utils');
const Player = require('../models/player');

module.exports = {
  findOneBySteamID: (steamid) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players WHERE steamid = $1 LIMIT 1`;
    db.query(query, [steamid]).then((result) => {
      utils.log('info', JSON.stringify(result.rows[0]));
      resolve(new Player(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneByAlias: (alias) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players WHERE alias = $1 LIMIT 1`;
    db.query(query, [alias]).then((result) => {
      utils.log('info', JSON.stringify(result.rows[0]));
      resolve(new Player(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM players`;
    db.query(query, []).then((result) => {
      const players = [];
      result.rows.forEach((obj) => {
        players.push(new Player(obj));
      });
      utils.log('info', JSON.stringify(result.rows));
      resolve(players);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (player) => new Promise((resolve, reject) => {
    const query = `INSERT INTO players(steamid, alias,
        avatar)
        VALUES($1, $2, $3)`;
    db.query(query, [
      player.steamid,
      player.alias,
      player.avatar,
    ]).then((result) => {
      utils.log('info', JSON.stringify(result));
      resolve(new Player(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
