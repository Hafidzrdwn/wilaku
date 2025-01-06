<template>
  <div id="containerHero">
    <section class="relative flex flex-col-reverse items-center justify-between lg:flex-row">
      <div class="pt-8 image-container lg:w-[55%] w-[100%] h-full lg:h-[100vh]">
        <img class="hero-img" src="/images/hero-image.webp" alt="hero image">
      </div>
      <div
        class="lg:h-[100vh] h-full lg:w-[45%] lg:pt-0 pt-10 w-full lg:absolute relative hero-detail lg:ps-10 lg:pe-0 md:px-10 sm:px-10 xs:px-5 flex flex-col justify-center">
        <img class="lg:w-[275px] md:w-[250px] sm:w-[225px] xs:w-[200px]" src="/images/hero-logo.webp" alt="logo hero">
        <h4
          class="lg:w-[80%] md:w-[75%] sm:w-[85%] xs:w-[90%] mt-10 mb-6 font-semibold text-[#a35e21] lg:text-[20px] md:text-[24px] sm:text-[22px] xs:text-[19px]">
          Wingko Cita
          Rasa Nusantara, Berbahan
          Labu
          yang
          Sehat untuk
          Semuanya.</h4>
        <a href="#"
          class="p-4 font-bold btn-hero w-[90%] hover:w-full text-[#a35e21] lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[17px]">
          PESAN SEKARANG
          <span class="ms-1">>></span>
        </a>
      </div>
      <div class="box-overlay bg-gradient-to-t from-[#ffe6a1] to-[#ffe291]"></div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.image-container {
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  filter: contrast(1.2) hue-rotate(5deg);
}

.box-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: .5;
}

.hero-detail {
  top: 0;
  right: 0;
  z-index: 2;
}

.btn-hero {
  transition: all 0.3s;
  display: inline-block;
  background: linear-gradient(90deg, rgb(255, 195, 65), rgba(255, 195, 65, 0.788), rgba(255, 195, 65, 0.493), rgba(255, 195, 65, 0.233), rgba(255, 195, 65, 0));
}

.btn-hero span {
  transition: margin-left 0.3s;
}

.btn-hero:hover {
  background: linear-gradient(90deg, rgb(255, 195, 65), rgba(255, 195, 65, 0.875), rgba(255, 195, 65, 0.625), rgba(255, 195, 65, 0.450), rgba(255, 195, 65, 0.289),
      rgba(255, 195, 65, 0));
}

.btn-hero:hover span {
  margin-left: 12px;
}
</style>