'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homePlayer: {
        type: Sequelize.STRING(32),
        allowNull: false,
        references: {
          model: 'players',
          key: 'steamid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      awayPlayer: {
        type: Sequelize.STRING(32),
        allowNull: false,
        references: {
          model: 'players',
          key: 'steamid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      resultHomeScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      resultAwayScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      resultSubmittedBy: {
        type: Sequelize.STRING(32),
        allowNull: false,
        references: {
          model: 'players',
          key: 'steamid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      resultConfirmedBy: {
        type: Sequelize.STRING(32),
        allowNull: false,
        references: {
          model: 'players',
          key: 'steamid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      roundNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maps: {
        type: Sequelize.JSON,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches');
  },
};
