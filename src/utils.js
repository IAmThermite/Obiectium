const config = require('config');

module.exports = {
  log: (level, message) => {
    console.log(`${level.toUpperCase()} | ${message}`);
  },

  render: (req, res, page, title, data) => {
    res.render('template', {
      title: `${config.get('app.name')} | ${title}`,
      page,
      user: req.user,
      data,
    });
  },

  sendError: (req, res, error, status) => {
    res.status(status).render('template', {
      title: `${config.get('app.name')} | 'Error!'`,
      page: 'error',
      user: req.user,
      error,
      status,
    });
  },
};
