const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Game;

router.get('/', (req, res) => {
  controller.findAll().then((games) => {
    utils.render(req, res, 'games/list', 'Games', {
      games,
    });
  }).catch((error) => {
    utils.log('error', error);
    utils.sendError(req, res, 'Internal server error', 500);
  });
});

router.get('/:id', (req, res) => {
  controller.findOne(req.params.id).then((game) => {
    if (game) {
      utils.render(req, res, 'games/view', 'Games', {
        game,
      });
    } else {
      utils.sendError(req, res, 'Game not found!', 404);
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
