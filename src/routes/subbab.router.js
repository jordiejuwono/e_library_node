const express = require("express");
const { listSubBab } = require("../controllers/subbab.controller");

const router = express.Router();

router.get("/list", listSubBab);

module.exports = router;