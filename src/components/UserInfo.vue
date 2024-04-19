<script setup>
defineProps(['login', 'name', 'company', 'bio'])
</script>

<template>
  <strong>@{{login }}</strong>
  <h2>{{name }}</h2>
  <h3>{{company }}</h3>
  <span>{{bio }}</span>
</template>