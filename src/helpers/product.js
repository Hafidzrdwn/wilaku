import { ref, watch } from 'vue';
import timeToText from '@/helpers/time.js';

const products = [
   {
    id: 1,
    name: 'WILA<br>(WINGKO LABU)',
    price: '15.000',
    image: '1.webp'
  },
  {
    id: 2,
    name: 'SANDRINK<br>(TROPICAL BLISS)',
    price: '12.000',
    image: '2.webp'
  },
  {
    id: 3,
    name: 'SANDRINK<br>(SWEET SUMMER SPLASH)',
    price: '12.000',
    image: '3.webp'
  },
  {
    id: 4,
    name: 'SANDRINK<br>(DETOX JUICE)',
    price: '15.000',
    image: '4.webp'
  }
]

const cart = ref(
  JSON.parse(atob(localStorage.getItem('cart') || 'W10=')) || []
);

watch(
  cart,
  (newCart) => {
    const base64data = btoa(JSON.stringify(newCart));
    localStorage.setItem('cart', base64data);
  },
  { deep: true }
);

function getCart() {
  return cart.value;
}

function order(id) {
  const product = products.find((product) => product.id === id);
  const existingProduct = cart.value.find((item) => item.id === id);
  if (existingProduct) {
    existingProduct.qty += 1;
    return;
  }

  if (product) {
    product.name = product.name.replace(/<br>/g, ' ');
    product.priceNum = parseInt(String(product.price).replace(/\D/g, ''), 10);
    product.qty = 1;
    cart.value.push(product);
  }
}

function countItems() {
  return cart.value.length;
}

function countPrice() {
  return cart.value.reduce((acc, item) => {
    return acc + item.priceNum * (item.qty || 1); 
  }, 0);
}

function updateQty(id, qty) {
  const product = cart.value.find((item) => item.id === id);
  if (product) {
    qty = parseInt(qty, 10);
    if (qty > 0) {
      product.qty = qty;
      cart.value = [...cart.value];
    }
  }
}

function deleteItems(id) {
  const index = cart.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.value.splice(index, 1);
    cart.value = [...cart.value];
  }
}

function openOrder() {
  var greet = timeToText();
  var txt = `Halo Selamat ${greet}, saya ingin melakukan pre-order produk Wilaku.\nBerikut detail pesanan saya:\nNama Pemesan: [Isi Nama Anda]\nProduk Pesanan:\n`;
  var numbering = 1;
  cart.value.forEach((item) => {
    txt += `${numbering++}. ${item.name} - ${item.qty}\n`;
  });

  txt += "... (tambahkan jika ada)\nMohon konfirmasi jika pesanan ini dapat diproses. Terima kasih!"
  window.open(
    `https://wa.me/6285746055576?text=${encodeURIComponent(txt)}`,
    '_blank'
  );

  // clear cart
  cart.value = [];
  localStorage.removeItem('cart');
}

export { products, countItems, order, countPrice, updateQty, deleteItems, getCart, openOrder };