<template>
  <div class="back-to-home-container">
    <p class="back-to-home-container__para">
      <i class="fa-solid fa-arrow-left back-to-home-container__para__icon"></i
      ><RouterLink :to="url" class="back-to-home-container__para__link">{{
        message
      }}</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps<{
  message: string;
  url: string;
}>();
</script>

<style lang="scss" scoped>
.back-to-home-container {
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 20px;

  &__para {
    margin: 0;

    &__icon {
      margin-right: 10px;
    }

    &__link {
      text-decoration: none;
    }
  }
}
</style>
