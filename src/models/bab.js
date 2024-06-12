'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bab.hasOne(models.bab_progress,{
        foreignKey: "bab_id",
        as: 'progress'
      });
      // bab.hasMany(models.subbab,{
      //   through: models.bab_subbab,
      //   foreignKey: "book_id",
      //   as: "subbab",
      // });
      bab.belongsToMany(models.mata_pelajaran, {
        through: models.mata_pelajaran_bab,
        foreignKey: "bab_id",
        as: "mata_pelajaran",
      });
    }
  }
  bab.init({
    name: DataTypes.STRING,
    free_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bab',
    underscored: true,
  });
  return bab;
};