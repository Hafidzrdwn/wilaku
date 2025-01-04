<script setup>

const props = defineProps({
  name: String,
  job: String,
  review: String,
  img: String
})
</script>

<template>
  <div class="w-[48%] min-h-[220px] py-6 px-4 bg-white rounded-xl shadow container relative">
    <div class="relative flex flex-col items-center">
      <div class="user-image absolute w-[80px] h-[80px] border border-white rounded-full shadow-lg"
        :style="{ backgroundImage: `url(/images/testimonials/${img})` }">
      </div>
      <p class="text-[14px] text-[#a35e21] font-[400] mt-6 mb-4">
        {{ review }}
      </p>
    </div>
    <div class="user-biodata">
      <h5 class="text-[17px] font-[600] text-[#a35e21]">{{ name }}</h5>
      <h6 class="text-[15px] font-[500] text-[#a35e21]">{{ job }}</h6>
    </div>
  </div>
</template>

<style scoped>
.user-image {
  border-width: 2px;
  top: -75px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container .user-biodata {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>