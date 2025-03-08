const express = require('express');

const { fetchEstablecimieto } = require("../../destinationService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const establecimiento = await fetchEstablecimieto(req)
      res.send(establecimiento)
    } catch (error) {
      res.status(500).json({ error: "Error al obtener alumnos" });
    }
  });

module.exports = router;