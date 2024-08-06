<template>
    <div>
        <component :is="currentAnimationComponent" />
    </div>
</template>

<script>
import FallingComponent from './backgrounds/FallingComponent.vue';
import RisingComponent from './backgrounds/RisingComponent.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'BackgroundsComponent',
    components: {
        FallingComponent,
        RisingComponent,
    },
    computed: {
        ...mapGetters(['currentAnimation']),
        currentAnimationComponent() {
            return this.currentAnimation === 'falling' ? FallingComponent : RisingComponent;
        },
    },
};
</script>



<style>
/* .falling { */
/* Estilos comunes para el fondo */
/* position: relative;
    overflow: hidden;
}

.rising { */
/* Estilos comunes para el fondo */
/* position: relative;
    overflow: hidden;
} */

/* * {
    margin: 0;
    padding: 0;
} */
</style>