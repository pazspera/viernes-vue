<template>
  <div v-if="currentMovie">
    <MovieHeroComponent :currentMovie="currentMovie"></MovieHeroComponent>

    <main class="main-content">
      <!-- Sinopsis -->
      <section class="main-text">
        <div class="container">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="pelicula__sinopsis">
              <h2 class="main__titulo">Sinopsis</h2>
              <p class="pelicula__sinopsis__text" v-if="currentMovie">{{ currentMovie.sinopsis }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Cast -->
      <MovieCastComponent :currentMovie="currentMovie"></MovieCastComponent>
    </main>
  </div>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieHeroComponent from "@/components/MovieDetails/MovieHeroComponent.vue";
import MovieCastComponent from "@/components/MovieDetails/MovieCastComponent.vue";

export default {
  name: "MovieDetailsView",
  components: { MovieHeroComponent, MovieCastComponent },
  props: ["id"],
  mounted() {
    this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);
    document.title = `${this.currentMovie.name} - Viernes`
  },
  data() {
    return {
      currentMovie: null,
    };
  },
};
</script>

<style></style>
