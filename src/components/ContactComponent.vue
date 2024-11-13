<template>
    <div class="container mt-4 text-white">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Contacto</h2>
            <h3>Ingresa para estar conectados</h3>
        </div>
        <div class="row">
            <div class="col text-center mb-3">
                <a href="https://www.linkedin.com/in/mariorojom/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-xl" style="color: #0077b5;"></i>
                </a>
                <div>LinkedIn</div>
            </div>
            <div class="col text-center mb-3">
                <a href="https://github.com/Plathinnum" target="_blank">
                    <i class="fa-brands fa-square-github fa-xl" style="color: #6e5494;"></i>
                </a>
                <div>GitHub</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactComponent',

}
</script>

<style scoped>
i {
    font-size: 3rem;
}

div>div {
    margin-top: 0.5rem;
}
</style>