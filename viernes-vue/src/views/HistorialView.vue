<template>
  <!-- Hero -->
  <section class="hero-grid">
    <div class="hero-grid__img" :style="{ backgroundImage: `url(${heroBackgroundImg})` }"></div>
    <div class="hero-grid__cartel hero-grid__cartel--cartel-corto">
      <h1 class="hero-grid__titulo">Historial de películas</h1>
      <p class="hero-grid__texto-final">Todos los viernes todos.</p>
    </div>
  </section>

  <!-- Main -->
  <main class="main-content">
    <div class="main-text">
      <div class="container">
        <div class="row">
          <div v-for="year in years" :key="year" class="card card-pelicula card-vertical col-12 col-sm-6 col-lg-4">
            <div class="card-body card-vertical__contenido">
              <h2 class="card-vertical__titulo">
                <a href="#" class="stretched-link">{{ year.year }}</a>
              </h2>
            </div>
            <img :="year.imgYear">
          </div>
        </div>
      </div>
    </div>
  </main>
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
      years: [
        {
          year: "2020",
          imgYear: {
            src: "https://github.com/pazspera/viernes-img/blob/main/years/2020-brazil.jpg?raw=true",
            alt: "Poster Brazil",
          },
        },
        {
          year: "2021",
          imgYear: {
            src: "https://github.com/pazspera/viernes-img/blob/main/years/2021-mulholland.jpg?raw=true",
            alt: "Poster Mulholland Drive",
          },
        },
        {
          year: "2022",
          imgYear: {
            src: "https://github.com/pazspera/viernes-img/blob/main/years/2022-from-dusk.jpg?raw=true",
            alt: "Poster From Dusk Till Dawn",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
