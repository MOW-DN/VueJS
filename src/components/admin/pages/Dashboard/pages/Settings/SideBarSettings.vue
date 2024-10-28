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

export default {
  name: 'SideBarSettings',
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
    SidebarPage
  },


  methods: {
  }
 
};

</script>
<template>
       <aside class="-mx-4 lg:w-1/5">
               <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <router-link 
        to="/settings/profile" 
        class="inline-flex items-center h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors justify-start"
        :class="{ 'bg-muted': $route.path === '/settings/profile' }"
    >
        Profile
    </router-link>
    <router-link 
        to="/settings/account" 
        class="inline-flex items-center h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors"
        :class="{ 'bg-muted': $route.path === '/settings/account' }"
    >
        Account
    </router-link>
    <router-link 
        to="/settings/appearance" 
        class="inline-flex items-center h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors"
        :class="{ 'bg-muted': $route.path === '/settings/appearance' }"
    >
        Appearance
    </router-link>
    <router-link 
        to="/settings/notifications" 
        class="inline-flex items-center h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors"
        :class="{ 'bg-muted': $route.path === '/settings/notifications' }"
    >
        Notifications
    </router-link>
    <router-link 
        to="/settings/display" 
        class="inline-flex items-center h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors"
        :class="{ 'bg-muted': $route.path === '/settings/display' }"
    >
        Display
    </router-link>
</nav>

            </aside>
</template>