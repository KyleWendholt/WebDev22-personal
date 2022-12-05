<template>
  <div class="card-content box">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            class="is-rounded"
            :src="user.profilePic"
            alt="Profile image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">
          {{ user.firstname }} {{ user.lastname }}
        </p>
        <p class="subtitle is-6">@{{ user.username }}</p>
      </div>
    </div>

    <div class="content">
      {{ props.exercise?.content }}
      <br />
      {{ props.exercise?.time }}
    </div>
    <footer v-if="edit" class="card-footer">
      <a
        @click="
          deleteExercise(props.exercise?.id);
        "
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
import { deleteExercise, type Exercise } from "@/stores/exercises";
import { getUser, User } from "@/stores/users";
const props = defineProps<{
  edit: boolean;
  exercise: Exercise;
}>();
let user: User;
getUser(props.exercise?.userID).then((x) => user = x);

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
