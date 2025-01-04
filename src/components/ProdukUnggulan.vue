<template>
  <div id="containerAbout" class="relative">
    <section id="produkUnggulan" class="px-16 py-10">
      <h2 class="text-[30px] font-bold text-[#8f6038]">Produk Unggulan</h2>
      <div class="relative flex items-center justify-start mt-6 content-container">
        <div class="w-1/2 h-[500px] image-box rounded-tr-[100px]"></div>
        <div class="w-1/2 description-box bg-[#fdf0d5] pt-6 pb-7 px-8 flex flex-col">
          <h3>Bukan Sembarang</h3>
          <h3>Wingko Biasa !!</h3>
          <span class="divider"></span>
          <p class="text-[15px] text-justify text-[#8f6038] font-[500] ">
            WILA adalah inovasi modern dari wingko, makanan khas Lamongan, yang dikreasikan dengan bahan utama labu
            kuning dan bahan-bahan alami lainnya. Dengan kandungan kalori yang lebih rendah dan kadar gula yang
            minimal,
            WILA menjadi pilihan camilan sehat yang tetap mempertahankan cita rasa tradisional. Produk ini dirancang
            khusus untuk mendukung gaya hidup sehat, sehingga aman dikonsumsi oleh penderita diabetes, obesitas, atau
            siapa saja yang ingin menjaga keseimbangan nutrisi tanpa mengorbankan kenikmatan kuliner lokal. WILA
            adalah
            perpaduan sempurna antara tradisi, inovasi, dan kesehatan.
          </p>
          <a href="www.google.com"
            class="mt-6 btn-pesan bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px]">
            Pesan <span class="transition-all ms-1">>></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#containerAbout {
  z-index: 1;
}

#containerAbout::before {
  content: '';
  background: url('/images/bg-produk-unggulan.webp') no-repeat top center/cover;
  background-position-y: -50px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.content-container {
  margin-bottom: 100px;
}

.content-container>.image-box {
  background: url('/images/produk-unggulan.webp') no-repeat;
  background-size: cover;
  background-position-y: -200px;
  z-index: -1;
}

.content-container>.description-box {
  position: absolute;
  border-radius: 25px;
  top: 120px;
  right: 60px;
}

.content-container>.description-box::before {
  content: '';
  position: absolute;
  top: -35px;
  right: -35px;
  width: 100%;
  height: 100%;
  background: #b58754;
  border-radius: 25px;
  z-index: -1;
}

.description-box>h3 {
  font-size: 22px;
  font-weight: 600;
  color: #8f6038;
}

.description-box>.divider {
  display: block;
  width: 90px;
  height: 4px;
  background: #8f6038;
  margin: 15px 0 25px;
}

.description-box>.btn-pesan {
  display: inline-block;
  width: 175px;
  padding: 10px 20px;
  border-radius: 25px;
}

.description-box>.btn-pesan:hover span {
  margin-left: 7px;
}
</style>