const db = require('../src/db');

module.exports = {
  findAllByTournament: (id) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM signups WHERE tournament_id = $1`;
    db.query(query, [id]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (signup) => new Promise((resolve, reject) => {
    const query = `INSERT INTO signups(tournament_id, player_id)
        VALUES($1, $2)`;
    db.query(query, [signup.tournament, signup.player]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
