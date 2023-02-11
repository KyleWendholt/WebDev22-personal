<template>
  <div class="container is-max-desktop">
    <table class="table box">
      <thead>
        <th>Username</th>
        <th>Name</th>
        <th>Admin</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <th>{{ user.username }}</th>
          <th>{{ user.firstname }} {{ user.lastname }}</th>
          <th>{{ user.isAdmin }}</th>
        </tr>
      </tbody>
    </table>

    <button class="button is-primary" @click="modalActive = !modalActive">
      Add User
    </button>

    <div class="modal" :class="{ 'is-active': modalActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="field">
          <div class="control">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">New Exercise</p>
                <div class="card-header-icon">
                  <button
                    @click="
                      modalActive = !modalActive;
                      username = '';
                      firstname = '';
                      lastname = '';
                      isAdmin = false;
                      password = '';
                      profilePic = '';
                    "
                    class="delete icon is-large is-active"
                  ></button>
                </div>
              </header>
              <input
                class="input card-content"
                placeholder="username"
                type="text"
                v-model="username"
              />
              <input
                class="input card-content"
                placeholder="password"
                type="text"
                v-model="password"
              />
              <input
                class="input card-content"
                placeholder="firstname"
                type="text"
                v-model="firstname"
              />
              <input
                class="input card-content"
                placeholder="lastname"
                type="text"
                v-model="lastname"
              />
              <input
                class="input card-content"
                placeholder="profilePic"
                type="text"
                v-model="profilePic"
              />
              <label class="card-content">Admin</label>
              <input class="card-content" type="checkbox" v-model="isAdmin" />
            </div>
          </div>
          <button
            @click="
              modalActive = !modalActive;
              addUser({
                username: username,
                firstname: firstname,
                lastname: lastname,
                isAdmin: isAdmin,
                password: password,
                profilePic: profilePic,
              }).then((x) => {
                if (x._id) {
                  users.push(x);
                }
              });
              username = '';
              firstname = '';
              lastname = '';
              isAdmin = false;
              password = '';
              profilePic = '';
            "
            type="submit"
            class="button is-large is-fullwidth is-rounded is-link"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { type User, getUsers, addUser } from "@/stores/users";

const users = reactive([] as User[]);

getUsers().then((x) => {
  console.log(x);
  if (x.list) {
    const list = x.list;
    console.log(list);
    users.splice(0, users.length);
    users.push(...list);
  }
});

let modalActive = ref(false);
let username = ref("");
let firstname = ref("");
let lastname = ref("");
let isAdmin = ref(false);
let password = ref("");
let profilePic = ref("");
</script>

<style scoped></style>
