import api from '../../api/api';

export const state = {
    items: []
};

export const getters = {
    items: (state) => state.items,
};

export const mutations = {
    setItems: (state, items) => {
        state.items = items;
    }
};

export const actions = {
    getItems({commit}) {
        api.getNonprogressiveVerbs(items => commit('setItems', items));
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
