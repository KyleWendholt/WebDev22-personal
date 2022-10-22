<template>
  <div class="container is-max-desktop"><Exercises v-for="workout in Workouts" :edit="false" :workout="workout" /></div>
</template>

<script setup lang="ts">
import Workouts from "../stores/workouts";
import Exercises from "../components/Exercise.vue";

</script>

<style scoped></style>
