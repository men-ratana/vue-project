import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
// import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import People from "../views/People/People.vue";
import PeopleTable from "../views/People/PeopleTable.vue";
import PeopleDetail from "../views/People/PeopleDetail.vue";
import PlanetDetail from "../views/People/PlanetDetail.vue";
import FilmDetail from "../views/People/FilmDetail.vue";

// import Icons from "../views/Icons.vue";
// import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
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
            path: "/people/:id/planet",
            name: "planet-detail",
            components: { default: PlanetDetail },
          },
          {
            path: "/people/:id/film",
            name: "film-detail",
            components: { default: FilmDetail },
          },
          // {
          //   path: "/people/:Bid",
          //   name: "edit-people",
          //   components: { default: EditPeople },
          // },
        ],
      },
      // {
      //   path: "/icons",
      //   name: "icons",
      //   components: { default: Icons },
      // },
      // {
      //   path: "/maps",
      //   name: "maps",
      //   components: { default: Maps },
      // },
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
