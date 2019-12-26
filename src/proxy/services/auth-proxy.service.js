import { BASE_URL } from "../../http-client/constants";
import {
  UserLoginModel,
} from "../../proxy";

import axios from 'axios';

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
}
