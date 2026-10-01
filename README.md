# MANAM Dairy Foods — Premium Brand & E-Commerce Website

> **“From the hands of farmers, to the heart of your home.”**  
> Authentic South Indian Pure Cow Ghee & Uthukuli Butter website with a seamless WhatsApp ordering experience.

---

## 🌟 Brand Overview & Positioning

- **Brand Name:** MANAM (MANAM Dairy Foods)
- **Primary Offerings:** 
  1. Pure Cow Ghee (Rich granular aroma, traditional slow clarification)
  2. Uthukuli Butter (Heritage creamery butter from Tamil Nadu's dairy heartland)
- **Ethos & Business Model:** MANAM partners directly with grassroots rural dairy farmers across Tamil Nadu, carefully selects batches of wholesome cow milk and churned butter, and brings traditional purity to everyday family kitchens.
- **Strict Compliance:** No unsupported or medicinal claims, no synthetic additives, and no fake certifications.

---

## 🎨 Visual Identity & Design System

- **Palette:**
  - Backgrounds: Warm Heritage Cream (`#FAF7F2`), Sand (`#F4EFEA`), and Crisp Card Surface (`#FFFFFF`)
  - Accents: Ghee-Gold (`#C59B27`, `#D4AF37`, `#8C6510`)
  - Deep Tones: Earthy Brown (`#2C1810`, `#1A0D07`)
  - Traditional Accent: Subtle Forest / Temple Green (`#1B3B2B`)
- **Typography:**
  - Serif Headings: **Cinzel** & **Playfair Display** (traditional, carved, luxury feel)
  - Body & UI: **Plus Jakarta Sans** (clean, modern, highly legible)
- **Mobile-First Responsiveness:**
  - Fully tested across viewports from 320px smartphones to 4K displays.
  - Generous touch targets (≥ 44px), smooth slide-out cart drawer, and responsive modals.

---

## 📁 Project Structure

```
manam-foods/
├── index.html                  # Semantic HTML5 master document (SEO & Schema.org included)
├── package.json                # Project dependencies (Vite dev & build scripts)
├── vite.config.js              # Vite bundler configuration
├── README.md                   # Complete documentation & customization guide
├── test/
│   └── sanity-check.js         # Automated test script for configuration & message generation
├── css/
│   └── style.css               # Complete handcrafted design system & component styles
├── js/
│   ├── site-config.js          # ⭐ THE SINGLE SOURCE OF TRUTH (Central Configuration)
│   ├── cart.js                 # Shopping cart state machine & localStorage persistence
│   ├── whatsapp.js             # Customer validation & WhatsApp message generator
│   └── app.js                  # Main controller (catalogs, galleries, FAQ accordion, modals)
└── assets/
    └── images/
        ├── making-churned-butter.jpg      # Authentic churned butter balls in uruli (Uploaded Asset)
        ├── making-dairy-ghee-jars.jpg     # Authentic dairy packing jars (Uploaded Asset)
        ├── product-ghee-hero.jpg          # Authentic luxury jar hero shot (Uploaded Asset)
        ├── product-butter-tub.jpg         # Authentic butter tub product shot (Uploaded Asset)
        ├── product-range-collage.jpg      # Authentic MANAM product range (Uploaded Asset)
        ├── product-ghee-duo.jpg           # 1L & 500ml ghee jars with cow idol
        ├── product-butter-salted.jpg      # 500g Salted butter tub
        ├── product-butter-unsalted.jpg    # 500g Unsalted butter tub
        ├── product-ghee-tubs.jpg          # Ghee tubs trio
        ├── product-ghee-2l.jpg            # 2L Ghee family jar
        ├── manam-logo-badge.png           # Extracted circular brand emblem
        ├── manam-logo-transparent.png     # Transparent PNG logo
        └── food/
            ├── food-ghee-dosa.jpg         # Crisp golden ghee roast dosa
            ├── food-idli-podi.jpg         # Steaming idlis with milagai podi & ghee
            ├── food-ven-pongal.jpg        # Ven pongal with ghee-fried cashews
            └── food-traditional-sweets.jpg # Melt-in-mouth ghee Mysore pak
```

---

## ⚙️ How to Update Business Details (Single Source of Truth)

All business data is managed inside **[`js/site-config.js`](file:///C:/Users/Kathir/.gemini/antigravity/scratch/manam-foods/js/site-config.js)**. You never need to touch HTML or CSS files to make updates.

### 1. Setting the WhatsApp Business Number
Open `js/site-config.js` and locate:
```javascript
brand: {
  // Format: Country code followed by 10-digit number (e.g. 919876543210)
  whatsappNumber: "919876543210", // <-- Replace with your real number
  phoneDisplay: "+91 98765 43210",
  email: "contact@manamfoods.com",
  location: "Uthukuli & Coimbatore Region, Tamil Nadu, India",
}
```

### 2. Updating Product Prices & Sizes
In `js/site-config.js`, update the `products` array:
```javascript
variants: [
  { id: "ghee-500ml", size: "500 ml Glass Jar", price: 380, isDefault: true },
  { id: "ghee-1000ml", size: "1 Litre Glass Jar", price: 720 },
  ...
]
```

### 3. Adding the Final Cinematic Brand Story Video
A dedicated, fully designed video theater is already live on the page. When your final video file or URL is ready:
1. Copy your video into `assets/video/manam-story.mp4` (or get your YouTube/Vimeo embed URL).
2. Open `js/site-config.js` and update:
```javascript
video: {
  videoUrl: "assets/video/manam-story.mp4", // <-- Paste video path or link here
  ...
}
```
The placeholder automatically transforms into a live HTML5/streaming video player without any layout shift!

---

## 🛒 Shopping Cart & WhatsApp Order Flow

1. **User Browsing:** Selects pack size (e.g., 500ml jar or 1 Litre) and quantity, then clicks **"Add to Basket"** or **"WhatsApp Order"**.
2. **Basket Persistence:** Cart state is saved in `localStorage`, persisting during navigation or accidental reloads.
3. **Checkout Details:** Clicking **"Proceed to Order"** opens an accessible modal requesting:
   - Full Name
   - Phone Number (10-digit validation)
   - Delivery Address (Street, City, Pincode)
   - Optional delivery notes
4. **WhatsApp Message Generation:**
   The exact prompt-specified format is automatically generated:
   ```
   Hello! I'd like to place an order.

   MANAM Pure Cow Ghee — 500 ml Glass Jar × 2 = ₹760
   MANAM Uthukuli Butter — 500 g Tub (Salted) × 1 = ₹320

   Total: ₹1,080

   Name: Ananya Raman
   Phone: 9840123456
   Delivery Address: 14, Temple Street, Mylapore, Chennai - 600004
   ```
5. **Direct Channel:** Opens WhatsApp directly (`https://wa.me/...`) with the pre-filled order text ready to send. No fake payment gateways, no false confirmations.

---

## 🚀 Running the Project Locally

```bash
# Navigate to the project directory
cd C:\Users\Kathir\.gemini\antigravity\scratch\manam-foods

# Install dependencies (Vite)
npm install

# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📜 Compliance & Authenticity Notice

- **Authentic Assets:** All product packaging, labels, logos, and dairy photos are directly sourced from the genuine uploaded brand photography.
- **Farmer-Centric Sourcing:** Accurately reflects the brand's role in working with farmers to source, brand, and distribute authentic dairy products.
