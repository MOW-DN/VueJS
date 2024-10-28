<script lang="ts">
import { EyeIcon, EyeOffIcon } from 'lucide-vue-next'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      user: null,
      showPassword: false,                    

    };
  },
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
    EyeIcon,
    EyeOffIcon
  },
  methods:{
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    async login() {
      
      
      try {
      
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('password', this.password);

        const response = await axios.post('http://127.0.0.1:8000/api/login', formData);

       
        this.user = response.data.data.user;

        localStorage.setItem('token', response.data.data.token);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed', error);

        
      }
    },

    handleKeyPress(event: KeyboardEvent){ {
      if (event.key === 'Enter') {
        this.login();
      }
  }

 
}
}
}
</script>

<template>
    
      <div class="flex items-center justify-center min-h-screen dark:bg-[#09090b]">
        <div class="transform scale-90"> 
          <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Login ::</h2>
          
          <Card class="mx-auto w-[1000px] max-w-md p-4 dark:bg-[#09090b] hover:border-black dark:hover:border-white" >
            <CardHeader>
              <CardDescription class="text-center font-[350] text-slate-950 dark:text-[#fff]">
                Welcom back! Please login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
            <form @submit.prevent="login">
              <div class="grid gap-4" >
                <div class="grid gap-2">
                  <Label for="email" class="font-[400]">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    class="dark:bg-[#09090b]"
                    v-model="email"
                    @keydown.enter="handleKeyPress"
                  />
                </div>
                <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password" class="font-[400]">Password
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
               
              
                  <Button type="submit" class="w-full text-[#fff] dark:text-[#000] bg-[#09090b] dark:bg-[#fff] dark:hover:bg-amber-100 hover:bg-amber-100 hover:text-black hover:border hover:border-black ">Login</Button>
              </div>
            </form>
              <div class="mt-4 text-center text-sm">
                Don't have an account?
                <router-link to="/registration" class="hover:underline">SIGN UP</router-link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
</template>
