'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material_completion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material_completion.belongsTo(models.material,{
        foreignKey: "material_completion_id",
        as: "materials",
      });
    }
  }
  material_completion.init({
    user_id: DataTypes.INTEGER,
    mateiral_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'material_completion',
    underscored: true,
  });
  return material_completion;
};