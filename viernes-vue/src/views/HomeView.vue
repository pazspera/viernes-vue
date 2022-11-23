<template>
  <!-- Home hero -->
  <section id="hero_index">
    <div class="hero">
      <div class="hero__cartel">
        <p class="hero__leyenda">El viernes pasado vimos</p>
        <h3 class="hero__titulo">{{ allMovies[0].name }}</h3>
        <!-- <h3 class="hero__titulo">aaaaaaaaaaaahhhhhhhhhhh</h3> -->
      </div>
    </div>
  </section>

  <!-- Main content -->
  <main class="main-content">
    <div class="container">
      <!-- Main text -->
      <div class="row">
        <div class="col">
          <div class="main-text">
            <p>
              <strong>Es viernes y hay película en La casa del Craizy</strong>. Abrimos Discord y entramos a la salita de cine. Allí nos esperan tres opciones, tres potenciales viernes y una votación.
              Si bien esto no es y nunca fue una democracia, el consenso popular decidirá cuál va a ser la comedia de esta semana.
            </p>
            <p>
              Lo que comenzó como juntadas virtuales de pandemia ahora ya tiene una existencia propia. Películas que se sumergen en el inconsciente, un laberinto de espejos en plano secuencia.
              Historias que sacuden el cerebro y sí, tal vez ocasionalmente lo dañen un poco pero ese es el encanto de las comedias de los viernes.
            </p>
            <p>
              Bienvenides a los Viernes,
              <strong>nuestra pequeña distopía cinematográfica de pandemia</strong>. Les esperamos en la salita, en cualquier momento el Craizy pasa el primer trailer y ya podemos empezar.
            </p>
          </div>
        </div>
      </div>

      <!-- Últimos viernes -->
      <div class="row">
        <div class="col">
          <section class="ultimas-peliculas">
            <h1 class="main__titulo">Los últimos viernes</h1>
            <div class="row grid-peliculas">
              <MovieCardComponent v-for="movie in last6Movies" :key="movie.name" :movie="movie" />
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Test v-for all movies -->
    <!-- <ul>
      <li v-for="movie in allMovies" :key="movie.id">{{ movie.name }}</li>
    </ul> -->

    <!-- Test v-for last 6 movies -->
    <!-- <ul>
      <li v-for="movie in last6Movies" :key="movie.id">{{ movie.name }}</li>
    </ul> -->
  </main>
</template>

<script>
// @ is an alias to /src
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieCardComponent from "@/components/MovieCardComponent.vue";

export default {
  name: "HomeView",
  components: {
    MovieCardComponent,
  },
  mounted() {
    document.title = "Viernes";

    // Saves last 6 movies
    this.last6Movies = allMoviesJSON.slice(0, 6);
  },
  data() {
    return {
      allMovies: allMoviesJSON,
      last6Movies: [],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

#hero_index {
  background-color: red;
}

.grid-peliculas {
  padding: $padding-inner 0;
}
</style>
