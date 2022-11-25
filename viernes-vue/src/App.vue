<template>
  <NavBarComponent></NavBarComponent>
  <transition @before-enter="scrollTop" mode="out-in" appear>
    <router-view />
  </transition>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: { NavBarComponent, FooterComponent },
  methods: {
    scrollTop() {
      document.getElementById("app").scrollIntoView();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/main.scss";
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
