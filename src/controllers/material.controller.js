const { Material, SubBabMaterial, MaterialCompletion } = require("../models");

const listMaterial = async (req, res, next) => {
  try {
    const { subBabId } = req.params;
    const userId = req.user.id;
    const data = await Material.findAll({
      attributes: [
        "MaterialID",
        "Name",
        [Material.sequelize.fn("COALESCE", Material.sequelize.col("MaterialCompletion.Completion"), false), "Completion"],
      ],
      include: [
        {
          model: SubBabMaterial,
          attributes: [],
          where: { SubBabID: subBabId },
        },
        {
          model: MaterialCompletion,
          attributes: [],
          where: { UserID: userId },
          required: false,
        },
      ],
    });

    res.send({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { listMaterial };
