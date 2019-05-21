module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('player', {
    steamid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    alias: {
      type: DataTypes.STRING,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    badges: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
  });
  return Player;
};
