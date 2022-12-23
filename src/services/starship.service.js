import api from "./api";
const API_URL = "starships";
class StarshipService {
  getStarships(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getStarshipById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
}
export default new StarshipService();
