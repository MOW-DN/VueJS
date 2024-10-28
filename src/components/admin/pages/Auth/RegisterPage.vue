<template>
  <div class="flex items-center justify-center min-h-screen dark:bg-[#09090b]">
    <div class="transform scale-90"> 
      <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Create Account ::</h2>
      
      <Card class="mx-auto w-[1000px] max-w-md p-4 dark:bg-[#09090b] hover:border-black dark:hover:border-white">
        <CardHeader>
          <CardDescription class="text-center font-[350] text-slate-950 dark:text-[#fff]">
            Get Started with Us! Create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="RegisterClient">
            <div class="grid gap-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="first-name" class="font-[400]">First name</Label>
                  <Input id="first-name" type="text" v-model="firstName" class="dark:bg-[#09090b]" required />
                </div>
                <div class="grid gap-2">
                  <Label for="last-name" class="font-[400]">Last name</Label>
                  <Input id="last-name" type="text" v-model="lastName" class="dark:bg-[#09090b]" required />
                </div>
              </div>
              
              <div class="grid gap-2">
                <Label for="email" class="font-[400]">Email</Label>
                <Input id="email" type="email" v-model="email" required class="dark:bg-[#09090b]" />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="username" class="font-[400]">Username</Label>
                  <Input id="username" type="text" v-model="username" class="dark:bg-[#09090b]" required />
                </div>
                <div class="grid gap-2">
                  <Label for="department" class="font-[400]">Department</Label>
                  <Select v-model="department" required>
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

              <div class="grid gap-2">
                <Label for="phone" class="font-[400]">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  v-model="phone"
                  class="dark:bg-[#09090b]"
                  required
                  pattern="[0-9+() -]*"
                  @input="phone = phone.replace(/[^0-9+() -]/g, '')"
                />
              </div>

              <div class="grid gap-2">
                <Label for="address" class="font-[400]">Address</Label>
                <Input id="address" type="text" v-model="address" required class="dark:bg-[#09090b]" />
              </div>
              
              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password" class="font-[400]">Choose password 
                    <span class="font-[100] text-[14px]">8 or more characters, one number and a mix of lowercase and uppercase letters</span>
                  </Label>
                </div>
                <div class="relative">
                  <Input 
                    id="password" 
                    :type="showPassword ? 'text' : 'password'" 
                    v-model="password"
                    class="dark:bg-[#09090b]" 
                    required 
                  />
                  <button 
                    type="button" 
                    class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent" 
                    @click="togglePasswordVisibility"
                  >
                    <component :is="showPassword ? 'EyeIcon' : 'EyeOffIcon'" class="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <Button 
                type="submit"  
                :disabled="!isFormValid"  
                class="w-full text-[#fff] dark:text-[#000] bg-[#09090b] dark:bg-[#fff] dark:hover:bg-amber-100 hover:bg-amber-100 hover:text-black hover:border hover:border-black">
                Sign Up
              </Button>
            </div>
          </form>
          <div class="mt-4 text-center text-sm">
            Already have an account?
            <router-link to="/login" class="hover:underline">LOG IN</router-link>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';

export default {
  name: 'RegPage',
  components: {
    Button,
    Input,
    Label,
    Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    EyeIcon,
    EyeOffIcon
  },
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      department: '',
      phone: '',
      address: '',
      password: '',
      showPassword: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.username &&
        this.department &&
        this.address &&
        this.password
      );
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async RegisterClient() {
      const payload = {
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        username: this.username,
        phone: this.phone,
        address: this.address,
        password: this.password,
        department: this.department,
      };
      
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/registeruser', payload);
        if (response.status === 201) {
          console.log('Client registered successfully', response.data);
          this.$router.push('/login')
        } else {
          console.error('Registration failed', response.data);
        }
      } catch (error) {
        console.error('Error during registration', error);
      }
    }
  }
};
</script>

