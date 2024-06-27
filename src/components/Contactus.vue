<template>
  <Backhome message="Back To home" :url="'/'" />
  <div>
    <Pagetemplate title="Contact Us" :message="message" />
  </div>
</template>

<script setup lang="ts">
import Pagetemplate from "./Pagetemplate.vue";
import Backhome from "./Backhome.vue";

const message =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere corrupti dignissimos eaque tenetur saepe ea voluptates eligendi cum! Dignissimos tempora culpa atque at totam eum nostrum minima consectetur natus porro consequatur optio sapiente quibusdam commodi enim esse distinctio fugiat rem adipisci, error voluptate sed fuga ipsa obcaecati! Quaerat nam repudiandae officiis in eum repellat fugit mollitia accusamus deserunt ad! Voluptate veniam esse minima vero asperiores enim, magnam voluptatum expedita, reiciendis, est rerum. Adipisci nostrum numquam voluptatem. Enim laborum itaque voluptatum praesentium ea porro soluta harum, voluptate dolorem excepturi minus odio vel doloremque ullam omnis officia optio similique explicabo? Minus, fugiat asperiores! Alias, dolorum recusandae cum earum veritatis atque dolore asperiores illum voluptates eum aliquid animi reiciendis maxime ea libero laboriosam expedita deleniti itaque quae, minima ipsam? Dignissimos beatae ullam natus at molestiae blanditiis cumque. Maiores temporibus, quae sapiente quis fugit natus quia. Ab optio ex possimus doloremque in. Explicabo suscipit, molestias voluptatem earum sint harum placeat iusto eos, nam iure adipisci libero quo. Rerum minus sapiente praesentium a, eligendi ut dignissimos ex neque, quasi aliquam vitae laudantium vero eaque perferendis in tempore! Est rem commodi soluta, quia aspernatur debitis, ipsam aut repudiandae suscipit molestiae maxime, similique obcaecati eaque provident?";
</script>
