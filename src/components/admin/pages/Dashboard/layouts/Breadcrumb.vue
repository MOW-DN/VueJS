<script>

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'BreadCrumb',
  components: {
  Breadcrumb,
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  },
  setup() {
    const route = useRoute()

    const pageTitle = computed(() => {
      switch (route.path) {
        case '/dashboard':
          return 'Dashboard'
        case '/listclients':
          return 'Clients'
             case '/listorders':
          return 'Orders'
           case '/listproducts':
          return 'Products'
          default:
          return 'Page Title' 
      }
    })

    return {
      pageTitle,
    }
  },

  
 
  
 
};

</script>

<template>
 <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink>
          <router-link to="/dashboard">
            Dashboard
          </router-link >
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbPage>{{ pageTitle }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  
</template>





