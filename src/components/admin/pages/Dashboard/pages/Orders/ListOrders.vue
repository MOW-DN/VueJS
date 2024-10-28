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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import MenuDarkLight from '../../../../layouts/MenuDarkLight.vue'
import HeaderPage from '../../layouts/HeaderPage.vue'
import SidebarPage from '../../layouts/SidebarPage.vue'
import BreadCrumb from '../../layouts/Breadcrumb.vue'
import axios from 'axios'
import dayjs from 'dayjs';
export default {
  name: 'ListOrders',
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
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter, 
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    MenuDarkLight,
    HeaderPage,
    SidebarPage,
    BreadCrumb
  },
  data(){
    return{
      orders:[]
    }

  },
  methods:{
    async ListOrder() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/listorders');
      this.orders = response.data.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  },
    formatDate(date) {
      return dayjs(date).format('DD-MM-YYYY');
    },  
    getFullImageUrl(imageName) {
    if (imageName instanceof File) {
        return URL.createObjectURL(imageName);
    } else {
        return imageName;
    }
      },
      async DeleteOrder(id){
      
      axios.delete('http://127.0.0.1:8000/api/dltorder/'+id)
        .then(response => {
          this.orders = response.data.data.order
          this.ListOrder();
        })
        .catch(error => {
          console.error('Error delete orders:', error);
        });
    }
  },
 
  mounted (){
    this.ListOrder();
  }
  
 
};

</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">

    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
     <HeaderPage/>
     <SidebarPage/>
     <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs default-value="all">
          <div class="flex items-center">
           <BreadCrumb/>
            <div class="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button variant="outline" size="sm" class="h-7 gap-1">
                    <ListFilter class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem checked>
                    Shiped
                  </DropdownMenuItem>
                  <DropdownMenuItem>Delivered</DropdownMenuItem>
                  <DropdownMenuItem>
                    Cancelled
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" class="h-7 gap-1">
                <File class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
          
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead class="hidden w-[100px] sm:table-cell">
                        <span class="sr-only">img</span>
                      </TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Client Name</TableHead>
                      <TableHead class="hidden md:table-cell">Quantity</TableHead>
                      <TableHead class="hidden md:table-cell">Price</TableHead>
                      <TableHead class="hidden md:table-cell">Total</TableHead>
                      <TableHead class="hidden md:table-cell">Order Date</TableHead>
                      <TableHead class="hidden md:table-cell">Status</TableHead>
                        <span class="sr-only">Actions</span>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow v-for="order in orders" :key="order.id">
                      <TableCell class="hidden sm:table-cell">
                        <img :src="getFullImageUrl(order.product.image)"  class="aspect-square rounded-md object-cover" height="64" width="64">
                      </TableCell>
                      <TableCell class="font-medium">
                        {{order.product.name}}
                      </TableCell>
                      <TableCell class="font-medium">
                        {{order.client.firstname}} {{order.client.lastname}} 
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        {{order.quantity}}
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        ${{order.product.price}}
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        ${{order.total}}
                      </TableCell>
                      <TableCell class="hidden md:table-cell">
                        {{  formatDate(order.created_at) }}
                      </TableCell>
                      <TableCell>
                        {{order.status}}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                      
                        <AlertDialog>
                          <AlertDialogTrigger as-child>
                            <DropdownMenuLabel class="cursor-pointer" variant="outline">
                              Delete
                            </DropdownMenuLabel>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you want to delete?</AlertDialogTitle>
                              
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction @click="DeleteOrder(order.id)">Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>

   
                        </DropdownMenu>



                      </TableCell>
                    </TableRow>
         
                  </TableBody>
                </Table>
              </CardContent>
            
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  </div>
  
</template>





