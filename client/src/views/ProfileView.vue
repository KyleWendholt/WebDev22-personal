<template>
  <div class="container is-max-desktop">
    <header>
      <div class="card">
        <div class="media">
          <figure class="image">
            <img :src="session.user!.profilePic" alt="User image" />
          </figure>
          <div class="card-content">
            <h1 class="title">Username:</h1>
            <h2 class="subtitle">@{{ session.user?.username }}</h2>
          </div>
        </div>
      </div>
    </header>
    <body
      class="card-content box"
      v-for="exercise in exercises.slice().reverse()"
    >
        <ExerciseComponent :exercise="exercise" />
    </body>
  </div>
</template>

<script setup lang="ts">
import ExerciseComponent from "../components/Exercise.vue";
import session from "../stores/session";
import { reactive } from "vue";
import { type Exercise, userExercises } from "@/stores/exercises";

const exercises = reactive([] as Exercise[]);
if (session.user) {
  userExercises(session.user._id).then((x) => {
    if (x.list) {
      const list = x.list;
      console.log(list);
      exercises.splice(0, exercises.length);
      exercises.push(...list);
    }
  });
}
</script>

<style scoped>

header {
  margin-top: 10px;
}
</style>
