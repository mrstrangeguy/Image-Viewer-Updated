<template>
  <Backhome message="Back" :url="'/albums'" />
  <Loadingwarning v-if="isLoading" />

  <div class="container album-container" v-if="!isLoading && currentAlbumData?.url">
    <div class="album-container__img__container">
      <img
        :src="currentAlbumData?.url"
        class="album-container__img__container__img"
      />
    </div>
    <div class="album-container__description">
      <div class="album-container__description__id">
        <h5 class="album-container__description__id__tag">
          Id: {{ currentAlbumData?.id }}
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
import Loadingwarning from "./Loadingwarning.vue";
import Backhome from "./Backhome.vue";
import { useAlbumsStore } from "../stores/albumStorage";

const albumStore = useAlbumsStore();

const currentAlbumData = ref<albumType>();
const route = useRoute();
const isLoading = ref<boolean>(true);

//onMounted
onMounted(async () => {
  const { id } = route.params;

  currentAlbumData.value = albumStore.albums.find(
    (elem: albumType) => `${elem.id}` === id
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

  &__description {
    width: 100%;
    &__id {
      margin-bottom: 20px;
      &__tag {
        font-size: 20px;
        margin: 0%;
      }
    }

    &__img__container {
      display: flex;
      justify-content: start;

      &__img {
        display: block;
        aspect-ratio: 1/1;
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
      &__img {
        aspect-ratio: 300/300;
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
