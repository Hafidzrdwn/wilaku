<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import ProdukUnggulan from '@/components/ProdukUnggulan.vue'
import ProdukPopuler from '@/components/Populer.vue'
import Testimonial from '@/components/Testimonial.vue'
import Social from '@/components/Social.vue'
import Subscribe from '@/components/Subscribe.vue'
import Footer from '@/components/Footer.vue'

import CartBadge from '@/components/partials/CartBadge.vue'
import ModalComponent from '@/components/partials/Modal.vue'
import { countItems } from '@/helpers/product.js'

import { onMounted, computed, watch } from 'vue'
import { initFlowbite, Modal, initModals } from 'flowbite'

onMounted(() => {
  initFlowbite();
  initModals();
})

const countProduct = computed(() => countItems())

// hide modal when cart is empty
watch(
  countProduct,
  (newCount) => {
    if (newCount === 0) {
      const modalElement = document.getElementById('static-modal');
      if (modalElement) {
        const modalInstance = new Modal(modalElement);
        modalInstance.hide();
      }
    }
  },
  { immediate: true }
)
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

  <ModalComponent />
  <CartBadge v-show="countProduct > 0" :count="countProduct" />
</template>

<style scoped></style>
