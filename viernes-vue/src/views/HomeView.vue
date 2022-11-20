<template>
  <div class="home">
    <h1>Home view</h1>
    <main class="main-content">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="main-text">
              <p>
                <strong>Es viernes y hay película en La casa del Craizy</strong>. Abrimos Discord y entramos a la salita de cine. Allí nos esperan tres opciones, tres potenciales viernes y una
                votación. Si bien esto no es y nunca fue una democracia, el consenso popular decidirá cuál va a ser la comedia de esta semana.
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
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  mounted() {
    document.title = "Viernes";
  },
};
</script>
