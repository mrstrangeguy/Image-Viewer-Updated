import { defineStore } from "pinia";
import { ref } from "vue";
import { albumType } from "../types/albumType";

export const useAlbumsStore = defineStore("albumStore", () => {
  const albums = ref<albumType[]>([]);

  return {
    albums,
  };
});
