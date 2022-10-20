<template>
  <div class="collumns">
    <div class="collumn is-half is-offest-one-quarter">
      <div class="card-content" v-for="workout in Workouts">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="workout.user.profilePic" alt="Profile image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ workout.user.firstname }} {{ workout.user.lastname }}
            </p>
            <p class="subtitle is-6">@{{ workout.user.username }}</p>
          </div>
        </div>

        <div class="content">
          {{ workout.content }}
        </div>
        <div class="card-footer">
          {{ workout.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Workouts from "../stores/workouts";
</script>

<style scoped>

</style>
