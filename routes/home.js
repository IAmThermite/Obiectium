const router = require('express').Router();
const controller = require('../controllers/').News;

const utils = require('../src/utils');

router.get('/', (req, res) => {
  controller.findAll().then((result) => {
    utils.render(req, res, 'home', 'Home', {news: result.rows});
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
