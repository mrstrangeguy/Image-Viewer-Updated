<template>
  <div class="navbar">
    <div class="navbar__tophead-section">
      <div class="container navbar__tophead-section__container">
       <ul class="navbar__tophead-section__container__list">
         <li class="navbar__tophead-section__container__list__line">
          <RouterLink to="/albums" class="navbar__tophead-section__container__list__line__link">albums</RouterLink>
         </li>
         <li class="navbar__tophead-section__container__list__line">
          <RouterLink to="/contactus" class="navbar__tophead-section__container__list__line__link">contact us</RouterLink>
         </li>
         <li class="navbar__tophead-section__container__list__line">
          <RouterLink to="/aboutus" class="navbar__tophead-section__container__list__line__link">about us</RouterLink>
         </li>
       </ul>
      </div>
    </div>
    <div class="navbar__bottomhead-section">
      <div class="navbar__bottomhead-section__container">
        <div class="navbar__bottomhead-section__container__title-logo">
          <img src="../images/titlelogo.png" class="navbar__bottomhead-section__container__title-logo__image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
   .navbar {
  
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: white;
    margin-bottom: 20px;

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
        padding: 10px;
        max-width: 1340px;
        margin: 0 auto;
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
      }
     } 

   }
   
</style>
