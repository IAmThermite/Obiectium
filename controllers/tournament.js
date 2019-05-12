const db = require('../src/db');
const utils = require('../src/utils');
const Tournament = require('../models/tournament');

module.exports = {
  findOne: (id) => new Promise((resolve, reject) => {
    const query = `SELECT tournaments.*,
    games.id AS game_id, games.name AS game_name,
    games.description AS game_description
    FROM tournaments JOIN games ON games.id=tournaments.game_id
    WHERE tournaments.id = $1 LIMIT 1`;
    db.query(query, [id]).then((result) => {
      result = utils.convertObjectToCammelcase(result.rows[0]);
      result.game = {
        id: result.gameId,
        name: result.gameName,
        description: result.gameDescription,
        url: result.url,
      };
      result.pointsFFWin = result.pointsFfWin;
      result.pointsFFLose = result.pointsFfLose;
      utils.log('info', JSON.stringify(new Tournament(result)));
      resolve(new Tournament(result));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT tournaments.*,
    games.id AS game_id, games.name AS game_name,
    games.description AS game_description
    FROM tournaments JOIN games ON games.id=tournaments.game_id`;
    db.query(query, []).then((results) => {
      const objects = utils.convertArrayToCammelcase(results.rows);
      const tournaments = [];
      objects.forEach((obj) => {
        obj.game = {
          id: obj.gameId,
          name: obj.gameName,
          description: obj.gameDescription,
          url: obj.url,
        };
        tournaments.push(new Tournament(obj));
      });
      utils.log('info', JSON.stringify(objects));
      resolve(tournaments);
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
      utils.log('info', JSON.stringify(new Tournament(result.rows[0])));
      resolve(new Tournament(result.rows[0]));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
