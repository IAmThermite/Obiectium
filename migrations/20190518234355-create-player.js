module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('players', {
      steamid: {
        type: Sequelize.STRING(32),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      alias: {
        type: Sequelize.STRING,
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      badges: {
        type: Sequelize.ARRAY(Sequelize.JSON),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('players');
  },
};
