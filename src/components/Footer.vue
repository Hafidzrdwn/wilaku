<script setup>
import FooterContent from '@/components/partials/FooterContent.vue'
</script>

<template>
  <div id="containerFooter" class="relative w-full min-h-screen bg-[#fdf0d5]">
    <section id="footer" class="flex flex-col items-center pt-24 h-max">
      <h2 class="mb-8 w-[70%] text-center text-[30px] font-bold text-[#8f6038]">
        Dapatkan Produk Kami Sekarang Juga dan Mulai Menjaga Budaya dan Kesehatan Bersama !!</h2>

      <a href="#"
        class="flex items-center justify-between shop-now py-4 px-8 bg-[#8f6038] hover:bg-[#79522f] text-[#fdf0d5] transition-all">
        <span class="text-[18px] font-[500]">Shop now</span>
        <img src="/images/icons/next.webp" alt="arrow right" class="ms-3 w-[18px] transition-all" />
      </a>

      <div class="w-full mt-[20px] footer-box">
        <FooterContent />
      </div>
    </section>
  </div>
</template>

<style scoped>
#containerFooter {
  z-index: 1;
}

#containerFooter::before {
  content: '';
  background-image: url('/images/bg-footer.webp');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.shop-now {
  box-shadow: 7px 7px 0 #fdf0d5;
}

.shop-now:hover {
  box-shadow: 13px 13px 0 #fdf0d5;
}

.shop-now:hover img {
  transform: translateX(3px);
}
</style>
