<template>
  <div class="element">
    <h2>
      <span>
        <template v-if="route.params.view === 'mode'">
          {{ mode.name }} <small>{{ degree.notation }}</small>
        </template>
        <template v-else>
          {{ degree.notation }} <small>{{ mode.name }}</small>
        </template>
      </span>
      <button
        @click.prevent="
          playSound(route.params.view === 'mode' ? mode.notes : degree.notes)
        "
      >
        Ecouter
      </button>
    </h2>
    <ul>
      <li v-for="note in mode.notes" :key="note">
        <span
          :class="{
            active:
              route.params.view !== 'mode' ? degree.notes.includes(note) : true,
          }"
        >
          {{ note }}
        </span>
      </li>
    </ul>
    <p>{{ degree.description }}</p>
  </div>
</template>

<script setup lang="ts">
import * as Tone from "tone";
import { useStore } from "@/stores/main";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();
const tone = computed(() => store.tone);
// eslint-disable-next-line vue/no-setup-props-destructure
const { mode, degree } = defineProps(["mode", "degree"]);

async function playSound(notes: string[]) {
  await Tone.start();
  if (!tone.value) store.initTone();

  if (tone.value) {
    if (route.params.view == "mode") {
      tone.value.play_note_by_note(notes);
    } else {
      tone.value.play_chord(notes);
    }
  }
}
</script>

<style>
.element h2 {
  display: flex;
  justify-content: center;
}

.element h2 span {
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: bold;
  flex: 1;
}

.element h2 small {
  font-size: 0.8rem;
  text-transform: uppercase;
}

.element ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: start;
  padding: 0;
  font-size: 1.4rem;
}

.element ul li {
  flex: 1 1 0px;
}

.element ul li span.active {
  color: var(--vt-c-green);
  border-bottom: 3px solid var(--vt-c-green);
}
</style>
