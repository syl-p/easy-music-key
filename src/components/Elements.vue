<template>
  <nav>
    <ul>
      <li>
        <RouterLink
          :to="{
            name: 'keyTable',
            params: {
              key: scale.key ?? 'C',
              view: 'degree',
            },
          }"
          >Degree</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{
            name: 'keyTable',
            params: {
              key: scale.key ?? 'C',
              view: 'mode',
            },
          }"
          >Mode</RouterLink
        >
      </li>
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
import { computed, watch } from "vue";
import { useStore } from "@/stores/main";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
const store = useStore();
const { setScale } = store;
const scale = computed(() => store.scale);
const route = useRoute();

watch(
  () => route.params.key,
  async (newKey) => {
    if (newKey) setScale(newKey as string);
  },
  { immediate: true }
);
</script>

<style scoped>
.elements {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

.elements_item {
  padding: 10px 0;
  margin-bottom: 40px;
  gap: 15px;
  display: grid;
  grid-template-columns: 1fr 7fr;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.elements_item_index {
  font-size: 2.7em;
  font-weight: bold;
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  margin: 25px auto;
  padding: 0;
  list-style: none;
  gap: 15px;
}

nav ul li a {
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-left: 0.5rem;
  color: var(--vt-c-light);
}

nav ul li a.router-link-active {
  color: var(--vt-c-green);
}
</style>
