import Vue from 'vue';
import VueRouter from 'vue-router';
import IrregularVerbs from "../components/irregular_verbs/IrregularVerbs";

Vue.use(VueRouter);

const routes = [
    { path: '/irregular-verbs', component: IrregularVerbs}
];

export default new VueRouter({
    routes
});
