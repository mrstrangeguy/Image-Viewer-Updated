<template>
    <div class="route-view-container">
    <div class="route-view-container__heading">
      <div class="route-view-container__heading__text">{{ title }}</div>
    </div>
    <div class="route-view-container__description">{{ message }}</div>
  </div>
  </template>
  
  <script setup lang="ts">
    
    const props = defineProps<{
      message:string;
      title:string;
    }>();
  </script>
  
  <style lang="scss" scoped>
  
  .route-view-container {
    
  &__heading {
      width: 100%;
      height: 10vh;
      background-color: white;
      padding: 15px;
      border-radius: 30px;
  
      &__text {
          text-align: center;
          font-size: 32px;
          font-weight: 500;
          line-height: 32px;
      }
  }
  
  &__description {
     background-color: white;
     margin-top: 25px;
     padding: 15px;
     border-radius: 30px;
  }
  }
  </style>
  
  