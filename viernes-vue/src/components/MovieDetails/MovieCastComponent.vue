<template>
  <section class="main-text" v-if="currentMovie">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="main__titulo">Elenco</h2>
        </div>
      </div>
      <div class="row" v-if="currentMovie">
        <figure v-for="actor in currentMovie.cast" :key="actor" class="pelicula__actor col-6 col-sm-4">
          <img :src="currentMovie.cast.img" :alt="currentMovie.cast.alt" />
          <figcaption class="pelicula__actor__name text-center">{{ currentMovie.cast.alt }}</figcaption>
        </figure>
      </div>
    </div>

    <ul v-if="currentMovie">
      <li v-for="image in currentMovie.cast_2" :key="image.alt">{{ image }}</li>
    </ul>

    <div v-if="currentMovie">
      <p>{{ currentMovie.cast_2[0] }}</p>
    </div>

    <!-- <ul v-if="currentMovie">
      <li v-for="actor in currentMovie.cast" :key="actor">{{ actor.img }} - {{ actor.actor }}</li>
    </ul> -->
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
