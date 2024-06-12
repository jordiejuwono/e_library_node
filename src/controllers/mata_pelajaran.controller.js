const { MataPelajaran } = require("../models");

const listMataPelajaranWithID = async (req, res, next) => {
  try {
    const data = await MataPelajaran.findAll({
      attributes: ["MataPelajaranID", "Name"],
    });

    res.send({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const listMataPelajaranWithoutID = async (req, res, next) => {
    try {
      const data = await MataPelajaran.findAll({
        attributes: [["Name", "Mata_Pelajaran"]],
      });
  
      res.send({
        message: "Success",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = { listMataPelajaranWithID, listMataPelajaranWithoutID };
