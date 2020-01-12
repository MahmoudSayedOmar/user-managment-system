import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class SubmitCodeProxyService {
  async activatecode(values) {
    console.log(values, "values");
    console.log(values.username);
    return await axios({
      method: "get",
      url: `${BASE_URL}Account/activatecode?Username=${values.username}&&VerificationCode=${values.code}&&Password=${values.password}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
