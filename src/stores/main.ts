import {defineStore} from "pinia";
import {ref} from "vue";

export default defineStore('main', () => {
    const view = ref('modes')

    const setView = (new_view: string) => {
        view.value = new_view
    }

    return {view, setView}
});
