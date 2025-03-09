const express = require('express');

const schoolController = require("./School.controller"); 

const router = express.Router();

router.get("/allSchool", schoolController.allSchoolController);

module.exports = router;