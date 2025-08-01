let cart = [];
let total = 0;

// Sound Effects
const clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const hoverSound = new Audio("https://www.fesliyanstudios.com/play-mp3/6555");
const bgMusic = new Audio("https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Ambient_Music/Cyberpunk/Cyberpunk_-_Night_Sky.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.2;

document.addEventListener("click", () => {
  if(bgMusic.paused) bgMusic.play();
});

function playClick() { clickSound.play(); }
function playHover() { hoverSound.play(); }

function showAlert() {
  playClick();
  alert("ধন্যবাদ! শপিং শুরু করুন 🚀");
}

function addToCart(product, price) {
  playClick();
  cart.push({product, price});
  total += price;
  document.getElementById('cartCount').innerText = cart.length;
}

function openCart() {
  playClick();
  document.getElementById('cartModal').style.display = "block";
  let cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement('li');
    li.innerText = `${item.product} - ৳${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById('totalPrice').innerText = total;
}

function closeCart() {
  playClick();
  document.getElementById('cartModal').style.display = "none";
}

function checkout() {
  playClick();
  alert("Bkash/Nagad/Visa এর মাধ্যমে পেমেন্ট সম্পন্ন করুন ✅");
  cart = [];
  total = 0;
  document.getElementById('cartCount').innerText = 0;
  closeCart();
}

function searchProducts() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let products = document.querySelectorAll('.product-card');
  products.forEach(card => {
    let name = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

function login() {
  playClick();
  let user = document.getElementById('username').value;
  let pass = document.getElementById('password').value;
  if(user && pass) {
    alert("সফলভাবে লগইন হয়েছে ✅");
    window.location.href = "index.html";
  } else {
    alert("দয়া করে সঠিক তথ্য দিন ❌");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", playHover);
  });
});
