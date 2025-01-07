<script setup>
import FooterContent from '@/components/partials/FooterContent.vue'
</script>

<template>
  <div id="containerFooter" class="relative w-full bg-[#fdf0d5]">
    <section id="footer" class="flex flex-col w-full h-max">
      <div class="px-16 pt-24 pb-16 footer-content">
        <h2 class="mb-8 w-[70%] mx-auto text-center text-[30px] font-bold text-[#8f6038]">
          Dapatkan Produk Kami Sekarang Juga dan Mulai Menjaga Budaya dan Kesehatan Bersama !!</h2>

        <a href="#"
          class="flex items-center w-[225px] mx-auto justify-center shop-now py-4 px-8 bg-[#8f6038] hover:bg-[#79522f] text-[#fdf0d5] transition-all">
          <span class="text-[18px] font-[500]">Shop now</span>
          <img src="/images/icons/next.webp" alt="arrow right" class="ms-3 w-[18px] transition-all" />
        </a>
      </div>

      <div class="w-full footer-box">
        <FooterContent />
      </div>
    </section>
  </div>
</template>

<style scoped>
.footer-content {
  background-image: url('/images/bg-footer.webp');
  background-size: cover;
  background-position: center;
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

@media only screen and (max-width: 1180px) {
  h2 {
    width: 85%;
  }
}

@media only screen and (max-width: 1024px) {
  h2 {
    width: 90%;
  }
}

@media only screen and (max-width: 920px) {
  h2 {
    width: 100%;
    font-size: 28px;
  }

  .footer-content {
    padding: 6rem 2.5rem 4rem;
  }
}

@media only screen and (max-width: 768px) {
  h2 {
    font-size: 26px;
  }

  .shop-now {
    width: 200px;
  }
}

@media only screen and (max-width: 580px) {
  h2 {
    font-size: 24px;
  }

  .footer-content {
    padding: 6rem 20px 4rem;
  }

  .shop-now {
    width: 180px;
    padding: 1rem .5rem;
  }
}

@media only screen and (max-width: 470px) {
  h2 {
    font-size: 20px;
  }
}
</style>
