module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('tournament', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    canSignup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isHidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    maxPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 16,
    },
    minPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    pointsWin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    pointsLose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pointsFFWin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    pointsFFLose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pointsTie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    currentRound: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    game: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  });
  return Tournament;
};
