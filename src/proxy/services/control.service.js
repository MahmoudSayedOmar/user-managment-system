import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ControlService {
  async getControlsByRole(roleId: Number, applicationPortoflioId: Number) {
    return await axios({
      method: "get",
      url: `${BASE_URL}Control/getControlByRole/${roleId}/${applicationPortoflioId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async mapControlsByRole(roleId: Number, controlsIds: Array) {
    return await axios({
      method: "post",
      url: `${BASE_URL}Control/mapRoleControls/${roleId}`,
      data: controlsIds,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
