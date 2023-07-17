import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/pokemon",
    name: "pokemons",
    component: () => import("./views/PokemonsView.vue"),
  },
  {
    path: "/pokemon/:name",
    name: "singlePokemon",
    component: () => import("./views/SinglePokemonView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
