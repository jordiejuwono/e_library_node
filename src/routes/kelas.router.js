const express = require("express");
const { halamanDepan, kelasList } = require("../controllers/kelas.controller");

const router = express.Router();

router.get("/halamanDepan", halamanDepan);
router.get("/list", kelasList);

module.exports = router;
