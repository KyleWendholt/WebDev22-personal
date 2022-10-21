<script setup lang="ts">
    import session from './stores/session'
    import { RouterView } from 'vue-router'
    import NavVue from './components/Nav.vue';

</script>

<template>
    
  <header>
    <NavVue />
  </header>

  <div class="container" v-if="session.user">
    <RouterView />
  </div>

</template>

<style scoped>

</style>