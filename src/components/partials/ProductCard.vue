<script setup>
defineProps({
  name: String,
  price: String,
  img: String
})

</script>
<template>
  <div>
    <div
      class="w-full max-w-sm py-6 border rounded-lg shadow px-9 border-white/50 bg-white/10 backdrop-blur-lg dark:bg-gray-800/70 dark:border-gray-700">
      <div class="flex flex-col items-center pb-2">
        <img class="h-[200px] border border-white/70 mb-3 rounded-full shadow-lg w-[200px]"
          :src="`/images/products/${img}`" alt="product image" />
        <div class="flex items-center justify-center mt-2 mb-3 icon-stars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8f6038" class="size-6" v-for="i in 5"
            :key="i">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <h5 class="mb-1 text-[17px] text-center text-[#a35e21] font-[600]" v-html="name"></h5>
        <p class="text-[17px] text-center text-[#a35e21] font-[500]">Rp. {{ price }}</p>
        <a href="#"
          class="inline-block mt-4 w-full px-4 py-3 text-[16px] text-[#a35e21] font-semibold text-center transition-all bg-[#fdf0d5] rounded-3xl hover:bg-[#ffecc6] focus:ring-2 focus:outline-none focus:ring-[#a35e21]">Pesan
          Sekarang</a>
      </div>
    </div>
  </div>
</template>

<style></style>