import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ApplicationsPortofoliosProxyService {
  async getCorporateApplicationsPortofolios(corporateId: Number) {
    return await axios({
      method: "get",
      url: `${BASE_URL}ApplicationPortoflios/GetAll/${corporateId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async addApplicationPortofolioToCorporate(
    applicationPortofolio,
    corporateId
  ) {
    debugger;
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
}
