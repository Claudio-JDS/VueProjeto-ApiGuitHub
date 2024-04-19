import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search.vue";

const rotasPags = [
    // caminho
    { path: '/', component: Home },
    {path: '/search', component: Search}
  ]

const router = createRouter({
  history: createWebHistory(),
  routes: rotasPags
})

//vai para o arquivo main.js
export default router 