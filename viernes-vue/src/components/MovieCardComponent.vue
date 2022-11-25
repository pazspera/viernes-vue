<template>
  <div class="card card-pelicula col-12 col-lg-6">
    <img :="movie.img_card" class="card-img-top" />
    <div class="card-body card-pelicula__contenido">
      <h3 class="card-pelicula__titulo">
        <router-link :to="{ name: 'movieDetails', params: { id: movie.id } }" class="stretched-link">{{ movie.name }} ({{ movie.year }})</router-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCardComponent",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.card-pelicula {
  margin-bottom: 2rem;

  &__contenido {
    background-color: $black;
    padding: 0.75rem;
  }

  &__titulo {
    margin: 0;
    font-size: $size4;
  }

  &__titulo a {
    color: $white;
    text-decoration: none;
  }
}

.card-vertical {
  margin-bottom: 2rem;

  &__contenido {
    background-color: $black;
    padding: 0.75rem;
  }

  &__titulo {
    margin: 0;
    font-size: $size4;
  }

  &__titulo a {
    color: $white;
    text-decoration: none;
  }
}

// Override estilo cards Bootstrap
.card {
  border: none !important;
  border-radius: 0 !important;
  background-color: $light-gray;
}

.card-img,
.card-img-top {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
</style>
