<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner :animation-duration="1250" :size="65" :color="'#ff1d5e'" />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3">
      <div class="card-header">Info</div>
      <div class="card-body">
        <pre><code>{{ userData }}</code></pre>
      </div>
    </div>

    <div class="card mb-3" v-if="filmIds">
      <div class="card-header">Planets</div>
      <div class="card-body">
        <router-link class="btn btn-sm btn-default"
          :to="{ name: 'planet-detail', params: { planetId: planetId } }">Planets</router-link>
      </div>
    </div>
    <!-- Films -->
    <div class="card mb-3" v-if="filmIds">
      <div class="card-header">Films : {{ filmIds.length }} items</div>
      <div class="card-body">
        <template v-for="filmId in filmIds" :key="filmId">
          <router-link class="btn btn-sm btn-default" :to="{ name: 'film-detail', params: { filmId: filmId } }">Film ID
            : {{ filmId }}</router-link>
        </template>
      </div>
    </div>
    <!-- Starships -->
    <div class="card mb-3" v-if="starshipIds.length">
      <div class="card-header">Starships : {{ starshipIds.length }} items</div>
      <div class="card-body">
        <template v-for="starshipId in starshipIds" :key="starshipId">
          <router-link class="btn btn-sm btn-default" :to="{
            name: 'starship-detail',
            params: { starshipId: starshipId },
          }">Starship ID : {{ starshipId }}</router-link>
        </template>
      </div>
    </div>
    <!-- Vehicles -->
    <div class="card mb-3" v-if="vehicleIds.length">
      <div class="card-header">Vehicles : {{ vehicleIds.length }} items</div>
      <div class="card-body">
        <template v-for="vehicleId in vehicleIds" :key="vehicleId">
          <router-link class="btn btn-sm btn-default"
            :to="{ name: 'vehicle-detail', params: { vehicleId: vehicleId } }">Vehicle ID : {{ vehicleId
            }}</router-link>
        </template>
      </div>
    </div>
    <!-- Species -->
    <div class="card mb-3" v-if="specyIds.length">
      <div class="card-header">Species : {{ specyIds.length }} items</div>
      <div class="card-body">
        <template v-for="specyId in specyIds" :key="specyId">
          <router-link class="btn btn-sm btn-default"
            :to="{ name: 'specy-detail', params: { specyId: specyId } }">Species ID : {{ specyId }}</router-link>
        </template>
      </div>
    </div>
  </template>
</template>

<script>
import PeopleService from "../../services/people.service.js";

export default {
  name: "people-detail",
  components: {},
  data() {
    return {
      userData: {},
      planetId: '',
      filmIds: [],
      starshipIds: [],
      vehicleIds: [],
      specyIds: [],
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.userId = this.$route.params.id;
    PeopleService.getPeopleById(this.userId).then((item) => {
      const userData = item.data;
      this.planetId = userData.homeworld.replace(/\/+$/, "").split("/").pop();
      this.filmIds = userData.films.map((item) => {
        return item.replace(/\/+$/, "").split("/").pop();
      });
      this.starshipIds = userData.starships.map((item) => {
        return item.replace(/\/+$/, "").split("/").pop();
      });
      this.vehicleIds = userData.vehicles.map((item) => {
        return item.replace(/\/+$/, "").split("/").pop();
      });
      this.specyIds = userData.species.map((item) => {
        return item.replace(/\/+$/, "").split("/").pop();
      });
      this.userData = userData;
      this.isLoading = false;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>

</style>
