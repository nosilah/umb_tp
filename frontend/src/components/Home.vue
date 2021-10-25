<template>
  <div>
    <h3 v-if="currentUser">hello, you are in your page</h3>
    <h3 v-if="!currentUser">you are not login</h3>
  </div>
</template>
<script>
export default {
  name: "home",
  props: ["user"],
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

//  destroyed(){
//     axios.get(API_URL + "/check_auth").then((response) => {
//       if (response.data.email) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }
//     });
//   },
};
</script>
<style></style>
