const xsenv = require("@sap/xsenv");
xsenv.loadEnv();

const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const api = require("./routes");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('¡Hola, mundo con Express');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use("/api", api);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
