'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mode_pembelajaran_mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mode_pembelajaran_mata_pelajaran.belongsTo(models.mode_pembelajaran, {foreignKey: "mode_pembelajaran_id"});
      mode_pembelajaran_mata_pelajaran.belongsTo(models.mata_pelajaran, {foreignKey: "mata_pelajaran_id"});
    }
  }
  mode_pembelajaran_mata_pelajaran.init({
    mata_pelajaran_id: DataTypes.INTEGER,
    mode_pembelajaran_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mode_pembelajaran_mata_pelajaran',
    underscored: true,
  });
  return mode_pembelajaran_mata_pelajaran;
};