const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Player;

router.get('/', (req, res) => {
  controller.findAll().then((result) => {
    utils.render(req, res, 'players/list', 'Players',
        {players: result.rows[0], text: 'hello'});
  }).catch((error) => {
    utils.sendError(req, res, error, 500);
  });
});

router.get('/:id', (req, res) => {
  controller.findOne(req.params.id).then((result) => {
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
