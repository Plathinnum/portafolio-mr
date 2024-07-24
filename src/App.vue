<template>
  <div>
    <NavbarComp @change-animation="changeAnimation" />
    <component :is="currentAnimationComponent" />
    <router-view />
  </div>
</template>

<script>
import FallingComp from './components/FallingComponent.vue';
import RisingComp from './components/RisingComponent.vue';
import NavbarComp from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    FallingComp,
    RisingComp,
    NavbarComp,
  },
  data() {
    return {
      currentAnimation: 'falling',
    };
  },
  methods: {
    changeAnimation(newAnimation) {
      this.currentAnimation = newAnimation;
    },
  },
  computed: {
    currentAnimationComponent() {
      return this.currentAnimation === 'falling' ? FallingComp : RisingComp;
    },
  },
};
</script>

<style>
.falling {
  /* Estilos comunes para el fondo */
  position: relative;
  overflow: hidden;
}

.rising {
  /* Estilos comunes para el fondo */
  position: relative;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
}
</style>
