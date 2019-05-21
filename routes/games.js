const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Game;

router.get('/', (req, res) => {
  const games = controller.findAll();

  if (games) {
    utils.render(req, res, 'games/list', 'Games', {
      games,
    });
  } else {
    utils.sendError(req, res, 'ERROR', 500);
  }
});

router.get('/:id', (req, res) => {
  const game = controller.findOne(req.params.id);

  if (game) {
    utils.render(req, res, 'games/list', `Game ${game.name}`, {
      game,
    });
  } else {
    utils.sendError(req, res, 'ERROR', 500);
  }
});

router.post('/new/', (req, res) => {
  res.send('NEW');
});

router.put('/edit', (req, res) => {
  res.send('EDIT');
});

module.exports = router;
