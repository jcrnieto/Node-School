const axios = require("axios");
const { config } = require("./config")

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      config.AUTH_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: config.CLIENT_ID,
        client_secret: config.CLIENT_SECRET,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error al obtener el token de acceso:", error.response?.data || error);
    throw new Error("No se pudo obtener el token de acceso");
  }
}

module.exports = {getAccessToken}