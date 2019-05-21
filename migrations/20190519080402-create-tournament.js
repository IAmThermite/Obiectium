module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tournaments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      canSignup: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isHidden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      maxPlayers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 16,
      },
      minPlayers: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      pointsWin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      pointsLose: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pointsFFWin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 2,
      },
      pointsFFLose: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pointsTie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      currentRound: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      game: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'games',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tournaments');
  },
};
