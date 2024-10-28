<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useColorMode } from '@vueuse/core';
import MenuDarkLight from '@/components/admin/layouts/MenuDarkLight.vue'; 
import '../src/assets/main.css'; 

export default defineComponent({
  name: 'App',
  components: {
    MenuDarkLight, 
  },
  setup() {
    const mode = useColorMode();

    const toggleMode = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light';
    };


    return {
      toggleMode,
    };
  },
});
</script>
