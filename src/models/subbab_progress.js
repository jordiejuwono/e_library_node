'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subbab_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subbab_progress.belongsTo(models.subbab, {
        foreignKey: "subbab_id",
        as: "subbab",
      })
    }
  }
  subbab_progress.init({
    user_id: DataTypes.INTEGER,
    subbab_id: DataTypes.INTEGER,
    progress: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'subbab_progress',
    underscored: true,
  });
  return subbab_progress;
};