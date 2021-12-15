<template>
  <nav class="navbar navbar-expand text-white">
    <router-link class="navbar-brand text-white" to="/">Energy</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"></li>

        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link text-white"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link text-white"
            >Register</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/profile" class="nav-link text-white"
            >Profile</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a
            to="/logout"
            class="nav-link text-white"
            @click.prevent="logoutUser"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    },
  },
};
</script>

<style>
.nav-item {
  justify-content: center;
}
.navbar {
  background-color: black;
  color: white;
}
.nav-link {
  float: right;
}
</style>