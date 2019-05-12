const home = require('./home');
const auth = require('./auth');
const players = require('./players');
const tournaments = require('./tournaments');
const games = require('./games');

module.exports = (app) => {
  app.use('/', home);
  app.use('/auth/', auth);
  app.use('/players/', players);
  app.use('/tournaments/', tournaments);
  app.use('/games/', games);
};
