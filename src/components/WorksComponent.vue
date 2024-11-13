<template>
    <div class="container mt-4 text-white">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Algunos trabajos</h2>
            <h3>He aquí algunos de los trabajos que he hecho en un curso de frontend</h3>
        </div>
        <div class="row text-center">
            <div class="col-md-4 mb-3">
                <a href="https://plathinnum.github.io/quien-es-ese-pokemon/" target="_blank">
                    <div class="img-container">
                        <img :src="pokemon" alt="Proyecto '¿Quién es ese pokémon?'" class="img-fluid">
                    </div>
                </a>
                <div>Página con juego de adivinar los nombres de pokémon</div>
            </div>
            <div class="col-md-4 mb-3">
                <a href="https://plathinnum.github.io/animal-researching/" target="_blank">
                    <div class="img-container">
                        <img :src="animales" alt="Proyecto 'Investigación de animales'" class="img-fluid">
                    </div>
                </a>
                <div>Página para registrar animales en investigación</div>
            </div>
            <div class="col-md-4 mb-3">
                <a href="https://plathinnum.github.io/super-hero/" target="_blank">
                    <div class="img-container">
                        <img :src="heroes" alt="Proyecto 'Encuentra tu héroe'" class="img-fluid">
                    </div>
                </a>
                <div>Página para buscar un héroe respecto a un número</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'LanguagesComponent',
    data() {
        return {
            pokemon: require('@/assets/pokemon.jpeg'),
            animales: require('@/assets/animales.jpeg'),
            heroes: require('@/assets/heroes.jpeg'),
        }
    }
}
</script>

<style scoped>
.img-container {
    width: 100%;
    padding-top: 60%;
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
    object-position: 30% 50%;
}
</style>