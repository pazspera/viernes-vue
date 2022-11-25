<template>
  <MovieHeroComponent :currentMovie="currentMovie"></MovieHeroComponent>
  <h1>MovieDetails Page</h1>
  <p>El id de la peli es: {{ id }}</p>
  <p v-if="currentMovie">El nombre de la peli es: {{ currentMovie.name }} -- {{ currentMovie.year }}</p>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieHeroComponent from "@/components/MovieDetails/MovieHeroComponent.vue";

export default {
  name: "MovieDetailsView",
  components: { MovieHeroComponent },
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
