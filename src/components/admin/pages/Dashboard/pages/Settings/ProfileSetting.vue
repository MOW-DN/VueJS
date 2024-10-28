<script>
import { CircleUser, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 , Activity, ArrowUpRight,DollarSign, Menu, Users,  PlusCircle,MoreHorizontal } from 'lucide-vue-next'
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
import SideBarSetting from './SideBarSettings.vue'
export default {
  name: 'ProfileSetting',
  components: {
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
    PlusCircle,
    MoreHorizontal,
    MenuDarkLight,
    HeaderPage,
    SidebarPage,
    SideBarSetting
  },
  data(){
return{
  settings: {}, 

}
  },

  methods: {
    async ListSetting() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/listsettings');
      this.settings = response.data;
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  },
  addUrl() {
        this.urlList.push('');
    },
    removeUrl(index) {
        this.urlList.splice(index, 1); 
    },
  },
  mounted(){
    this.ListSetting()
  }
 
};

</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/20">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14" >
     <HeaderPage/>
     <SidebarPage/>
     
     <main class="grid flex-1 items-start gap-4 p-0 sm:px-2 sm:py-0 md:gap-8">
    <div class="grid space-y-6 pb-16 md:block  flex-1 items-start gap-4 p-2 sm:px-6 sm:py-0 md:gap-8">
      
            <p class="text-muted-foreground ">Manage your account settings and set e-mail preferences.</p>
        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] "></div>
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
         <SideBarSetting/>
            <div class="flex-1 lg:max-w-2xl">
                <div class="space-y-4">
                  <div class="grid gap-2 grid-cols-2 ">
                    <div class="grid gap-2">
                      <h3 class="text-lg font-medium">Profile</h3>
                      <p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
                    </div>
                    <div class="grid gap-2">
                      <div class="hidden items-right gap-2 md:ml-auto md:flex">
                
                <Button size="sm">
                       Save
                   </Button>
               </div>
                        
                        
                    </div>
                  </div>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                    <form class="space-y-8" v-for="setting in settings" :key="setting.id">
                        <div class="space-y-2">
                            <label for="username" class="text-sm font-medium">Username</label>
                            <input type="text" id="username" name="username" v-model="setting.client.username" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium">Email</label>
                            <input type="email" id="email" name="email" v-model="setting.client.email" readonly class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />

                        </div>
                        <div class="space-y-2">
                            <label for="bio" class="text-sm font-medium">Bio</label>
                            <textarea id="bio" name="bio" v-model="setting.bio" class="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"></textarea>
                        </div>
                        <div class="space-y-2">
                
                          <label class="text-sm font-medium">URLs</label>
                        <div v-for="(urlObj, index) in setting.setting_url" :key="index" class="flex space-x-2">
                            <input 
                                type="url" 
                                v-model="urlObj.url" 
                                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
                                readonly 
                            />
                        </div>
                   

                        </div>

  



                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

    </div>
  </div>
</template>





