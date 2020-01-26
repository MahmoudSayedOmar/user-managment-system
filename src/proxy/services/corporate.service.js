import { BASE_URL } from "../../http-client/constants";

import abc, { HttpClient } from "../services/axoisconfig"
import axios from "axios";

axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      var localstroag=localStorage.getItem('persist:root');
        var auth= JSON.parse(localstroag).authorization;
        var token=JSON.parse(auth).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);

export class CorporateService {
  async get() {
    return await axios({
      method: "get",
      url: `${BASE_URL}corporates/get`,
      config:{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async add(newCoprorate) {
    return await axios({
      method: "post",
      url: `${BASE_URL}corporates/add`,
      data: newCoprorate,
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
      url: `${BASE_URL}corporates/edit/${value.id}`,
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
      url: `${BASE_URL}corporates/deactivate/${id}`,
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
      url: `${BASE_URL}corporates/activate/${id}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
