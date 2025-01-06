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

        <div class="flex mt-6 btn-group gap-x-6">
          <a href="https://www.instagram.com/wilaku.id" target="_blank"
            class="btn-followus bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px] space-x-2 flex justify-center items-center">
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
            class="btn-followus bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px] space-x-2 flex justify-center items-center">
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
    <img src="/images/illustration-promotion.webp"
      class="flying-icon-1 absolute top-[160px] left-[100px] w-[150px] -rotate-12" alt="flying icon 2">
    <img src="/images/illustration-follow.webp"
      class="flying-icon-2 absolute bottom-[160px] right-[65px] w-[160px] rotate-12" alt="flying icon 1">
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

.btn-group .btn-followus {
  width: max-content;
  padding: 12px 25px;
  border-radius: 25px;
}

@media only screen and (max-width: 1140px) {
  .flying-icon-1 {
    top: 120px;
    left: 60px;
  }

  .flying-icon-2 {
    bottom: 150px;
    right: 50px;
  }
}

@media only screen and (max-width: 1024px) {
  .detail-information>p {
    width: 70%;
  }

  .flying-icon-1,
  .flying-icon-2 {
    width: 120px;
  }

  .flying-icon-1 {
    left: 80px;
  }

  .flying-icon-2 {
    bottom: 200px;
    right: 25px;
  }
}

@media only screen and (max-width: 935px) {
  .detail-information {
    margin-top: 25px;
  }

  .bg-image>img {
    width: 700px;
  }

  .flying-icon-1,
  .flying-icon-2 {
    width: 90px;
  }

  .flying-icon-1 {
    left: 50px;
  }

  .flying-icon-2 {
    bottom: 220px;
    right: 25px;
  }
}

@media only screen and (max-width: 768px) {
  h2 {
    font-size: 30px;
  }

  .bg-image>img {
    width: 730px;
  }

  .detail-information {
    margin-top: 50px;
  }

  .detail-information>p {
    width: 80%;
  }

  .flying-icon-1 {
    left: 25px;
  }

  .flying-icon-2 {
    display: none;
  }
}

@media only screen and (max-width: 640px) {
  #social {
    padding-left: 64px;
    padding-right: 64px;
  }

  .bg-image>img {
    width: 100%;
  }

  .detail-information {
    margin-top: 25px;
  }

  .detail-information>p {
    width: 100%;
    font-size: 22px;
  }

  .btn-group {
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
  }

  .btn-group>.btn-followus {
    width: 100%;
  }

  .flying-icon-1 {
    width: 80px;
    top: 140px;
  }
}

@media only screen and (max-width: 580px) {
  #social {
    padding-left: 40px;
    padding-right: 40px;
  }

  h2 {
    margin-bottom: 0;
  }

  .bg-image>img {
    top: 125px;
  }

  .detail-information {
    margin-top: 0;
  }

  .detail-information>p {
    width: 100%;
    font-size: 20px;
  }

  .flying-icon-1 {
    width: 65px;
    top: 155px;
  }
}

@media only screen and (max-width: 470px) {
  h2 {
    font-size: 22px;
  }

  #social {
    padding-left: 20px;
    padding-right: 20px;
  }

  .bg-image>img {
    top: 145px;
  }

  .detail-information>p {
    font-size: 18px;
  }

  .flying-icon-1 {
    width: 50px;
    top: 140px;
  }
}

@media only screen and (max-width: 400px) {
  h2 {
    font-size: 24px;
  }

  .detail-information {
    margin-top: -35px;
  }

  .detail-information>p {
    font-size: 17px;
  }

  .flying-icon-1 {
    width: 60px;
    top: 150px;
  }
}
</style>