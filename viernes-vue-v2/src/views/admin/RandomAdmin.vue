<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-12">
        <h1>Random admin</h1>
      </div>
      <form class="col-6 offset-3 py-3" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Trailer</label>
          <input type="text" class="form-control" v-model="trailer" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Image</label>
          <input type="text" class="form-control" v-model="image" required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config.js";

export default {
  name: "AdminView",
  setup() {
    const name = ref("");
    const trailer = ref("");
    const image = ref("");

    const handleSubmit = async () => {
      const randomMovie = {
        name: name.value,
        trailer: trailer.value,
        image: image.value,
      };

      const res = await projectFirestore.collection("random-movies").add(randomMovie);
      console.log(res);

      name.value = "";
      trailer.value = "";
      image.value = "";
    };

    return { name, trailer, image, handleSubmit };
  },
};
</script>

<style></style>
