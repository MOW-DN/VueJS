import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/admin/pages/Auth/LoginPage.vue';
import RegPage from '@/components/admin/pages/Auth/RegisterPage.vue';
import PswResetPage from '@/components/admin/pages/Auth/PasswordResetPage.vue';
import DashHomePage from '@/components/admin/pages/Dashboard/pages/Home/HomePage.vue';
import DashHome1Page from '@/components/admin/pages/Dashboard/pages/Home/HomePage1.vue';
import ListProducts from '@/components/admin/pages/Dashboard/pages/Products/ListProducts.vue';
import ListClients from '@/components/admin/pages/Dashboard/pages/Clients/ListClients.vue';
import ListOrders from '@/components/admin/pages/Dashboard/pages/Orders/ListOrders.vue';
import ProfileSetting from '@/components/admin/pages/Dashboard/pages/Settings/ProfileSetting.vue';
import AccountSetting from '@/components/admin/pages/Dashboard/pages/Settings/AccountSetting.vue';

import AddProduct from '@/components/admin/pages/Dashboard/pages/Products/AddProduct.vue';
import EditProduct from '@/components/admin/pages/Dashboard/pages/Products/EditProduct.vue';
import AddClient from '@/components/admin/pages/Dashboard/pages/Clients/AddClient.vue';
import EditClient from '@/components/admin/pages/Dashboard/pages/Clients/EditClient.vue';

const routes = [

  {
    path: '/login',
    name: 'login', 
    component: LoginPage,
    meta: { requiresAuth: false },

  },
  {
    path: '/registration',
    name: 'registration', 
    component: RegPage,
    meta: { requiresAuth: false },

  },
  {
    path: '/passwordreset',
    name: 'passwordreset', 
    component: PswResetPage,
    meta: { requiresAuth: false },

  },
  {
    path: '/dashboard',
    name: 'dashboard', 
    component: DashHomePage,
    meta: { requiresAuth: true },

  },
  
  {
    path: '/dashboard1',
    name: 'dashboard1', 
    component: DashHome1Page,
    meta: { requiresAuth: true },
  },
  
  
  {
    path: '/listproducts',
    name: 'listproducts', 
    component: ListProducts,
    meta: { requiresAuth: true },

  },
  {
    path: '/addproduct',
    name: 'addproduct', 
    component: AddProduct,
    meta: { requiresAuth: true },

  },
  {
    path: '/editproduct/:id',
    name: 'editproduct', 
    component: EditProduct,
    meta: { requiresAuth: true },
    props:true,

  },
  {
    path: '/listclients',
    name: 'listclients', 
    component: ListClients,
    meta: { requiresAuth: true },

  },
  {
    path: '/addclient',
    name: 'addclient', 
    component: AddClient,
    meta: { requiresAuth: true },

  },
  {
    path: '/editclient/:id',
    name: 'editclient', 
    component: EditClient,
    meta: { requiresAuth: true },
    props: true 

  },
  {
    path: '/listorders',
    name: 'listorders', 
    component: ListOrders,
    meta: { requiresAuth: true },

  },
  {
    path: '/settings/profile',
    name: 'settingsProfile', 
    component: ProfileSetting,
    meta: { requiresAuth: true },

  },
  {
    path: '/settings/account',
    name: 'settingsAccount', 
    component: AccountSetting,
    meta: { requiresAuth: true },

  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated ) {
      next('/login'); 
    } else {
      next(); 
    }
  } else if (to.meta.requiresAuth === false && isAuthenticated ) {
    next('/dashboard'); 
  } else if (to.path === '/') {
    next('/dashboard'); 
  } else if (!to.matched.length) {
    next('/dashboard'); 
  } else {
    next(); 
  }
});

export default router;
