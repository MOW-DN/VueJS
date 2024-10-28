<script lang="ts">
import { useColorMode } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';

export default {
  name: 'MenuDarkLight',
  components: {
    Icon,
    Button
  },
  setup() {
    const mode = useColorMode();

    const toggleMode = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light';
    };

    return {
      mode,
      toggleMode
    };
  }
};
</script>

<template>
  
  <Button 
    @click="toggleMode" 
    variant="outline" 
    class="flex items-center justify-center border-none  bg-transparent rounded-full p-3"
  >
    <Icon 
      :icon="mode === 'light' ? 'bi:moon' : 'bi:sun'" 
      class="h-4 w-4" 
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
