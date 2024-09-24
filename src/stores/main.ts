import {defineStore} from "pinia";
import {ref} from "vue";
import TonePlayerClass from "@/tone-player.class";
import ScaleClass from "@/scale.class";

export const useStore = defineStore('store', () => {
const tone_temp = new TonePlayerClass();
  const scale = ref(new ScaleClass("C"));
    const tone = ref(tone_temp)

    const setScale = (key: string) => {
        console.log("setScale")
        scale.value = new ScaleClass(key);
    }

  return { scale, tone, setScale };
});
