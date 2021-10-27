<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Profile this authinticated user
      </h3>
    </header>
    
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    {{getAuthUser}}
    <!-- <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul> -->
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  name: 'Profile',
  computed: {
    // getUser(){
    //   return this.$store.getters.auth.getAuthUser
    // },

    ...mapGetters(['auth/getAuthUser']),
    currentUser() {
      console.log(this['auth/getAuthUser']);
      return this['auth/getAuthUser'];
    },
    // getuser(){
    //   return this.getAuthUser;
    // }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }

  }
};
</script>