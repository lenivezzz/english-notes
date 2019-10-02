import Vue from 'vue';
import Vuex from 'vuex';
import irregular_verbs from "./modules/irregular_verbs";
import nonprogressive_verbs from "./modules/nonprogressive_verbs";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        irregular_verbs,
        nonprogressive_verbs
    }
})
