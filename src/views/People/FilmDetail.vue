<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner
      :animation-duration="1250"
      :size="65"
      :color="'#ff1d5e'"
    />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3">
      <div class="card-header">Film Info [ID : {{ filmId }}]</div>
      <div class="card-body">
        <pre><code>{{ filmData }}</code></pre>
      </div>
    </div>
  </template>
</template>

<script>
import FilmService from "../../services/film.service.js";

export default {
  name: "film-detail",
  components: {},
  data() {
    return {
      filmData: "",
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.filmId = this.$route.params.filmId;
    FilmService.getFilmById(this.filmId).then((data) => {
        this.filmData = data.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
