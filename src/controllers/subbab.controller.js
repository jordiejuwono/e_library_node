const { SubBab, BabSubBab, SubBabProgress } = require("../models");

const listSubBab = async (req, res, next) => {
  try {
    const { babId } = req.params;
    const userId = req.user.id;
    const data = await SubBab.findAll({
      attributes: [
        "SubBabID",
        "Name",
        "FreeStatus",
        [SubBab.sequelize.fn("COALESCE", SubBab.sequelize.col("SubBabProgress.Progress"), 0), "Progress"],
      ],
      include: [
        {
          model: BabSubBab,
          attributes: [],
          where: { BabID: babId },
        },
        {
          model: SubBabProgress,
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

module.exports = { listSubBab };
