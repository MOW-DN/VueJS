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
import { Textarea } from '@/components/ui/textarea'
import { ref } from 'vue'
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  DateFormatter,
  getLocalTimeZone
} from '@internationalized/date'
import MenuDarkLight from '../../../../layouts/MenuDarkLight.vue'
import HeaderPage from '../../layouts/HeaderPage.vue'
import SidebarPage from '../../layouts/SidebarPage.vue'
import BreadCrumb from '../../layouts/Breadcrumb.vue'
import axios from 'axios'



export default {
  name: 'EditClient',
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
    ref,
    cn, 
    CalendarIcon,
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger,
    getLocalTimeZone,
    DateFormatter,
    MenuDarkLight,
    HeaderPage,
    SidebarPage,
    BreadCrumb
  },
  data() {
    return {
        client: {
            email: '',
            firstname: '',
            lastname: '',
            username: '',
            status: '',
            department: '',
            phone: '',
            address: '',
            image: null,
        },
  
    };
},
methods: {
  async EditClient() {
    try {
        const formData = new FormData();
        formData.append('_method', 'PUT'); 
        
        if (this.client.image && typeof this.client.image === 'string') {
            const file = this.$refs.fileInput.files[0]; 
            if (file) {
                formData.append('image', file);
            }
        }

        formData.append('email', this.client.email);
        formData.append('firstname', this.client.firstname);
        formData.append('lastname', this.client.lastname);
        formData.append('username', this.client.username);
        formData.append('status', this.client.status);
        formData.append('department', this.client.department);
        formData.append('address', this.client.address);
        formData.append('phone', this.client.phone);

        await axios.post(`http://127.0.0.1:8000/api/edituser/${this.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        this.$router.push('/listclients');
    } catch (error) {
        console.error('Failed to update client', error);
    }
},


          async GetByIdClient() {
              try {
                  const response = await axios.get(`http://127.0.0.1:8000/api/getbyid/${this.id}`);
                  this.client = response.data.data.user;
              } catch (error) {
                  console.error('Failed to fetch client data', error);
              }
          },
                  handleImageChange(event) {
                const file = event.target.files[0];
                this.client.image = file ? URL.createObjectURL(file) : null; 
        },

           getFullImageUrl(imageName) {
            if (imageName instanceof File) {
           URL.createObjectURL(imageName);
            } else {
              return imageName;
            }
        },

      
  },

mounted() {
    this.GetByIdClient();
},
};

 

</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
     <HeaderPage/>
     <SidebarPage/>
     <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div class="flex items-center gap-4">
          <router-link to="/listclients">
              <Button variant="outline" size="icon" class="h-7 w-7">
              <ChevronLeft class="h-4 w-4" />
            </Button>
          </router-link>
            <div class="hidden items-center gap-2 md:ml-auto md:flex">
            <Button size="sm" type="submit" @click="EditClient">
                Save
            </Button>
        </div>
          </div>
          <form @submit.prevent="EditClient">
          <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Client Details</CardTitle>
                  </CardHeader>
                
                  <CardContent>
                    <div class="grid gap-4 grid-cols-2">
                      <div class="grid gap-2">
                        <Label for="name">First Name</Label>
                        <Input
                          id="fitstname"
                          type="text"
                          class="w-full"
                          v-model="client.firstname"
                          required
                        />
                      </div>
                      <div class="grid gap-2">
                        <Label for="name">Last Name</Label>
                        <Input
                          id="lastname"
                          type="text"
                          class="w-full"
                          v-model="client.lastname"
                          required
                        />
                      </div>
                      <div class="grid gap-2">
                        <Label for="name">UserName</Label>
                        <Input
                          id="uname"
                          type="text"
                          class="w-full"
                          v-model="client.username"
                          required
                        />
                      </div>
                      <div class="grid gap-2">
                        <Label for="name">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          class="w-full"
                          v-model="client.email"
                          required
                        />
                      </div>
                      <div class="grid gap-2">
                        <Label for="phone" class="font-[400]">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          v-model="client.phone"
                          inputmode="numeric"
                          maxlength="12"
                          pattern="\d{3}"
                          oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                          class="dark:bg-[#09090b]"
                          required
                          
                        />
               </div>
                      <div class="grid gap-2">
                        <Label for="name">Address</Label>
                        <Input
                          id="address"
                          type="text"
                          class="w-full"
                          v-model="client.address"  
                          required
                        />
                      </div>
                      <div class="grid gap-2">
                        <Label for="name">Department</Label>
                        <Select v-model="client.department" required>
                      <SelectTrigger id="department" aria-label="Select Department">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IT">IT</SelectItem>
                        <SelectItem value="HR">HR</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Sales">Sales</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            </div>
            <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Client Status</CardTitle>
                </CardHeader>
                <CardContent> 
                  <div class="grid gap-6">
                    <div class="grid gap-3">
                      <Select v-model="client.status" required>
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">
                            Active
                          </SelectItem>
                          <SelectItem value="InActive">
                            InActive
                          </SelectItem>
                    
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card class="overflow-hidden">
                  <CardHeader class="w-[300px] h-[245px]">
                    <CardTitle>Client Images</CardTitle>
                    <div class="flex justify-center">
                      <img 
                            v-if="client.image" 
                            :src="client.image" 
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






