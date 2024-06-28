<template>
  <Backhome message="Back To home" :url="'/'" />
  <Loadingwarning v-if="isLoading" />
  <div class="container">
    <div class="albums__grid" v-if="albumStore.albums && !isLoading">
      <div class="card-container" v-for="elem in albumStore.albums">
        <div class="card-container__card">
          <div class="card-container__card__image-wrapper">
            <img
              :src="elem?.thumbnailUrl"
              alt=""
              class="card-container__card__image-wrapper__image"
            />
          </div>

          <div class="card-container__card__section2">
            <div class="card-container__card__section2__content">
              <p class="card-container__card__section2__content__paragraph">
                {{ elem?.title }}
              </p>
            </div>
            <div class="card-container__card__section2__btn-wrapper">
              <button class="card-container__card__section2__btn-wrapper__btn">
                <RouterLink
                  class="card-container__card__section2__btn-wrapper__btn__link"
                  :to="`albums/${elem.id}`"
                  >view image</RouterLink
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

import { useAlbumsStore } from "../stores/albumStorage";
import Backhome from "./Backhome.vue";
import Loadingwarning from "./Loadingwarning.vue";

const albumStore = useAlbumsStore();
const isLoading = ref<boolean>(true);
const fetchCount = ref<number>(20);

//functions
const handleInfiniteScroll = () => {
  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const bottomScrollLevel = difference - document.documentElement.scrollTop;

  if (bottomScrollLevel === 0) {
    fetchCount.value += 20;
    fetchData();
  }
};

const fetchData = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=${fetchCount.value}`
  );
  const { data } = response;

  if (data) {
    albumStore.albums = data;
    isLoading.value = false;

    window.addEventListener("scroll", handleInfiniteScroll);
  }

  return () => {
    window.removeEventListener("scroll", handleInfiniteScroll);
  };
};

//onMounted
onMounted(async () => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.albums__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  width: 100%;
  grid-column-gap: 15px;
}

.card-container {
  // padding: 0px 15px;
  margin-bottom: 1.5em;
  &__card {
    padding: 15px;
    background-color: white;

    height: 100%;

    display: flex;
    flex-direction: column;

    &__image-wrapper {
      &__image {
        display: block;
        width: 100%;
        aspect-ratio: 392/152;
        object-fit: cover;
      }
    }

    &__section2 {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &__content {
        &__paragraph {
          font-family: Montreal;
        }
      }

      &__btn-wrapper {
        text-align: center;

        &__btn {
          text-transform: uppercase;
          font-family: Montreal2;
          border: 0;
          background: none;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;

          &__link {
            color: rgb(219, 131, 30);
            text-decoration: underline;
            text-underline-offset: 7px;
            text-decoration-thickness: 2px;
            text-align: center;
          }
        }
      }
    }
  }
}

//media query
@media screen and (max-width: 1024px) {
  .albums__grid {
    grid-template-columns: 1fr 1fr;
  }

  .card-container {
    &__card {
      &__section2 {
        &__content {
          &__paragraph {
            text-align: center;
          }
        }
        &__btn-wrapper {
          &__btn {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .albums__grid {
    grid-template-columns: 1fr;
  }

  .card-container {
    &__card {
      &__section2 {
        &__btn-wrapper {
          &__btn {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
