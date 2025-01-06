<template>
  <div id="containerAbout" class="relative z-[1]">
    <section id="produkUnggulan" class="px-16 py-10">
      <h2 class="text-[30px] font-bold text-[#8f6038]">Produk Unggulan</h2>
      <div class="relative flex items-center justify-start mt-6 content-container xl:pb-[100px]">
        <div
          class="w-1/2 h-[500px] image-box rounded-tr-[100px] z-[-1] bg-[url('/images/produk-unggulan.webp')] bg-no-repeat bg-cover">
        </div>
        <div
          class="w-1/2 description-box bg-[#fdf0d5] pt-6 pb-7 px-8 flex flex-col absolute rounded-[25px] top-[120px] right-[60px]">
          <h3 class="text-[22px] font-[600] text-[#8f6038]">Bukan Sembarang<br>Wingko Biasa !!</h3>
          <span class="divider block w-[90px] h-[4px] bg-[#8f6038] mt-[15px] mb-[25px]"></span>
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
            class="mt-6 group inline-block w-[175px] py-[10px] px-[20px] rounded-[25px] btn-pesan bg-[#8f6038] hover:bg-[#7e5531] transition-all text-[#fdf0d5] hover:text-[#fff6e3] font-[600] text-center text-[17px]">
            Pesan <span class="group-hover:ms-[7px] transition-all ms-1">>></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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

.content-container>.image-box {
  background-position-y: -200px;
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

@media only screen and (max-width: 1200px) {
  #containerAbout:before {
    background-position-y: 0;
  }

  .content-container {
    padding-bottom: 140px;
  }

  .content-container>.image-box {
    background-position-y: -170px;
  }
}

@media only screen and (max-width: 1024px) {
  .content-container>.image-box {
    background-position-y: -120px;
  }

  .content-container {
    padding-bottom: 190px;
  }

  h2 {
    font-size: 35px;
  }
}

@media only screen and (max-width: 923px) {
  .content-container {
    flex-direction: column;
    padding-bottom: 440px;
    align-items: start;
  }

  .content-container>.image-box {
    width: 75%;
    border-radius: 25px;
    background-position-y: -220px;
  }

  .content-container>.description-box {
    top: 380px;
    right: 0;
    width: 65%;
  }

  .content-container>.description-box::before {
    top: -25px;
    right: -25px;
  }
}

@media only screen and (max-width: 768px) {
  .content-container {
    padding-bottom: 50px;
    align-items: center;
  }


  .content-container>.image-box {
    width: 100%;
    height: 400px;
    background-position-y: -280px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .content-container>.description-box {
    position: relative;
    top: -20px;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .content-container>.description-box::before {
    top: 30px;
    right: 0;
  }

  @media only screen and (max-width: 665px) {
    h2 {
      font-size: 32px;
    }

    .content-container>.image-box {
      background-position-y: -210px;
    }
  }

  @media only screen and (max-width: 580px) {
    #produkUnggulan {
      padding: 40px;
    }

    .content-container {
      padding-bottom: 20px;
    }

    .content-container>.image-box {
      height: 475px;
      background-position-y: -190px;
    }

    .content-container>.description-box {
      top: -150px;
    }
  }

  @media only screen and (max-width: 470px) {
    #produkUnggulan {
      padding: 40px 20px 0;
    }

    h2 {
      font-size: 28px;
      text-align: center;
    }

    .content-container {
      padding-bottom: 650px;
    }

    .content-container>.image-box {
      height: 350px;
      background-position-y: -140px;
    }

    .content-container>.description-box {
      position: absolute;
      top: unset;
      bottom: 100px;
    }
  }

  @media only screen and (max-width: 380px) {
    h2 {
      font-size: 24px;
    }

    .content-container {
      padding-bottom: 700px;
    }

    .content-container>.image-box {
      height: 400px;
      background-position-y: -120px;
    }
  }
}
</style>