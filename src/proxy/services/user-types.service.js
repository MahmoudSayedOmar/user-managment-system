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

<<<<<<< HEAD
  async add(newUserType, appPortoflioId) {
    debugger;
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
=======
  async getByArray(appPortoflioId) {
    return await axios({
      method: "post",
      url: `${BASE_URL}usertypes/UserTypesByApplicationIds`,
      data: appPortoflioId,
>>>>>>> 8422e8e350be326ebacdde5f5f5fbafe4397128f
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

<<<<<<< HEAD
=======
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

>>>>>>> 8422e8e350be326ebacdde5f5f5fbafe4397128f
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
