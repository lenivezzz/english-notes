import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../components/homepage/Homepage';
import IrregularVerbs from '../components/irregular_verbs/IrregularVerbs';
import NonprogressiveVerbs from '../components/nonprogressive_verbs/NonprogressiveVerbs';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Homepage,
        props: {
            logo_src: require('./../assets/images/logo-dark.svg')
        }
    },
    {path: '/irregular-verbs', component: IrregularVerbs},
    {path: '/nonprogressive-verbs', component: NonprogressiveVerbs}
];

export default new VueRouter({
    routes
});
