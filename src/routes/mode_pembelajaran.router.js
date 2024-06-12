const express = require("express");
const { modePembelajaranList } = require("../controllers/mode_pembelajaran.controller");

const router = express.Router();

router.get("/list", modePembelajaranList);

module.exports = router;
