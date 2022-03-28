<template>
  <header>
    <h1>App for learning your {{ store.view }}</h1>
  </header>
  <main>
    <aside class="keys">
      <div>
        <h2>{{key.fonda}}</h2>
        <label>Choose your key here: </label>
      </div>

      <div class="wrapper">
      </div>

      <ul class="keys-list">
        <li v-for="(item) in keys" :key="item">
          <a href="" @click.prevent="key.fonda = item" :class="{'active': item === key.fonda}">{{ item }}</a>
        </li>
      </ul>
    </aside>
    <section v-if="scale">
      <nav>
        <ul>
          <li>
            <a href="#" @click="store.setView('modes')" :class="{'active': store.view === 'modes'}">
              Modes
            </a>
          </li>
          <li>
            <a href="#" @click="store.setView('degrees')" :class="{'active': store.view === 'degrees'}">
              Degrees
            </a>
          </li>
        </ul>
      </nav>
      <article>
        <ModeElement v-for="index in 7"
                     :mode="scale.modes[index - 1]"
                     :degree="scale.degrees[index - 1]"
                     :key="index"></ModeElement>
      </article>
    </section>
  </main>

  <footer class="footer_copyright text-center">
    <p>Built with <span class="text-error">♥</span>
      by <a target="_blank" href="https://www.linkedin.com/in/websylvain/">Sylvain Pastor</a>.</p>
  </footer>
</template>

<script setup lang="ts">
import {ref, computed, watch, onMounted} from "vue";
  import ModeElement from "./components/ModeElement.vue";
  import Scale from "@/scale.class";

  import useStore from '@/stores/main';
  const store = useStore();

  const keys = [
      'F',
      'C',
      'G',
      'D',
      'A',
      'E',
      'B',
      'B♭',
      'E♭',
      'A♭',
      'D♭',
      'G♭',
      'C♭',
  ];

  const key = ref({ fonda: 'D', type: 'major' });

  const scale = computed((): Scale => {
    return new Scale(key.value.fonda);
  });

</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

header {
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2rem;
}

footer {
  padding: 15px 0;
}
nav {
  text-align: center;
  margin-bottom: 15px;
}

nav ul li {
  display: inline-block;
  padding: 0 1rem;
  color: var(--vt-c-black-mute);
  text-decoration: none;
}

nav ul li a {
  font-size: 1.2rem;
  text-transform: uppercase;
  padding-left: 0.5rem;
  color: var(--vt-c-black-mute);
}

nav ul li a.active {
  color: var(--vt-c-green);
}

main {
  margin-bottom: 50px;
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
  color: var(--vt-c-black-mute);
}

.keys-list li a.active {
  color: var(--vt-c-green);
}

footer {
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
}

.keys h2{
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

aside input[type=radio] + span {
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
  padding-left: 5px;
}

aside input[type=radio]:checked + span {
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
    grid-template-columns: 1fr 2fr;
    padding: 0 2rem;
  }


  section article{
    display: flex;
    flex-wrap:wrap;
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
