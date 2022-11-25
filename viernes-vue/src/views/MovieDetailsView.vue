<template>
  <h1>MovieDetails Page</h1>
  <p>El id de la peli es: {{ id }}</p>
</template>

<script>
export default {
  name: "MovieDetailsView",
  props: ["id"],
  data() {
    return {
      // Guardamos el movie.id que viene del router
      // id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
