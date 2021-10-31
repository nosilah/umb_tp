<template>
  <div id="app">
    <nav class="navbar navbar-expand  navbar-dark ownstylenav">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link"
            >User</router-link
          >
        </li> -->
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            Profile
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logout() {
    
     this.$store.dispatch("auth/logout")
      this.$router.push("/login");
    },
  },

  // mounted(){
  //   axios.get('http://127.0.0.1:3001' + "/check_auth").then((response) => {
  //     if (response.data.email) {
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //     }
  //   });
  // },
};
</script>
<style>
 .ownstylenav {
   background-color: #5A009D;
   color: #fff
 }
</style>