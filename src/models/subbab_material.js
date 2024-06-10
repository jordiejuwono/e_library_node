'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subbab_material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subbab_material.init({
    subbab_id: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subbab_material',
    underscored: true,
  });
  return subbab_material;
};