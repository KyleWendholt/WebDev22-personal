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
            <h2 class="subtitle">@{{ session.user!.username }}</h2>
          </div>
        </div>
      </div>
    </header>

    <div v-for="workout in Workouts">
      <Exercise
        v-if="workout.user == session.user"
        :edit="false"
        :workout="workout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import session from "../stores/session";
import Workouts from "../stores/workouts";
import Exercise from "../components/Exercise.vue";
</script>

<style scoped></style>
