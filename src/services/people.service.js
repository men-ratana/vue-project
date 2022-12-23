import api from "./api";
const API_URL = "people";
class PeopleService {
  getPeople(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getPeopleById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
  postPeople(body) {
    return api.post(API_URL, body).then((response) => {
      return response.data;
    });
  }
  updatePeople(id, body) {
    return api.patch(API_URL + `/${id}`, body);
  }
  deletePeople(id) {
    return api.delete(API_URL + `/${id}`);
  }
}
export default new PeopleService();
