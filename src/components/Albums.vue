<template>
  <Backhome />
  <Loadingwarning v-if="isLoading" />
  <div class="container">
  <div class="albums__grid" v-if="albumsData.length && !isLoading ">

    <div class="card-container" v-for="elem in albumsData">
      <div class="card-container__card">
       <div class="card-container__card__image-wrapper">
        <img :src="elem.thumbnailUrl" alt="" class="card-container__card__image-wrapper__image">
       </div>

       <div class="card-container__card__section2">
       <div class="card-container__card__section2__content">
          <p class="card-container__card__section2__content__paragraph">{{ elem?.title }}</p>
       </div>
       <div class="card-container__card__section2__btn-wrapper">
        <button class="card-container__card__section2__btn-wrapper__btn" @click="routeToViewPage(elem)" >
        view image</button>
       </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";

import { albumType } from "../types/albumType";
import Backhome from "./Backhome.vue";
import Loadingwarning from "./Loadingwarning.vue";

const albumsData = ref<albumType[]>([]);
const isLoading = ref<boolean>(true);

const router = useRouter();
const route = useRoute();

const routeToViewPage = (elem:albumType) => {
 router.replace({name:'albumdetails',params:{data:'This is data'}})
}

//onMounted
onMounted(async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=20"
  );
  const { data } = response;

  if (data) {
    albumsData.value = data;
    isLoading.value = false;
  }
  console.log(data);
});
</script>

<style lang="scss" scoped>
.albums__grid {
  // padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  width: 100%;

}

.card-container {
  padding: 0px 15px;
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


</style>
