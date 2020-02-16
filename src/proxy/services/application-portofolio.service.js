import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ApplicationsPortofoliosProxyService {
  async getCorporateApplicationsPortofolios(corporateId: Number) {
    return await axios({
      method: "get",
      url: `${BASE_URL}ApplicationPortoflios/GetAll/${corporateId}`,
      // url: `${BASE_URL}Corporates/get/${corporateId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  ////////
  async editApplicationPortofolioToCorporate(Id, applicationPortofolio) {
    // debugger;
    // console.log(applicationPortofolio, "application porotofilio");
    return await axios({
      method: "put",
      url: `${BASE_URL}ApplicationPortoflios/edit/${Id}`,
      data: applicationPortofolio,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  ///////////

  async addApplicationPortofolioToCorporate(
    applicationPortofolio,
    corporateId
  ) {
    // debugger;
    console.log(applicationPortofolio, "appliation porotofolio");
    return await axios({
      method: "post",
      url: `${BASE_URL}ApplicationPortoflios/add/${corporateId}`,
      data: applicationPortofolio,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async changeApplicationPortofolioActivationStatus(
    applicationPortofolioId,
    newStatus
  ) {
    if (newStatus) {
      return await axios({
        method: "put",
        url: `${BASE_URL}ApplicationPortoflios/activate/${applicationPortofolioId}`,
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-Type": "application/json"
          }
        }
      });
    } else {
      return await axios({
        method: "put",
        url: `${BASE_URL}ApplicationPortoflios/deactivate/${applicationPortofolioId}`,
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-Type": "application/json"
          }
        }
      });
    }
  }
}
