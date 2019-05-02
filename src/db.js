const {Pool} = require('pg');

const utils = require('./utils');

const dbConfig = require('config').get('db');

const pool = new Pool({
  host: dbConfig.get('host'),
  port: dbConfig.get('port'),
  user: dbConfig.get('user'),
  password: dbConfig.get('password'),
  database: dbConfig.get('database'),
});

pool.connect((error, pool) => {
  if (error) {
    throw new Error(error);
  } else {
    utils.log('info', `Connected to database
    ${pool.host}:${pool.port}/${pool.database}`);
  }
});

module.exports = {
  query: (query, params) => pool.query(query, params),

  transactionQuery: (query, params) => {
    return pool.query('BEGIN').then((result) => {
      pool.query(query, params).then((result1) => {
        pool.query('COMMIT');
      }).catch((error1) => {
        rollbackQuery(error1);
      });
    }).catch((error) => {
      rollbackQuery(error);
    });
  },
};

const rollbackQuery = (error) => {
  query('ROLLBACK', []).then((output) => {
    utils.log('error', `QUERY FAILED, Rolling back changes... ${error.stack}`);
  }).catch((error1) => {
    utils.log('error', `ROLLBACK FAILED ${error1.stack}`);
  });
};
