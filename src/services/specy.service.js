import api from "./api";
const API_URL = "species";
class SpecyService {
  getSpecys(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getSpecyById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
}
export default new SpecyService();
