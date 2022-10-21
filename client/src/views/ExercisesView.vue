<template>
  <div class="container is-max-desktop">
    <div class="button is-large is-fullwidth is-rounded is-link" @click="">Add workout</div>
      <Workouts v-bind = "data"/>
  </div>
</template>

<script setup lang="ts">
import Workouts from "../components/Exercises.vue"
import { usersWorkouts } from "../stores/workouts";
import session from "../stores/session";

const data= {
  workouts: usersWorkouts(session.user!),
  edit: true
}

</script>

<style scoped>
.button{
  margin: 15px 0px;
}

</style>
