<script lang="ts">

import { CircleUser, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 , Activity, ArrowUpRight,DollarSign, Menu, Users } from 'lucide-vue-next'
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
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
  MoonIcon,
  SunIcon
} from '@radix-icons/vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { useMagicKeys } from '@vueuse/core'
import { ref } from 'vue'

import MenuDarkLight from '../../../layouts/MenuDarkLight.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useColorMode } from '@vueuse/core';
import { Icon } from '@iconify/vue';
export default {
  name: 'HeaderPage',
  props:['id'],
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
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
    MoonIcon,
    SunIcon,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    CommandDialog,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Label,
    useMagicKeys,
    ref,
    MenuDarkLight,
    Icon



  },
  
  setup() {
    const route = useRoute();
    const mode = useColorMode();
    const toggleMode = (newMode : any) => {
  mode.value = newMode;
};



          const pageTitle = computed(() => {
            switch (true) {
              case route.path === '/dashboard':
                return 'Dashboard';
              case route.path === '/listclients':
                return 'Clients';
              case route.path === '/listorders':
                return 'Orders';
              case route.path === '/listproducts':
                return 'Products';
                case (route.path === '/settings/profile' || route.path === '/settings/account'):
                return 'Settings';
              case route.path === '/addproduct':
                return 'Add Product';
                case route.path.startsWith('/editproduct/'):
                return 'Edit Product';
              case route.path === '/addclient':
                return 'Add Client';
              case route.path.startsWith('/editclient/'):
                return 'Edit Client'; 
              default:
                return 'Page Title';
            }
         });


    return {
      pageTitle,
      mode,
      toggleMode
      
    }
  },
  data(){
    return{
      open: false,

    }
  },
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem('token');
        await axios.post('http://127.0.0.1:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        localStorage.removeItem('token');
        await this.$router.push('/login');
      } catch (error) {
        console.error('Logout failed', error);
      }
    },
    
    
    
    handleKeyEvents() {
    useMagicKeys({
    passive: false,
    onEventFired: (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        this.open = true
        
      }
      else if(e.key === 'x' && (e.metaKey || e.ctrlKey)){
        this.open = false
      }
      
    },
  });
},


  
},
  mounted() {
    this.handleKeyEvents();
  },
}
</script>

<template>
  <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-8 transform">
    <Sheet>
      <SheetTrigger as-child>
        <Button size="icon" variant="outline" class="sm:hidden">
          <PanelLeft class="h-5 w-5" />
          <span class="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="sm:max-w-xs">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
            <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"> 
            <Home class="h-5 w-5" /> Dashboard 
          </a>
          <a href="#" class="flex items-center gap-4 px-2.5 text-foreground"> 
            <ShoppingCart class="h-5 w-5" /> Orders 
          </a>
          <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"> 
            <Package class="h-5 w-5" /> Products 
          </a>
          <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"> 
            <Users2 class="h-5 w-5" /> Customers 
          </a>
          <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"> 
            <LineChart class="h-5 w-5" /> Settings 
          </a>
        </nav>
      </SheetContent>
    </Sheet>

    <h1 class="text-3xl font-extrabold tracking-tight">{{ pageTitle }}</h1>

    <Dialog v-model:open="open">
      <DialogTrigger as-child>
        <div class="relative ml-auto flex-1 md:grow-0 transform scale-90">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button class="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
              <span class="hidden lg:inline-flex">Discover More..</span>
              <span class="inline-flex lg:hidden">Search...</span>
              <kbd class="inline-flex items-center pointer-events-none h-5 select-none gap-1 rounded border border-border bg-muted font-sans font-medium min-h-5 text-[11px] px-1 absolute right-[0.3rem] top-[0.3rem] opacity-100">
                <span class="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent class="bg-transparent border-none sm:max-w-[425px] p-1">
        <Command class="rounded-lg border shadow-md max-w-[450px] sm:max-w-[500px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
             <router-link   to="/listorders"> <CommandItem value="orders">
                <ShoppingCart class="mr-2 h-4 w-4" />
                <span>Orders</span>
                <CommandShortcut>⌘O</CommandShortcut>
              </CommandItem></router-link>
              <router-link  to="/listproducts">  <CommandItem value="products">
                <Package class="mr-2 h-4 w-4" />
                <span>Products</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem></router-link>
              <router-link   to="/listclients">         <CommandItem value="clients">
                <Users2 class="mr-2 h-4 w-4" />
                <span>Clients</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem></router-link>
              <router-link  to="/settings/profile">   
                <CommandItem value="setting">
                <Settings class="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem></router-link>
            </CommandGroup>
            <CommandSeparator />
          
            <CommandGroup heading="Theme">
            <CommandItem value="dark" @click="toggleMode('dark')">
              <MoonIcon class="mr-2 h-4 w-4" />
              <span>Dark Theme</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem value="light" @click="toggleMode('light')">
              <SunIcon class="mr-2 h-4 w-4" />
              <span>Light Theme</span>
              <CommandShortcut>⌘L</CommandShortcut>
            </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full bg-transparent">
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <router-link to="/settings"><DropdownMenuItem>Settings</DropdownMenuItem></router-link>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <MenuDarkLight />
  </header>
</template>




