<template>
  <h1>MovieDetails Page</h1>
  <p>El id de la peli es: {{ id }}</p>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";

export default {
  name: "MovieDetailsView",
  props: ["id"],
  mounted() {
    this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);
    console.log(this.currentMovie);
  },
  data() {
    return {
      currentMovie: null,
    };
  },
};
</script>

<style></style>
