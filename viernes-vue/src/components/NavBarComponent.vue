<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">VieRnes</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'historialPeliculas' }">Historial de películas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'opcionesAleatorias' }">Opciones aleatorias</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.navbar {
  background-color: $black;

  &-brand {
    font-size: $size4;
    font-family: $font-logo;
    padding: 0;
    font-weight: 400;
  }

  .nav-link {
    font-size: $size6;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-family: $font-text;
  }
}

// Override color a los nav-links
.navbar-dark,
.navbar-brand,
.navbar-nav,
.nav-link {
  color: $white !important;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    color: $primary !important;
    transition: all 0.5s ease-in-out;
  }
}

// Override color del navbar-toggler
.navbar-dark,
.navbar-toggler {
  color: rgba($white, 0.3);

  &:hover,
  &:focus {
    color: rgba($white, 0.3);
  }
}

/* 
// Color para mostrar página activa en navbar
.active {
    font-weight: 700;
    color: $white !important;
}
*/
</style>
