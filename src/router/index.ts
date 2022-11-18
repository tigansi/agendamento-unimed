import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
//import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/AcessoSistema/Login/LoginPage.vue"),
  },
  {
    path: "/cadastro",
    name: "CadastroPage",
    component: () => import("@/views/AcessoSistema/Cadastro/CadastroPage.vue"),
  },
  {
    path: "/painelAdm",
    name: "PainelAdmPage",
    component: () => import("@/views/PainelAdm/PainelAdmPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
