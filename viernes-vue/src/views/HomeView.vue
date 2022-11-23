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
    </div>

    <!-- Test v-for -->
    <ul>
      <li v-for="movie in allMovies" :key="movie.id">{{ movie.name }}</li>
    </ul>
  </main>
</template>

<script>
// @ is an alias to /src
import allMoviesJSON from "@/assets/data/allMovies.json";

export default {
  name: "HomeView",
  mounted() {
    document.title = "Viernes";
    // Asigna allMovies al data
    // let allMoviesFromJSON = allMovies.allMovies;
    // Object.values(allMoviesFromJSON).forEach((entry) => this.allMovies.push(entry));
    // this.allMovies = Object.values(allMovies.allMovies);
    // this.allMovies = allMovies.allMovies;
    // Recupera las últimas 6 películas

    // let allMovies2 = Object.values(allMovies.allMovies);

    // console.log(allMovies2);
    // console.log(typeof allMovies2);

    // console.log(this.allMovies);
    // console.log(typeof this.allMovies);

    // console.log(typeof this.allMovies);
    // console.log(this.allMovies);
    // let lastMovieTemp = this.allMovies[0];
    // Object.entries(lastMovieTemp).forEach((item) => this.lastMovie.push(item));
    // console.log(this.lastMovie);

    // let objectTest = Object.values(allMoviesJSON);
    // console.log(objectTest);
    // console.log("objectTest is" + typeof objectTest);
    // console.log(objectTest[1]);

    let allMoviesSaved = allMoviesJSON.allMovies;
    console.log(allMoviesSaved);

    let allMoviesOrdered = allMoviesSaved.slice().sort(function (a, b) {
      // date_seen tiene formato isodate para poder guardarse en JSON
      // Estas variables convierten el isodate a date para poder ordernar el array por fecha
      let c = new Date(a.date_seen);
      let d = new Date(b.date_seen);
      return d - c;
    });

    console.log(allMoviesOrdered);

    // Error
    // this.allMovies = allMoviesOrdered;
    // Error
    // this.allMovies = allMoviesSaved;
    // error
    // this.allMovies = allMoviesJSON.allMovies;

    // this.allMovies = allMoviesOrdered;

    /* let test = allMoviesJSON.allMovies;

    test.array.forEach((movie) => {
      this.allMovies.push(movie);
    });
    console.log(typeof this.allMovies);
    console.log(this.allMovies); */

    // console.log(typeof this.allMovies);
    /* this.allMovies.forEach((movie) => {
      console.log(movie);
      console.log(typeof movie);
    }); */

    // console.log(this.allMovies[0].id);
  },
  data() {
    return {
      allMovies: allMoviesJSON.allMovies,
      last6Movies: [],
      lastMovie: [],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

#hero_index {
  background-color: red;
}
</style>
