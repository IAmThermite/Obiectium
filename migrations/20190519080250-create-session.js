module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sessions', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      userId: Sequelize.STRING,
      expires: Sequelize.DATE,
      data: Sequelize.STRING(50000),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sessions');
  },
};
