import { BASE_URL } from "../../http-client/constants";
import { UserLoginModel, UserRegisterModel } from "../../proxy";

import axios from "axios";

export class AuthProxyService {
  async login(user: UserLoginModel) {
    return await axios({
      method: "post",
      url: `${BASE_URL}auth/login`,
      data: user,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async editUser(user: UserRegisterModel) {
    console.log("Usssser", user);
    debugger;
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
    debugger;
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
}
