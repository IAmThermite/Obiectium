const router = require('express').Router();
const controller = require('../controllers/');

const utils = require('../src/utils');

router.get('/', (req, res) => {
  Promise.all([controller.News.findAll(), controller.News.findAllPinned()]).then((results) => {
    utils.render(req, res, 'home', 'Home', {
      news: results[0],
      pinned: results[1],
    });
  }).catch((error) => {
    utils.sendError(req, res, error, 500);
  });
});

router.get('/about/', (req, res) => {
  utils.render(req, res, 'about', 'About', {});
});

router.get('/help/', (req, res) => {
  utils.render(req, res, 'help', 'Help', {});
});

module.exports = router;
