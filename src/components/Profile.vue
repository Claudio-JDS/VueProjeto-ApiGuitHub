<script setup>
import { ref, reactive, computed } from 'vue';

const searchInput = ref('')

const state = reactive({
  login: '',
  name: '',
  bio: '',
  company: '',
  avatar_url: 'https://unsplash.it/256',
  repos: [],
})


async function fetchGithubUser(ev) {
  ev.preventDefault()

  try {
    const res = await fetch(`https://api.github.com/users/${searchInput.value}`);
    const { login, name, bio, company, avatar_url } = await res.json();

    state.login = login;
    state.name = name;
    state.bio = bio;
    state.company = company;
    state.avatar_url = avatar_url;
    state.repos = [];

    fetchUserRepositories(login)

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

//buscando repositórios publicos
async function fetchUserRepositories(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const reposData = await res.json();

  state.repos = reposData
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositórios públicos.`
    : `${state.name} não possui nenhum repositório público.`
})
</script>


<template>
  <h1>GitHub User Data</h1>
  <form @submit="fetchGithubUser">
    <!-- O v-model abrivia os dois comandos: :value="searchInput" e  @input="(ev) => ev.target.value"-->
    <input type="text" placeholder="Digite um endeço do github" v-model="searchInput">
    <button>Carregar Usuário</button>
  </form>

  <img v-bind:src="state.avatar_url">
  <div v-if="state.login !== ''">
    <strong>@{{ state.login }}</strong>
    <h2>{{ state.name }}</h2>
    <h3>{{ state.company }}</h3>
    <span>{{ state.bio }}</span>
  </div>

  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
    <article v-for="repo of state.repos">
      <h3>{{ repo.full_name }}</h3>
      <p>{{ repo.description }}</p>
      <a :href="repo.html_url" target="_blank">Ir para GitHub</a>
    </article>
  </section>
</template>
