const { Kelas, ModePembelajaran } = require("../models");

const halamanDepan = async (req, res, next) => {
  try {
    const data = await Kelas.findAll({
      attributes: ["name"],
      include: {
        model: ModePembelajaran,
        as: "ModePembelajaran",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    res.send({
      message: "Success",
      data: data.map(kelas => ({
        kelas: kelas.name,
        mode_pembelajaran: kelas.ModePembelajaran.map(mp => mp.name).join(", "),
      })),
    });
  } catch (error) {
    next(error);
  }
};

const kelasList = async (req, res, next) => {
  try {
    const data = await Kelas.findAll({
      attributes: ["KelasID", "Name"],
    });

    res.send({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { halamanDepan, kelasList };
