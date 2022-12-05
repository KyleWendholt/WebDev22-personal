<script setup lang="ts">
import { login } from "@/stores/session";
import { ref } from "vue";

const password = ref("");
const username = ref("");
</script>

<template>
  <div>
    <form class="box" @submit.prevent="login(username, password)">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>

      <button class="button is-primary">Sign in</button>
    </form>
  </div>
</template>

<style scoped></style>
