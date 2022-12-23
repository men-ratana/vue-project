import api from "./api";
const API_URL = "films";
class FilmService {
  getFilms(params) {
    return api.get(API_URL, {
      params: params,
    });
  }
  getFilmById(id, params) {
    return api.get(API_URL + `/${id}`, {
      params: params,
    });
  }
}
export default new FilmService();
