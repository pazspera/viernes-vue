<template>
  <section v-if="currentMovie" class="hero-grid" id="current_movie_hero">
    <div class="hero-grid__img" :style="{ backgroundImage: `url(${currentMovie.background_img})`}"></div>
    <div class="hero-grid__cartel">
      <h1 class="hero-grid__titulo">{{ currentMovie.name }} ({{ currentMovie.year }})</h1>
      <p class="hero-grid__texto">Dirección: {{ currentMovie.director }}</p>
      <p class="hero-grid__texto">{{ currentMovie.duration }}</p>
      <p class="hero-grid__texto-final">
        Elección de <a href="../picks_geor.html" class="hero__pick-link link-line">{{ currentMovie.pick_category }}</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieHeroComponent",
  props: {
    currentMovie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
