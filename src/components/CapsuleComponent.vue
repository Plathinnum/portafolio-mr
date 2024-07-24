<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="rotating-container col-10" :class="{ 'rotate': isRotated }">
            <div class="rotating-div" :class="{ 'rotate': isRotated }"></div>
        </div>
        <button class="btn btn-primary mt-3" @click="rotate">Rotar
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'CapsuleComp',
    setup() {
        const isRotated = ref(false);

        const rotate = () => {
            isRotated.value = !isRotated.value;
        };

        return {
            isRotated,
            rotate,
        };
    },
}
</script>

<style scoped>
.d-flex {
    height: 100vh;
    overflow: hidden;
}

.rotating-container {
    perspective: 1000px;
    display: inline-block;
    height: 80vh;
}

.rotating-div {
    width: 100%;
    height: 100%;
    border: 4px solid #007bff;
    border-radius: 15px;
    /* Bordes personalizados */
    border-top-left-radius: 0;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 0;
    /* Edición */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    /* Sin relleno */
    transition: transform 1s;
    transform-style: preserve-3d;
}

.rotating-container.rotate .rotating-div {
    transform: rotateY(360deg);
}

button {
    /* position: absolute; */
    bottom: 20px;
}
</style>