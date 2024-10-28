<script>
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MenuDarkLight from '../layouts/MenuDarkLight.vue';

export default {
  name: 'TestPage',
  components: {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    MenuDarkLight
  },
  data() {
    return {
      defaultValue: 'item-1',
      accordionItems: [
        { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
        { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
        { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
      ]
    };
  }
};
</script>


<template>
  <div class="container py-8">
    <div class="text-right">
      <MenuDarkLight />

    </div>
    <div class="my-8">
    
      <Button variant="default">Click me</Button>
    </div>

    <section class="my-8">
      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
</template>
