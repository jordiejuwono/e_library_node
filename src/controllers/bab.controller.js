const { Bab, BabProgress } = require("../models");

const listBab = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const data = await Bab.findAll({
      attributes: [
        "BabID",
        "Name",
        "FreeAmount",
        [Bab.sequelize.fn("COALESCE", Bab.sequelize.col("BabProgress.Progress"), 0), "Progress"],
      ],
      include: {
        model: BabProgress,
        attributes: [],
        where: { UserID: userId },
        required: false,
      },
    });

    res.send({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { listBab };
