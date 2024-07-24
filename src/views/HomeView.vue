<template>
    <div class="container">
        <CapsuleComp />
    </div>
</template>

<script>
import CapsuleComp from '@/components/NavbarComponent.vue'

export default {
    name: 'HomeView',
    components: {
        CapsuleComp,
    },
};
</script>

<style scoped>
.container {
    position: relative;
    z-index: 10;
}
</style>