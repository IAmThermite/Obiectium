const db = require('../src/db');

const utils = require('../src/utils');

module.exports = {
  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news`;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (news) => new Promise((resolve, reject) => {
    const query = `INSERT INTO news(title, game, markdown,
        content, pinned, created_by)
        VALUES($1, $2, $3, $4, $5, $6)`;
    const convertedMkdn = news.markdown; // markdown and xss
    db.query(query, [
      news.title,
      news.game,
      news.markdown,
      convertedMkdn,
      news.pinned,
      news.createdBy,
    ]).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
