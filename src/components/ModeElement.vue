<template>
  <div class="mode" :class="{'degrees': store.view === 'degrees'}">
    <div class="mode__index">
      {{degree.roman}}
    </div>
    <div class="mode__infos">
      <h2 @click="playSound(store.view === 'degrees' ? degree.notes : mode.notes, store.view === 'degrees')">
        <template v-if="store.view === 'modes'">
          <span>{{ mode.name }}</span>
        </template>
        <template v-else>
          <span>{{ degree.notation }}</span>
        </template> &nbsp;
        <small>Sound Major</small>
      </h2>
      <ul class="mode__notes">
        <li v-for="(note, index) in mode.notes" :key="note"
            :class="{'active': degree.notes.includes(note)}">
          {{ note }}
        </li>
      </ul>
      <template v-if="store.view === 'modes'">
        <p>Chord: {{degree.notation}}</p>
      </template>
      <template v-else>
        <p>Mode: {{mode.name}}</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore  from '@/stores/main';
const store = useStore();

 defineProps({
   mode: {
     type: Object,
     default: () => ({
       mode: 1,
       degree: 1
     })
   },
   degree: {
     type: Object,
     default: () => ({
       degree: 1
     })
   }
 })

function playSound(notes: string[], isDegree: boolean) {
  if (isDegree) {
    store.tone.play_chord(notes);
  } else {
    store.tone.play_note_by_note(notes);
  }
}

</script>

<style>

  .mode {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .mode__index {
    font-size: 3em;
    font-weight: bold;
    text-align: center;
  }

  .mode__infos {
    padding-left: 10px;
  }

  .mode h2 {
    font-size: 1.4rem;
    margin-bottom: 0px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .mode h2 small {
    font-size: 0.8rem;
  }

  .mode p {
    font-size: 0.8rem;
  }

  .mode__notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  .mode__notes li {
    margin: 0 5px;
    padding:5px;
  }

  .mode__notes li:nth-child(1) {
    margin: 0;
  }

  .degrees .mode__notes li {
    color: var(--vt-c-black-mute);
  }
  .degrees .mode__notes li.active {
    color: var(--vt-c-green);
    border-bottom: 3px solid var(--vt-c-green);
  }

  .mode h2 span {
    color: var(--vt-c-green);
    font-weight: bold;
  }
</style>