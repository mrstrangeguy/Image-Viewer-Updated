<template>
  <div class="navbar">
    <div class="navbar__logo">Image Viewer</div>
    <ul class="navbar__links">
      <RouterLink class="navbar__links__link" to="/albums"
        ><li class="navbar__links__link__line">albums</li></RouterLink
      >
      <RouterLink class="navbar__links__link" to="/aboutus"
        ><li class="navbar__links__link__line">about</li></RouterLink
      >
      <RouterLink class="navbar__links__link" to="/contactus"
        ><li class="navbar__links__link__line">contact us</li></RouterLink
      >
    </ul>
    <i class="fa fa-bars navbar__icon"></i>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 52px;

  &__logo {
    font-family: "Oswald", sans-serif;
    font-size: 32px;
    line-height: 32px;
    padding-bottom: 4px;
  }

  &__links {
    display: block;
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0%;
    padding: 0%;

    &__link {
      text-decoration: none;
      color: black;

      &__line {
        background-color: lightgray;
        display: block;
        padding: 6px 15px;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      &__line:hover {
        background-color: black;
        color: white;
      }
    }
  }

  &__icon {
    display: none;
  }
}

//media query
@media screen and (max-width: 590px) {
  .navbar {
    &__logo {
      font-size: 28px;
    }
    &__links {
      display: none;
    }

    &__icon {
      display: block;
    }
  }
}

@media screen and (max-width: 425px) {
  .navbar {
    &__logo {
      font-size: 24px;
    }
  }
}
</style>
