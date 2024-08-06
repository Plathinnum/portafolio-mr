<template>
    <nav class="navbar navbar-expand-lg navbar-transparent fw-white d-flex justify-content-between">
        <div class="navbar-nav">
            <router-link to="/" @click="triggerGlitch" class="nav-link active text-white"
                aria-current="page">Yo</router-link>
            <router-link to="/languages" @click="triggerGlitch" class="nav-link text-white">Lenguajes</router-link>
            <router-link to="/works" @click="triggerGlitch" class="nav-link text-white">Trabajos</router-link>
            <router-link to="/contact" @click="triggerGlitch" class="nav-link text-white">Contacto</router-link>
        </div>
        <div class="navbar-nav">
            <button :class="buttonClass('falling')" class="btn me-2"
                @click="changeAnimation('falling'); triggerGlitch()">❄️</button>
            <button :class="buttonClass('rising')" class="btn"
                @click="changeAnimation('rising'); triggerGlitch()">🔥</button>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavbarComponent',
    computed: {
        ...mapGetters(['currentAnimation']),
    },
    methods: {
        ...mapActions(['changeAnimation']),
        triggerGlitch() {
            this.$emit('glitch-card')
        },
        buttonClass(animationType) {
            return {
                'btn-outline-snow': this.currentAnimation === animationType && animationType === 'falling',
                'btn-outline-fire': this.currentAnimation === animationType && animationType === 'rising',
                active: this.currentAnimation === animationType,
            };
        },
    },
}
</script>

<style scoped>
.btn-outline-snow {
    box-shadow: 0 0 5px 2px rgba(52, 152, 219, 0.5);
}

.btn-outline-fire {
    box-shadow: 0 0 5px 2px rgba(231, 76, 60, 0.5);
}

.btn.active {
    background-color: rgba(0.0, 0.0, 0.0, 0.7);
}
</style>