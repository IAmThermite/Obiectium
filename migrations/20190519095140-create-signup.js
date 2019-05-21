module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('signups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tournament: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tournaments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      player: {
        type: Sequelize.STRING(32),
        allowNull: false,
        references: {
          model: 'players',
          key: 'steamid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('signups');
  },
};
