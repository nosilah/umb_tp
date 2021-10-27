import AuthService from '../services/auth.service';

// AuthService.getAuthUser();
const user =JSON.parse(localStorage.getItem('user')) ;
const initialState = user
  ? {  loggedIn: true , user} : {loggedIn: false , user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    getAuthUser(state){ return state.user}
  },
  actions: {
    login({ commit }, {id, authkey}) {
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
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
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
    }
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
    }
  }
};
