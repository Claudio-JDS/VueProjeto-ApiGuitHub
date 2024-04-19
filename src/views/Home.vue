<script setup>
// import searchHistory from '../stores/searchHistory';
import { useSearchHistoryStore } from '../stores/useSearchHistoryStore';

const history = useSearchHistoryStore()
</script>

<template>
  <h1>Bem Vindo!</h1>
  <p>Esta é a página inicial do app.</p>

  <section>
    <h2>Histórico de Pesquisa:</h2>
    <p v-for="user in history.users">{{ user }}</p>
  </section>

</template>

<style scoped>
  section{
    margin: 3rem 0;
  }
  p{
    margin-top: 1rem;
  }
</style>