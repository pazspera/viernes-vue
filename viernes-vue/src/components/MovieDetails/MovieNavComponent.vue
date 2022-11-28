<template>
  <section class="main-text">
    <div class="container">
      <!-- Last movie -->
      <div v-if="isThisTheLastMovie" class="row">
        <div class="col-6">
          <router-link :to="{ name: 'movieDetails', params: { id: nextMovie.id } }" @click="forceReloadComponent" class="btn btn__primary btn--next">Viernes Anterior</router-link>
        </div>
        <div class="col-6"></div>
      </div>

      <!-- First movie -->
      <div v-else-if="isThisTheFirstMovie" class="row">
        <div class="col-6"></div>
        <div class="col-6 d-flex flex-row-reverse">
          <router-link :to="{ name: 'movieDetails', params: { id: previousMovie.id } }" @click="forceReloadComponent" class="btn btn--previous btn__primary">Viernes Siguiente</router-link>
        </div>
      </div>

      <!-- All other movies -->
      <div v-else class="row">
        <div class="col-6">
          <router-link :to="{ name: 'movieDetails', params: { id: previousMovie.id } }" @click="forceReloadComponent" class="btn btn--previous btn__primary">Viernes Anterior</router-link>
        </div>
        <div class="col-6 d-flex flex-row-reverse">
          <router-link :to="{ name: 'movieDetails', params: { id: nextMovie.id } }" @click="forceReloadComponent" class="btn btn__primary btn--next">Viernes Siguiente</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieNavComponent",
  props: {
    previousMovie: {
      type: Object,
      required: true,
    },
    nextMovie: {
      type: Object,
      required: true,
    },
    currentMovieArrayIndex: {
      type: Number,
      required: true,
    },
    lengthMovieArray: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    console.log("Values in MovieNavComponent");
    console.log("currentMovieArrayIndex", this.currentMovieArrayIndex);
    console.log("previous movie", this.previousMovie);
    console.log("next movie", this.nextMovie);
    console.log("isThisTheLastMovie", this.isThisTheLastMovie);
    console.log("isThisTheFirstMovie", this.isThisTheFirstMovie);
  },
  data() {
    return {
      isThisTheFirstMovie: false,
      isThisTheLastMovie: false,
    };
  },
  methods: {
    forceReloadComponent() {
      this.$forceUpdate();
    },
    checkFirstMovie() {
      if (this.currentMovieArrayIndex === this.lengthMovieArray - 1) {
        this.isThisTheFirstMovie = true;
      }
    },
    checkLastMovie() {
      if (this.currentMovieArrayIndex === 0) {
        this.isThisTheLastMovie = true;
      }
    },
  },
};
</script>

<style></style>
