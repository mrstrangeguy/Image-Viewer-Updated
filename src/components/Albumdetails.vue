<template>
  <Backhome message="Back" url="/albums" />
  <Loadingwarning v-if="isLoading" />

  <div
    class="container album-container"
    v-if="!isLoading && currentAlbumData?.url"
  >
    <div class="album-container__img__container">
      <img
        :src="currentAlbumData?.url"
        alt="album image"
        class="album-container__img__container__img"
      />
    </div>
    <div class="album-container__description">
      <div class="album-container__description__id">
        <h5 class="album-container__description__id__tag">
           {{ `ID:${currentAlbumData?.id}` }}
        </h5>
      </div>
      <div class="album-container__description__title">
        <h3 class="album-container__description__title__tag">
          {{ currentAlbumData?.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { albumType } from "../types/albumType";
import { useAlbumsStore } from "../stores/albumStorage";
import Loadingwarning from "./Loadingwarning.vue";
import Backhome from "./Backhome.vue";

const albumStore = useAlbumsStore();

const currentAlbumData = ref<albumType>();
const route = useRoute();
const isLoading = ref<boolean>(true);

//onMounted
onMounted(async () => {
  const id  = Number(route?.params?.id);

  currentAlbumData.value = albumStore.albums.find(
    (elem: albumType) => elem.id === id
  );
  if (currentAlbumData.value) isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.album-container {
  width: fit-content;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
  gap: 25px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  &__img__container {
    display: flex;
    justify-content: start;
    min-width: 600px;
    min-height: 600px;
    aspect-ratio: 1/1;

    &__img {
      display: block;
      aspect-ratio: 1/1;
    }
  }

  &__description {
    width: 100%;
    &__id {
      margin-bottom: 20px;
      &__tag {
        font-size: 20px;
        margin: 0%;
      }
    }

    &__title {
      &__tag {
        font-size: 36px;
        margin: 0px;
        line-height: 36px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .album-container {
    &__img__container {
      min-width: 300px;
      min-height: 300px;
      &__img {
        aspect-ratio: 300/300;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 810px) {
  .album-container {
    width: 100%;
    gap: 18px;
    flex-direction: column;
    &__img__container {
      width: 100%;
      min-width: 100%;
      min-height: 300px;
      background-color: lightblue;
      &__img {
        aspect-ratio: 1/1;
        width: 100%;
      }
    }

    &__description {
      &__id {
        margin-bottom: 12px;
      }
      &__title {
        &__tag {
          font-size: 28px;
          margin: 0px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
