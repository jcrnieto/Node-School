const axios = require("axios");
const { getAccessToken } = require("../services.js/authService");
const { config } = require("../services.js/config")

const getEstablecimiento = async () => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(`${config.BASE_URL}/odata/v4/school/Establecimiento`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener alumnos:", error.response?.data || error);
    throw new Error("Error al obtener los alumnos");
  }
}


const createEstablecimiento = async () => {
  try {
    const token = await getAccessToken();
    const response = await axios.post(`${config.BASE_URL}/odata/v4/school/Establecimiento`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear alumno:", error.response?.data || error);
    throw new Error("Error al crear el alumno");
  }
}

module.exports = {
  getEstablecimiento,
  createEstablecimiento
}
