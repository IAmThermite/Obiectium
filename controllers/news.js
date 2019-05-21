const xss = require('xss');
const showdown = require('showdown');
const xssFilter = require('showdown-xss-filter');

const utils = require('../src/utils');
const News = require('../models').news;

const converter = new showdown.Converter({
  extensions: [xssFilter],
});

module.exports = {
  findAll: () => new Promise((resolve, reject) => {
    console.log(News);
    News.findAll({where: {pinned: false}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      reject(error);
    });
  }),

  findAllPinned: () => new Promise((resolve, reject) => {
    News.findAll({where: {pinned: true}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      reject(error);
    });
  }),
};
