<script setup>
import { ref } from 'vue'
import MasonryGallery from '@/components/partials/MasonryGallery.vue'

const showAlert = () => alert('Coming Soon...')

const email = ref('')
const isError = ref(false)
const isLoading = ref(false)

const subscribeNow = () => {
  isLoading.value = true
  isError.value = false
  const emailValue = email.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(emailValue)) {
    isError.value = true
    isLoading.value = false
    return
  }

  const data = {
    Date: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'medium', hour12: false }),
    Email: emailValue
  };
  // make a form data and send to sheet
  const formData = new FormData()
  formData.append('Date', data.Date)
  formData.append('Email', data.Email)
  fetch(`https://script.google.com/macros/s/${import.meta.env.VITE_APP_SCRIPT_KEY}/exec`, {
    method: 'POST',
    body: formData
  }).then(res => {
    isLoading.value = false
    if (res.status === 200) {
      alert('Subscribe Success! Thank you for subscribing.')
      email.value = ''
      isError.value = false
    } else {
      alert('Failed to subscribe, please try again later.')
    }
  }).catch(err => {
    isLoading.value = false
    isError.value = false
    email.value = ''
    console.error(err)
    alert('Failed to subscribe, please try again later.')
  })
}
</script>

<template>
  <div id="containerSubscribe" class="relative w-full">
    <section id="subscribe" class="flex min-h-screen">
      <div class="flex flex-col justify-center w-1/2 ps-16 subscribe-detail pe-12 py-14">
        <img src="/images/sdgs.webp" alt="sdgs icons" class="w-[300px]">
        <h2 class="text-[30px] mt-3 font-bold text-[#8f6038]">
          Bergabung Keanggotaan Kami
        </h2>
        <p class="text-[#8f6038] mt-3 font-[500] text-[18px] text-justify leading-7">Kami mencari orang-orang
          yang
          bertekad
          untuk terus
          mendukung
          nilai budaya lokal
          indonesia melalui produk maupun kegiatan dukungan sosial kami bersama, yuk jadi pendukung bersama kami!</p>
        <div class="flex items-center w-full mt-6 h-max formkit-fields">
          <div class="relative w-full mr-3 formkit-field">
            <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
              <svg class="w-[22px] h-[22px] text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="#a35e21" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z">
                </path>
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z">
                </path>
              </svg>
            </div>
            <input id="member_email"
              class="block h-full w-full py-[15px] pl-12 text-[17px] text-[#a35e21] border-[5px] border-[#a35e21] formkit-input bg-white/40 placeholder-[#a35e21a2] focus:border-[#a35e21] focus:outline-none focus:ring-0"
              name="email_address" aria-label="Email Address" placeholder="Masukkan Alamat Email..." type="text"
              v-model="email">
          </div>
          <button data-element="submit" @click.prevent="subscribeNow" :disabled="isLoading"
            class="formkit-submit active:scale-[0.9] transition-all text-center text-[#fdf0d5] px-5 py-[20px] text-[17px] font-[500] bg-[#a35e21] hover:bg-[#a06735] disabled:bg[#a35e21]/60 disabled:cursor-not-allowed">
            <span>{{ isLoading ? 'Loading...' : 'Subscribe now' }}</span>
          </button>
        </div>
        <p v-if="isError" id="filled_error_help" class="mt-2 text-red-600 text-md dark:text-red-400"><span
            class="font-medium">Error!</span> Masukkan alamat email yang valid.</p>
      </div>
      <div class="relative flex flex-col justify-center w-1/2 image-gallery ps-10 pe-16 py-14">
        <MasonryGallery />
        <a href="" @click.prevent="showAlert"
          class="p-4 mt-6 font-bold btn-viewmore w-[90%] hover:w-full text-[#a35e21] lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[17px]">
          View More Photo
          <span class="ms-1">>></span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
#containerSubscribe {
  z-index: 1;
}

#containerSubscribe::before {
  content: '';
  background-image: url('/images/bg-subscribe.webp');
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.image-gallery::before {
  content: '';
  background-color: #b5875499;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.btn-viewmore {
  transition: all 0.3s;
  display: inline-block;
  background: linear-gradient(90deg, #ffde59, rgba(255, 222, 89, 0.788), rgba(255, 222, 89, 0.493), rgba(255, 222, 89, 0.233), rgba(255, 222, 89, 0));
}

.btn-viewmore span {
  transition: margin-left 0.3s;
}

.btn-viewmore:hover {
  background: linear-gradient(90deg, #ffde59, rgba(255, 222, 89, 0.875), rgba(255, 222, 89, 0.625), rgba(255, 222, 89, 0.450), rgba(255, 222, 89, 0.289), rgba(255, 222, 89, 0));
}

.btn-viewmore:hover span {
  margin-left: 12px;
}

.formkit-submit {
  width: 50%;
}

@media only screen and (max-width: 1185px) {
  .formkit-fields {
    flex-direction: column;
  }

  .formkit-field {
    margin-bottom: 15px;
    margin-right: 0;
  }

  .formkit-submit {
    width: 100%;
  }
}

@media only screen and (max-width: 830px) {
  #subscribe {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    padding-top: 56px;
  }

  .subscribe-detail {
    width: 100%;
    padding-right: 0;
    padding: 0 64px;
    margin-bottom: 35px;
  }

  .subscribe-detail>img {
    width: 350px;
  }

  .formkit-fields {
    flex-direction: row;
  }

  .formkit-field {
    margin-bottom: 0;
    margin-right: 12px;
  }

  .formkit-submit {
    width: 50%;
  }

  .image-gallery {
    width: 100%;
    padding-left: 0;
    padding: 35px 64px 56px;
  }

  .image-gallery::before {
    width: 100%;
    position: absolute;
    top: unset;
    bottom: 0;
  }
}

@media only screen and (max-width: 768px) {
  .bg-overlay {
    display: none;
  }

  .subscribe-detail {
    padding: 0 64px;
    margin-bottom: 35px;
  }

  .subscribe-detail>h2 {
    font-size: 28px;
  }

  .image-gallery {
    padding: 35px 64px 56px;
  }
}

@media only screen and (max-width: 580px) {
  .subscribe-detail {
    padding: 0 40px;
  }

  .image-gallery {
    padding: 35px 40px 56px;
  }

  .formkit-fields {
    flex-direction: column;
  }

  .formkit-field {
    margin-bottom: 15px;
    margin-right: 0;
  }

  .formkit-submit {
    width: 100%;
  }
}

@media only screen and (max-width: 470px) {

  .subscribe-detail,
  .image-gallery {
    padding-left: 20px;
    padding-right: 20px;
  }

  .subscribe-detail>img {
    width: 250px;
  }

  .subscribe-detail>h2 {
    font-size: 24px;
  }

  .subscribe-detail>p {
    font-size: 17px;
  }
}

@media only screen and (max-width: 400px) {
  .subscribe-detail>img {
    width: 225px;
  }

  .subscribe-detail>h2 {
    font-size: 22px;
  }

  .formkit-field>input {
    font-size: 18px;
  }

  .formkit-submit>span {
    font-size: 18px;
  }
}
</style>