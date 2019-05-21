module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.STRING,
    },
  });
  return Game;
};
