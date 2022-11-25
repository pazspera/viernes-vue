<template>
  <section class="main-text" v-if="currentMovie">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main__titulo">Elenco</h2>
        </div>
      </div>
      <div class="row">
        <figure class="pelicula__actor col-6 col-sm-4">
          <img src="" alt="" />
          <figcaption class="pelicula__actor__name text-center"></figcaption>
        </figure>
      </div>
    </div>

    <ul v-if="currentMovie">
      <li v-for="actor in currentMovie.cast" :key="actor">{{ actor }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MovieCastComponent",
  props: {
    currentMovie: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.currentMovie);
  },
};
</script>

<style></style>
