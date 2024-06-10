'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_mode_pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelas_mode_pembelajaran.init({
    kelas_id: DataTypes.INTEGER,
    mode_pembelajaran_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas_mode_pembelajaran',
    underscored: true,
  });
  return kelas_mode_pembelajaran;
};