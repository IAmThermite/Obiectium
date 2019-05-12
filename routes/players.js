const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Player;

router.get('/', (req, res) => {
  controller.findAll().then((result) => {
    utils.render(req, res, 'players/list', 'Players',
        {players: result});
  }).catch((error) => {
    utils.sendError(req, res, error, 500);
  });
});

router.get('/:steamid', (req, res) => {
  controller.findOneBySteamID(req.params.steamid).then((result) => {
    utils.render(req, res, 'players/view', 'Players', {player: result});
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
