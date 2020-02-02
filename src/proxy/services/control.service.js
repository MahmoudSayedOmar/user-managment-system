import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ControlService {
  async getControlsByRole(roleId: Number) {
    return await axios({
      method: "get",
      // url: `${BASE_URL}ApplicationPortoflios/GetAll/${corporateId}`,
      url: `${BASE_URL}Control/getControlByRole/${roleId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
 
}
