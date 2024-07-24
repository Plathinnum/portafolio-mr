<template>
    <div class="background">
        <div v-for="pixel in pixels" :key="pixel.id" class="pixel"
            :style="{ left: pixel.left + 'px', animationDelay: pixel.delay + 's', animationDuration: '6s' }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'RisingComp',
    data() {
        return {
            pixels: [],
        };
    },
    mounted() {
        this.createPixels();
    },
    methods: {
        createPixels() {
            const numberOfPixels = 100;
            for (let i = 0; i < numberOfPixels; i++) {
                this.pixels.push({
                    id: i,
                    left: Math.random() * window.innerWidth,
                    delay: Math.random() * 6,
                });
            }
        },
    },
};
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    overflow: hidden;
    z-index: -1;
}

.pixel {
    position: absolute;
    bottom: -20px;
    width: 5px;
    height: 5px;
    background-color: #e74c3c;
    animation: rise 5s linear infinite;
    box-shadow: 0 0 5px 2px rgba(231, 76, 60, 0.5);
}

@keyframes rise {
    0% {
        bottom: -10px;
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        bottom: 100vh;
        opacity: 0;
    }
}
</style>