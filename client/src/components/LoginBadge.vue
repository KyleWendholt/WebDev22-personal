<script setup lang="ts">
import session, { logout } from "../stores/session";

</script>

<template>
  <div class="buttons navbar-item" v-if="session.user == null">
    <RouterLink to="login" class="button is-primary">
      <strong>Login</strong>
    </RouterLink>
  </div>
  <div class="navbar-item" v-else>
    <div class="navbar-item">
      <div>
        Welcome {{ session.user.firstname }} {{ session.user.lastname }}
      </div>
    </div>
    <RouterLink to="login" class="button is-blue navbar-item" @click="logout()"> Log out </RouterLink>
  </div>
</template>

<style scoped></style>
