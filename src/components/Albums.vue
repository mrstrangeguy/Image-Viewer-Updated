<template>
  <Backhome />
  <Loadingwarning v-if="isLoading" />

  <div class="albums__grid" v-if="albumsData.length && !isLoading">
    <div v-for="elem in albumsData" :key="elem.id" class="albums__grid__card">
      <div class="albums__grid__card__section-1">
        <img
          :src="elem?.thumbnailUrl"
          class="albums_grid__card__section-1__img"
        />
        <div class="albums__grid__card__section-1__title">
          {{ elem?.title }}
        </div>
      </div>
      <div class="albums__grid__card__section-2">
        <RouterLink
          class="albums__grid__card__section-2__link"
          :to="`/albums/${elem.id}`"
        >
          <button class="albums__grid__card__section-2__link__view-btn">
            View
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

import { albumType } from "../types/albumType";
import Backhome from "./Backhome.vue";
import Loadingwarning from "./Loadingwarning.vue";

const albumsData = ref<albumType[]>([]);
const isLoading = ref<boolean>(false);

//onMounted
onMounted(async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=20"
  );
  const { data } = response;

  if (data) albumsData.value = data;
  console.log(data);
});
</script>

<style lang="scss" scoped>
.albums__grid {
  // padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  width: 100%;
  gap: 15px;

  &__card {
    padding: 15px;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    &__section-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      &__title {
        text-align: center;
        min-height: 30px;
      }
    }

    &__section-2 {
      &__link {
        color: white;
        text-decoration: none;

        &__view-btn {
          display: block;
          width: 100%;
          border: none;
          background-color: black;
          color: white;
          font-weight: 500;
          border-radius: 20px;
          padding: 6px 0px;
          cursor: pointer;
        }
      }
    }
  }
}

.albums__grid::-webkit-scrollbar {
  display: none;
}

//media query
@media screen and (max-width: 1300px) {
  .albums__grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 1074px) {
  .albums__grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 770px) {
  .albums__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 480px) {
  .albums__grid {
    grid-template-columns: 1fr;
  }
}
</style>
