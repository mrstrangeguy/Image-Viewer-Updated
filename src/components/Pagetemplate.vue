<template>
  <div class="container route-view-container">
    <div class="route-view-container__heading">
      <div class="route-view-container__heading__text">{{ title }}</div>
    </div>
    <p class="route-view-container__description">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
  title: string;
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
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
    }
  }

  &__description {
    background-color: white;
    margin: 25px 0px 0px 0px;
    padding: 15px;
    border-radius: 30px;
  }
}
</style>
