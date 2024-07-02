import { defineStore } from "pinia";
import { ref } from "vue";
import { albumType } from "../types/albumType";

export const useAlbumsStore = defineStore("albumStore", () => {
  const albums = ref<albumType[]>([]);
  const fetchCount = ref<number>(20);
  const selectedAlbumId = ref<number>(-1);

  return {
    albums,
    fetchCount,
    selectedAlbumId,
  };
});
