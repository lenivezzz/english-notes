import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../components/homepage/Homepage';
import IrregularVerbs from '../components/irregular_verbs/IrregularVerbs';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Homepage,
        props: {
            logo_src: require('./../assets/images/logo-dark.svg')
        }
    },
    { path: '/irregular-verbs', component: IrregularVerbs}
];

export default new VueRouter({
    routes
});
