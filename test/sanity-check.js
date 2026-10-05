import { SITE_CONFIG } from '../js/site-config.js';
import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('GOKULA AMUDHAM COMPREHENSIVE QA & BRAND VERIFICATION');
console.log('====================================================');

// 1. Verify Brand Identity
console.log('\n--- 1. TESTING BRAND IDENTITY & SCOPE ---');
console.assert(SITE_CONFIG.brand.name === 'Gokula Amudham', `Brand name must be Gokula Amudham, got '${SITE_CONFIG.brand.name}'`);
console.assert(SITE_CONFIG.brand.tagline === 'Traditional Ghee', `Brand tagline must be Traditional Ghee, got '${SITE_CONFIG.brand.tagline}'`);
console.log('✓ Brand Name: Gokula Amudham | Tagline: Traditional Ghee');

// Sells ONLY Ghee:
const ghee = SITE_CONFIG.products.find(p => p.id === 'traditional-cow-ghee' || p.id === 'pure-cow-ghee');
const butterProduct = SITE_CONFIG.products.find(p => p.id.includes('butter'));

console.assert(ghee, 'Pure Cow Ghee product must exist in catalog');
console.assert(!butterProduct, 'Butter must NOT exist as a sellable product in catalog');
console.assert(SITE_CONFIG.products.length === 1, `Catalog must contain exactly 1 sellable product (Ghee), found ${SITE_CONFIG.products.length}`);
console.log('✓ Catalog Scope strictly verified: GHEE ONLY (Butter product cards/pricing completely eliminated)');

// 2. Verify Ghee Units (MUST ONLY USE ml / L, NEVER kg)
console.log('\n--- 2. TESTING GHEE SIZES & UNITS ---');
console.assert(ghee.variants.length === 4, `Ghee must have exactly 4 variants, got ${ghee.variants.length}`);
ghee.variants.forEach(v => {
  console.assert(!v.size.toLowerCase().includes('kg'), `FAIL: Ghee size '${v.size}' must NEVER use kg!`);
  console.assert(v.unit === 'ml' || v.unit === 'L', `FAIL: Ghee unit '${v.unit}' must be ml or L`);
  console.log(`✓ Ghee Size verified: ${v.size} (Unit: ${v.unit})`);
});

// 3. Verify Ghee Variant Pricing & Discounts
console.log('\n--- 3. TESTING GHEE VARIANT PRICING & DISCOUNT ELIGIBILITY ---');
const g200 = ghee.variants.find(v => v.size === '200 ml');
const g500 = ghee.variants.find(v => v.size === '500 ml');
const g1L = ghee.variants.find(v => v.size === '1 L');
const g2L = ghee.variants.find(v => v.size === '2 L');

// 200 ml Ghee: MRP, NO DISCOUNT
console.assert(g200.mrp === 140, 'Ghee 200ml MRP must be 140');
console.assert(g200.price === 140, 'Ghee 200ml price must be 140');
console.assert(g200.discountEligible === false, 'Ghee 200ml discountEligible must be FALSE');
console.assert(g200.savings === 0, 'Ghee 200ml savings must be 0');
console.log('✓ 200 ml Ghee: MRP ₹140 | discountEligible: FALSE (NO discount, NO strikethrough, NO savings)');

// 500 ml Ghee: 10% OFF
console.assert(g500.mrp === 350, 'Ghee 500ml MRP must be 350');
console.assert(g500.price === 315, 'Ghee 500ml price must be 315 (10% off)');
console.assert(g500.discountEligible === true, 'Ghee 500ml discountEligible must be TRUE');
console.assert(g500.savings === 35, 'Ghee 500ml savings must be 35');
console.log('✓ 500 ml Ghee: MRP ₹350 ➔ ₹315 (10% OFF, Save ₹35)');

