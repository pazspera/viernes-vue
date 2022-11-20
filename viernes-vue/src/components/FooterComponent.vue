<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-11 text-start">
          <p>
            Sitio desarrollado con <font-awesome-icon :icon="['fas', 'fa-heart']" class="footer__heart" /> por
            <a href="https://github.com/pazspera" class="link-line" target="_blank" rel="noreferrer">Paz Spera</a>
          </p>
        </div>
        <div class="col-1 d-flex justify-content-end">
          <a href="https://discord.gg/sHEkMhF" target="_blank" rel="noreferrer"><font-awesome-icon :icon="['fab', 'fa-discord']" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.footer {
  background-color: $black;
  padding: 1.2rem 0;
  color: $white;
  font-family: $font-text;
}

.footer p,
.footer i {
  margin-bottom: 0;
}

.footer__heart {
  color: $primary;
}

.footer a {
  color: $white !important;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    color: $primary !important;
    transition: all 0.5s ease-in-out;
  }
}
</style>
