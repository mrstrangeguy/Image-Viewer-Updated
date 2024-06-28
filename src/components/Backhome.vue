<template>
  <div class="container back-to-home-container">
    <p class="back-to-home-container__para">
      <i class="fa-solid fa-arrow-left back-to-home-container__para__icon" @click="goToSpecifiedRoute"></i
      > <pre class="back-to-home-container__para__link" @click="goToSpecifiedRoute">{{message}}</pre>
    </p>
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
    path:props.url
   })
}
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
