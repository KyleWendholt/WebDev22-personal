<template>
  <div class="container is-max-desktop">
    <table class="table box">
      <thead>
        <th>Username</th>
        <th>Name</th>
        <th>Admin</th>
      </thead>
      <tbody>
        <tr v-for="user in Users">
          <th>{{user.username}}</th>
          <th>{{user.firstname}} {{user.lastname}}</th>
          <th>{{user.isAdmin}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import Users from "../stores/users"
</script>

<style scoped>

</style>