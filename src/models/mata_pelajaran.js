'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // mata_pelajaran.hasMany(models.bab, {
      //   through: models.mata_pelajaran_bab,
      //   foreignKey: "mata_pelajaran_id",
      //   as: "bab",
      // })
    }
  }
  mata_pelajaran.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mata_pelajaran',
    underscored: true,
  });
  return mata_pelajaran;
};