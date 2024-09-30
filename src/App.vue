<template>
  <aside class="keys">
    <h2>
      {{ route.params.key ? route.params.key : "pick a key" }}
    </h2>
    <ul class="keys-list">
      <li v-for="item in keys" :key="item">
        <RouterLink
          :to="{
            name: 'keyTable',
            params: {
              key: item,
            },
          }"
          >{{ item }}</RouterLink
        >
      </li>
    </ul>
  </aside>
  <section>
    <RouterView />
  </section>
  <footer class="footer_copyright text-center">
    <p>
      Built with <span class="text-error">♥</span> by
      <a target="_blank" href="https://www.linkedin.com/in/websylvain/"
        >Sylvain Pastor</a
      >.
    </p>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

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
@import "./assets/base.css";
@import "../node_modules/@mdi/font/css/materialdesignicons.css";

#app {
  max-width: 1280px;
  margin: auto;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
}

footer {
  padding: 15px 0;
  text-align: center;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.keys h2 {
  font-size: 100px;
  background: transparent;
  border: none;
  padding: 0;
  line-height: 100px;
  color: var(--vt-c-green);
  text-align: center;
}
</style>
