/* MySuru Brew – app.js */

/* ---- Coming soon banner close ---- */
const banner = document.getElementById('coming-soon-banner');
const closeBanner = banner?.querySelector('.cs-close');
if (closeBanner) {
  closeBanner.addEventListener('click', () => {
    banner.style.display = 'none';
    navbar.classList.add('banner-hidden');
  });
}

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- Mobile burger ---- */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ---- Menu data ---- */
const menuData = {
  coffee: [
    { icon: '☕', name: 'Mysuru Filter Kaapi', desc: 'Traditional South Indian filter coffee with jaggery-sweetened milk.', price: '₹ 80', tag: 'Signature' },
    { icon: '🫙', name: 'House Cold Brew', desc: '18-hour slow-drip cold brew, smooth and low-acid.', price: '₹ 180', tag: 'Cold' },
    { icon: '☕', name: 'Classic Espresso', desc: 'Double-shot Chikmagalur Arabica, rich crema, served in a tiny cup.', price: '₹ 120', tag: 'Hot' },
    { icon: '🥛', name: 'Flat White', desc: 'Velvety microfoam milk over a ristretto double shot.', price: '₹ 160', tag: 'Hot' },
    { icon: '🧊', name: 'Iced Latte', desc: 'Chilled milk poured over espresso and ice. Simple perfection.', price: '₹ 170', tag: 'Cold' },
    { icon: '🍫', name: 'Mocha', desc: 'Espresso with dark Belgian chocolate and steamed milk.', price: '₹ 185', tag: 'Hot' },
    { icon: '🌿', name: 'Matcha Latte', desc: 'Ceremonial-grade matcha blended with oat milk.', price: '₹ 195', tag: 'Hot/Cold' },
    { icon: '🧡', name: 'Turmeric Cappuccino', desc: 'A golden twist on the classic — turmeric, cinnamon, and espresso.', price: '₹ 175', tag: 'Signature' },
  ],
  brews: [
    { icon: '🍵', name: 'Nilgiri Green Tea', desc: 'Single-estate green tea, light and floral.', price: '₹ 120', tag: 'Tea' },
    { icon: '🌹', name: 'Rose Oolong', desc: 'Mysuru rose petals bloomed in oolong. Dreamy and fragrant.', price: '₹ 145', tag: 'Tea' },
    { icon: '🫖', name: 'Masala Chai', desc: 'Our house-spiced black tea with ginger, cardamom, and clove.', price: '₹ 90', tag: 'Chai' },
    { icon: '🌿', name: 'Tulsi Brew', desc: 'Fresh holy basil cold-pressed with lemon. Herbal and grounding.', price: '₹ 110', tag: 'Herbal' },
    { icon: '🫙', name: 'Kombucha', desc: 'House-fermented, 2-week culture. Seasonal flavors.', price: '₹ 160', tag: 'Fermented' },
    { icon: '🍋', name: 'Lemon Ginger Brew', desc: 'Ginger decoction, lemon, raw honey. Perfect for monsoon.', price: '₹ 100', tag: 'Hot' },
  ],
  food: [
    { icon: '🥐', name: 'Benne Croissant', desc: 'Butter croissant with a Mysuru butter (benne) glaze. Baked fresh daily.', price: '₹ 110', tag: 'Bakery' },
    { icon: '🥪', name: 'Café Sandwich', desc: 'Sourdough, avocado, cherry tomato, pesto, and feta.', price: '₹ 220', tag: 'All-day' },
    { icon: '🍳', name: 'Egg on Toast', desc: 'Farm eggs, sourdough, herb butter. Simple and satisfying.', price: '₹ 180', tag: 'Brunch' },
    { icon: '🍰', name: 'Mysuru Pak Cheesecake', desc: 'Baked cheesecake with a Mysuru pak (gram-flour sweet) crust.', price: '₹ 160', tag: 'Dessert' },
    { icon: '🍌', name: 'Banana Bread', desc: 'Moist, spiced with cardamom, served with whipped cream cheese.', price: '₹ 130', tag: 'Bakery' },
    { icon: '🫙', name: 'Overnight Oats', desc: 'Coconut milk oats, seasonal fruit compote, toasted seeds.', price: '₹ 190', tag: 'Healthy' },
    { icon: '🥗', name: 'Buddha Bowl', desc: 'Quinoa, roasted veggies, hummus, lemon-tahini dressing.', price: '₹ 250', tag: 'Healthy' },
    { icon: '🍪', name: 'Cookie Plate', desc: 'Daily assortment of three house-baked cookies.', price: '₹ 120', tag: 'Dessert' },
  ],
  cold: [
    { icon: '🧃', name: 'Sugarcane Mint Cooler', desc: 'Fresh-pressed sugarcane, muddled mint, black salt.', price: '₹ 90', tag: 'House' },
    { icon: '🍓', name: 'Berry Lemonade', desc: 'Strawberry, blueberry, lemon, sparkling water.', price: '₹ 140', tag: 'Sparkling' },
    { icon: '🥥', name: 'Coconut Iced Tea', desc: 'Black tea, coconut water, a splash of lime.', price: '₹ 130', tag: 'Refresher' },
    { icon: '🥭', name: 'Mango Lassi', desc: 'Alphonso mango, thick curd, cardamom. A Mysurean classic.', price: '₹ 150', tag: 'Lassi' },
    { icon: '🫙', name: 'Rose Lemonade', desc: 'Mysuru rose syrup, fresh lemon, sparkling water.', price: '₹ 120', tag: 'Sparkling' },
    { icon: '🍵', name: 'Matcha Mojito', desc: 'Matcha, mint, lime, soda. Non-alcoholic and super refreshing.', price: '₹ 160', tag: 'Signature' },
  ]
};

function renderMenu(tab) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = menuData[tab].map(item => `
    <div class="menu-card reveal">
      <div class="menu-card-icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="menu-card-footer">
        <span class="price">${item.price}</span>
        <span class="tag">${item.tag}</span>
      </div>
    </div>
  `).join('');
  observeReveal();
}

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.tab);
  });
});
renderMenu('coffee');

/* ---- Scroll reveal ---- */
function observeReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
observeReveal();

/* ---- Add reveal class to sections ---- */
document.querySelectorAll(
  '#about .about-text, #about .about-img-wrap, .exp-item, .testi-card, .special-card, .gal-item, .info-block, .contact-form-wrap'
).forEach(el => el.classList.add('reveal'));
observeReveal();

/* ---- Contact form ---- */
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}
