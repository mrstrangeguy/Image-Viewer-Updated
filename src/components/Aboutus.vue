<template>
  <Backhome message="Back To home" :url="'/'" />
  <PageTemplate title="About Us" :message="message" />
</template>

<script setup lang="ts">
import PageTemplate from "./Pagetemplate.vue";
import Backhome from "./Backhome.vue";

const message =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt similique alias necessitatibus velit. Velit provident quasi minima fuga at! Itaque impedit rerum nulla dolor cumque quibusdam ab excepturi esse eligendi? Repellat ea perferendis dolorem dolore soluta quod vitae earum voluptas laudantium temporibus quia odio alias tempora dignissimos, laborum ad pariatur. Sit nemo aspernatur alias quibusdam a et deserunt autem mollitia hic. Error dolorem vel eos eum animi expedita recusandae nulla nemo. Perspiciatis expedita fugiat omnis aperiam nobis cumque temporibus, tempore quo, ipsa amet nam accusantium. Maxime impedit animi hic aliquam fugit, repudiandae sequi a neque, harum, exercitationem quos corporis!";
</script>
