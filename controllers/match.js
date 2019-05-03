const db = require('../src/db');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM matches WHERE id = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM matches`;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAllByTournament: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM matches WHERE tournament_id = $1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (match) => new Promise((resolve, reject) => {
    const query = `INSERT INTO matches(title, home_player,
        away_player, tournament_id, round_number, maps)
        VALUES($1, $2, $3, $4, $5, $6)`;
    const params = [
      match.title,
      match.homePlayer,
      match.isBye,
      match.tournament,
      match.roundNumber,
      match.maps,
    ];
    db.query(query, params).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
