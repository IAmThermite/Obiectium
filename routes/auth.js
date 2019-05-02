const router = require('express').Router();

router.get('/login', (req, res) => {
  res.send('auth login');
});

router.get('/logout', (req, res) => {
  res.send('auth logout');
});

module.exports = router;
