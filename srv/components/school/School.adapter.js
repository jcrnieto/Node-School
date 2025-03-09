const schoolRepository = require("./School.repository");

exports.allSchoolAdapter = async (req) => {
    try {
        const allSchoolResp = await schoolRepository.getAllSchool(req)
        const allSchool = allSchoolResp.value;
        return allSchool
        
      } catch (err) {
        throw {
          message: err?.response?.data || err?.data || "Error desconocido en allSchoolAdapter",
          status: err?.response?.status || err?.status || 500
        };
      }
}