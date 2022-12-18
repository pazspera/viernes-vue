<template>
  <h1>Pelis por año</h1>
  <p>El año es: {{ currentYear }}</p>
</template>

<script>
export default {
  name: "YearView",
  props: {
    year: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(`year prop: ${this.year}`);
    console.log(`current year: ${this.currentYear}`);
  },
  data() {
    return {
      currentYear: null,
    };
  },
};
</script>

<style></style>
