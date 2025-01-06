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
    <div class="relative overflow-hidden rounded-lg h-96">
      <!-- Item 1 -->
      <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <img src="/images/socials/instagram.webp"
          class="absolute block w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <img src="/images/socials/tiktok.webp"
          class="absolute block w-[600px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-[-15px] slide-indicator left-1/2 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full c-indicator" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full c-indicator" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="btn-prev absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-[-25px] group focus:outline-none"
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
      class="btn-next absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-[-25px] group focus:outline-none"
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

@media only screen and (max-width: 935px) {
  #default-carousel {
    width: 500px;
  }

  #default-carousel>.slide-indicator {
    bottom: 0;
  }
}

@media only screen and (max-width: 768px) {
  #default-carousel {
    width: 100%;
  }

  #default-carousel>.slide-indicator {
    bottom: -20px;
  }

  .btn-prev {
    left: 25px;
  }

  .btn-next {
    right: 25px;
  }

  .btn-prev>span,
  .btn-next>span {
    width: 50px;
    height: 50px;
  }

  .btn-prev>span>svg,
  .btn-next>span>svg {
    width: 20px;
    height: 20px;
  }
}

@media only screen and (max-width: 640px) {
  #default-carousel>.slide-indicator {
    bottom: 0;
  }

  .btn-prev {
    left: -50px;
  }

  .btn-next {
    right: -50px;
  }

  .btn-prev>span,
  .btn-next>span {
    width: 45px;
    height: 45px;
  }

  .btn-prev>span>svg,
  .btn-next>span>svg {
    width: 15px;
    height: 15px;
  }
}

@media only screen and (max-width: 580px) {
  #default-carousel {
    width: 90%;
  }

  #default-carousel>.slide-indicator {
    bottom: 30px;
  }
}

@media only screen and (max-width: 470px) {
  #default-carousel {
    width: 90%;
    height: 365px;
  }

  .btn-prev {
    left: -30px;
  }

  .btn-next {
    right: -30px;
  }

  .btn-prev>span,
  .btn-next>span {
    width: 35px;
    height: 35px;
  }

  .btn-prev>span>svg,
  .btn-next>span>svg {
    width: 10px;
    height: 10px;
  }

  #default-carousel>.slide-indicator {
    bottom: 25px;
  }
}

@media only screen and (max-width: 400px) {
  #default-carousel {
    width: 95%;
    height: max-content;
  }

  #default-carousel>.slide-indicator {
    bottom: 65px;
  }
}
</style>