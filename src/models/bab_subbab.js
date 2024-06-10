'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab_subbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bab_subbab.belongsTo(models.bab, {foreignKey: "bab_id"});
      bab_subbab.belongsTo(models.subbab, {foreignKey: "subbab_id"});
    }
  }
  bab_subbab.init({
    bab_id: DataTypes.INTEGER,
    subbab_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bab_subbab',
    underscored: true,
  });
  return bab_subbab;
};