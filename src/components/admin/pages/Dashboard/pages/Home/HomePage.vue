<script>

import { CircleUser, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 , Activity, ArrowUpRight,DollarSign, Menu, Users,Target,ShoppingBasket } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BarChart } from '@/components/ui/chart-bar'
import { DonutChart } from '@/components/ui/chart-donut'
import { AreaChart } from '@/components/ui/chart-area'

import MenuDarkLight from '../../../../layouts/MenuDarkLight.vue'
import HeaderPage from '../../layouts/HeaderPage.vue'
import SidebarPage from '../../layouts/SidebarPage.vue'
import axios from 'axios'

export default {
  name: 'DashHomePage',
  components: {
    ShoppingBasket,
    Target,
    CircleUser,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Input,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Sheet,
    SheetContent,
    SheetTrigger,
    Pagination,
    PaginationList,
    PaginationNext,
    PaginationPrev,
    Progress,
    Separator,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Checkbox,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Activity,
    ArrowUpRight,
    DollarSign,
    Menu,
    Users,
    BarChart,
    DonutChart,
    AreaChart,
    MenuDarkLight,
    HeaderPage,
    SidebarPage
  },
  
  data() {
    return {
      data: [
        { name: 'Jan', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Feb', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Mar', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Apr', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'May', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Jun', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Jul', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Aug', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Sep', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Oct', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Nov', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Dec', Total: this.getRandomTotal(), Predicted: this.getRandomTotal() },
        { name: 'Jan', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Feb', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Mar', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Apr', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'May', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Jun', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
        { name: 'Jan', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Aug', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Sep', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Oct', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Nov', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Dec', Total: Math.floor(Math.random() * 2000) + 500, Predicted: Math.floor(Math.random() * 2000) + 500 },

      ],
      totalAll:[]
      
    };
    
  },

  methods: {
    getRandomTotal() {
      return Math.floor(Math.random() * 2000) + 500;
    },
    valueFormatter(tick) {
      return typeof tick === 'number' ? `$ ${new Intl.NumberFormat('us').format(tick)}` : '';
    },
    async ListTotalCountAll() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/totalAll');
          
            this.totalAll = [response.data.data];
        } catch (error) {
            console.error('Error fetching TotalCountAll:', error);
        }
    },
  },
    mounted(){
      this.ListTotalCountAll()
    }
  }
 


</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
   
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      
     <HeaderPage/>
     
     <SidebarPage/>
     <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8" >
      <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2" >
          <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4" v-for="count in totalAll" :key="count.id">
           
              <Card>
           <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle class="text-sm font-medium">
                Orders
             </CardTitle>
             <ShoppingBasket class="h-4 w-4 text-muted-foreground" />
           </CardHeader>
           <CardContent>
             <div class="text-2xl font-bold">
             +{{count.TotalOrders}}
             </div>
             <p class="text-xs text-muted-foreground">
               +20.1% from last month
             </p>
           </CardContent>
              </Card>
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Products
                    </CardTitle>
                    <Target class="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div class="text-2xl font-bold">
                      +{{count.TotalProducts}}
                    </div>
                    <p class="text-xs text-muted-foreground">
                      +18.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                      Sales
                    </CardTitle>
                    <CreditCard class="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div class="text-2xl font-bold">
                      +250
                    </div>
                    <p class="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                      Active Clients
                    </CardTitle>
                    <Users class="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div class="text-2xl font-bold">
                      +{{count.TotalUsers}}
                    </div>
                    <p class="text-xs text-muted-foreground">
                      +1.86% since last month
                    </p>
                  </CardContent>
                </Card>
       </div>
       <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 scale-95">
              
                <BarChart
    :data="data"
    index="name"
    :categories="['Total', 'Predicted']"
    :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
  />
  
  <AreaChart :data="data" index="name" :categories="['Total', 'Predicted']" />

  
       
       </div>
           </div>
          
        </div>
      
      </main>
    </div>
  </div>
</template>





