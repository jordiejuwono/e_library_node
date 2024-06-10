'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mode_pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mode_pembelajaran.hasOne(models.kelas, {
        through: models.kelas_mode_pembelajaran,
        foreignKey: "mode_pembelajaran_id",
        as: "kelas",
      });
    }
  }
  mode_pembelajaran.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mode_pembelajaran',
    underscored: true,
  });
  return mode_pembelajaran;
};