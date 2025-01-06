import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodItem from '@/views/FoodItem.vue'
import Todolist from '@/views/Todolist.vue'
import RefPage from '@/views/RefPage.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import FormInputs from '@/views/FormInputs.vue'
import FlowerItems from '@/views/FlowerItems.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'Food',
      component: FoodItem,
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: Todolist,
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefPage,
    },
    {
      path: '/life',
      name: 'lifecycle',
      component: LifeCycle,
    },

    {
      path: '/form',
      name: 'form',
      component: FormInputs,
    },

    {
      path: '/flowers',
      name: 'flowers',
      component: FlowerItems,
    },
    
    
  ],
})

export default router
