import {defineStore} from "pinia";
import {ref} from "vue";
import TonePlayerClass from "@/tone-player.class";

export default defineStore('main', () => {
    const view = ref('modes')
    const tone = ref(new TonePlayerClass())

    const setView = (new_view: string) => {
        view.value = new_view
    }

    return {view, tone, setView}
});
