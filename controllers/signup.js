const Signup = require('../models/signup');

module.exports = {
  findAllByTournament: (id) => new Promise((resolve, reject) => {
    Signup.findAll({where: {tournament: id}}).then((output) => {
      resolve(output);
    }).catch((error) => {
      utils.log('error', error);
      reject(error);
    });
  }),

  add: (signup) => new Promise((resolve, reject) => {
    Signup.add({

    }).then((ouput) => {
      resolve(ouput);
    }).catch((error) => {
      reject(error);
    });
  }),
};
