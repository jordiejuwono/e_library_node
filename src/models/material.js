'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material.hasOne(models.material_completion,{
        foreignKey: "material_id",
        as: "is_complete",
      });
      // material.hasMany(models.material, {
      //   through: models.subbab_material,
      //   foreignKey: "material_id",
      //   as: "materials",
      // });
    }
  }
  material.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'material',
    underscored: true,
  });
  return material;
};