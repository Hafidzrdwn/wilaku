<script setup>
import { computed, ref, watch } from 'vue'
import { updateQty, deleteItems } from '@/helpers/product.js'

const props = defineProps({
  id: Number,
  name: String,
  price: String,
  image: String,
  qty: Number,
  priceNum: Number
})

const localQty = ref(props.qty);
watch(() => props.qty, (newQty) => {
  localQty.value = newQty;
});

const pricePerItem = computed(() => {
  return Intl.NumberFormat('id-ID').format(localQty.value * props.priceNum)
})

let timeoutId = null;
const changeQty = () => {
  const qty = parseInt(localQty.value, 10);
  if (qty < 1) {
    localQty.value = props.qty;
    return;
  }

  if (!isNaN(qty)) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      updateQty(props.id, qty);
    }, 500);
  }
}

const deleteCart = () => {
  deleteItems(props.id);
}
</script>

<template>
  <div class="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow sm:py-4">
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200">
        <li class="py-3 sm:py-4">
          <div class="flex items-center large-container">
            <div class="flex-shrink-0">
              <img class="w-12 h-12 rounded-full" :src="`/images/products/${image}`" alt="Product image">
            </div>
            <div class="flex-1 min-w-0 ms-4 max-w-[180px] me-auto">
              <p class="text-md mb-[2px] font-medium text-[#8f6038] truncate">
                {{ name }}
              </p>
              <p class="text-[#8f6038]/80 truncate text-md">
                Rp. {{ price }}
              </p>
            </div>
            <input type="number" id="number-input" aria-describedby="helper-text-explanation"
              class="bg-gray-50 me-3 border border-gray-300 text-[#8f6038] text-sm focus:ring-0 rounded-lg focus:border-[#8f6038] block w-[110px] p-2.5"
              placeholder="jumlah" v-model="localQty" min="1" @input="changeQty" required />
            <div class="inline-flex items-center text-base font-semibold text-[#8f6038]">
              <span>Rp. {{ pricePerItem }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 cursor-pointer ms-6" @click.prevent="deleteCart"
                viewBox="0 0 16 16">
                <path fill="#EF4444" d="M14.5 4h-13c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h13c.28 0 .5.22.5.5s-.22.5-.5.5" />
                <path fill="#EF4444"
                  d="m11.02 3.81l-.44-1.46a.5.5 0 0 0-.48-.36H5.9a.5.5 0 0 0-.48.36l-.44 1.46l-.96-.29l.44-1.46C4.65 1.42 5.23.99 5.9.99h4.2c.67 0 1.24.43 1.44 1.07l.44 1.46z" />
                <path fill="#EF4444"
                  d="M11.53 15H4.47c-.81 0-1.47-.64-1.5-1.45l-.34-9.87l1-.03l.34 9.87c0 .27.23.48.5.48h7.07c.27 0 .49-.21.5-.48l.34-9.87l1 .03l-.34 9.87c-.03.81-.69 1.45-1.5 1.45Z" />
                <path fill="#EF4444"
                  d="M6.5 11.62c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5m3 0c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5" />
              </svg>
            </div>
          </div>
          <div class="relative flex-col justify-center hidden gap-4 small-container">
            <div class="flex items-center detail-product w-[85%]">
              <div class="flex-shrink-0">
                <img class="w-12 h-12 rounded-full" :src="`/images/products/${image}`" alt="Product image">
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="font-medium mb-[2px] text-[#8f6038] truncate text-md">
                  {{ name }}
                </p>
                <p class="text-md text-[#8f6038]/80 truncate">
                  Rp. {{ price }}
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between product-order">
              <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-[#8f6038] text-sm focus:ring-0 rounded-lg focus:border-[#8f6038] block w-1/2 p-2.5"
                placeholder="jumlah" v-model="localQty" min="1" @input="changeQty" required />
              <div class="inline-flex items-center text-base font-semibold text-[#8f6038]">
                <span>Rp. {{ pricePerItem }}</span>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 right-0 w-6 h-6 cursor-pointer"
              @click.prevent="deleteCart" viewBox="0 0 16 16">
              <path fill="#EF4444" d="M14.5 4h-13c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h13c.28 0 .5.22.5.5s-.22.5-.5.5" />
              <path fill="#EF4444"
                d="m11.02 3.81l-.44-1.46a.5.5 0 0 0-.48-.36H5.9a.5.5 0 0 0-.48.36l-.44 1.46l-.96-.29l.44-1.46C4.65 1.42 5.23.99 5.9.99h4.2c.67 0 1.24.43 1.44 1.07l.44 1.46z" />
              <path fill="#EF4444"
                d="M11.53 15H4.47c-.81 0-1.47-.64-1.5-1.45l-.34-9.87l1-.03l.34 9.87c0 .27.23.48.5.48h7.07c.27 0 .49-.21.5-.48l.34-9.87l1 .03l-.34 9.87c-.03.81-.69 1.45-1.5 1.45Z" />
              <path fill="#EF4444"
                d="M6.5 11.62c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5m3 0c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .large-container {
    display: none;
  }

  .small-container {
    display: flex;
  }
}
</style>
