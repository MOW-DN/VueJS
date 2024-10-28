<script>

import { CircleUser, Copy, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Truck, Users2 , Activity, ArrowUpRight,DollarSign, Menu, Users,  PlusCircle,MoreHorizontal,ChevronLeft,Upload } from 'lucide-vue-next'
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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import MenuDarkLight from '../../../../layouts/MenuDarkLight.vue'
import HeaderPage from '../../layouts/HeaderPage.vue'
import SidebarPage from '../../layouts/SidebarPage.vue'
import BreadCrumb from '../../layouts/Breadcrumb.vue'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
export default {
  name: 'EditProduct',
  props: ['id'],
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
    ToggleGroup,
    ToggleGroupItem,
    Upload,
    ChevronLeft,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Textarea,
    MenuDarkLight,
    HeaderPage,
    SidebarPage,
    BreadCrumb
  },
  data() {
    return {
        product: {
            name: '',
            category: '',
            price: '',
            quantity: '',
            description: '',
            available: '',
            in_production: '',
            image: null,
        },
    };
},


methods: {
    async EditProduct() {
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT'); 
            if (this.product.image && typeof this.product.image === 'string') {
            const file = this.$refs.fileInput.files[0]; 
            if (file) {
                formData.append('image', file);
            }
        };
            formData.append('name', this.product.name);
            formData.append('category', this.product.category);
            formData.append('price', this.product.price);
            formData.append('quantity', this.product.quantity);
            formData.append('description', this.product.description);
            formData.append('available', this.product.available);
            formData.append('in_production', this.product.in_production);

            await axios.post(`http://127.0.0.1:8000/api/editproduct/${this.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            this.$router.push('/listproducts');
        } catch (error) {
            console.error('Failed to edit Product', error);
        }
    },
    async GetByIdEdit() {
              try {
                  const response = await axios.get(`http://127.0.0.1:8000/api/getproductbyid/${this.id}`);
                  this.product = response.data.data.product;
              } catch (error) {
                  console.error('Failed to fetch product data', error);
              }
          },
    handleImageChange(event) {
     const file = event.target.files[0];
     this.product.image = file ? URL.createObjectURL(file) : null; 
        },
    getFullImageUrl(imageName) {
        if (imageName instanceof File) {
            return URL.createObjectURL(imageName);
        } else {
            return imageName;
        }
    },
},
mounted(){
  this.GetByIdEdit();
}


}

</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
     <HeaderPage/>
     <SidebarPage/>
     <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div class="flex items-center gap-4">
            <router-link to="/listproducts">  <Button variant="outline" size="icon" class="h-7 w-7" > 
              <ChevronLeft class="h-4 w-4" />
              <span class="sr-only">Back</span>
            </Button></router-link>
         
           
            <div class="hidden items-center gap-2 md:ml-auto md:flex">
                
         <Button size="sm" @click="EditProduct">
                Save
            </Button>
        </div>
          </div>
          <form @submit.prevent="EditProduct">

          <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  
                </CardHeader>
                <CardContent>
                  <div class="grid gap-2 grid-cols-2 pb-2">
                    <div class="grid gap-2">
                      <Label for="name">Product Name</Label>
                      <Input
                        id="name"
                        type="text"
                        class="w-full"
                        v-model="product.name"
                      />
                    </div>
                    <div class="grid gap-2">
                      <Label for="category">Category</Label>
                      <Select v-model="product.category">
                        <SelectTrigger
                          id="category"
                        >
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer">
                            Computer	
                          </SelectItem>
                          <SelectItem value="Displays ">
                            Displays 	
                          </SelectItem>
                          <SelectItem value="HardDrive">
                           HardDrive
                          </SelectItem>
                          <SelectItem value="Software">
                            Software	
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div class="grid gap-2 grid-cols-1">
                    
                    <div class="grid gap-2">
                      <Label for="description">Description</Label>
                      <Textarea
                       v-model="product.description"
                      />
                    </div>  
                  </div>
                </CardContent>
              </Card>
              
              <Card>
  <CardHeader>
    <CardTitle>Stock Details</CardTitle>
  </CardHeader>
  <CardContent>
    <Table className="max-w-md mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead class="text-sm dark:text-[#fafaf9]">Price</TableHead>
          <TableHead class="text-sm dark:text-[#fafaf9]">Quantity</TableHead>
          <TableHead class="text-sm dark:text-[#fafaf9]">In-Production</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell class="font-semibold">
            <Input
              id="price"
              type="text"
              class="w-full text-sm"
              v-model="product.price"
            />
          </TableCell>
          <TableCell class="font-semibold">
            <Input
              id="quantity"
              type="text"
              class="w-full text-sm"
              v-model="product.quantity"

            />
          </TableCell>
          <TableCell class="font-semibold">
            <Select v-model="product.in_production">
              <SelectTrigger id="inProduction" aria-label="Select category">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </CardContent>
            </Card>

            
            </div>
            <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Availibility</CardTitle>
                </CardHeader>
                <CardContent> 
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Select v-model="product.available" required>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="InStock">
                            In Stock
                          </SelectItem>
                          <SelectItem value="OutStock">
                            Out Stock
                          </SelectItem>
                    
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card class="overflow-hidden">
                  <CardHeader class="w-[300px] h-[245px]">
                    <CardTitle>Product Images</CardTitle>
                    <div class="flex justify-center">
                      <img 
                            v-if="product.image"
                            :src="product.image"
                            class="h-52 w-52 object-cover scale" 
                            alt="Uploaded Image"
                        />


                    </div>
                  </CardHeader>
                  <CardContent>
                    <div class="flex flex-col items-center">
                      <button 
                        @click="$refs.fileInput.click()" 
                        class="flex aspect-square w-10 h-10 items-center justify-center rounded-md border bg-black"
                        type="button"
                      >
                      <Upload class="h-4 w-4 text-muted-foreground text-white" />

                      </button>
                      <input 
                        ref="fileInput"
                        type="file"
                        accept="image/*" 
                        @change="handleImageChange" 
                        class="hidden" 
                      />
                    </div>
                  </CardContent>
              </Card>
            
            </div>
          </div>
        </form>
        </div>
      </main>
    </div>
  </div>
</template>





