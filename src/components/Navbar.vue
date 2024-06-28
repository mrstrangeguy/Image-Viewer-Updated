<template>
  <div class="navbar">
    <div
      :class="`navbar__tophead-section ${
        isTopHeadVisible && 'display-tophead'
      }`"
    >
      <div class="container navbar__tophead-section__container">
        <ul class="navbar__tophead-section__container__list">
          <li class="navbar__tophead-section__container__list__line">
            <RouterLink
              to="/albums"
              :class="`navbar__tophead-section__container__list__line__link ${
                route.fullPath === '/albums' && 'selected-route-colour '
              }`"
              @click="hideMobileNavVisibility"
              >albums</RouterLink
            >
          </li>
          <li class="navbar__tophead-section__container__list__line">
            <RouterLink
              to="/contactus"
              :class="`navbar__tophead-section__container__list__line__link ${
                route.fullPath === '/contactus' && 'selected-route-colour '
              }`"
              @click="hideMobileNavVisibility"
              >contact us</RouterLink
            >
          </li>
          <li class="navbar__tophead-section__container__list__line">
            <RouterLink
              to="/aboutus"
              :class="`navbar__tophead-section__container__list__line__link ${
                route.fullPath === '/aboutus' && 'selected-route-colour '
              }`"
              @click="hideMobileNavVisibility"
              >about us</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar__bottomhead-section">
      <div class="container navbar__bottomhead-section__container">
        <div class="navbar__bottomhead-section__container__title-logo">
          <img
            src="../images/titlelogo.png"
            class="navbar__bottomhead-section__container__title-logo__image"
            alt="navbar-bottom head image"
          />
        </div>
        <i
          class="fa-solid fa-bars navbar__bottomhead-section__container__bars-icon"
          @click="isTopHeadVisible = !isTopHeadVisible"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const isTopHeadVisible = ref<boolean>(false);

const route = useRoute();

//functions
const hideMobileNavVisibility = () => {
  console.log(window.innerWidth)
  isTopHeadVisible.value = false;
}

</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  margin-bottom: 20px;
  position: sticky;
  top: 0;

  &__tophead-section {
    width: 100%;
    border-top: 3px solid rgb(241, 169, 58);
    padding: 0px 15px;
    background-color: rgb(61, 61, 61);

    &__container {
      &__list {
        margin: 0 auto;
        list-style: none;
        display: flex;
        padding: 0;

        &__line {
          &__link {
            text-decoration: none;
            display: block;
            padding: 10px 15px;
            text-transform: uppercase;
            font-size: 13px;
            font-family: Montreal;
            font-weight: 400;
            line-height: 19.5px;
            color: white;
          }
        }
      }
    }
  }

  &__bottomhead-section {
    &__container {
      padding: 10px 0px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__title-logo {
        &__image {
          display: block;
          aspect-ratio: 20/15;
          width: 100px;
          height: 75px;
          border-radius: 50px;
          border: 1px solid lightgray;
        }
      }

      &__bars-icon {
        display: none;
      }
    }
  }
}

.selected-route-colour {
  color: rgb(241, 169, 58);
}

@media screen and (max-width:1800px) {

  .navbar {

  &__bottomhead-section {
      &__container {
        padding: 10px 15px;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .navbar {
    &__tophead-section {
      visibility: hidden;
      height: 0;
      opacity: 0;
      transition: height 0.5s, opacity 0.5s linear;
      &__container {
        &__list {
          display: flex;
          flex-direction: column;
          padding-left: 0px;
          &__line {
            width: 100%;
            text-align: left;
          }
        }
      }
    }

    &__bottomhead-section {
      &__container {
        &__bars-icon {
          display: block;
          margin-right: 20px;
        }
      }
    }
  }

  .display-tophead {
    visibility: visible;
    height: 121.5px;
    opacity: 1;
  }
}
</style>
