<template>
  <div v-if="isLoading" class="d-flex justify-content-center mt-9">
    <scaling-squares-spinner :animation-duration="1250" :size="65" :color="'#ff1d5e'" />
  </div>
  <template v-if="!isLoading">
    <div class="card mb-3">
      <div class="card-header border-0">
        <div class="row align-items-center">
          <div class="col d-flex">
            <h4 class="mb-0">
              All People :
              <span class="text-muted">{{ pagination.total }} items</span>
            </h4>
          </div>
        </div>
      </div>

      <div class="table-responsive table-sm">
        <base-table thead-classes="thead-light" :data="items">
          <template v-slot:columns>
            <th>Name</th>
            <th class="col-1">Gender</th>
            <th class="col-2">created</th>
            <th class="col-2">Updated</th>
            <th class="col-1">Action</th>
          </template>

          <template v-slot:default="row">
            <th scope="row" class="align-middle">
              <router-link :to="{ name: 'people-detail', params: { id: row.item.index } }">
                <span class="font-weight-700">{{ row.item.name }}</span>
              </router-link>
            </th>
            <td>
              {{ row.item.gender }}
            </td>
            <td>
              {{
                  moment(row.item.created).format("MMMM DD,YYYY hh:mm A")
              }}
            </td>
            <td>
              {{
                  moment(row.item.edited).format("MMMM DD,YYYY hh:mm A")
              }}
            </td>
            <td>
              <base-button @click="onPreviewDetail(row.item.index)" type="default" size="sm">
                <i class="fas fa-eye"></i>
              </base-button>
              <!-- <base-button @click.prevent="onDeleteClick(row.item.id)" type="danger" size="sm"><i
                  class="fas fa-trash"></i></base-button> -->
            </td>
          </template>
        </base-table>
      </div>
      <div v-if="pagination.total === 0" class="text-center p-5">Empty Data</div>
    </div>
    <div v-if="pagination && pagination.total_pages !== 1">
      <base-pagination :total="pagination.total" :perPage="per_page" :value="pagination.current_page"
        @input="onPaginationClicked" align="center" size="sm"></base-pagination>
    </div>
  </template>
</template>

<script>
import PeopleService from "../../services/people.service.js";
import moment from "moment";

export default {
  name: "people-table",
  components: {},
  data() {
    return {
      items: [],
      pagination: {},
      isLoading: true,
      deleteAlert: false,
    };
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    this.getAllPeople();
  },
  methods: {
    onPaginationClicked(value) {
      this.getAllPeople({ page: value });
    },
    getAllPeople(options) {
      this.isLoading = true;
      PeopleService.getPeople(options).then(
        (res) => {
          const data = res.data;
          const per_page = 10;
          const current_page = options ? options.page : 1;
          this.pagination = {
            'current_page': current_page,
            'total_pages': Math.ceil(data.count / per_page) || 1,
            'total': data.count
          };
          this.items = data.results.map((item, index) => {
            item.index = index + 1 + (current_page - 1) * 10;
            return item;
          });
          this.isLoading = false;
        },
        (error) => {
          alert("error to get data", error);
        }
      );
    },
    onPreviewDetail(userId) {
      this.$router.push({ name: "people-detail", params: { id: userId } });
    },
  },
};
</script>
