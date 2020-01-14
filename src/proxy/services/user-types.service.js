import { BASE_URL } from "../../http-client/constants";

import axios from "axios";

export class UserTypesService {
  async get(appPortoflioId) {
    return await axios({
      method: "get",
      url: `${BASE_URL}usertypes/getall/${appPortoflioId}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async getByArray(appPortoflioId) {
    return await axios({
      method: "post",
      url: `${BASE_URL}usertypes/UserTypesByApplicationIds`,
      data: appPortoflioId,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async add(newUserType, appPortoflioId) {
    return await axios({
      method: "post",
      url: `${BASE_URL}usertypes/add/${appPortoflioId}`,
      data: newUserType,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async update(value) {
    return await axios({
      method: "put",
      url: `${BASE_URL}usertypes/edit/${value.id}`,
      data: value,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async deactivate(id) {
    return await axios({
      method: "post",
      url: `${BASE_URL}usertypes/deactivate/${id}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async activate(id) {
    return await axios({
      method: "post",
      url: `${BASE_URL}usertypes/activate/${id}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
