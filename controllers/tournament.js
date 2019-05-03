const db = require('../src/db');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM tournaments WHERE id = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM tournaments`;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (tournament) => new Promise((resolve, reject) => {
    const query = `INSERT INTO tournaments(name, description,
        max_players, min_players, points_win, points_lose,
        points_ff_win, points_ff_loss, points_tie, game_id)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    db.query(query, [
      tournament.name,
      tournament.description,
      tournament.maxPlayers,
      tournament.minPlayers,
      tournament.pointsWin,
      tournament.pointsLose,
      tournament.pointsFFWin,
      tournament.pointsFFLose,
      tournament.pointsTie,
      tournament.game,
    ]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
