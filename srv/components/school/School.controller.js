const schoolAdapter = require ("./School.adapter");

exports.allSchoolController = async (req, res) => {
    try {
      const value = await schoolAdapter.allSchoolAdapter(req);
      res.status(200).json(value);
    } catch (err) {
      console.error("Error en allSchoolController:", err);
      res.status(err.status || 500).json({
        error: "Error al obtener las escuelas",
        details: err.message || "Ocurrió un error desconocido"
    });
    }
};