module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('sessions', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.STRING(50000),
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  extendDefaultFields = (defaults, session) => {
    return {
      data: defaults.data,
      expires: defaults.expires,
      userId: session.userId,
    };
  };

  return Session;
};
