<script setup>
import { ref } from 'vue'
import timeToText from '@/helpers/time.js'

const listItems = ref([
  { name: 'Home', link: 'containerHero' },
  { name: 'About', link: 'containerAbout' },
  { name: 'Product', link: 'containerPopuler' },
  { name: 'Contact', link: '#' },
])

let offset = ref(90)
const scrollTo = (targetId) => {
  if (targetId === '#') {
    const greet = timeToText()
    const txt = encodeURIComponent(`Halo Selamat ${greet}, Salam kenal, saya ingin bertanya-tanya mengenai produk WILAKU..`)
    window.open('https://wa.me/6285746055576?text=' + txt, '_blank')
    return
  }

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset.value,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <nav class="sticky top-0 z-20 w-full bg-[#8f6038] xl:px-16 lg:px-14 md:px-6 sm:px-0 start-0">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <a href="#containerHero" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img class="w-[50px] md:w-[60px]" src="/images/navbar_logo.webp" alt="logo navbar wilaku">
        <div class="logo-brand">
          <p class="brand-header font-[700] text-[#fdf0d5] text-[14px] md:text-[16px]">CV SANDYA ADI INDONESIA</p>
          <p class="m-0 text-[#ffde59] text-[12px] md:text-[15px] brand-subheader">"Sehat dan Berbudaya"</p>
        </div>
      </a>
      <div class="flex space-x-3 md:order-1 md:space-x-0 rtl:space-x-reverse">
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-[#fdf0d5] rounded-lg md:hidden hover:bg-[#ffde59] hover:text-[#8f6038] transition-all focus:outline-none focus:ring-2 focus:ring-[#fdf0d5]"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 mt-4 text-[16px] font-[600] border border-[#fdf0d5] rounded-lg md:p-0 xl:space-x-14 lg:space-x-14 md:space-x-12 sm:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li v-for="item in listItems" :key="item.name">
            <a :href="'#' + item.link"
              class="block px-3 py-2 text-[#fdf0d5] hover:bg-[#fdf0d5] hover:text-[#8f6038] md:hover:bg-transparent rounded md:bg-transparent md:hover:text-[#ffde59] md:p-0"
              aria-current="page" @click.prevent="scrollTo(item.link)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
