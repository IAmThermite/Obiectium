const db = require('../src/db');
const utils = require('../src/utils');
const Game = require('../models/game');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM games WHERE id = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(new Game(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findOneByName: (name) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM games WHERE name = $1 LIMIT 1`;
    db.query(query, [name]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(new Game(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM games`;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      const games = [];
      result.rows.forEach((obj) => {
        games.push(new Game(obj));
      });
      resolve(games);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (game) => new Promise((resolve, reject) => {
    const query = `INSERT INTO games(name, description, url)
        VALUES($1, $2, $3)`;
    db.query(query, [game.name, game.description, game.url]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(new Game(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
