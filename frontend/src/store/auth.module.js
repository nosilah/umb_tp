import AuthService from '../services/auth.service';
// import axios from 'axios';
// AuthService.getAuthUser();
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
  loggedIn: true,
  user
} : {
  loggedIn: false,
  user: null
};

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    getAuthUser(state) {
      const user = {
        name: state.user['name'],
        email: state.user['email'],
        id: state.user['id'],
        accessToken: state.user['accessToken']
      }
      console.log(user);

      return user
    }
  },
  actions: {
    login({
      commit
    }, {
      id,
      authkey
    }) {
      return AuthService.login(id, authkey).then(
        user => {
          commit('loginSuccess');
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({
      commit
    }) {
      AuthService.logout();
      commit('logout');
    },
    register({
      commit
    }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    // updateProfile() {

    //   return 

    //   // axios
    //   //   .post(
    //   //     "api/user/update-profile", {
    //   //       id: this.getters.getAuthUser.id,
    //   //       name: user.name,
    //   //       email: user.email,
    //   //     }, {
    //   //       headers: {
    //   //         "Content-Type": "application/json",
    //   //         Authorization: this.getters.getAuthUser.accessToken,
    //   //       },
    //   //     }
    //   //   )
    //   //   .then((res) => {
    //   //     commit('updateProfileSuccess')
    //   //     return Promise.resolve(res)
    //   //   })

    // }
  },
  mutations: {
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.loggedIn = false;
    },
    // updateProfileSuccess(state, user) {
    //   state.user = user;
    // },
    // updateProfileFailure(state, user) { 
    //   state.user = user;
    // },

  }
};