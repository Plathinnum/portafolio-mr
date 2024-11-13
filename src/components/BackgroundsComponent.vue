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



<style></style>