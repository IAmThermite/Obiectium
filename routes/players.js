const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Player;

router.get('/', (req, res) => {
  controller.findAll().then((players) => {
    utils.render(req, res, 'players/list', 'Players', {
      players,
    });
  }).catch((error) => {
    utils.sendError(req, res, 'Internal server error', 500);
  });
});

router.get('/:steamid', (req, res) => {
  controller.findOne(req.params.steamid).then((player) => {
    if (player) {
      utils.render(req, res, 'players/view', `Player ${player.alias}`, {
        player,
      });
    } else {
      utils.sendError(req, res, 'Player not found!', 404);
    }
  }).catch((error) => {
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
