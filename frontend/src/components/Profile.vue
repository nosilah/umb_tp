<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Welcome to your profile
      </h3>
    </header>

    <!-- <p>
      <strong>Id:</strong>
      {{ currentUser.id }}
    </p> -->
    <p>
      <strong>Name:</strong>
      {{ currentUser.name }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    {{ getAuthUser }}
    <!-- <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul> -->
    <hr />
    <div class="row">
      <div class="col-sm-2">
        <button type="button" class="btn btn-info" @click="editProfile">
          Edit
        </button>
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-danger" 
        @click="deleteProfile" >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters(["auth/getAuthUser"]),
    currentUser() {
      console.log(this["auth/getAuthUser"]);
      return this["auth/getAuthUser"];
    },

  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },

  methods: {
    editProfile() {
      return this.$router.push("/edit-profile");
    },
      deleteProfile() {
      let agreement = window.confirm('Are you sure you want to delete your profile?');
     if(agreement){
      return window.alert('you deleted profile')
     }else{
     return window.alert('you are maladits')
     }
    }
  
  }
};
</script>
