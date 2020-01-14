import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class RolesProxyService {
  async getUserTypeRoles(userTypeId: Number) {
    return await axios({
      method: "get",
      url: `${BASE_URL}role/GetAll/${userTypeId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async add(userTypeId, newRole) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}role/add/${userTypeId}`,
      data: newRole,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
