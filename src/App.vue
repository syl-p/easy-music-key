<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </main>

  <footer class="footer_copyright text-center">
    <p>Built with <span class="text-error">♥</span>
      by <a target="_blank" href="https://www.linkedin.com/in/websylvain/">Sylvain Pastor</a>.</p>
  </footer>
</template>

<script setup lang="ts">

</script>

<style>
@import "./assets/base.css";
@import "../node_modules/@mdi/font/css/materialdesignicons.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

header {
  margin-bottom: 2rem;
}

header nav {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
  
main {
  margin-bottom: 50px;
}


footer {
  padding: 15px 0;
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

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
