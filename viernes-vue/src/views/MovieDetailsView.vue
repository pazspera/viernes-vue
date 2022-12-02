<template>
  <div v-if="currentMovie" @update-view="updateViewFromNav">
    <MovieHeroComponent :currentMovie="currentMovie"></MovieHeroComponent>

    <main class="main-content">
      <!-- Sinopsis -->
      <section class="main-text">
        <div class="container">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="pelicula__sinopsis">
              <h2 class="main__titulo">Sinopsis</h2>
              <p class="pelicula__sinopsis__texto" v-if="currentMovie">{{ currentMovie.sinopsis }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Cast -->
      <MovieCastComponent :currentMovie="currentMovie"></MovieCastComponent>

      <!-- Trailer -->
      <section class="main-text">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="main__titulo">Trailer</h2>
            </div>
          </div>
          <div class="row">
            <!-- Changes content depending on viewport Width -->
            <div v-if="viewportWidth < 768" class="col col-lg-9">
              <a :href="currentMovie.trailerLink" class="btn btn__primary" target="_blank" rel="noreferrer">Ver Trailer</a>
            </div>
            <div v-else class="col col-lg-9">
              <YouTube :src="currentMovie.trailerLink" ref="youtube" />
            </div>
          </div>
        </div>
      </section>

      <!-- Images -->
      <MovieImgComponent :currentMovie="currentMovie"></MovieImgComponent>

      <!-- Navigation between previous and next movies -->
      <section class="main-text">
        <div class="container">
          <!-- Last Movie Nav -->
          <div class="row" v-if="isThisTheLastMovie">
            <MovieNavLastMovieComponent
              :previousMovie="previousMovie"
              :currentMovieArrayIndex="currentMovieArrayIndex"
              :lengthMovieArray="lengthMovieArray"
              :isThisTheFirstMovie="isThisTheFirstMovie"
              :isThisTheLastMovie="isThisTheLastMovie"
            ></MovieNavLastMovieComponent>
          </div>
          <!-- All other movies -->
          <div class="row" v-else>
            <MovieNavComponent :previousMovie="previousMovie" :nextMovie="nextMovie" :currentMovieArrayIndex="currentMovieArrayIndex" :lengthMovieArray="lengthMovieArray"></MovieNavComponent>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import allMoviesJSON from "@/assets/data/info_movies1.json";
import MovieHeroComponent from "@/components/MovieDetails/MovieHeroComponent.vue";
import MovieCastComponent from "@/components/MovieDetails/MovieCastComponent.vue";
import MovieImgComponent from "@/components/MovieDetails/MovieImgComponent.vue";
import MovieNavComponent from "@/components/MovieDetails/MovieNavComponent.vue";
import MovieNavLastMovieComponent from "@/components/MovieDetails/MovieNavLastMovieComponent.vue";
import YouTube from "vue3-youtube";

export default {
  name: "MovieDetailsView",
  components: { MovieHeroComponent, MovieCastComponent, YouTube, MovieImgComponent, MovieNavComponent, MovieNavLastMovieComponent },
  props: ["id"],
  mounted() {
    // On mounted, it loops through the entire array of movies
    // and adds a property with the index in array,
    // that way that info is available on all movies to move throught the movie details
    allMoviesJSON.forEach((movie) => {
      movie.ArrayIndex = allMoviesJSON.indexOf(movie);
    });
    // Saving the length of allMovies on a variable
    // makes it possible to check for the last movie
    this.lengthMovieArray = allMoviesJSON.length;

    // ALL OF THIS SHOULD BE ON A METHOD I CAN CALL
    // THAT WAY, WHEN WE CHANGE MOVIES, ALL THE INFO OF THE
    // PREVIOUS AND NEXT MOVIES ARE UPDATED
    // IT CAN ALSO BE CALLED WHEN THE COMPONENT IS FIRST MOUNTED
    this.getCurrentMovieInfo();
    console.log("Values in MovieNavComponent");
    console.log("currentMovieArrayIndex", this.currentMovieArrayIndex);
    console.log("next movie", this.nextMovie);
    console.log("isThisTheLastMovie", this.isThisTheLastMovie);
    console.log("isThisTheFirstMovie", this.isThisTheFirstMovie);
  },
  beforeUpdate() {
    this.getCurrentMovieInfo();
  },
  data() {
    return {
      viewportWidth: null,
      lengthMovieArray: null,
      // Current movie
      currentMovie: null,
      currentMovieArrayIndex: null,
      isThisTheFirstMovie: false,
      isThisTheLastMovie: false,
      // Previous movie
      previousArrayIndex: null,
      previousMovieID: null,
      previousMovie: null,
      // Next Movie
      nextArrayIndex: null,
      nextMovieID: null,
      nextMovie: null,
    };
  },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
    updateViewFromNav(previousMovieArrayIndex) {
      console.log(`The id value I just received form the navLastMovie is ${previousMovieArrayIndex}`);
      // I'm receiving the new ArrayIndex and change the data value so
      // once the component is updated, the navigation changes
      this.currentMovieArrayIndex = previousMovieArrayIndex;
      // And I call the function to trigger the update on isThisTheFirstMovie and
      // on thisIsTheLastMovie
      this.getCurrentMovieInfo();
      console.log("new values");
      console.log(`isThisTheLastMovie: ${this.isThisTheLastMovie}`);
      console.log(`isThisTheFirstMovie: ${this.isThisTheFirstMovie}`);
    },
    // Gets all info on currentMovie. Called on mounted and when
    // the navigation between movies is used
    getCurrentMovieInfo() {
      this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);

      this.currentMovieArrayIndex = this.currentMovie.ArrayIndex;

      // Checks if the currentMovieArrayIndex is the first or last
      // then assigns previousArrayIndex and nextArrayIndex based on if it is or not
      if (this.currentMovieArrayIndex === 0) {
        // console.log("this movie is the last movie seen");
        // Gets index of surrounding movies
        this.nextArrayIndex = null;
        this.previousArrayIndex = this.currentMovieArrayIndex + 1;
        // Updates isThisTheLastMovie on data
        this.isThisTheLastMovie = true;
      } else if (this.currentMovieArrayIndex === this.lengthMovieArray - 1) {
        // console.log("this movie is the first movie seen");
        // Gets index of surrounding movies
        this.previousArrayIndex = this.currentMovieArrayIndex - 1;
        this.nextArrayIndex = null;
        // Updates isThisTheFirstMovie on data
        this.isThisTheFirstMovie = true;
      } else {
        // console.log(`this movie's index is ${this.currentMovieArrayIndex}`);
        // Gets index of surrounding movies
        this.previousArrayIndex = this.currentMovieArrayIndex - 1;
        this.nextArrayIndex = this.currentMovieArrayIndex + 1;
      }

      /* console.log(`current index: ${this.currentMovieArrayIndex}`);
    console.log(`previous index: ${this.previousArrayIndex}`);
    console.log(`next index: ${this.nextArrayIndex}`);

    console.log("current movie", this.currentMovie); */

      // THERE'S AN ERROR HERE THAT'S CAUSING CARRIE TO FAIL

      // Saves previousMovieID and nextMovieID to data
      // Acá verifica si previousArrayIndex y nextArrayIndex son números
      // Si no hay previous o next (primera y última peli), estas variables
      // quedan en null. Al estar en null, cuando trata de usarlas para
      // recuperar la peli, rompen todo
      if (typeof this.previousArrayIndex === "number") {
        this.previousMovieID = allMoviesJSON[this.previousArrayIndex].id;
        // this.currentMovie = allMoviesJSON.find((movie) => movie.id === this.id);
        this.previousMovie = allMoviesJSON.find((movie) => movie.id === this.previousMovieID);
        // console.log("previous movie", this.previousMovieID);
        // console.log("previous movie", this.previousMovie);
      }
      if (typeof this.nextArrayIndex === "number") {
        this.nextMovieID = allMoviesJSON[this.nextArrayIndex].id;
        this.nextMovie = allMoviesJSON.find((movie) => movie.id === this.nextMovieID);
        // console.log("next movie", this.nextMovieID);
        // console.log("next movie", this.nextMovie);
      }

      document.title = `${this.currentMovie.name} - Viernes`;

      // Listens to changes on viewport width to display trailer
      // Video if it's over 768px, btn if under
      addEventListener("resize", () => {
        this.viewportWidth = window.innerWidth;
      });
    },
    // These methods change the currentMovie in data to refresh page
    // when navigation between movies is used
    goToPreviousMovie() {
      this.currentMovie = this.previousMovie;
      this.currentMovieArrayIndex = this.previousArrayIndex;
      this.getCurrentMovieInfo();
    },
    goToNextMovie() {
      this.currentMovie = this.nextMovie;
      this.currentMovieArrayIndex = this.nextArrayIndex;
      this.getCurrentMovieInfo();
    },
  },
};
</script>

<style></style>
