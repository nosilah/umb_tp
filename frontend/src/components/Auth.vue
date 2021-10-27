<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <hr />
    <h1>{{ $route.params.authkey }}</h1>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque
    minus. Eum laborum minus asperiores ex doloribus omnis odio doloremque,
    ipsum autem corporis cum voluptatem perspiciatis possimus maxime, recusandae
    illo! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
    maiores.

    <router-link to="/profile" class="nav-link">
      <font-awesome-icon icon="user" />
      Profile
    </router-link>
  </div>
</template>
<script>
// import axios from "axios";

// import { mapActions } from "vuex";
export default {
  // data() {
  //   return {
  //     massage: "",
  //   };
  // },
  // methods: mapActions(["login"]),
  async created() {
    await this.$store
      .dispatch("auth/login", {
        id: this.$route.params.id,
        authkey: this.$route.params.authkey,
      })
      .then((res) => {
        if (res.accessToken) {
          localStorage.setItem("user", JSON.stringify(res));
        } else {
           alert('sorry, your login link is falid')
          // this.massage = "your login link is falid";
          console.log("your login link is falid");
        }
      })
      .then(() => window.location.reload())
      .then(this.$router.push("/profile"));
  },
};
</script>
