import { createStore } from 'vuex';

const store = createStore({
    state: {
        currentAnimation: 'falling',
    },
    mutations: {
        SET_ANIMATION(state, animation) {
            state.currentAnimation = animation;
        },
    },
    actions: {
        changeAnimation({ commit }, newAnimation) {
            commit('SET_ANIMATION', newAnimation);
        },
    },
    getters: {
        currentAnimation: state => state.currentAnimation,
    },
});

export default store;
