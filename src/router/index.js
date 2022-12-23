import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
// import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import People from "../views/People/People.vue";
import PeopleTable from "../views/People/PeopleTable.vue";
import PeopleDetail from "../views/People/PeopleDetail.vue";
import PlanetDetail from "../views/People/PlanetDetail.vue";
import FilmDetail from "../views/People/FilmDetail.vue";
import StarshipDetail from "../views/People/StarshipDetail.vue";
import VehicleDetail from "../views/People/VehicleDetail.vue";
import SpecyDetail from "../views/People/SpecyDetail.vue";
import Profile from "../views/UserProfile.vue";

// import Icons from "../views/Icons.vue";
// import Maps from "../views/Maps.vue";
// import Tables from "../views/Tables.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/people",
        name: "People",
        components: { default: People },
        children: [
          { path: "", name: "people-table", component: PeopleTable },
          {
            path: "/people/:id",
            name: "people-detail",
            components: { default: PeopleDetail },
          },
          {
            path: "/people/:id/planet/:planetId",
            name: "planet-detail",
            components: { default: PlanetDetail },
          },
          {
            path: "/people/:id/film/:filmId",
            name: "film-detail",
            components: { default: FilmDetail },
          },
          {
            path: "/people/:id/starship/:starshipId",
            name: "starship-detail",
            components: { default: StarshipDetail },
          },
          {
            path: "/people/:id/vehicle/:vehicleId",
            name: "vehicle-detail",
            components: { default: VehicleDetail },
          },
          {
            path: "/people/:id/specy/:specyId",
            name: "specy-detail",
            components: { default: SpecyDetail },
          },
        ],
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
    ],
  },
  // {
  //   path: "/",
  //   redirect: "login",
  //   component: AuthLayout,
  //   children: [
  //     {
  //       path: "/login",
  //       name: "login",
  //       components: { default: Login },
  //     },
  //     {
  //       path: "/register",
  //       name: "register",
  //       components: { default: Register },
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
