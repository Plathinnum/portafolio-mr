<template>
  <BackgroundsComponent :currentAnimation="currentAnimation" />
  <div class="d-flex justify-content-center">
    <div class="col-10">
      <NavbarComponent @change-animation="changeAnimation" @glitch-card="triggerCapsuleGlitch"
        :currentAnimation="currentAnimation" class="mb-5" />
      <CapsuleComponent ref="capsuleComponent" :currentAnimation="currentAnimation">
        <router-view />
      </CapsuleComponent>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarComponent from './components/NavbarComponent.vue';
import BackgroundsComponent from './components/BackgroundsComponent.vue';
import CapsuleComponent from './components/CapsuleComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    BackgroundsComponent,
    CapsuleComponent,
  },
  computed: {
    ...mapState(['currentAnimation']),
  },
  methods: {
    ...mapActions(['changeAnimation']),
    triggerCapsuleGlitch() {
      console.log('Glitch activado en CapsuleComponent');
      this.$refs.capsuleComponent.triggerGlitch();
    }
  },
};
</script>

<style>
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
}
</style>
