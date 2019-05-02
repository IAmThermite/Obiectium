const home = require('./home');
const auth = require('./auth');
const players = require('./players');

module.exports = (app) => {
  app.use('/', home);
  app.use('/auth/', auth);
  app.use('/players/', players);
};
