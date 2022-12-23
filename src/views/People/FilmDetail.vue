<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner
      :animation-duration="1250"
      :size="65"
      :color="'#ff1d5e'"
    />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3 p-4" v-for="film in films" :key="film.title">
      Title : {{ film.title }}
      <pre><code>{{ film }}</code></pre>
    </div>
  </template>
</template>

<script>
import PeopleService from "../../services/people.service.js";
import FilmService from "../../services/film.service.js";
import axios from "axios";

export default {
  name: "film-detail",
  components: {},
  data() {
    return {
      films: [],
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.userId = this.$route.params.id;
    PeopleService.getPeopleById(this.userId).then((item) => {
      const data = item.data;
      const requests = data.films.map((_film) => {
        const film_id = _film.replace(/\/+$/, "").split("/").pop();
        return FilmService.getFilmById(film_id);
      });
      axios.all(requests).then(
        axios.spread((...responses) => {
          this.films = responses.map((res) => res.data);
          this.isLoading = false;
        })
      );
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
