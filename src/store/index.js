import Vue from "vue";
import Vuex from "vuex";
import { characterModule } from "./modules/characters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    characterList: characterModule,
  },
});
