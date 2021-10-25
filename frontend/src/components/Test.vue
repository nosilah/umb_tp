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
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    axios
      .get(
        `http://127.0.0.1:3001/api/auth/${this.$route.params.id}/${this.$route.params.authkey}`
      )
      .then((res) => {
        console.log(res.data);
        if(res.data.accessToken){
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      });

    this.$router.push("/home");
  },
};
</script>
