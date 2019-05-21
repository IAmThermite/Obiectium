const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Tournament;
const gameController = require('../controllers').Game;

router.get('/', (req, res) => {
  Promise.all([
    controller.findAll(),
    gameController.findAll(),
  ]).then((results) => {
    utils.render(req, res, 'tournaments/list', 'Players', {
      tournaments: results[0],
      games: results[1],
    });
  }).catch((error) => {
    console.log(error);
    utils.sendError(req, res, 'ERROR', 500);
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
