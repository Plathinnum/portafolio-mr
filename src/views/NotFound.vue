<template>
    <div class="not-found text-center text-white">
        <h1 class="display-1">404</h1>
        <p class="lead">Lo que ingresaste no existe en esta página. <br> Loh vimoh ✌️</p>
        <router-link to="/" class="btn text-white" :class="navigationBtn" @click="triggerGlitch">Volver al
            inicio</router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "NotFound",
    computed: {
        ...mapGetters(['currentAnimation']),
        navigationBtn() {
            return this.currentAnimation === 'falling' ? 'btn-outline-snow' : 'btn-outline-fire';
        },
    },
    methods: {
        ...mapActions(['changeAnimation']),
        triggerGlitch() {
            console.log(']Esto sí llega a glitch card, notfound');
            this.$emit('glitch-card');
        },
    },
};
</script>

<style scoped>
.btn-outline-snow {
    box-shadow: 0 0 5px 2px rgba(52, 152, 219, 0.5);
}

.btn-outline-fire {
    box-shadow: 0 0 5px 2px rgba(231, 76, 60, 0.5);
}
</style>