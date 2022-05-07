import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '@/views/ProductView.vue'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/User/UserView.vue'
import UserProducts from '@/views/User/UserProducts.vue'
import UserPurchases from '@/views/User/UserPurchases.vue'
import UserSales from '@/views/User/UserSales.vue'
import EditUser from '@/views/User/EditUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/user',
    component: UserView,
    children:[
      {
        path: "",
        name: "user",
        component: UserProducts
      },
      {
        path: "purchases",
        name: "purchases",
        component: UserPurchases
      },
      {
        path: "sales",
        name: "sales",
        component: UserSales
      },
      {
        path: "edit",
        name: "user-edit",
        component: EditUser
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return { top: 0, behavior: "smooth" }
  }
});

export default router;
