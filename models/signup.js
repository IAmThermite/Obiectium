module.exports = (sequelize, DataTypes) => {
  const Signup = sequelize.define('signup', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tournament: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    player: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Signup;
};
