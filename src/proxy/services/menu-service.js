import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class MenusProxyService {
  async getMenus(value) {
    return await axios({
      method: "get",
      url: `${BASE_URL}Menu/getAll/${value}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async mapMenusToScreens(menuId, screensIds) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}Menu/mapscreenstomenu/${menuId}`,
      data: screensIds,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
  async addMenu(applicationportofolioId, menu) {
    debugger;

    return await axios({
      method: "post",
      url: `${BASE_URL}menu/add/${applicationportofolioId}`,
      data: menu,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }

  async changeMenuActivationStatus(MenuId, newStatus) {
    debugger;
    if (newStatus) {
      return await axios({
        method: "put",
        url: `${BASE_URL}menu/activate/${MenuId}`,
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-Type": "application/json"
          }
        }
      });
    } else {
      return await axios({
        method: "put",
        url: `${BASE_URL}menu/deactivate/${MenuId}`,
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-Type": "application/json"
          }
        }
      });
    }
  }
}
