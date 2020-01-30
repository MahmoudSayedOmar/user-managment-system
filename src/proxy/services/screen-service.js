import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ScreensProxyService {
  async get(applicationPortoflioId) {
    return await axios({
      method: "get",
      url: `${BASE_URL}ApplicationPortoflios/GetApplicationportofolioAllScreensById/${applicationPortoflioId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
