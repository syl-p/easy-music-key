<template>
  <nav>
    <ul>
      <li><RouterLink :to="scale.key + '/degree'">Degree</RouterLink></li>
      <li><RouterLink :to="scale.key + '/mode'">Mode</RouterLink></li>
    </ul>
  </nav>
  <ul class="elements">
    <li
      v-for="(element, index) in scale.modes"
      :key="index"
      class="elements_item"
    >
      <div class="elements_item_index">
        {{ scale.degrees[index].roman }}
      </div>
      <div class="elements_item_content">
        <Element :mode="element" :degree="scale.degrees[index]" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Element from "@/components/Element.vue";
import { computed } from "vue";
import { useStore } from "@/stores/main";
import { RouterLink } from "vue-router";
const store = useStore();
const scale = computed(() => store.scale);
</script>

<style>
.elements {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

.elements_item {
  padding: 10px 30px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.elements_item_index {
  font-size: 2.7em;
  font-weight: bold;
  text-align: center;
}
</style>
