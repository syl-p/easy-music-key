import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import ModeElement from './components/ModeElement.vue'

const routes = [
  { path: '/', component: Home, children: [
    {path: '/:key', component: ModeElement},
    {path: '/:key/degree', component: ModeElement},
    {path: '/:key/mode', component: ModeElement},
  ]},
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router