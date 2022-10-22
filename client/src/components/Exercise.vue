<template>
  <div class="card-content box">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            class="is-rounded"
            :src="props.workout?.user.profilePic"
            alt="Profile image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">
          {{ props.workout?.user.firstname }} {{ props.workout?.user.lastname }}
        </p>
        <p class="subtitle is-6">@{{ props.workout?.user.username }}</p>
      </div>
    </div>

    <div class="content">
      {{ props.workout?.content }}
      <br />
      {{ props.workout?.time }}
    </div>
    <footer v-if="edit" class="card-footer">
      <a
        @click="
          removeWorkout(props.workout!);
        "
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
import { removeWorkout, Workout } from "../stores/workouts";

const props = defineProps({
  workout: Workout,
  edit: Boolean,
});
</script>

<style scoped>
.content {
  margin: 10px 0px;
}
.card-footer {
  height: 15px;
}
.box{
  margin-top: 15px;
}
</style>
