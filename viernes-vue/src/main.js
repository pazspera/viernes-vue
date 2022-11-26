// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Import VuePlyr
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

// Import vue3-youtube
import YouTube from "vue3-youtube";

/* add icons to the library */
library.add(faDiscord, faHeart);

createApp(App).use(router).use(VuePlyr).use(YouTube).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
