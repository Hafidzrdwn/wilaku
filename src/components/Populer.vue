<script setup>
import ProductCard from '@/components/partials/ProductCard.vue'
import { products as productsData } from '@/helpers/product.js'

const products = productsData
</script>

<template>
  <div id="containerPopuler">
    <section id="produkPopuler" class="pt-10">
      <h2 class="mb-14 ms-16 text-[30px] font-bold text-[#8f6038]">Produk Populer</h2>
      <div class="w-full h-[200px] box-highlight bg-[#b58754] relative">
        <div class="flex flex-wrap items-center justify-between px-16 content-container">
          <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
        </div>
      </div>

      <div class="box-highlight-sm w-full h-[200px] bg-[#b58754] hidden"></div>
    </section>
  </div>
</template>

<style scoped>
#produkPopuler {
  background: url('/images/bg-produk-populer.webp') no-repeat top center/cover;
  background-position-y: -150px;
  padding-bottom: 300px;
}

.content-container {
  position: absolute;
  width: 100%;
  top: -25px;
  z-index: 1;
}

.product-card {
  flex: 0 1 24%;
}

@media only screen and (max-width: 1240px) {
  #produkPopuler {
    padding-bottom: 780px;
    background-position-y: 0;
  }

  .content-container {
    row-gap: 2rem;
  }

  .product-card {
    flex: 0 1 calc(33% - 1em);
  }

  .product-card:nth-child(4n) {
    flex: 0 1 calc(50% - 1em);
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 1050px) {
  #produkPopuler {
    padding-bottom: 780px;
    background-position-y: 0;
  }

  h2 {
    font-size: 35px;
  }

  .product-card {
    flex: 0 1 calc(50% - 1em);
  }

  .product-card:nth-child(4n) {
    margin-left: unset;
    margin-right: unset;
  }
}

@media only screen and (max-width: 665px) {
  #produkPopuler {
    padding-bottom: 60px;
    position: relative;
  }

  h2 {
    font-size: 32px;
  }

  .box-highlight {
    height: max-content;
    background: transparent;
  }

  .box-highlight-sm {
    position: absolute;
    display: unset;
    top: 144px;
    z-index: -1;
    left: 0;
  }

  .content-container {
    position: initial;
    margin-top: -25px;
  }

  .product-card,
  .product-card:nth-child(4n) {
    flex: 0 1 100%;
  }
}

@media only screen and (max-width: 580px) {
  #produkPopuler {
    padding: 40px 0 60px;
  }

  h2 {
    margin-left: 40px;
  }

  .content-container {
    padding: 0 40px 0;
  }
}

@media only screen and (max-width: 470px) {
  h2 {
    font-size: 28px;
    text-align: center;
    margin-left: 0;
  }

  .content-container {
    padding: 0 20px 0;
  }
}

@media only screen and (max-width: 380px) {
  h2 {
    font-size: 24px;
  }
}
</style>