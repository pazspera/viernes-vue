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

      <!-- Trailer -->
      <section class="main-text">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="main__titulo">Trailer</h2>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-9">
              <div class="ratio ration-16x9">
                <YouTube :src="currentMovie.trailer_link" ref="youtube" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Images -->
      <section class="main-img">
        <div class="img-fluid col-12 col-md-6 colxxl-4 pelicula__img"></div>
        <div class="img-fluid col-12 col-md-6 colxxl-4 pelicula__img"></div>
        <div class="img-fluid d-none-d-xxl-block col-xxl-4 pelicula__img"></div>
      </section>
    </main>
  </div>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieHeroComponent from "@/components/MovieDetails/MovieHeroComponent.vue";
import MovieCastComponent from "@/components/MovieDetails/MovieCastComponent.vue";
import YouTube from "vue3-youtube";

export default {
  name: "MovieDetailsView",
  components: { MovieHeroComponent, MovieCastComponent, YouTube },
  props: ["id"],
  mounted() {
    this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);
    document.title = `${this.currentMovie.name} - Viernes`;
  },
  data() {
    return {
      currentMovie: null,
    };
  },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
};
</script>

<style></style>
