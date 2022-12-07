<script setup lang="ts">
import type { Exercise } from "@/stores/exercises";
import { getUser, type User } from "@/stores/users";
import { ref } from "vue";

const props = defineProps<{
    exercise: Exercise;
}>();
let user = ref({} as User);
getUser(props.exercise?.userID).then((x) => (user.value = x));
</script>

<template>
  
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="user.profilePic" alt="Profile image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ user.firstname }} {{ user.lastname }}</p>
        <p class="subtitle is-6">@{{ user.username }}</p>
      </div>
    </div>

    <div class="content">
      {{ props.exercise?.content }}
      <br />
      {{ props.exercise?.time }}
    </div>
    

</template>
<style scoped>
.content {
  margin: 10px 0px;
}
.card-footer {
  height: 15px;
}
.box {
  margin-top: 15px;
}
</style>
