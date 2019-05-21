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
    utils.log('error', error);
    utils.sendError(req, res, 'Internal server error', 500);
  });
});

router.get('/:id', (req, res) => {
  controller.findOne(req.params.id).then((tournament) => {
    if (tournament) {
      utils.render(req, res, 'tournaments/view', `Tournament ${tournament.name}`, {
        tournament,
      });
    } else {
      utils.sendError(req, res, 'Tournament not found!', 404);
    }
  }).catch((error) => {
    utils.log('error', error);
    utils.sendError(req, res, 'Internal server error', 500);
  });
});

router.post('/new/', (req, res) => {
  res.send('NEW');
});

router.put('/edit', (req, res) => {
  res.send('EDIT');
});

module.exports = router;
