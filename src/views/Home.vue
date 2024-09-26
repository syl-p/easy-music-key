<template>
  <aside class="keys">
    <h2>
      {{ route.params.key ? route.params.key : "pick a key" }}
    </h2>
    <ul class="keys-list">
      <li v-for="item in keys" :key="item">
        <RouterLink :to="'/' + item">{{ item }}</RouterLink>
      </li>
    </ul>
  </aside>
  <section>
    <!-- <nav>
      <ul>
        <li>
          <RouterLink to="/degree">Degree</RouterLink>
        </li>
        <li>
          <RouterLink to="/mode">Mode</RouterLink>
        </li>
      </ul>
    </nav> -->
    <article>
      <RouterView />
    </article>
  </section>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { useStore } from "@/stores/main";
const store = useStore();
const { setScale } = store;

const route = useRoute();

watch(
  () => route.params.key,
  async (newKey) => {
    if (newKey) setScale(newKey as string);
  },
  { immediate: true }
);

const keys = [
  "F",
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "B♭",
  "E♭",
  "A♭",
  "D♭",
  "G♭",
  "C♭",
];
</script>

<style>
@import "@/assets/base.css";
@import "../../node_modules/@mdi/font/css/materialdesignicons.css";

section nav {
  text-align: center;
  margin-bottom: 15px;
}

section nav ul li {
  display: inline-block;
  padding: 0 1rem;
  color: var(--vt-c-black-mute);
  text-decoration: none;
}

section nav ul li a {
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-left: 0.5rem;
  color: var(--vt-c-black-mute);
}

section nav ul li a.active {
  color: var(--vt-c-green);
}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
}

.keys-list {
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  list-style: none;
}

.keys-list li a {
  font-size: 1.4rem;
  padding-left: 0.5rem;
  color: var(--vt-c-light);
}

.keys-list li a.router-link-active {
  color: var(--vt-c-green);
}

footer {
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
}

.keys h2 {
  font-size: 135px;
  background: transparent;
  border: none;
  padding: 0;
  line-height: 135px;
  color: var(--vt-c-green);
  text-align: center;
}

label {
  display: block;
}

aside input[type="radio"] + span {
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
  padding-left: 5px;
}

aside input[type="radio"]:checked + span {
  opacity: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  /*  a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }*/
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  main {
    display: grid;
    grid-template-columns: 0.7fr 2fr;
    padding: 0 2rem;
  }

  section article {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-content: start;
    align-items: start;
  }

  .mode {
    width: 50%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
