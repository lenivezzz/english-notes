import Vue from 'vue';
import Vuex from 'vuex';
import irregular_verbs from "./modules/irregular_verbs";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        irregular_verbs
    }
})
