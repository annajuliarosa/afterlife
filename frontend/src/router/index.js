//Pra adicionar outra página:
//Importa a view
//Adiciona na const routes
//Pronto

import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Adm from "../views/Adm.vue";
import Text from "../views/Text.vue";
import Video from "../views/Video.vue";
import Audios from "../views/Audios.vue";
import Armazenamento from "../views/Armazenamento.vue";
import Senhas from "../views/Senhas.vue";
import DocumentFile from "../views/DocumentFile.vue";

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
    path: "/audios/",
    name: "viewAudios",
    component: Audios,
  },
  {

    path: "/armazenamento/",
    name: "viewArmazenamento",
    component: Armazenamento,
  },
  {
    path: "/senhas/",
    name: "viewSenhas",
    component: Senhas,
  },
  {

    path: "/videos/",
    name: "viewVideo",
    component: Video,
  },
  {
    path: "/textos/",
    name: "viewText",
    component: Text,
  },
  {
    path: "/documentFile/",
    name: "DocumentFile",
    component: DocumentFile,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