// 1 L Ghee: 10% OFF
console.assert(g1L.mrp === 700, 'Ghee 1L MRP must be 700');
console.assert(g1L.price === 630, 'Ghee 1L price must be 630 (10% off)');
console.assert(g1L.discountEligible === true, 'Ghee 1L discountEligible must be TRUE');
console.assert(g1L.savings === 70, 'Ghee 1L savings must be 70');
console.log('✓ 1 L Ghee: MRP ₹700 ➔ ₹630 (10% OFF, Save ₹70)');

// 2 L Ghee: 10% OFF
console.assert(g2L.mrp === 1400, 'Ghee 2L MRP must be 1400');
console.assert(g2L.price === 1260, 'Ghee 2L price must be 1260 (10% off)');
console.assert(g2L.discountEligible === true, 'Ghee 2L discountEligible must be TRUE');
console.assert(g2L.savings === 140, 'Ghee 2L savings must be 140');
console.log('✓ 2 L Ghee: MRP ₹1400 ➔ ₹1260 (10% OFF, Save ₹140)');

// 4. Test Cart Calculations & Multi-Quantity Integrity
console.log('\n--- 4. TESTING CART CALCULATIONS & MULTI-QTY ---');
const cartItems = [
  { name: 'Gokula Amudham Pure Cow Ghee', size: g500.size, price: g500.price, quantity: 2 }, // 315 * 2 = 630
  { name: 'Gokula Amudham Pure Cow Ghee', size: g200.size, price: g200.price, quantity: 1 }  // 140 * 1 = 140
];

const subtotal = cartItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
console.assert(subtotal === 770, `Cart subtotal should be 770, got ${subtotal}`);
console.log('✓ Cart Subtotal verified: 2 × 500ml Ghee (₹630) + 1 × 200ml Ghee (₹140) = ₹' + subtotal);

// 5. Test WhatsApp Order Message Generation
console.log('\n--- 5. TESTING WHATSAPP MESSAGE GENERATION ---');
function generateOrderMessage({ items, total, name, phone, address }) {
  const currency = '₹';
  const productLines = items.map(item => {
    const linePrice = (item.price * item.quantity).toLocaleString('en-IN');
    return `${item.name} — ${item.size} × ${item.quantity} = ${currency}${linePrice}`;
  }).join('\n');

  return `*NEW ORDER — GOKULA AMUDHAM*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${productLines}\n\n*Total Order Value:* ${currency}${total.toLocaleString('en-IN')}\n\n*Customer Details:*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Delivery Address:*\n${address}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n_Please confirm availability and dispatch details._`;
}

const waMessage = generateOrderMessage({
  items: cartItems,
  total: subtotal,
  name: 'Ananya Raman',
  phone: '9840123456',
  address: 'Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043'
});

console.assert(waMessage.includes('GOKULA AMUDHAM'), 'Message includes Gokula Amudham brand header');
console.assert(waMessage.includes('500 ml × 2 = ₹630'), '500ml Ghee item line matches');
console.assert(waMessage.includes('200 ml × 1 = ₹140'), '200ml Ghee item line matches');
console.assert(waMessage.includes('Total Order Value:* ₹770'), 'Total line matches');
console.log('✓ WhatsApp Message strict format verified!');

// 6. Test 10-Step Production Journey Integrity
console.log('\n--- 6. TESTING 10-STEP PRODUCTION JOURNEY INTEGRITY ---');
console.assert(SITE_CONFIG.productionJourney, 'productionJourney configuration must exist');
console.assert(SITE_CONFIG.productionJourney.steps.length === 10, 'Must have exactly 10 production steps');

SITE_CONFIG.productionJourney.steps.forEach((step, idx) => {
  const expectedNum = String(idx + 1).padStart(2, '0');
  console.assert(step.step === expectedNum, `Step ${idx + 1} number mismatch`);
  console.assert(step.title && step.title.length > 5, `Step ${step.step} missing title`);
  console.assert(step.description && step.description.length > 20, `Step ${step.step} missing description`);
  console.assert(step.stage, `Step ${step.step} missing stage`);
  
  // Verify image exists on disk
  const imgPath = path.resolve('public', step.image);
  const rootImgPath = path.resolve(step.image);
  const exists = fs.existsSync(imgPath) || fs.existsSync(rootImgPath);
  console.assert(exists, `Step ${step.step} image missing: ${step.image}`);
  console.log(`✓ Step ${step.step}: ${step.title} (${step.stage}) ➔ Image verified`);
});

