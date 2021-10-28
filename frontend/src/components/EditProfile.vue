<template>
  <div class="col-md-12">
    <div class="card card-container ">
      <Form @submit="updateProfile" :validation-schema="schema">
        <div class="form-group">
          <label for="name">Name</label>
          <Field name="name" type="text" class="form-control" />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <Field name="email" type="email" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-outline-success btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Update</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapGetters } from "vuex";
import axios from "axios";


export default {
  name: "EditProfile",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Enter the email address!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      name: yup
        .string("name must be only string")
        .required("Etner your name")
        .min(3, "Must be minimum 20 characters!")
        .max(10, "Must be maximum 10 characters!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    ...mapGetters(["auth/getAuthUser"]),

    getAuthUser() {
      return this["auth/getAuthUser"];
    },
  },

  methods: {
    updateProfile(user) {
      axios
        .post(
          "api/user/update-profile",
          {
            id: this.getAuthUser.id,
            name: user.name,
            email: user.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.getAuthUser.accessToken,
            },
          }
        )
        .then((res) => console.log(res.data))
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 50px #5a009d;
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>
