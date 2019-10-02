import httpData from '../services/http/http-data';

export default {
    getIrregularVerbs(cb) {
        httpData.get('/irregular-verbs.json').then((response) => cb(response.data));
    },
    getNonprogressiveVerbs(cb) {
        httpData.get('/nonprogressive-verbs.json').then((response) => cb(response.data));
    }
}
