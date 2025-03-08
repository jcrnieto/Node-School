const { Router } = require("express");

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

const school = require("./components/school/School.route");

router.use("/school",school);


module.exports = router;
