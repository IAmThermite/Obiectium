const xss = require('xss');
const showdown = require('showdown');
const xssFilter = require('showdown-xss-filter');

const db = require('../src/db');
const utils = require('../src/utils');

const News = require('../models/news');
const Player = require('../models/player');

const converter = new showdown.Converter({
  extensions: [xssFilter],
});

module.exports = {
  findAll: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news JOIN players ON news.created_by=players.steamid WHERE pinned = false ORDER BY id DESC LIMIT 5`;
    db.query(query, []).then((result) => {
      const news = [];
      result.rows.forEach((obj) => {
        obj.createdBy = {
          steamid: obj.steamid,
          alias: obj.alias,
          avatar: obj.avatar,
          description: obj.description,
          badges: obj.badges,
        };
        news.push(new News(obj));
      });
      utils.log('info', JSON.stringify(news));
      resolve(news);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  findAllPinned: () => new Promise((resolve, reject) => {
    const query = `SELECT * FROM news JOIN players ON news.created_by=players.steamid WHERE pinned = true ORDER BY id DESC LIMIT 3`;
    db.query(query, []).then((result) => {
      const news = [];
      result.rows.forEach((obj) => {
        obj.createdBy = new Player({
          steamid: obj.steamid,
          alias: obj.alias,
          avatar: obj.avatar,
          descrition: obj.descrition,
          badges: obj.badges,
        });
        news.push(new News(obj));
      });
      utils.log('info', JSON.stringify(news));
      resolve(news);
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
      resolve(new News(result.rows));
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),
};
