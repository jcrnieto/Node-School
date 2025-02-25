const express = require("express");
const { Router } = require("express");
//const { getEstablecimiento, createEstablecimiento } = require("../services.js/dbService");
const { fetchEstablecimieto } = require("../destinationService");

const {JWTStrategy} = require("@sap/xssec");
const passport = require("passport");
const xsenv = require("@sap/xsenv");

const router = Router();

passport.use(new JWTStrategy(xsenv.getServices({'uaa': {tag: "xsuaa"}}).uaa));
router.use(passport.initialize());
router.use(passport.authenticate("JWT", { session: false}));
console.log((xsenv.getServices({'uaa': {tag: "xsuaa"}}).uaa));

router.use((req, res, next)=>{
  if(req.headers.authorization){
  process.env.JWTauth = req.headers.authorization;
  next()
  }else{
      res.status(401).send("Usuario no autorizado")
  }
})

router.get("/", async (req, res) => {
    try {
        // const alumnos = await getEstablecimiento();
        // res.json(alumnos);
        const establecimiento = await fetchEstablecimieto(req)
        res.json(establecimiento)
    } catch (error) {
      res.status(500).json({ error: "Error al obtener alumnos" });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const alumno = await createEstablecimiento(req.body);
      res.json(alumno);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el alumno" });
    }
  });
  
  module.exports = router;
