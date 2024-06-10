'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subbab.hasOne(models.subbab_progress,{
        foreignKey: "subbab_progress_id",
        as: 'progress'
      });
      subbab.belongsToMany(models.material, {
        through: models.subbab_material,
        foreignKey: "subbab_id",
        as: "materials",
      });
    }
  }
  subbab.init({
    name: DataTypes.STRING,
    free_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'subbab',
    underscored: true,
  });
  return subbab;
};