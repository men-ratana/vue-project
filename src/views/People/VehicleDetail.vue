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
      <div class="card-header">Vehicle Info [ID : {{ vehicleId }}]</div>
      <div class="card-body">
        <pre><code>{{ vehicleData }}</code></pre>
      </div>
    </div>
  </template>
</template>

<script>
import VehicleService from "../../services/vehicle.service.js";

export default {
  name: "vehicle-detail",
  components: {},
  data() {
    return {
      vehicleData: "",
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.vehicleId = this.$route.params.vehicleId;
    VehicleService.getVehicleById(this.vehicleId).then((data) => {
        this.vehicleData = data.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
