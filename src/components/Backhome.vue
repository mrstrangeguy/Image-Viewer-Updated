<template>
  <div class="container back-to-home-container">
    <div class="back-to-home-container__message">
      <i
        class="fa-solid fa-arrow-left back-to-home-container__message__icon"
        @click="goToSpecifiedRoute"
      />
      <span
        class="back-to-home-container__message__link"
        @click="goToSpecifiedRoute"
        >{{ message }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

//props
const props = defineProps<{
  message: string;
  url: string;
}>();

const router = useRouter();

//function

const goToSpecifiedRoute = () => {
  router.push({
    path: props.url,
  });
};
</script>

<style lang="scss" scoped>
.back-to-home-container {
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  margin-bottom: 20px;

  &__message {
    margin: 0;

    &__icon {
      margin-right: 10px;
      cursor: pointer;
    }

    &__link {
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      margin: 0;
    }

    &__link:hover {
      color: purple;
    }
  }
}
</style>
