const router = require('express').Router();
const utils = require('../src/utils');
const controller = require('../controllers').Game;

router.get('/', (req, res) => {
  controller.findAll(req.params.id).then((result) => {
    utils.render(req, res, 'games/list', 'Games', {games: result});
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
