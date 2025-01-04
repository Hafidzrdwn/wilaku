<script setup>
import { onMounted } from 'vue'
import { initCarousels } from 'flowbite'

onMounted(() => {
  initCarousels();
})
</script>
<template>
  <div id="default-carousel" class="relative w-[600px]" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <img src="/images/socials/instagram.webp"
          class="absolute block w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <img src="/images/socials/tiktok.webp"
          class="absolute block w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[-15px] left-1/2 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full c-indicator" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full c-indicator" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-[-25px] group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#a35e21]/75 group-hover:bg-[#a35e21]/100 group-focus:ring-4 group-focus:ring-[#fdf0d5] group-focus:outline-none">
        <svg class="w-4 h-4 text-[#fdf0d5] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-[-25px] group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#a35e21]/75 group-hover:bg-[#a35e21]/100 group-focus:ring-4 group-focus:ring-[#fdf0d5] group-focus:outline-none">
        <svg class="w-4 h-4 text-[#fdf0d5] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>


<style scoped>
#default-carousel {
  z-index: 1;
}

.c-indicator[aria-current="true"] {
  background-color: #a35e21;
}

.c-indicator[aria-current="false"] {
  background-color: rgb(161, 93, 33, .4);
}
</style>