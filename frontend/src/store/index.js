import { createStore } from "vuex";
import { auth } from "./auth.module";
// import { userInfo } from "./userInfo.module";


const store = createStore({
  modules: {
    auth,
    // userInfo,
  },
});

export default store;
