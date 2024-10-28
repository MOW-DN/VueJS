<script lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from '@/components/ui/pin-input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import axios from 'axios';

export default {
  name: 'PswResetPage',
  components: {
    Button,
    Input,
    Label,
    PinInput,
    PinInputGroup,
    PinInputInput,
    Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  },
  data() {
    return {
      email: "",
      password:"",
      password_confirmation:"",
      showOtpModal: false,   
      showPasswordReset:false,
      otp: [],                   
    };
  },
  methods: {
  async  CheckOtp() {
    try {
    const email = localStorage.getItem('email');
    const payload = {email, otp: this.otp.join('')}; 
    const response = await axios.post('http://127.0.0.1:8000/api/checkotp', payload);
    if (response.data.success) {
      this.showPasswordReset = true; 
      this.showOtpModal = false; 
      this.otp = [];
      
    } else {
      console.error('Invalid OTP');
    }
  } catch (error) {
    console.error('OTP verification failed', error);
  }

    },
    
   
    async SentOtp() {
      try {
        const payload = { email: this.email };
        await axios.post('http://127.0.0.1:8000/api/sentotp', payload);
        localStorage.setItem('email',this.email);
        this.showOtpModal = true; 
        this.email ="";
      } catch (error) {
        console.error('Otp Reset failed', error);
      }
    },
    async ResetPassword() {
      try {
    const email = localStorage.getItem('email');

    const password = this.password; 
    const password_confirmation = this.password_confirmation; 

    const payload = {
      email,
      password: password,
      password_confirmation: password_confirmation 
    };

    const response = await axios.post('http://127.0.0.1:8000/api/resetpass', payload);

    if (response.data.success) {
      localStorage.removeItem('email'); 
      this.$router.push('/login'); 
    } else {
    
      console.error(response.data.error);
    }
  } catch (error) {
    console.error('Password reset failed:', error);
  }
    },

    handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        this.SentOtp();
      }
    },
  },
};
</script>










<template>
  <div class="flex items-center justify-center min-h-screen dark:bg-[#09090b]">
    <div class="transform scale-90"> 
      <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
        Forgotten Password ::
      </h2>
      
      <Card class="mx-auto w-[1000px] max-w-md p-4 dark:bg-[#09090b] hover:border-black dark:hover:border-white flex flex-col">
        <CardHeader>
          <CardDescription class="text-center font-[350] text-slate-950 dark:text-[#fff]">
            Enter your email address to reset your password.
          </CardDescription>
        </CardHeader>
        
        <CardContent class="flex-grow">
          <div class="grid gap-4">
  <div class="grid gap-2">
    <Label for="email" class="font-[400]">Email</Label>
    <Input
      id="email"
      type="email"
      v-model="email"
      required
      @keydown.enter="handleKeyPress"
      class="dark:bg-[#09090b]"
    />
  </div>

  <Button 
    type="button" 
    @click="SentOtp" 
    :disabled="!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)" 
    class="w-full text-[#fff] dark:text-[#000] bg-[#09090b] dark:bg-[#fff] dark:hover:bg-amber-100 hover:bg-amber-100 hover:text-black hover:border hover:border-black"
  >
    Send Otp
  </Button>
  
          </div>

          <div class="flex items-center my-3">
            <div class="flex-grow border-t border-gray-300"></div>
            <div class="mx-4 text-center">Or</div>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          
          <router-link to="/registration">
            <div class="text-center p-3 hover:text-gray-500">Create new account</div>
          </router-link>
        </CardContent>
  
        <router-link to="/login">
          <div class="w-full text-center border border-black dark:border-white bg-transparent py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            Back to Login
          </div>
        </router-link>
      </Card>

      <Dialog v-model:open="showOtpModal">
      
    <DialogContent class="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle class="text-md font-extralight">Password Otp verification </DialogTitle>
        <h2 class="text-[16px] font-normal">To access the reset password, please enter the Otp</h2>

      </DialogHeader>
      <div class="grid gap-4 py-4 justify-center">
        
        <PinInput
            id="pin-input"
            v-model="otp"
            placeholder="○"
            @complete="CheckOtp"
          >
            <PinInputGroup class="gap-1">
              <template v-for="(id, index) in 6" :key="id">
                <PinInputInput
                  class="rounded-md border bg-black"
                  :index="index"
                />
                <template v-if="index !== 4">
                  <PinInputSeparator />
                </template>
              </template>
            </PinInputGroup>
          </PinInput>
      </div>
   
    </DialogContent>
  </Dialog>
  <Dialog v-model:open="showPasswordReset">
  
      <DialogContent class="sm:max-w-[500px]">
       
        <div class="grid gap-4 py-4 justify-center">
          <Card class="border-none bg-transparent">
  <CardHeader>
    <CardTitle>Password</CardTitle>
    <CardDescription>
      Change your password here. After saving, you'll be logged out.
    </CardDescription>
  </CardHeader>
  <CardContent class="space-y-2">
    <div class="space-y-1">
      <Label for="current">New Password</Label>
      <Input id="current" type="password" v-model="password" />
    </div>
    <div class="space-y-1">
      <Label for="new">Confirmed Password</Label>
      <Input id="new" type="password" v-model="password_confirmation" />
    </div>
  </CardContent>
  <CardFooter>
    <Button @click="ResetPassword">Save password</Button>
  </CardFooter>
</Card>

          
        </div>
     
      </DialogContent>
    </Dialog>
    </div>
  </div>
</template>