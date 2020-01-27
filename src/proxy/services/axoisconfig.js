import axios from "axios";
import { BASE_URL } from "../../http-client/constants";

// import {store} from "../../index";
export class HttpClient {
  static requestIntercepter = [];

  static async httpFetch(url, method, body) {
    // debugger;
    var request = {
      body: body,
      method: method
    };

    this.requestIntercepter.forEach(function(element) {
      // debugger;
      request = element(request);
    }, this);

    let response = await axios(BASE_URL + url, request);
    return response;
  }
}
