<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/partials/ProductCard.vue'

const products = ref([
  {
    id: 1,
    name: 'WILA<br>(WINGKO LABU)',
    price: '15.000',
    image: '1.webp'
  },
  {
    id: 2,
    name: 'SANDRINK<br>(TROPICAL BLISS)',
    price: '12.000',
    image: '2.webp'
  },
  {
    id: 3,
    name: 'SANDRINK<br>(SWEET SUMMER SPLASH)',
    price: '12.000',
    image: '3.webp'
  },
  {
    id: 4,
    name: 'SANDRINK<br>(DETOX JUICE)',
    price: '15.000',
    image: '4.webp'
  }
])
</script>

<template>
  <div id="containerPopuler">
    <section id="produkPopuler" class="pt-10">
      <h2 class="ms-16 mb-14 text-[30px] font-bold text-[#8f6038]">Produk Populer</h2>
      <div class="w-full h-[200px] box-highlight bg-[#b58754] relative">
        <div class="flex items-center justify-between px-16 content-container">
          <ProductCard v-for="p in products" :key="p.id" :name="p.name" :price="p.price" :img="p.image" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#produkPopuler {
  background: url('/images/bg-produk-populer.webp') no-repeat top center/cover;
  background-position-y: -150px;
  padding-bottom: 275px;
}

.content-container {
  position: absolute;
  width: 100%;
  height: max-content;
  top: -25px;
}
</style>