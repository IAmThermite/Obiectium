module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('match', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    homePlayer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'player',
        key: 'steamid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    awayPlayer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'player',
        key: 'steamid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    tournament: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tournament',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    resultHomeScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    resultAwayScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    resultSubmittedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'player',
        key: 'steamid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    resultConfirmedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'player',
        key: 'steamid',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    roundNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maps: {
      type: DataTypes.JSON,
    },
  });
  return Match;
};
