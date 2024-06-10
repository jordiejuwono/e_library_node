'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran_bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mata_pelajaran_bab.init({
    bab_id: DataTypes.INTEGER,
    mata_pelajaran_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mata_pelajaran_bab',
    underscored: true,
  });
  return mata_pelajaran_bab;
};