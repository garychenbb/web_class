import { createRouter, createWebHistory } from 'vue-router'
import HelloPethomieView from '../page/HelloPethomieView.vue'
import CatView from '../page/CatView.vue'
import DogView from '../page/DogView.vue'
import PetCharTestView from '../page/PetCharTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HelloPethomieView
    },
    {
      path: '/cat',
      name: 'cat',
      component: CatView
    },
    {
      path: '/dog',
      name: 'dog',
      component: DogView
    },
    {
      path: '/petchartest',
      name: 'petchartest',
      component: PetCharTestView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
