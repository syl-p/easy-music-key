import {defineStore} from "pinia";
import {ref} from "vue";
import TonePlayerClass from "@/tone-player.class";

export default defineStore('main', () => {
    const tone_temp = new TonePlayerClass();
    
    const view = ref('modes')
    const tone = ref(tone_temp)

    const setView = (new_view: string) => {
        view.value = new_view
    }

    return {view, tone, setView}
});
