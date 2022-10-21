<template>
  <div class="container is-max-desktop"><Exercises v-bind = "data" /></div>
</template>

<script setup lang="ts">
import Workouts from "../stores/workouts";
import Exercises from "../components/Exercises.vue";

const data = {
  workouts: Workouts,
  edit: false
}
</script>

<style scoped>
  
</style>
