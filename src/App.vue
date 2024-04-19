<script setup>
  import {ref} from 'vue'
  import Profile from './components/Profile.vue';

  const isOpen = ref(true)
</script>


<template>
  <input type="checkbox" v-model="isOpen"> {{ isOpen }}
  <Profile v-if="isOpen">
    <h1>GitHub User Data</h1>

    <template v-slot:footer>
      <footer>
        Desenvolvido por <a href="https://github.com/Claudio-JDS" target="_blank">Cláudio José</a>
      </footer>
    </template>

  </Profile>
</template>

<style>
  #app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
  }

  h1 {
    color: #f64348;
    margin: 1rem auto .25rem;
  }

  a {
    color: #f64348;
  }

  footer{
    height: 3rem;
    margin-top: 2rem;
    padding: 1rem;
  }

</style>
