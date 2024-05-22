//Pra adicionar outra página:
//Importa a view
//Adiciona na const routes
//Pronto

import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Adm from "../views/Adm.vue";
import Text from "../views/Text.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adm/",
    name: "viewAdm",
    component: Adm,
  },
  {
    path: "/text/",
    name: "viewText",
    component: Text,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