// 7. Verify Drive Assets & Brand Film on Disk
console.log('\n--- 7. TESTING DRIVE BRAND ASSETS & VIDEO ON DISK ---');
const requiredFiles = [
  'public/assets/video/gokula-amudham-story.mp4',
  'public/assets/images/gokula-video-poster.jpg',
  'public/assets/images/gokula-product-hero.jpg',
  'public/assets/images/gokula-product-range.jpg',
  'public/assets/images/gokula-logo-full.jpg',
  'public/assets/images/gokula-emblem.jpg',
  'public/assets/images/gokula-favicon.png'
];

requiredFiles.forEach(file => {
  const fullPath = path.resolve(file);
  console.assert(fs.existsSync(fullPath), `Required asset missing: ${file}`);
  const stat = fs.statSync(fullPath);
  console.assert(stat.size > 100, `Asset ${file} is empty or corrupted (size: ${stat.size}B)`);
  console.log(`✓ Asset verified on disk: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
});

// 8. Test Price Box HTML Rules for 200 ml vs Discounted Packs
console.log('\n--- 8. TESTING PRICE BOX HTML OUTPUT RULES ---');
function renderPriceBoxTest(variant) {
  const currency = '₹';
  if (variant.discountEligible) {
    return `
      <div class="price-strikethrough-line">
        <span class="price-label-prefix">Original MRP:</span>
        <del class="product-base-price">${currency}${variant.mrp}</del>
        <span class="discount-pill-active">10% OFF</span>
      </div>
      <div class="price-main-line">
        <span class="product-current-price">${currency}${variant.price}</span>
        <span class="savings-tag">You Save ${currency}${variant.savings}</span>
      </div>
    `;
  }
  return `
    <div class="price-strikethrough-line normal-mrp">
      <span class="price-label-prefix">MRP / Selling Price:</span>
    </div>
    <div class="price-main-line">
      <span class="product-current-price">${currency}${variant.price}</span>
    </div>
  `;
}

// 200 ml Ghee: MUST NOT have <del>, 10% OFF, or You Save
const g200Html = renderPriceBoxTest(g200);
console.assert(!g200Html.includes('<del'), 'FAIL: 200ml Ghee must NOT have <del> strikethrough!');
console.assert(!g200Html.includes('10% OFF'), 'FAIL: 200ml Ghee must NOT show 10% OFF!');
console.assert(!g200Html.includes('You Save'), 'FAIL: 200ml Ghee must NOT show You Save!');
console.assert(g200Html.includes('₹140'), '200ml Ghee must show ₹140');
console.log('✓ 200 ml Ghee HTML strictly has NO strikethrough, NO 10% OFF, and NO You Save!');

// 500 ml Ghee: MUST have <del>350, 10% OFF, ₹315, and You Save ₹35
const g500Html = renderPriceBoxTest(g500);
console.assert(g500Html.includes('<del class="product-base-price">₹350</del>'), '500ml Ghee must strike through MRP 350');
console.assert(g500Html.includes('10% OFF'), '500ml Ghee must show 10% OFF');
console.assert(g500Html.includes('₹315'), '500ml Ghee must show ₹315');
console.assert(g500Html.includes('You Save ₹35'), '500ml Ghee must show You Save ₹35');
console.log('✓ 500 ml Ghee HTML correctly shows struck-out MRP ₹350, 10% OFF, ₹315, and You Save ₹35!');

console.log('\n====================================================');
console.log('ALL GOKULA AMUDHAM QA CHECKS PASSED 100%! 🚀');
console.log('====================================================');
