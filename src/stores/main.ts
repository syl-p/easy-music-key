import { defineStore } from "pinia";
import { ref } from "vue";
import TonePlayerClass from "@/tone-player.class";
import ScaleClass from "@/scale.class";

export const useStore = defineStore("store", () => {
  const scale = ref(new ScaleClass("C"));
  const tone = ref<TonePlayerClass | null>(null);

  const setScale = (key: string) => {
    scale.value = new ScaleClass(key);
  };

  const initTone = async () => {
    const tone_temp = new TonePlayerClass();
    tone.value = tone_temp;
  };

  return { scale, initTone, tone, setScale };
});
