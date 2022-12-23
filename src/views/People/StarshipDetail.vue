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
      <div class="card-header">Starship Info [ID : {{ starshipId }}]</div>
      <div class="card-body">
        <pre><code>{{ starshipData }}</code></pre>
      </div>
    </div>
  </template>
</template>

<script>
import StarshipService from "../../services/starship.service.js";

export default {
  name: "starship-detail",
  components: {},
  data() {
    return {
      starshipData: "",
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.starshipId = this.$route.params.starshipId;
    StarshipService.getStarshipById(this.starshipId).then((data) => {
        this.starshipData = data.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
