import Vue from "vue";
import Vuex from "vuex";
import navigation from "./modules/Navigation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
  },
});
