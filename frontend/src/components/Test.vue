<template>
  <div>
    <!-- <h1>{{ $route.params.id }}</h1>
    <hr /> -->
    <h1>{{ $route.params.authkey }}</h1>

    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, maiores.
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       loading: false,
//       error: null,
//     };
//   },

//   beforeRouteEnter() {

//        this.$store.dispatch("auth/login").then(
//         () => {
//           // this.$router.push("/profile");
//           // this.$router.push("massage");
//           // alert('check you email')
//           console.log("it is login");
//         },
//         (error) => {
//           this.loading = false;
//           this.message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//         }
//       );

//       this.$router.push("massage");
//   },

//   watch: {
//     // при изменениях маршрута запрашиваем данные снова
//     $route: "fetchData",
//   },
//   methods: {
//     fetchData() {
//       //   this.error = this.post = null
//       //   this.loading = true
//       // замените `getPost` используемым методом получения данных / доступа к API
//       //   getPost(this.$route.params.id, (err, post) => {
//       //     this.loading = false
//       //     if (err) {
//       //       this.error = err.toString()
//       //     } else {
//       //       this.post = post
//       //     }
//       //   })

//       this.$store.dispatch("auth/login").then(
//         () => {
//           // this.$router.push("/profile");
//           // this.$router.push("massage");
//           // alert('check you email')
//           console.log("it is login");
//         },
//         (error) => {
//           this.loading = false;
//           this.message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//         }
//       );

//       this.$router.push("massage");
//     },
//   },
// };
// </script>
