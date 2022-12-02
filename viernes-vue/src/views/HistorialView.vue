<template>
  <!-- Hero -->
  <section class="hero-grid">
    <div class="hero-grid__img" :style="{ backgroundImage: `url(${heroBackgroundImg})` }"></div>
    <div class="hero-grid__cartel hero-grid__cartel--cartel-corto">
      <h1 class="hero-grid__titulo">Historial de películas</h1>
      <p class="hero-grid__texto-final">Todos los viernes todos.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HistorialView",
  mounted() {
    document.title = "Historial de películas - Viernes";
  },
  data() {
    return {
      heroBackgroundImg: "https://github.com/pazspera/viernes-img/blob/main/hero/hero_historial_peliculas.jpg?raw=true",
    };
  },
};
</script>

<style></style>
