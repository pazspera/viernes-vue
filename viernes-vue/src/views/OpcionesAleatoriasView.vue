<template>
  <!-- Hero -->
  <section class="hero-grid">
    <div class="hero-grid__img" :style="{ backgroundImage: `url(${heroBackgroundImg})` }"></div>
    <div class="hero-grid__cartel hero-grid__cartel--cartel-corto">
      <h1 class="hero-grid__titulo">Historial de películas</h1>
      <p class="hero-grid__texto-final">Todos los viernes todos.</p>
    </div>
  </section>

  <br />
  <h1>Opciones aleatorias view</h1>
  <ul>
    <li v-for="movie in allRandomMovies" :key="movie.id">{{ movie.name }}</li>
  </ul>
</template>

<script>
import randomMoviesJSON from "@/assets/data/random_movies.json";

export default {
  name: "OpcionesAleatoriasView",
  mounted() {
    document.title = "Opciones aleatorias - Viernes";

    // Ordena alfabéticamente randomMoviesJSON
    randomMoviesJSON.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    this.allRandomMovies = randomMoviesJSON;
  },
  data() {
    return {
      allRandomMovies: null,
      array: [],
      heroBackgroundImg: "https://github.com/pazspera/viernes-img/blob/main/hero/hero_seleccion_peliculas.jpg?raw=true",
    };
  },
};
</script>

<style></style>
