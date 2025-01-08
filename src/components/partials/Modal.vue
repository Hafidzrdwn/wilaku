<script setup>
import Cart from '@/components/partials/Cart.vue'
import { computed, onMounted } from 'vue'
import { countPrice, getCart, openOrder } from '@/helpers/product.js'
import { initModals, Modal } from 'flowbite'

const totalPrice = computed(() => {
  const price = countPrice();
  return new Intl.NumberFormat('id-ID').format(price);
})

const carts = computed(() => getCart())

onMounted(() => {
  initModals();
});

const hideModal = (type) => {
  const modalElement = document.getElementById('static-modal');
  const modalInstance = (modalElement) ? new Modal(modalElement) : null;

  if (type === 'order') {
    let confirmOrder = confirm('Apakah anda yakin ingin melakukan order?');
    if (confirmOrder) {
      openOrder();
      modalInstance.hide();
    }

    return
  }

  modalInstance.hide();
}
</script>

<template>
  <!-- Main modal -->
  <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full p-4">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b rounded-t md:p-5">
          <h3 class="text-xl font-semibold text-[#8f6038]">
            Keranjang Pesanan Anda
          </h3>
          <button type="button" @click="hideModal"
            class="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-[#fdf0d5] hover:text-[#8f6038] ms-auto"
            data-modal-hide="static-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 space-y-3 md:p-5 h-[350px] overflow-y-auto modal-container">
          <p class="text-md text-note text-[#8f6038]/80">Catatan : anda akan otomatis diarahkan ke whatsapp untuk
            melakukan
            PO
            (Pre-order)
            setelah menekan tombol
            order.
          </p>
          <p class="text-lg font-medium text-[#8f6038]">
            Total Bayar : Rp. {{ totalPrice }}
          </p>
          <Cart v-for="c in carts" :key="c.id" v-bind="c" />
        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end gap-3 p-4 border-t border-gray-200 rounded-b md:p-5">
          <button data-modal-hide="static-modal" type="button" @click="hideModal"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-500 rounded-lg hover:bg-red-600 transition-all focus:z-10 focus:ring-4 focus:ring-red-200 active:scale-95">Tutup</button>
          <button data-modal-hide="static-modal" type="button" @click="hideModal('order')"
            class="text-white bg-[#8f6038] hover:bg-[#7e5531] transition-all focus:ring-4 focus:outline-none focus:ring-[#7e5531]/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center active:scale-95">Order
            sekarang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  h3 {
    font-size: 17px;
  }

  .text-note {
    font-size: 14px;
  }

  .modal-container {
    height: 450px;
  }
}
</style>