import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistorialView from "../views/HistorialView.vue";
import OpcionesAleatoriasView from "../views/OpcionesAleatoriasView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // Redirect home
    path: "/index.html",
    redirect: "/",
  },
  {
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/historial-peliculas",
    name: "historialPeliculas",
    component: HistorialView,
  },
  {
    // Redirect historialPeliculas
    path: "/pages/historial_peliculas.html",
    redirect: "/historial-peliculas",
  },
  {
    path: "/opciones-aleatorias",
    name: "opcionesAleatorias",
    component: OpcionesAleatoriasView,
  },
  {
    // Redirect opcionesAleatorias
    path: "/pages/seleccion_peliculas.html",
    redirect: "/opciones-aleatorias",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
