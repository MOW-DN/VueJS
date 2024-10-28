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

import MenuDarkLight from '../../../layouts/MenuDarkLight.vue'
import HeaderPage from '../layouts/HeaderPage.vue'
export default {
  name: 'SidebarPage',
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
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Label,

    MenuDarkLight,
    HeaderPage



  },
  methods:{
    isActive(route: any) {
        return this.$route.name === route || this.$route.path === route;
    }
  }
 
};
</script>

<template>
  
  <TooltipProvider>
    <aside class="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background sm:flex  hidden md">
      <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
        <div
          class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
          <span class="sr-only">Acme Inc</span>
        </div>
              <Tooltip>
          <TooltipTrigger as-child>
              <router-link
                  to="dashboard"
                  class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                  :class="{'dark:text-[#facc15]': isActive('dashboard'), 'text-muted-foreground': !isActive('dashboard')}"
              >
                  <Home class="h-5 w-5" />
                  <span class="sr-only">Dashboard</span>
              </router-link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger as-child>
                        <router-link
                            to="/listorders"
                            class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                            :class="{'dark:text-[#facc15]': isActive('listorders'), 'text-muted-foreground': !isActive('listorders')}"
                        >
                            <ShoppingCart class="h-5 w-5" />
                            <span class="sr-only">Orders</span>
                        </router-link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Orders</TooltipContent>
                </Tooltip>
             <Tooltip>
              <TooltipTrigger as-child>
                  <router-link
                      to="listproducts"
                      class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                      :class="{'dark:text-[#facc15]': isActive('listproducts'), 'text-muted-foreground': !isActive('listproducts')}"
                  >
                      <Package class="h-5 w-5" />
                      <span class="sr-only">Products</span>
                  </router-link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger as-child>
                    <router-link
                        to="listclients"
                        class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                        :class="{'dark:text-[#facc15]': isActive('listclients'), 'text-muted-foreground': !isActive('listclients')}"
                    >
                        <Users2 class="h-5 w-5" />
                        <span class="sr-only">Clients</span>
                    </router-link>
                </TooltipTrigger>
                <TooltipContent side="right">Clients</TooltipContent>
            </Tooltip>

      
      </nav>
      <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger as-child>
            <router-link
              to="/settings/profile"
              class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              :class="{'dark:text-[#facc15] text-[#000]': isActive('settings'), 'text-muted-foreground': !isActive('settings')}">
              <Settings class="h-5 w-5" />
              <span class="sr-only">Settings</span>
            </router-link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
        </TooltipProvider>
</template>





