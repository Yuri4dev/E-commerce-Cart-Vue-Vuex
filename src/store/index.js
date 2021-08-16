import { createStore } from "vuex";

export default createStore({
  state: {
    bag: [],
  },
  mutations: {
    SET_BAG(state, payload) {
      state.bag.push(payload);
    },
  },
  actions: {
    dataProduct(context, payload) {
      context.commit("SET_BAG", payload);
    },
  },
  modules: {},
});
