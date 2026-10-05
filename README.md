# Gokula Amudham — Traditional Ghee Website

> **“From the hands of farmers, to the heart of your home.”**  
> Authentic South Indian Traditional Pure Cow Ghee website with integrated WhatsApp ordering experience.

---

## 🌟 Brand Overview & Positioning

- **Brand Name:** Gokula Amudham
- **Website Slug / Package:** `gokula-amudham`
- **Tagline:** Traditional Ghee
- **Primary Product:** Pure Cow Ghee (Rich granular aroma, traditional slow clarification)
- **Product Scope:** Sells **GHEE ONLY**. (Butter is celebrated strictly as the essential intermediate step in the 10-step traditional ghee production journey: `Milk → Cream → Butter → Ghee`).
- **Ethos & Business Model:** Gokula Amudham partners directly with grassroots rural dairy farmers across Tamil Nadu, carefully selects batches of wholesome cow milk and churned butter, and brings traditional golden ghee to everyday family kitchens.
- **Strict Compliance:** No unsupported or medicinal claims, no synthetic additives, and no fake certifications.

---

## 🎨 Visual Identity & Design System

- **Palette:**
  - Backgrounds: Warm Heritage Cream (`#FAF7F2`), Sand (`#F4EFEA`), and Crisp Card Surface (`#FFFFFF`)
  - Accents: Ghee-Gold (`#C59B27`, `#D4AF37`, `#8C6510`)
  - Deep Tones: Sacred Maroon (`#7A1C1C`, `#581010`) & Earthy Brown (`#2C1810`, `#1A0D07`)
  - Traditional Accent: Subtle Forest / Temple Green (`#1B3B2B`)
- **Typography:**
  - Serif Headings: **Cinzel** & **Playfair Display** (traditional, carved, luxury feel)
  - Body & UI: **Plus Jakarta Sans** (clean, modern, highly legible)
- **Mobile-First Responsiveness:**
  - Fully tested across viewports from 320px smartphones to desktop displays.
  - Portrait 9:16 cinematic video theater player with smooth rounded borders.
  - Generous touch targets (≥ 44px), smooth slide-out cart drawer, and accessible checkout modal.

---

## 🧈 Locked Product Sizes & Pricing Rules

| Variant Size | Unit | Original MRP | Offer / Discount | Selling Price | Customer Savings |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **200 ml** | `ml` | ₹140 | **Standard MRP (NO Discount)** | **₹140** | ₹0 (No badge / No strikethrough) |
| **500 ml** | `ml` | ₹350 | **10% OFF** | **₹315** | ₹35 |
| **1 L** | `L` | ₹700 | **10% OFF** | **₹630** | ₹70 |
| **2 L** | `L` | ₹1,400 | **10% OFF** | **₹1,260** | ₹140 |

> **Note:** Strictly `ml` and `L` units only. Ghee is never displayed in `kg`.

---

## 📁 Project Structure

```
gokula-amudham/
├── index.html                  # Semantic HTML5 master document (SEO, OG & JSON-LD Schema)
├── package.json                # Project dependencies (name: gokula-amudham)
├── vite.config.js              # Vite bundler configuration
├── README.md                   # Complete documentation & brand guide
├── test/
│   └── sanity-check.js         # Automated test script for brand, pricing & QA checks
├── css/
│   └── style.css               # Complete handcrafted design system & component styles
├── js/
│   ├── site-config.js          # ⭐ THE SINGLE SOURCE OF TRUTH (Central Configuration)
│   ├── cart.js                 # Shopping cart state machine & localStorage persistence
│   ├── whatsapp.js             # Customer validation & WhatsApp message generator
│   └── app.js                  # Main controller (catalogs, video, 10-step gallery, FAQ accordion)
└── public/assets/
    ├── video/
    │   └── gokula-amudham-story.mp4    # Official 15.8s brand film
    └── images/
        ├── gokula-product-hero.jpg     # Luxury single jar with brass diya & jasmine
        ├── gokula-product-range.jpg    # 3-jar product lineup on pedestal
        ├── gokula-logo-full.jpg        # High-res official brand emblem
        ├── gokula-emblem.jpg           # Circular cropped emblem
        ├── gokula-favicon.png          # High-res favicon
        └── food/                       # Authentic South Indian culinary pairings
```

---

## 🛒 WhatsApp Direct Ordering

1. **User Browsing:** Selects pack size (200 ml, 500 ml, 1 L, or 2 L) and quantity, then clicks **"Add to Basket"** or **"WhatsApp Order"**.
2. **Basket Persistence:** Cart state is saved in `localStorage` under `gokula_amudham_cart_v1`.
3. **Checkout Details:** Clicking **"Proceed to Order"** opens an accessible modal requesting:
   - Full Name
   - Phone Number (10-digit validation)
   - Delivery Address (Street, City, Pincode)
   - Optional delivery notes
4. **WhatsApp Message Generation:**
   The exact formatted order message is automatically generated and opens directly in WhatsApp:
   ```
   *NEW ORDER — GOKULA AMUDHAM*
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   Gokula Amudham Traditional Ghee — 500 ml × 2 = ₹630

   *Total Order Value:* ₹630

   *Customer Details:*
   👤 *Name:* Ananya Raman
   📞 *Phone:* 9840123456
   📍 *Delivery Address:*
   Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   _Please confirm availability and dispatch details._
   ```
5. **Direct Channel:** Opens WhatsApp directly (`+91 93440 20730`) with the pre-filled order text.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Run automated QA test suite
node test/sanity-check.js

# Start local development server
npm run dev

# Build optimized production bundle
npm run build
```
