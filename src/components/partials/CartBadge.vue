<script setup>
import { Modal, initModals } from 'flowbite'
import { onMounted } from 'vue'

defineProps({
  count: Number
})

onMounted(() => {
  initModals();
})

const modalElement = document.getElementById('static-modal');
const showModal = () => {
  if (modalElement) {
    const modalInstance = new Modal(modalElement);
    modalInstance.show();
  }
}

</script>
<template>
  <button type="button" @click="showModal" data-modal-target="static-modal" data-modal-toggle="static-modal"
    class="fixed bottom-[25px] right-[25px] z-[2] inline-flex items-center p-4 text-sm font-medium text-center text-[#fdf0d5] bg-[#a35e21] rounded-lg hover:bg-[#945a28] focus:outline-none focus:ring-0 active:scale-95 transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425z" />
    </svg>
    <span class="ms-1">Keranjang</span>
    <div
      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-2">
      {{ count }}</div>
  </button>
</template>
