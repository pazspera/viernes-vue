<template>
  <div class="col-6">
    <router-link :to="{ name: 'movieDetails', params: { id: previousMovie.id } }" @click="updateMovieInfo(previousMovie.ArrayIndex)" class="btn btn__primary btn--next">Viernes Anterior</router-link>
  </div>
  <div class="col-6"></div>
</template>

<script>
export default {
  name: "MovieNavLastMovieComponent",
  props: {
    previousMovie: {},
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
    console.log("previous", this.previousMovie);
    console.log("isThisTheLastMovie", this.isThisTheLastMovie);
    console.log("isThisTheFirstMovie", this.isThisTheFirstMovie);
  },
  methods: {
    updateMovieInfo(previousMovieArrayIndex) {
      console.log(`this is Previous Movie ID: ${previousMovieArrayIndex}`);
      // We need to emit back to the parent (MovieDetailsView) that the new
      // currentMovieArrayIndex changed and that isThisTheFirstMovie and
      // isThisTheLastMovie also changed
      this.$emit("updateView", previousMovieArrayIndex);
    },
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
