<template>
  <div class="element">
    <h2>
      <template v-if="route.params.view === 'mode'">
        {{ props.mode.name }} <small>{{ props.degree.notation }}</small>
      </template>
      <template v-else>
        {{ props.degree.notation }} <small>{{ props.mode.name }}</small>
      </template>
    </h2>
    <ul>
      <li v-for="note in props.mode.notes" :key="note">
        <span
          :class="{
            active:
              route.params.view === 'degree'
                ? props.degree.notes.includes(note)
                : true,
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
import { useStore } from "@/stores/main";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();

const props = defineProps(["mode", "degree"]);

function playSound(notes: string[], isDegree: boolean) {
  if (isDegree) {
    store.tone.play_chord(notes);
  } else {
    store.tone.play_note_by_note(notes);
  }
}
</script>

<style>
.element  {
}

.element h2 {
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: bold;
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
