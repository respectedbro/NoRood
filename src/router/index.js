import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaterialsView from '@/views/MaterialsView.vue'
import ServicesView from "@/views/ServicesView.vue";
import DeliveryView from "@/views/DeliveryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/materials',
      name: 'materials',
      component: MaterialsView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: DeliveryView,
    },
  ],
})

export default router
