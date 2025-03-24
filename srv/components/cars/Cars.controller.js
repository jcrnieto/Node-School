const carsAdapter = require ("./Cars.adapter");

exports.allCarsController = async (req, res) => {
    try {
      const value = await carsAdapter.allCarsAdapter(req);
      res.status(200).json(value);
    } catch (err) {
      console.error("Error en allCarsController:", err);
      res.status(err.status || 500).json({
        error: "Error al obtener los autos",
        details: err.message || "Ocurrió un error desconocido"
    });
    }
};