<script setup>
import { ref } from 'vue'
import TestimoniCard from '@/components/partials/TestimoniCard.vue'

const users = ref([
  {
    id: 1,
    name: 'Ibu Ani Septi',
    job: 'Owner Resto Grid',
    review: 'Harga nya sangat sesuai dengan kualitas produknya, Bikin nagih emang, kalo pesen kayaknya lebih dari 2 pastii ini aku nantinya.',
    image: '1.webp'
  },
  {
    id: 2,
    name: 'Raden Jaelani',
    job: 'CEO PT. Gradak Maju',
    review: 'Wingkonya teksturnya emang beda dari wingko yang biasanya saya makan, rasa lebih unik dan kenyal. Apalagi ini cocok bua saya yang diabetes. mantap selalu wilaaa!!',
    image: '2.webp'
  },
  {
    id: 3,
    name: 'Kiara Flowyana',
    job: 'Influencer',
    review: 'ENAKKK SEKALIII MINUMANNYA SEGARR, saya juga ga ngerasa gatel ditenggorokan, asli pakai gula stevia sepertinya memang, top sandrink nya bakal beli lagi.',
    image: '3.webp'
  },
  {
    id: 4,
    name: 'Asgara Karang',
    job: 'Influencer',
    review: 'Amaze,,, awal nyoba karena kepo aja unik banget ternyata enakk, untuk harga terjangkauu dan ini aman buat aku yg ga suka gula tinggi, aman poll ini suka.',
    image: '4.webp'
  }
])

</script>

<template>
  <div id="containerTestimoni" class="relative w-full">
    <section id="testimonial" class="text-center py-14 h-max">
      <h2 class="mb-28 text-[30px] font-bold px-7 py-2 rounded-full inline-block bg-[#ffde59] text-[#8f6038]">
        Testimoni Pelanggan</h2>

      <div class="flex items-center justify-between px-16 content-container">

        <div class="flex flex-wrap items-center justify-between w-[65%] testimonial-container">
          <TestimoniCard v-for="user in users" :key="user.id" :name="user.name" :job="user.job" :review="user.review"
            :img="user.image" />
        </div>
        <div class="w-[30%] h-[20%] chat-box p-6 bg-[#fdf0d5] text-[#a35e21] rounded-2xl">

          <p class="text-[22px] font-[600] mb-7">Anda masih ragu dengan produk kami?
            Yuk kita ngobrol bersama</p>
          <a href="www.google.com"
            class="btn-chat bg-[#ffb923] hover:bg-[#f7b934] transition-all text-[#a35e21] font-[600] text-center text-[17px]">
            Chat Admin <span class="transition-all ms-1">>></span>
          </a>
        </div>
      </div>

      <!-- chat icon -->
      <img src="/images/illustration-testimoni.svg" class="absolute top-[170px] right-[375px] w-[75px] rotate-45"
        alt="testimoni illustration">
    </section>
    <div class="bg-overlay"></div>
  </div>
</template>

<style scoped>
#containerTestimoni {
  z-index: 1;
}

#containerTestimoni::before {
  content: '';
  background-image: url('/images/bg-testimoni.webp');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.bg-overlay {
  background: rgba(255, 222, 89, 0.6);
  width: 100%;
  height: 21em;
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.testimonial-container {
  row-gap: 5rem;
}

.chat-box>.btn-chat {
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  border-radius: 25px;
}

.chat-box>.btn-chat:hover span {
  margin-left: 10px;
}
</style>