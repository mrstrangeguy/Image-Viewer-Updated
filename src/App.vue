<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <!-- <Home/> -->
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80vw;

  background-color: transparent;
  margin: auto;
  margin-top: 4%;
  margin-bottom: 4%;
}

//media query
@media screen and (max-width: 700px) {
  .container {
    width: 95vw;
  }
}
</style>
