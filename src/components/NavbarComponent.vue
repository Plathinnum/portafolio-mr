<template>
    <nav class="navbar navbar-expand-lg navbar-transparent fw-white d-flex justify-content-between">
        <div class="navbar-nav">
            <router-link to="/" @click="triggerGlitch" class="btn nav-link text-white" :class="getNavBtn('/')"
                aria-current="page">Yo</router-link>
            <router-link to="/languages" @click="triggerGlitch" class="btn nav-link text-white"
                :class="getNavBtn('/languages')">
                Lenguajes</router-link>
            <router-link to="/works" @click="triggerGlitch" class="btn nav-link text-white"
                :class="getNavBtn('/works')">Trabajos</router-link>
            <router-link to="/contact" @click="triggerGlitch" class="btn nav-link text-white"
                :class="getNavBtn('/contact')">Contacto</router-link>
        </div>
        <div class="navbar-nav">
            <button :class="animationBtn('falling')" class="btn me-bg-2" @click="changeAnimation('falling');
            triggerGlitch()">
                ❄️
            </button>
            <button :class="animationBtn('rising')" class="btn" @click="changeAnimation('rising');
            triggerGlitch()">
                🔥
            </button>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NavbarComponent',
    computed: {
        ...mapGetters(['currentAnimation']),
        navigationBtn() {
            return this.currentAnimation === 'falling' ? 'btn-outline-snow' : 'btn-outline-fire';
        },
    },
    methods: {
        ...mapActions(['changeAnimation']),
        triggerGlitch() {
            this.$emit('glitch-card')
        },
        animationBtn(animationType) {
            return {
                'btn-outline-snow': this.currentAnimation === animationType && animationType === 'falling',
                'btn-outline-fire': this.currentAnimation === animationType && animationType === 'rising',
                active: this.currentAnimation === animationType,
            };
        },
        getNavBtn(route) {
            return {
                active: this.$route.path === route,
                [this.navigationBtn]: this.$route.path === route,
            }
        }
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