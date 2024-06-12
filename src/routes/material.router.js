const express = require("express");
const { listMaterial } = require("../controllers/material.controller");

const router = express.Router();

router.get("/list", listMaterial);

module.exports = router;