<script setup>
import { ref } from 'vue'
import Carousel from '@/components/partials/Carousel.vue'
</script>

<template>
  <div id="containerSocial" class="relative w-full">
    <section id="social" class="py-14 h-max">
      <h2 class="mb-6 text-[36px] text-center font-bold text-[#8f6038]">
        Jangan Sampai<br>
        Ketinggalan Info Kami!
      </h2>
      <div class="flex items-center justify-center w-full carousels">
        <Carousel />
      </div>
      <div class="flex flex-col items-center justify-center mt-12 text-center detail-information">
        <p class="text-[#8f6038] text-[19px] font-[500] w-[50%]">
          Dijamin kamu, ga akan ketinggalan update info terbaru dan terseru bareng kami, kamu juga bisa lebih dekat
          dengan
          kami dengan interaksi kita nantinya melalui beberapa media sosial kami yang tersedia.
        </p>

        <div class="flex btn-group gap-x-6">
          <a href="https://www.instagram.com/wilaku.id" target="_blank"
            class="mt-6 btn-followus bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px] space-x-2 flex justify-center items-center">
            <img src="/images/icons/ig-icons.webp" class="w-[28px]" alt="icon link">
            <p class="m-0">Follow Us on Instagram</p>
            <span class="transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="inline size-4">
                <path fill-rule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clip-rule="evenodd" />
              </svg></span>
          </a>
          <a href="https://www.tiktok.com/@wingkolamongan" target="_blank"
            class="mt-6 btn-followus bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px] space-x-2 flex justify-center items-center">
            <img src="/images/icons/tiktok-icons.webp" class="w-[28px]" alt="icon link">
            <p class="m-0">Follow Us on Tiktok</p>
            <span class="transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="inline size-4">
                <path fill-rule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clip-rule="evenodd" />
              </svg></span>
          </a>
        </div>

      </div>
    </section>

    <div class="bg-image">
      <img src="/images/illustration-social.webp" class="w-[750px] absolute top-24 left-1/2 -translate-x-1/2"
        alt="bg illustration">
    </div>

    <!-- flying icon -->
    <img src="/images/illustration-promotion.webp" class="absolute top-[160px] left-[100px] w-[150px] -rotate-12"
      alt="flying icon 2">
    <img src="/images/illustration-follow.webp" class="absolute bottom-[160px] right-[65px] w-[160px] rotate-12"
      alt="flying icon 1">
  </div>
</template>


<style scoped>
#containerSocial>.bg-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#containerSocial>.bg-image:after {
  content: '';
  background-color: rgb(255, 222, 89, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.detail-information .btn-followus {
  width: max-content;
  padding: 12px 25px;
  border-radius: 25px;
}
</style>