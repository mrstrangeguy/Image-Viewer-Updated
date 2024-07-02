<template>
  <Backhome message="Back To home" :url="'/'" />
  <Loadingwarning v-if="!albumStore.albums.length && isLoading" />
  <div class="container">
    <div class="albums__grid" id="album-grid" v-if="albumStore.albums">
      <div class="card-container" v-for="(elem,index) in albumStore.albums" ref="currentView">
        <div class="card-container__card">
          <div class="card-container__card__image-wrapper">
            <img
              :src="elem?.thumbnailUrl"
              alt=""
              class="card-container__card__image-wrapper__image"
            />
          </div>

          <div class="card-container__card__section2" >
            <div class="card-container__card__section2__content">
              <p class="card-container__card__section2__content__paragraph">
                {{ elem?.title }}
              </p>
            </div>
            <div class="card-container__card__section2__btn-wrapper">
              <button class="card-container__card__section2__btn-wrapper__btn" @click="routeToDetailsPage(elem.id)">
                View Image 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <div class="infinite-scroll" v-if="albumStore.albums.length && isLoading">
      <img src="../gifs/loading.gif" class="infinite-scroll__img" alt="">
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
import axios from "axios";

import { useAlbumsStore } from "../stores/albumStorage";
import Backhome from "./Backhome.vue";
import Loadingwarning from "./Loadingwarning.vue";

const albumStore = useAlbumsStore();
const isLoading = ref<boolean>(true);
const route = useRoute();
const router = useRouter();
const currentView = ref(null);

//functions
const handleInfiniteScroll = () => {
  if(route.fullPath !== '/albums') return
  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const bottomScrollLevel = difference - document.documentElement.scrollTop;

  if (bottomScrollLevel === 0) {
    albumStore.fetchCount += 20;
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

const routeToDetailsPage = (id:number) => {
  router.push({
    path:`/albums/${id}`
  })

  albumStore.scrollLevel = document.documentElement.scrollTop;
}


//onMounted
onMounted(() => {
  !albumStore.albums.length ? fetchData() :isLoading.value = false;
 
  console.log(document.documentElement.scrollTop)
  console.log(albumStore.scrollLevel)
  document.documentElement.scrollTop = 5000

});


//watch


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

.infinite-scroll {
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 20px;
 
  &__img {
    display: block;
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
