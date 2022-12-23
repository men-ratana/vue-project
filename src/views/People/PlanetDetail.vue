<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner
      :animation-duration="1250"
      :size="65"
      :color="'#ff1d5e'"
    />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3 p-4">
      <pre><code>{{ planet }}</code></pre>
    </div>
  </template>
</template>

<script>
import PeopleService from "../../services/people.service.js";
import PlanetService from "../../services/planet.service.js";

export default {
  name: "planet-detail",
  components: {},
  data() {
    return {
      planet: {},
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.userId = this.$route.params.id;
    PeopleService.getPeopleById(this.userId).then((item) => {
      const planet_id = item.data.homeworld
        .replace(/\/+$/, "")
        .split("/")
        .pop();
      PlanetService.getPlanetById(planet_id).then((data) => {
        this.planet = data.data;
        this.isLoading = false;
      });
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
