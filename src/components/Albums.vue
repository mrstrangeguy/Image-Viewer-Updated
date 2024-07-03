<template>
  <Backhome message="Back To home" :url="'/'" />
  <Loadingwarning v-if="!albumStore.albums.length && isLoading" />
  <div class="container">
    <div
      class="albums__grid"
      id="album-grid"
      v-if="albumStore.albums"
      ref="albumsGrid"
    >
      <div
        class="card-container"
        v-for="elem in albumStore.albums"
        ref="currentView"
        :id="`${albumStore.selectedAlbumId === elem.id && 'selected-album'}`"
      >
        <div class="card-container__card">
          <div class="card-container__card__image-wrapper">
            <img
              :src="elem?.thumbnailUrl"
              alt="album thumbnail"
              class="card-container__card__image-wrapper__image"
            />
          </div>

          <div class="card-details-section">
            <div class="card-details-section__title">{{ elem?.title }}</div>

            <button
              class="card-details-section__button"
              @click="routeToDetailsPage(elem.id)"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="infinite-scroll-indicator"
      class="infinite-scroll-indicator"
      v-if="isinfiniteScrollTrue"
      ref="infiniteScrollBufferRef"
    >
      <img
        src="../gifs/loading.gif"
        class="infinite-scroll__img"
        alt="loading gif"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

import { useAlbumsStore } from "../stores/albumStorage";
import Backhome from "./Backhome.vue";
import Loadingwarning from "./Loadingwarning.vue";

//constant values
const COUNT_INCREMENT_RATE = 20;
const BOTTOM_SCROLL_LIMIT = 0;

const albumStore = useAlbumsStore();
const isLoading = ref<boolean>(true);
const route = useRoute();
const router = useRouter();
const currentView = ref(null);
const infiniteScrollBufferRef = ref<any>(null);
const sample = ref();
const albumsGrid = ref();

//functions
const handleInfiniteScroll = () => {
  if (route.fullPath !== "/albums") return;
  let bufferDivHeight = infiniteScrollBufferRef.value?.clientHeight || 0;

  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const bottomScrollLevel =
    difference - document.documentElement.scrollTop - bufferDivHeight;

  if (bottomScrollLevel <= BOTTOM_SCROLL_LIMIT) {
    albumStore.fetchCount += COUNT_INCREMENT_RATE;
    fetchData();
  }
};

const fetchData = async () => {
  isLoading.value = true;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=${albumStore.fetchCount}`
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

const routeToDetailsPage = (id: number) => {
  router.push({
    path: `/albums/${id}`,
  });

  albumStore.selectedAlbumId = id;
};

const scrollToSection = () => {
  if (!sample.value) return;
  sample.value.scrollIntoView({ behaviour: "smooth" });
};

//onMounted
onMounted(() => {
  scrollToSection();
  !albumStore.albums.length ? fetchData() : (isLoading.value = false);
});

//computed
const isinfiniteScrollTrue = computed(() => {
  return albumStore.albums.length && isLoading;
});

//watch
watch(albumStore.albums, () => {
  if (albumStore.albums.length) sample.value.scrollIntoView();
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
  margin-bottom: 1.5em;
  &__card {
    padding: 15px;
    border-radius: 5px;
    height: 100%;
    background-color: white;

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
  }
}

.card-details-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &__title {
    font-family: Montreal;
    margin: 10px 0px;
  }

  &__button {
    text-transform: uppercase;
    font-family: Montreal2;
    border: 0;
    background: none;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: rgb(219, 131, 30);
    text-decoration: underline;
    text-underline-offset: 7px;
    text-decoration-thickness: 2px;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
}

#infinite-scroll-indicator {
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 20px;
  width: 100%;

  &__img {
    display: block;
  }
}
//media query
@media screen and (max-width: 1024px) {
  .albums__grid {
    grid-template-columns: 1fr 1fr;
  }

  .card-details-section {
    &__title {
      text-align: center;
    }

    &__button {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 720px) {
  .albums__grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 425px) {
  .card-details-section {
    &__title,
    &__button {
      font-size: 14px;
    }
  }
}
</style>
