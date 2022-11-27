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
            <!-- Changes content depending on viewport Width -->
            <div v-if="viewportWidth < 768" class="col col-lg-9">
              <a :href="currentMovie.trailerLink" class="btn btn__primary" target="_blank" rel="noreferrer">Ver Trailer</a>
            </div>
            <div v-else class="col col-lg-9">
              <YouTube :src="currentMovie.trailerLink" ref="youtube" />
            </div>
          </div>
        </div>
      </section>

      <!-- Images -->
      <MovieImgComponent :currentMovie="currentMovie"></MovieImgComponent>
    </main>
  </div>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieHeroComponent from "@/components/MovieDetails/MovieHeroComponent.vue";
import MovieCastComponent from "@/components/MovieDetails/MovieCastComponent.vue";
import MovieImgComponent from "@/components/MovieDetails/MovieImgComponent.vue";
import YouTube from "vue3-youtube";

export default {
  name: "MovieDetailsView",
  components: { MovieHeroComponent, MovieCastComponent, YouTube, MovieImgComponent },
  props: ["id"],
  mounted() {
    this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);
    document.title = `${this.currentMovie.name} - Viernes`;

    // Listens to changes on viewport width to display trailer
    // Video if it's over 768px, btn if under
    addEventListener("resize", () => {
      this.viewportWidth = window.innerWidth;
    });
  },
  data() {
    return {
      currentMovie: null,
      viewportWidth: null,
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
