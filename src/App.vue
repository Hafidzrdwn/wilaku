<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import ProdukUnggulan from '@/components/ProdukUnggulan.vue'
import ProdukPopuler from '@/components/Populer.vue'
import Testimonial from '@/components/Testimonial.vue'
import Social from '@/components/Social.vue'
import Subscribe from '@/components/Subscribe.vue'
import Footer from '@/components/Footer.vue'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <Navbar />
  <Hero />
  <ProdukUnggulan />
  <ProdukPopuler />
  <Testimonial />
  <Social />
  <Subscribe />
  <Footer />
</template>

<style scoped></style>
