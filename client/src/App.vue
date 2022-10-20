<script setup lang="ts">
    import { ref } from "vue";
    import session, { login, logout } from './stores/session'
    import { RouterView } from 'vue-router'
    import NavVue from './components/Nav.vue';

    let isLoggedIn = ref(false);
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