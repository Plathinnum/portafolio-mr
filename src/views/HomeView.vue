<template>
    <div class="container mt-4 text-white">
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="fw-bold">Mario Rojo</h2>
                <h3>Analista programador y estudiante de nuevas experiencias</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div
                class="col-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end text-center text-md-end order-2 order-md-1">
                <p class="mb-0">
                    Nacido en Santiago, Chile.
                    <br>Siempre he creído que el aprendizaje es una aventura continua sin fin. Mi
                    pasión por el lenguaje en general, el arte y los juegos me impulsa a explorar nuevas fronteras en
                    cada aspecto de mi vida.
                    <br><br>
                    Soy un entusiasta de la programación que busca constantemente maneras innovadoras de resolver
                    problemas y crear soluciones. A través de mi trabajo y proyectos, quiero demostrarme a mí mismo
                    que la programación no solo es una herramienta poderosa para construir aplicaciones y sistemas, sino
                    también una forma de expresión artística y un camino hacia la mejora continua. Mi objetivo es
                    combinar
                    creatividad y técnica para desarrollar soluciones que no solo funcionen bien, sino que también
                    inspiren
                    y deleiten a quienes las usan.
                </p>
            </div>
            <div
                class="col-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start order-1 order-md-2">
                <div class="img-container">
                    <img :src="profile" :class="photoClass" alt="Foto perfil">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HomeView',
    data() {
        return {
            profile: require('@/assets/profile1.jpeg'),
        }
    },
    computed: {
        ...mapGetters(['currentAnimation']),
        photoClass() {
            return this.currentAnimation === 'falling' ? 'blue-filter' : 'red-filter';
        },
    },
    components: {
    }
};
</script>

<style scoped>
.img-container {
    width: 70%;
    padding-top: 70%;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
}

.img-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    transform: scale(1.3);
}

.blue-filter {
    filter: hue-rotate(100deg);
}

.red-filter {
    filter: hue-rotate(-120deg);
}
</style>