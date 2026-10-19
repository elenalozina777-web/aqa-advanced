const axios = require("axios");

async function getModelsByCars() {
  const response = await axios.get("https://qauto.forstudy.space/api/cars/models",
    {
      params: {

      "id": 1,
      "carBrandId": 1,
      "title": "TT"
    
      },
     headers: {
        "x-test-header": "Testing Request Headers"
      }
    }
  );

 return response;
}



module.exports = getModelsByCars;