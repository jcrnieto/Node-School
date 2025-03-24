const express = require('express');

const carsController = require("./Cars.controller"); 

const router = express.Router();

router.get("/allCars", carsController.allCarsController);

module.exports = router;