const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { retrieveJwt } = require('@sap-cloud-sdk/connectivity');

const dotenv = require("dotenv");
dotenv.config();

const destination = process.env.DESTINATION_NAME

const fetchEstablecimieto = async (req) => { 
  try {
    let jwt = retrieveJwt(req);
    const response = await executeHttpRequest(
      { destinationName: destination, jwt }, 
      {
        method: 'GET',
        url: '/odata/v4/school/School' 
      }
    );
    console.log('Response:', response.data);
    return response.data; 
    
  } catch (error) {
    console.error('Error al obtener Establecimiento:', error)
    throw error
  }
}

module.exports = {fetchEstablecimieto}