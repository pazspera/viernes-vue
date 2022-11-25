<template>
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
    };
  },
};
</script>

<style></style>
