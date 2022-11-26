<template>
  <section class="main-img">
    <div class="row g-0">
      <div class="img-fluid col-12 col-md-6 col-xxl-4 pelicula__img">
        <img :src="currentMovie.img_row[0].img" :alt="currentMovie.img_row[0].alt" />
      </div>
      <div class="img-fluid col-12 col-md-6 col-xxl-4 pelicula__img">
        <img :src="currentMovie.img_row[1].img" :alt="currentMovie.img_row[1].alt" />
      </div>
      <div class="img-fluid d-none d-xxl-block col-xxl-4 pelicula__img">
        <img :src="currentMovie.img_row[2].img" :alt="currentMovie.img_row[2].alt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieImgComponent",
  props: {
    currentMovie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
