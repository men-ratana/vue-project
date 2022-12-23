import api from "./api";
const API_URL = "vehicles";
class VehicleService {
  getVehicles(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getVehicleById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
}
export default new VehicleService();
