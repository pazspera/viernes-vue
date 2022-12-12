import { reactive } from "vue";

export const store = reactive({
  currentMovieArrayIndex: null,
  isThisTheFirstMovie: false,
  isThisTheLastMovie: false,
});
