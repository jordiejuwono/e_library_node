const { ModePembelajaran } = require("../models");

const modePembelajaranList = async (req, res, next) => {
  try {
    const data = await ModePembelajaran.findAll({
      attributes: ["ModePembelajaranID", "Name"],
    });

    res.send({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { modePembelajaranList };
