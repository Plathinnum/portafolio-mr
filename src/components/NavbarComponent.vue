<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="navbar-nav">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            <router-link class="nav-link">Productos</router-link>
            <router-link class="nav-link">Contacto</router-link>
            <router-link class="nav-link"></router-link>
        </div>
        <div>
            <button class="btn btn-outline-primary me-2" @click="changeAnimation('falling')">Caer</button>
            <button class="btn btn-outline-primary" @click="changeAnimation('rising')">Subir</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComp',
    methods: {
        changeAnimation(animationType) {
            this.$emit('change-animation', animationType);
        },
    },
}
</script>

<style></style>