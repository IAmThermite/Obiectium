const db = require('../src/db');

module.exports = {
  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news`;
    db.query(query, []).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (news) => new Promise((resolve, reject) => {
    const query = `INSERT INTO news(title, markdown,
        content, pinned, created_by)
        VALUES($1, $2, $3, $4)`;
    const convertedMkdn = news.markdown; // markdown and xss
    db.query(query, [
      news.title,
      news.markdown,
      convertedMkdn,
      news.pinned,
      news.createdBy,
    ]).then((result) => {
      utils.log('info', result);
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
