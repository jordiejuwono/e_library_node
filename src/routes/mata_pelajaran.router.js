const express = require("express");
const { listMataPelajaranWithID, listMataPelajaranWithoutID } = require("../controllers/mataPelajaran.controller");

const router = express.Router();

router.get("/with-id", listMataPelajaranWithID);
router.get("/without-id", listMataPelajaranWithoutID);

module.exports = router;