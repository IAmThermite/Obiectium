const router = require('express').Router();
const utils = require('../src/utils');
const gameController = require('../controllers').Game;
const controller = require('../controllers').Tournament;

router.get('/', (req, res) => {
  Promise.all([
    controller.findAll(),
    gameController.findAll(),
  ]).then((results) => {
    utils.render(req, res, 'tournaments/list', 'Tournaments', {
      tournaments: results[0],
      games: results[1],
    });
  }).catch((error) => {
    utils.sendError(req, res, error, 500);
  });
});

router.get('/:id', (req, res) => {
  controller.findOne(req.params.id).then((result) => {
    utils.render(req, res, 'tournaments/view', 'Tournaments', {tournament: result});
  }).catch((error) => {
    utils.sendError(req, res, error, 500);
  });
});

router.post('/new/', (req, res) => {
  res.send('NEW');
});

router.put('/edit', (req, res) => {
  res.send('EDIT');
});

module.exports = router;
