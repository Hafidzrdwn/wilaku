<script setup>
import { ref } from 'vue'
import TestimoniCard from '@/components/partials/TestimoniCard.vue'
import timeToText from '@/helpers/time.js'

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

const greet = timeToText()
const txt = encodeURIComponent(`Halo Selamat ${greet}, Salam kenal, saya ingin bertanya-tanya mengenai produk WILAKU..`)
</script>

<template>
  <div id="containerTestimoni" class="relative w-full z-[1]">
    <section id="testimonial" class="text-center py-14 h-max">
      <h2 class="mb-28 text-[30px] font-bold px-7 py-2 rounded-full inline-block bg-[#ffde59] text-[#8f6038]">
        Testimoni Pelanggan</h2>

      <div class="flex items-center justify-between px-16 content-container">

        <div class="flex flex-wrap items-center justify-between w-[65%] testimonial-container gap-y-[5rem]">
          <TestimoniCard v-for="user in users" :key="user.id" :name="user.name" :job="user.job" :review="user.review"
            :img="user.image" />
        </div>
        <div class="w-[30%] h-[20%] chat-box p-6 bg-[#fdf0d5] text-[#a35e21] rounded-2xl">

          <p class="text-[22px] font-[600] mb-7">Anda masih ragu dengan produk kami?
            Yuk kita ngobrol bersama</p>
          <a :href="`https://wa.me/6285746055576?text=${txt}`" target="_blank"
            class="btn-chat inline-block w-full py-[10px] px-[20px] rounded-[25px] bg-[#ffb923] hover:bg-[#f7b934] transition-all text-[#a35e21] font-[600] text-center text-[17px]">
            Chat Admin <span class="transition-all ms-1">>></span>
          </a>
        </div>
      </div>

      <!-- chat icon -->
      <img src="/images/illustration-testimoni.svg"
        class="testimoni-illustration absolute top-[170px] right-[375px] w-[75px] rotate-45"
        alt="testimoni illustration">
    </section>
    <div class="w-full bg-overlay absolute bottom-0 z-[-1] bg-[#ffde5999] h-[21em]"></div>
  </div>
</template>

<style scoped>
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

.chat-box>.btn-chat:hover span {
  margin-left: 10px;
}

@media only screen and (max-width: 1215px) {
  .content-container {
    flex-direction: column;
    row-gap: 4rem;
  }

  .testimonial-container {
    width: 80%;
  }

  .chat-box {
    width: 50%;
    padding: 30px;
  }

  .chat-box>p {
    display: inline-block;
    width: 95%;
    text-align: center;
  }

  .testimoni-illustration {
    top: 150px;
    right: 75px;
  }
}

@media only screen and (max-width: 1024px) {
  .testimonial-container {
    width: 90%;
  }

  .chat-box {
    width: 75%;
    padding: 40px;
  }

  .chat-box>p {
    width: 100%;
  }

  .testimoni-illustration {
    top: 120px;
    right: 50px;
    width: 90px;
  }
}

@media only screen and (max-width: 922px) {
  .testimonial-container {
    width: 100%;
  }

  .testimoni-illustration {
    top: 100px;
    transform: rotate(35deg);
  }
}

@media only screen and (max-width: 768px) {
  .testimonial-container {
    width: 100%;
    justify-content: center;
  }

  .testimoni-card {
    flex: 0 1 80%;
    padding: 25px 50px;
  }

  h2 {
    font-size: 28px;
  }

  .testimoni-illustration {
    top: 130px;
    width: 85px;
  }

  .chat-box {
    width: 100%;
  }
}

@media only screen and (max-width: 640px) {
  .testimoni-card {
    flex: 0 1 100%;
  }

  .testimoni-illustration {
    top: 120px;
    width: 75px;
    right: 30px;
  }

  .chat-box {
    padding: 30px;
  }

  .chat-box>p {
    font-size: 18px;
  }
}

@media only screen and (max-width: 580px) {
  .content-container {
    padding-left: 40px;
    padding-right: 40px;
  }

  .testimoni-illustration {
    top: 130px;
    width: 65px;
    right: 25px;
  }
}

@media only screen and (max-width: 470px) {
  h2 {
    font-size: 22px;
  }

  .content-container {
    padding: 0 20px 0;
  }

  .testimoni-card {
    height: 260px;
  }

  .testimoni-illustration {
    top: 140px;
    width: 50px;
  }
}

@media only screen and (max-width: 405px) {
  .bg-overlay {
    height: 25em;
  }
}
</style>