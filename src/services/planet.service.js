import api from "./api";
const API_URL = "planets";
class PlanetService {
  getPlanets(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getPlanetById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
}
export default new PlanetService();
