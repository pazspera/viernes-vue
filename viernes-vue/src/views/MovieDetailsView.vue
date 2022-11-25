<template>
  <MovieHeroComponent :currentMovie="currentMovie"></MovieHeroComponent>

  <main class="main-content">
    <div class="main-text">
      <div class="container">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="pelicula__sinopsis">
            <h2 class="main__titulo">Sinopsis</h2>
            <p class="pelicula__sinopsis__text" v-if="currentMovie">{{ currentMovie.sinopsis }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
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
