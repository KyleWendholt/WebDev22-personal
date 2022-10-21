<script setup lang="ts">
import { ref } from "vue";
import session, { login, logout } from "../stores/session";
import Users from "../stores/users";
let isActive = ref(false);
</script>

<template>
  <div class="buttons navbar-item" v-if="session.user == null">
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <div class="dropdown" :class="{ 'is-active': isActive }">
      <div class="dropdown-trigger">
        <a class="button is-light" @click="isActive = !isActive"> Log in </a>
      </div>
      <div class="dropdown-menu is-active" id="dropdown-menu" role="menu">
        <div @click="isActive = !isActive" class="dropdown-content">
          <a
            v-for="user in Users"
            class="dropdown-item"
            @click="login(user.username)"
          >
            {{ user.firstname }} {{ user.lastname }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-item" v-else>
    <div class="navbar-item">
      <div>
        Welcome {{ session.user.firstname }} {{ session.user.lastname }}
      </div>
    </div>
    <a class="button is-blue navbar-item" @click="logout()"> Log out </a>
  </div>
</template>

<style scoped></style>
