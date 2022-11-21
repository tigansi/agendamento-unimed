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
    path: "/homePainelAdm",
    name: "HomePainelAdm",
    component: () => import("@/views/PainelAdm/HomePainelAdm.vue"),
    children: [
      {
        path: "homeTabCadastroAdm",
        name: "HomeTabCadastroAdm",
        component: () =>
          import("@/views/PainelAdm/Cadastros/HomeTabCadastroAdm.vue"),
        children: [
          {
            path: "tabCadastroEspecialidadesPage",
            name: "TabCadastroEspecialidadesPage",
            component: () =>
              import(
                "@/views/PainelAdm/Cadastros/tabs/Especialidades/TabCadastroEspecialidadesPage.vue"
              ),
          },
          {
            path: "tabCadastroMedicosPage",
            name: "TabCadastroMedicosPage",
            component: () =>
              import(
                "@/views/PainelAdm/Cadastros/tabs/Medicos/TabCadastroMedicosPage.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
