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

  setDefaultGameCookie: (res, game) => {
    res.cookie('defaultGame', game.id, {maxAge: '5y'});
    res.redirect('/');
  },

  convertArrayToCammelcase: (array) => {
    const newArray = [];
    array.forEach((obj) => {
      const newObj = {};
      Object.keys(obj).forEach((key) => {
        newObj[key.replace(/_([a-z])/g, (g) => g[1].toUpperCase())] = obj[key];
      });
      newArray.push(newObj);
    });
    return newArray;
  },

  convertObjectToCammelcase: (obj) => {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[key.replace(/_([a-z])/g, (g) => g[1].toUpperCase())] = obj[key];
    });
    return newObj;
  },
};
