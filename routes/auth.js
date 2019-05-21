const passport = require('passport');
const router = require('express').Router();
const utils = require('../src/utils');

/**
 * The actual login
 */
router.get('/steam',
    passport.authenticate('steam', {failureRedirect: '/'}),
    (req, res) => {
      res.redirect(`/players/${req.user.steamid}`);
    }
);

/**
 * After the login
 */
router.get('/steam/return',
    (req, res, next) => {
      req.url = req.originalUrl;
      next();
    },
    passport.authenticate('steam', {failureRedirect: '/'}),
    (req, res) => {
      res.redirect(`/players/${req.user.steamid}`);
    }
);

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      utils.log('error', error);
      utils.sendError(req, res, 'Logout failed. Contact a developer', 500);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
