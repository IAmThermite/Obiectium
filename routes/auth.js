const passport = require('passport');
const router = require('express').Router();

/**
 * The actual login
 */
router.get('/steam',
    passport.authenticate('steam', {failureRedirect: '/'}),
    (req, res) => {
      res.redirect('/');
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
  req.logout();
  res.redirect('/');
});

module.exports = router;
