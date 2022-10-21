<template>
  <div class="card-content box container" v-for="workout in props.workouts">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            class="is-rounded"
            :src="workout.user.profilePic"
            alt="Profile image"
          />
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
      <br />
      {{ workout.time }}
    </div>
    <footer v-if="edit" class="card-footer">
      <a class="card-footer-item">Edit</a>
      <a @click="removeWorkout(workout)" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { removeWorkout } from '../stores/workouts';

const props = defineProps({
  workouts: Array(),
  edit: Boolean,
});
</script>

<style scoped>
.content {
  margin: 10px 0px;
}
.card-footer{
  height: 15px;
}
</style>
