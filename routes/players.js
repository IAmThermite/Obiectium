const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Player;

router.get('/', (req, res) => {
  controller.findAll().then((players) => {
    utils.render(req, res, 'players/list', 'Players', {
      players,
    });
  }).catch((error) => {
    utils.sendError(req, res, 'ERROR', 500);
  });
});

router.get('/:steamid', (req, res) => {
  controller.findOne(req.params.steamid).then((player) => {
    utils.render(req, res, 'players/view', `Player ${player.alias}`, {
      player,
    });
  }).catch((error) => {
    utils.sendError(req, res, 'ERROR', 500);
  });
});


router.post('/new/', (req, res) => {
  res.send('NEW');
});

router.put('/edit', (req, res) => {
  res.send('EDIT');
});

module.exports = router;
