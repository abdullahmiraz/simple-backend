const express = require("express");
const { createFormData, getAllFormData } = require("./form.controller");

const router = express.Router();

router.post("/", createFormData);
router.get("/", getAllFormData);

module.exports = router;
