<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner :animation-duration="1250" :size="65" :color="'#ff1d5e'" />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3">
      <div class="card-header">Planet Info [ID : {{ planetId }}]</div>
      <div class="card-body">
        <pre><code>{{ planetData }}</code></pre>
      </div>
    </div>
  </template>
</template>

<script>
import PlanetService from "../../services/planet.service.js";

export default {
  name: "planet-detail",
  components: {},
  data() {
    return {
      planetData: {},
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.planetId = this.$route.params.planetId;
    PlanetService.getPlanetById(this.planetId).then((item) => {
      this.planetData = item.data;
      this.isLoading = false;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>

</style>
