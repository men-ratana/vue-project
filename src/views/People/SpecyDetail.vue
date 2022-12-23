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
      <div class="card-header">Specy Info [ID : {{ specyId }}]</div>
      <div class="card-body">
        <pre><code>{{ specyData }}</code></pre>
      </div>
    </div>
  </template>
</template>

<script>
import SpecyService from "../../services/specy.service.js";

export default {
  name: "specy-detail",
  components: {},
  data() {
    return {
      specyData: "",
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = true;
    this.specyId = this.$route.params.specyId;
    SpecyService.getSpecyById(this.specyId).then((data) => {
        this.specyData = data.data;
        this.isLoading = false;
      });
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
