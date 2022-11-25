<template>
  <section class="main-text" v-if="currentMovie">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main__titulo">Elenco</h2>
        </div>
      </div>
      <div class="row" v-if="currentMovie">
        <figure v-for="(actor, index) in currentMovie.cast" :key="index" class="pelicula__actor col-6 col-sm-4">
          <img :src="currentMovie.cast[index].img" :alt="currentMovie.cast[index].actor" />
          <figcaption class="pelicula__actor__name text-center">{{ currentMovie.cast[index].actor }}</figcaption>
        </figure>
      </div>
    </div>
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
};
</script>

<style></style>
