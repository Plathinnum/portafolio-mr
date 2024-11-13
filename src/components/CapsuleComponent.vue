<template>
    <div class="glitch-container" :class="{ 'glitch': isGlitching }">
        <div class="glitch-div" :style="{ borderColor: capsule.border, boxShadow: capsule.shadow }"
            :class="animationClass">
            <slot />
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    name: 'CapsuleComponent',
    props: ['currentAnimation'],
    setup(props) {
        const isGlitching = ref(false);

        const triggerGlitch = () => {
            isGlitching.value = true;
            setTimeout(() => {
                isGlitching.value = false;
            }, 500);
        };


        const capsule = computed(() => {
            switch (props.currentAnimation) {
                case 'falling':
                    return {
                        shadow: '0 0 5px 2px rgba(52, 152, 219, 0.5)',
                    };
                case 'rising':
                    return {
                        shadow: '0 0 5px 2px rgba(231, 76, 60, 0.5)',
                    };
                default:
                    return {
                        shadow: '0 0 5px 2px rgba(231, 76, 60, 0.5)'
                    }
            }
        });

        const animationClass = computed(() => {
            return props.currentAnimation === 'falling'
                ? 'glitch-falling'
                : 'glitch-rising';
        });

        return {
            isGlitching,
            triggerGlitch,
            capsule,
            animationClass,
        };
    },
}
</script>

<style scoped>
.glitch-container {
    display: inline-block;
    height: 80vh;
    width: 100%;
}

.glitch-div {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: box-shadow 0.3s;
    position: relative;
    overflow: hidden;
    margin-bottom: 40px;
}

.glitch-container.glitch .glitch-falling {
    animation: glitch-falling 0.5s;
}

.glitch-container.glitch .glitch-rising {
    animation: glitch-rising 0.5s;
}

@keyframes glitch-falling {
    0% {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    20% {
        box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);
    }

    40% {
        box-shadow: 0 0 15px rgba(52, 152, 219, 0.5);
    }

    60% {
        box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
    }

    80% {
        box-shadow: 0 0 25px rgba(52, 152, 219, 0.7);
    }

    100% {
        box-shadow: 0 0 30px rgba(52, 152, 219, 0.5);
    }
}

@keyframes glitch-rising {
    0% {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    20% {
        box-shadow: 0 0 10px rgba(231, 76, 60, 0.7);
    }

    40% {
        box-shadow: 0 0 15px rgba(231, 76, 60, 0.5);
    }

    60% {
        box-shadow: 0 0 20px rgba(231, 76, 60, 0.3);
    }

    80% {
        box-shadow: 0 0 25px rgba(231, 76, 60, 0.7);
    }

    100% {
        box-shadow: 0 0 30px rgba(231, 76, 60, 0.5);
    }
}

@media (max-width: 768px) {
    .glitch-div {
        height: auto;
        /* Ajustar la altura en pantallas pequeñas */
        padding: 20px;
        /* Añadir espacio interno */
    }
}
</style>
