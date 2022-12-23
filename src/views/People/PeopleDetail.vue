<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner :animation-duration="1250" :size="65" :color="'#ff1d5e'" />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col d-flex">
            <pre><code>{{ user }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    <router-link class="btn btn-sm btn-default" :to="{ name: 'planet-detail' }">Planets</router-link>
    <router-link class="btn btn-sm btn-default" :to="{ name: 'film-detail' }">Films</router-link>
    <!-- <router-link class="btn btn-sm btn-default" :to="{ name: 'people-starship' }">Starships</router-link> -->
    <!-- <router-link class="btn btn-sm btn-default" :to="{ name: 'people-vehicle' }">Vehicles</router-link> -->
    <!-- <router-link class="btn btn-sm btn-default" :to="{ name: 'people-species' }">Species</router-link> -->
  </template>
</template>

<script>
import PeopleService from "../../services/people.service.js";

export default {
  name: "people-detail",
  components: {},
  data() {
    return {
      user: {},
      isLoading: true,
    }
  },
  mounted() {
    this.isLoading = true;
    this.userId = this.$route.params.id;
    PeopleService.getPeopleById(this.userId).then((item) => {
      this.user = item.data;
      this.isLoading = false;
    });
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>

</style>