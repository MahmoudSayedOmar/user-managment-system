import { BASE_URL } from "./constants";
import axios from "axios";

class httpClient {
  constructor() {
    const token = JSON.parse(localStorage.getItem("authorization") || "{}")[
      "token"
    ];

    const instance = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${token}` }
    });
    this.axiosInstance = instance;
  }

  async get(url) {
    return this.axiosInstance.get(url);
    //   .then(resp => {})
    //   .catch(resp => {
    //     if (resp.response !== undefined && resp.response.status == "401") {
    //       localStorage.removeItem("user");
    //       location.replace("/login");
    //     } else {
    //       return Promise.reject(resp);
    //     }
    //   });
  }

  post(url, formData) {
    return this.axiosInstance
      .post(url, formData)
      .then(resp => {})
      .catch(resp => {
        if (resp.response !== undefined && resp.response.status == "401") {
          localStorage.removeItem("user");
          location.replace("/login");
        } else {
          return Promise.reject(resp);
        }
      });
  }

  setTokenOnLogin = () => {
    const token = JSON.parse(localStorage.getItem("authorization") || "{}")[
      "token"
    ];
    this.axiosInstance.defaults.headers = { Authorization: `Bearer ${token}` };
  };

  clearTokenOnLogout = () => {
    localStorage.removeItem("user");
    this.axiosInstance.defaults.headers = {};
  };
}
const instance = new httpClient();
export default instance;
