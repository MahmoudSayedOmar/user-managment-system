import { BASE_URL } from "../../http-client/constants";
import { UserLoginModel, UserRegisterModel } from "../../proxy";

import axios from "axios";

export class AuthProxyService {
  async login(user: UserLoginModel) {
    return await axios({
      method: "post",
      url: `${BASE_URL}account/authenticate`,
      data: user,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async deactivate(id) {
    // debugger;

    return await axios({
      method: "get",
      url: `${BASE_URL}account/deactivate/${id}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async activate(id) {
    // debugger;

    return await axios({
      method: "get",
      url: `${BASE_URL}account/activate/${id}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async editUser(user: UserRegisterModel) {
    return await axios({
      method: "put",
      url: `${BASE_URL}account/edit/${user.id}`,
      data: user,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async getUsers() {
    return await axios({
      method: "get",
      url: `${BASE_URL}account/getUsers`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async register(user: UserRegisterModel) {
    return await axios({
      method: "post",
      url: `${BASE_URL}account/register`,
      data: user,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
