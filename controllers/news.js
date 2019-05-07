const xss = require('xss');
const showdown = require('showdown');
const xssFilter = require('showdown-xss-filter');

const db = require('../src/db');
const utils = require('../src/utils');

const converter = new showdown.Converter({
  extensions: [xssFilter],
});

module.exports = {
  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news WHERE pinned = false ORDER BY id DESC LIMIT 5 `;
    db.query(query, []).then((result) => {
      utils.log('info', JSON.stringify(result.rows));
      resolve(result);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAllPinned: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news WHERE pinned = true ORDER BY id DESC LIMIT 3 `;
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
    const convertedMkdn = xss(converter.makeHtml(news.markdown));
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
