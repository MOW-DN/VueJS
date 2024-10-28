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
import SideBarSetting from './SideBarSettings.vue'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon , CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import {cn} from '@/lib/utils'
import {
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'
import { ref, computed } from 'vue';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/toast'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

export default {
  name: 'AccountSetting',
  components: {
    toast,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CaretSortIcon,
    CheckIcon,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormItem,
    FormMessage,
    DateFormatter,
    getLocalTimeZone,
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger,
    CalendarIcon,
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
  setup() {
    const df = new DateFormatter('en-US', {
      dateStyle: 'long',
    });

    const value = ref(null); 

    const formattedDate = computed(() => {
      return value.value ? df.format(value.value.toDate(getLocalTimeZone())) : "Pick a date";
    });
    const languages = [
  { label: 'Arabic', value: 'ar' },   
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] 
const formSchema = toTypedSchema(z.object({
  language: z.string({
    required_error: 'Please select a language.',
  }),
}))
const { handleSubmit, setFieldValue, values } = useForm({
      validationSchema: formSchema,
      initialValues: {
        language: '',
      },
    });
const onSubmit = handleSubmit((values) => {
      toast({
        title: 'You submitted the following values:',
        description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
        position: 'bottom',
        duration: 5000,
      });
    });
    return {
      cn,
      value,
      formattedDate,
      languages,
      formSchema,
      handleSubmit,
      setFieldValue,
      values,
      onSubmit
    };
  },

  methods: {
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

    <div class="space-y-6">
        <div class="grid gap-2 grid-cols-2 ">
                    <div class="grid gap-2">
                      <h3 class="text-lg font-medium">Account</h3>
                      <p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
                    </div>
                    <div class="grid gap-2">
                      <div class="hidden items-right gap-2 md:ml-auto md:flex">
                
                <Button size="sm" @click="onsubmit">
                       Save
                   </Button>
               </div>
                        
                        
                    </div>
                  </div>
                    
        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
        <form class="space-y-8" @submit.prevent="onsubmit">
            <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rko:-form-item">Name</label>
                <input required type="text" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" id=":rko:-form-item" aria-describedby=":rko:-form-item-description" aria-invalid="false" name="name">
                </div>
                <div class="space-y-2 flex flex-col">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rkp:-form-item">Date of birth</label>
                    <Popover required>
                  <PopoverTrigger as-child>
                    <Button
                      variant="outline"
                      :class="cn(
                        'w-[280px] justify-start text-left font-normal bg-transparent',
                        !value && 'text-muted-foreground'
                      )"
                      required
                    >
                      <CalendarIcon class="mr-2 h-4 w-4" />
                      {{ formattedDate }}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-auto p-0 ">
                    <Calendar v-model="value" initial-focus />
                  </PopoverContent>
                   </Popover>
                    </div>
                    <div class="space-y-2 flex flex-col">
                      
                      <FormField name="language" required>
                        <FormItem class="flex flex-col">
                          <FormLabel>Language</FormLabel>
                          <Popover>
                            <PopoverTrigger as-child>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  class=" bg-transparent"
                                  :class="cn('w-[200px] justify-between', !values.language && 'text-muted-foreground')"
                                >
                                  {{ values.language ? languages.find(
                                    (language) => language.value === values.language,
                                  )?.label : 'Select language...' }}
                                  <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent class="w-[200px] p-0">
                              <Command >
                                <CommandInput placeholder="Search language..." />
                                <CommandEmpty>Nothing found.</CommandEmpty>
                                <CommandList>
                                  <CommandGroup >
                                    <CommandItem
                                      v-for="language in languages"
                                      :key="language.value"
                                      :value="language.label"
                                      @select="() => {
                                        setFieldValue('language', language.value)
                                      }"
                                    >
                                      {{ language.label }}
                                      <CheckIcon
                                        :class="cn('ml-auto h-4 w-4', language.value === values.language ? 'opacity-100' : 'opacity-0')"
                                      />
                                    </CommandItem>
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          
                          <FormMessage />
                        </FormItem>
                      </FormField>

    




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