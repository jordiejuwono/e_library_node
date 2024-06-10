'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bab_progress.belongsTo(models.bab, {
        foreignKey: "bab_progress_id",
        as: "bab",
      })
    }
  }
  bab_progress.init({
    user_id: DataTypes.INTEGER,
    bab_id: DataTypes.INTEGER,
    progress: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'bab_progress',
    underscored: true,
  });
  return bab_progress;
};