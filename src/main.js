import { createApp } from "vue";
//1. import vue router
import { createRouter, createWebHashHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";

//2. componentes
import Home from "./views/HomeView.vue";
import PokemonsView from "./views/PokemonsView.vue";
import SinglePokemonView from "./views/SinglePokemonView.vue";

//3. Definir las rutas a los componentes
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/pokemon", component: PokemonsView, name: "pokemons" },
  {
    path: "/pokemon/:pokemonId",
    component: SinglePokemonView,
    name: "singlePokemon",
  },
];

//4. Crear el objeto de rutas de vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//5. Usar el objeto de rutas de vue router al instanciar

const app = createApp(App);

app.use(router);

app.mount("#app");
