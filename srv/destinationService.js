const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { retrieveJwt, getDestination } = require('@sap-cloud-sdk/connectivity');

const dotenv = require("dotenv")
dotenv.config();

const fetchEstablecimieto = async (req) => { 
  try {
    const DESTINATION_NAME = "school-srv";

    // const userJwt = retrieveJwt(req) || process.env.JWTauth;

    // const destination = await req.execute({ destinationName:  DESTINATION_NAME});
    // console.log('destination',destination)
    // const userJwt = process.env.JWTauth;
    let jwt = retrieveJwt(req);
    
    const response = await executeHttpRequest(
      { destinationName: DESTINATION_NAME, jwt }, 
      {
        method: 'GET',
        url: 'school/Establecimiento' 
      }
    );
  
    console.log('Response:', response.data);
    
  } catch (error) {
    console.error('Error al obtener Establecimiento:', error)
    throw error
  }
}

module.exports = {fetchEstablecimieto}