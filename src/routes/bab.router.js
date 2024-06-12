const express = require("express");
const { listBab } = require("../controllers/bab.controller");

const router = express.Router();

router.get("/list", listBab);

module.exports = router;
