<script setup>
defineProps(['login', 'name', 'company', 'bio'])
</script>

<template>
  <strong>@{{ login }}</strong>
  <h2>{{ name }}</h2>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
</template>

<style scoped>
  h1,
  h2 {
    color: #f64348;
    margin: 1rem auto .25rem;
  }

  h3 {
    margin: 1rem auto .25rem;
  }

  span {
    display: block;
    margin: 1rem auto;
  }

</style>