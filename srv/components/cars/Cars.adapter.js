const carsRepository = require("./Cars.repository");

exports.allCarsAdapter = async (req) => {
    try {
        const allCarsResp = await carsRepository.getAllCars(req)
        const allCars = allCarsResp.value;
        return allCars
        
      } catch (err) {
        throw {
          message: err?.response?.data || err?.data || "Error desconocido en allCarsAdapter",
          status: err?.response?.status || err?.status || 500
        };
      }
}