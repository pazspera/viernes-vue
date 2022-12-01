<template>
  <div class="col-6">
    <router-link :to="{ name: 'movieDetails', params: { id: nextMovie.id } }" class="btn btn__primary btn--next">Viernes Anterior</router-link>
  </div>
  <div class="col-6"></div>
</template>

<script>
export default {
  name: "MovieNavLastMovieComponent",
  props: {
    nextMovie: {},
    currentMovieArrayIndex: {
      type: Number,
      required: true,
    },
    lengthMovieArray: {
      type: Number,
      required: true,
    },
    isThisTheFirstMovie: {},
    isThisTheLastMovie: {},
  },
  mounted() {
    console.log("Values in MovieNavComponent");
    console.log("currentMovieArrayIndex", this.currentMovieArrayIndex);
    console.log("next movie", this.nextMovie);
    console.log("isThisTheLastMovie", this.isThisTheLastMovie);
    console.log("isThisTheFirstMovie", this.isThisTheFirstMovie);
  },
  methods: {
    /* checkFirstMovie() {
      if (this.currentMovieArrayIndex === this.lengthMovieArray - 1) {
        this.isThisTheFirstMovie = true;
      }
    },
    checkLastMovie() {
      if (this.currentMovieArrayIndex === 0) {
        this.isThisTheLastMovie = true;
      }
    }, */
  },
};
</script>

<style></style>
