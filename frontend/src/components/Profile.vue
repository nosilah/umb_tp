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
    <p v-if="user.name">
      <strong>Name:</strong>
      {{ user.name }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ user.email }}
    </p>

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
        <button type="button" class="btn btn-danger" @click="deleteProfile" disabled>
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
  data() {
    const user = {
      name: "",
      email: "",
    };
    return {
      // loading: false,
      user,
    };
  },
  computed: {
    ...mapGetters(["auth/getAuthUser"]),
    currentUser() {
      // console.log(this["auth/getAuthUser"]);
      return this["auth/getAuthUser"];
    },
  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  created() {
    this.user.name = this.currentUser.name,
    this.user.email = this.currentUser.email
  },
  // watch: {
  //   $route: this.currentUser
  // },

  methods: {
    getUser(){
      // this.loading = true;
      return this.currentUser;
    },
    editProfile() {
      return this.$router.push("/edit-profile");
    },
    deleteProfile() {
      let agreement = window.confirm(
        "Are you sure you want to delete your profile?"
      );
      if (agreement) {
        return window.alert("you deleted profile");
      } else {
        return window.alert("you are maladits");
      }
    },
  },
};
</script>
