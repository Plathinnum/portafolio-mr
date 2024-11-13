import { createStore } from 'vuex';

const getRandomAnimation = () => {
    const animations = ['falling', 'rising'];
    return animations[Math.floor(Math.random() * animations.length)];
};

const store = createStore({
    state: {
        currentAnimation: getRandomAnimation(), // Inicializa con una animación aleatoria
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
