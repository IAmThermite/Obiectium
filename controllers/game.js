const db = require('../src/db');

module.exports = {
  findOne: (name) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM games WHERE name = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM games`;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
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
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
