<script setup>
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import Form from './Form.vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue';

const userName = ref('')

const state = reactive({
  login: '',
  name: '',
  bio: '',
  company: '',
  avatar_url: 'https://unsplash.it/256',
  repos: [],
})


async function fetchGithubUser(searchInput) {

  try {
    const res = await fetch(`https://api.github.com/users/${searchInput}`);
    const { login, name, bio, company, avatar_url } = await res.json();

    state.login = login;
    state.name = name;
    state.bio = bio;
    state.company = company;
    state.avatar_url = avatar_url;

    fetchUserRepositories(login)

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

//buscando repositórios publicos
async function fetchUserRepositories(login) {
  const res = await fetch(`https://api.github.com/users/${login}/repos`);
  const reposData = await res.json();

  state.repos = reposData
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositórios públicos.`
    : `${state.name} não possui nenhum repositório público.`
})

//
onMounted(() => {
  console.log("O componente foi montado")
})

//
onUpdated(() => {
  console.log("O componente foi atualizado")
})

//
onUnmounted(() => {
  console.log("O componente foi desmontado")
})
</script>


<template>
  <slot></slot>
 
  <p>Pesquisando por: <strong>https://api.github.com/users/{{ userName }}</strong></p>

  <!-- v-on:form-submit -->
  <Form @form-submit="fetchGithubUser" v-model="userName" />

  <!--OBS) ao colocar a imagem dentro do código apresenta erro -->
  <img v-bind:src="state.avatar_url">
  <UserInfo v-if="state.login !== ''" :login="state.login" :name="state.name" :company="state.company"
    :bio="state.bio" />

  <section v-if="state.repos.length > 0">
    <h2>{{ reposCountMessage }}</h2>
    <Repository v-for="repo of state.repos" :full_name="repo.full_name" :description="repo.description"
      :html_url="repo.html_url" />
  </section>

  <slot name="footer"></slot>
</template>

<style scoped>
  img {
    border: 1px solid #e5e5e5;
    border-radius: 999px;
    display: block;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
  }
</style>