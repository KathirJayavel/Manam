/**
 * ==============================================================================
 * MANAM DAIRY & FOODS — APPLICATION CONTROLLER
 * ==============================================================================
 * Strict Dynamic Variant Pricing:
 * - 200 ml Ghee & 200 g Butter: MRP only, NO discount badge, NO strikethrough, NO savings.
 * - 500 ml, 1 L, 2 L Ghee & 500 g, 1 kg, 2 kg Butter: 10% OFF with strikethrough and savings.
 * - High contrast typography and rich authentic visual storytelling.
 * ==============================================================================
 */

import { SITE_CONFIG } from './site-config.js';
import { cart } from './cart.js';
import { whatsAppSystem } from './whatsapp.js';

class App {
  constructor() {
    this.selectedVariants = {};
    this.selectedQuantities = {};
  }

  init() {
    this.setupBrandDetails();
    this.renderTrustStrip();
    this.renderProducts();
    this.renderBulkOrdersSection();
    this.renderStoryMilestones();
    this.renderVideoSection();
    this.renderWhyChooseUs();
    this.renderFoodPairings();
    this.renderEditorial();
    this.renderTestimonials();
    this.renderFaqs();
    this.renderFooter();

    // Initialize Subsystems
    cart.init();
    whatsAppSystem.init();

    // Setup Navigation & Interactions
    this.bindNavigation();
    this.bindScrollEffects();

    console.log('MANAM Dairy Foods website controller initialized with strict dynamic pricing.');
  }

  // ---------------------------------------------------------------------------
  // 1. BRAND & HEADER BINDINGS
  // ---------------------------------------------------------------------------
  setupBrandDetails() {
    const { brand, hero } = SITE_CONFIG;

    // Page Title
    document.title = `${brand.name} — Pure Cow Ghee & Uthukuli Butter | Farm to Home`;

    // Dynamic brand text injection
    document.querySelectorAll('.brand-name-text').forEach(el => el.textContent = brand.name);
    document.querySelectorAll('.brand-tagline-text').forEach(el => el.textContent = brand.tagline);

    // Update logos to official crisp version
    document.querySelectorAll('.brand-emblem-img').forEach(el => {
      el.src = brand.logoBadge;
    });

    // Hero Section
    const heroTitle = document.getElementById('hero-title');
    const heroCopy = document.getElementById('hero-copy');
    const heroBadge = document.getElementById('hero-badge');
    const heroImg = document.getElementById('hero-main-img');

    if (heroTitle) heroTitle.innerHTML = hero.headline.replace(/\n/g, '<br/>');
    if (heroCopy) heroCopy.textContent = hero.supportingCopy;
    if (heroBadge) heroBadge.textContent = hero.badge;
    if (heroImg) {
      heroImg.src = hero.heroImage;
      heroImg.alt = `${brand.name} Pure Cow Ghee`;
    }

    // Direct WhatsApp Buttons
    document.querySelectorAll('[data-bind="whatsapp-link"]').forEach(el => {
      el.href = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent('Hello MANAM! I would like to order Pure Cow Ghee / Uthukuli Butter.')}`;
    });
  }

  // ---------------------------------------------------------------------------
  // 2. TRUST STRIP
  // ---------------------------------------------------------------------------
  renderTrustStrip() {
    const container = document.getElementById('trust-strip-grid');
    if (!container) return;

    container.innerHTML = SITE_CONFIG.trustStrip.map(item => `
      <div class="trust-item">
        <div class="trust-icon" aria-hidden="true">${item.icon}</div>
        <div class="trust-text">
          <h3 class="trust-title">${item.title}</h3>
          <p class="trust-desc">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 3. PRODUCTS SECTION & STRICT DYNAMIC VARIANT PRICING
  // ---------------------------------------------------------------------------
  renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const currency = SITE_CONFIG.brand.currency;

    container.innerHTML = SITE_CONFIG.products.map(product => {
      // Set default selected variant
      const defaultVariant = product.variants.find(v => v.isDefault) || product.variants[0];
      this.selectedVariants[product.id] = defaultVariant.id;
      this.selectedQuantities[product.id] = 1;

      return `
        <article class="product-card" id="product-${product.id}">
          
          <!-- Dynamic Badge Area (Updates dynamically based on variant selection) -->
          <div class="product-badge-wrap" id="badge-wrap-${product.id}">
            ${this.renderCardBadge(defaultVariant, product)}
          </div>

          <!-- Product Image & Gallery -->
          <div class="product-media">
            <div class="product-main-img-wrap">
              <img 
                src="${product.primaryImage}" 
                alt="${product.name}" 
                class="product-main-img" 
                id="main-img-${product.id}"
                loading="lazy"
              />
            </div>
            ${product.gallery && product.gallery.length > 1 ? `
              <div class="product-thumbs" role="tablist" aria-label="${product.name} gallery">
                ${product.gallery.map((thumb, idx) => `
                  <button 
                    type="button" 
                    class="thumb-btn ${idx === 0 ? 'is-active' : ''}" 
                    data-product="${product.id}" 
                    data-src="${thumb}"
                    aria-label="View photo ${idx + 1}"
                  >
                    <img src="${thumb}" alt="${product.name} angle ${idx + 1}" loading="lazy" />
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Product Details -->
          <div class="product-content">
            <div class="product-header">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-tagline">${product.tagline}</p>
            </div>

            <p class="product-desc">${product.description}</p>

            <!-- Feature Badges -->
            <ul class="product-features-list">
              ${product.features.map(f => `
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>

            <!-- Pack Size Selector Chips (Clean simple pills) -->
            <div class="product-variants-wrapper">
              <div class="variant-label-row">
                <label class="variant-label">Select Pack Size:</label>
                <span class="variant-offer-hint ${defaultVariant.discountEligible ? 'discount-active' : 'standard-mrp'}" id="variant-hint-${product.id}">
                  ${defaultVariant.discountEligible ? '⚡ 10% OFF on this size' : 'Standard MRP Pack'}
                </span>
              </div>
              <div class="variant-chips-group" role="radiogroup" aria-label="${product.name} pack size options">
                ${product.variants.map(variant => `
                  <button 
                    type="button" 
                    class="variant-chip ${variant.id === defaultVariant.id ? 'is-selected' : ''}" 
                    data-product="${product.id}" 
                    data-variant="${variant.id}"
                    role="radio"
                    aria-checked="${variant.id === defaultVariant.id}"
                  >
                    <span class="chip-size">${variant.size}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Dynamic Price & Stepper Row (Original clean action bar) -->
            <div class="product-action-bar">
              <div class="product-price-box" id="price-box-${product.id}">
                ${this.renderPriceBox(defaultVariant, currency)}
              </div>

              <div class="product-qty-selector">
                <label for="qty-${product.id}" class="sr-only">Quantity</label>
                <div class="qty-stepper">
                  <button type="button" class="stepper-btn" data-stepper-change="-1" data-target="${product.id}" aria-label="Decrease quantity">−</button>
                  <span class="stepper-val" id="qty-val-${product.id}">1</span>
                  <button type="button" class="stepper-btn" data-stepper-change="1" data-target="${product.id}" aria-label="Increase quantity">+</button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="product-cta-buttons">
              <button 
                type="button" 
                class="btn btn-primary btn-add-cart" 
                data-add-to-cart="${product.id}"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span>Add to Basket</span>
              </button>

              <button 
                type="button" 
                class="btn btn-outline btn-whatsapp-direct" 
                data-direct-whatsapp-product="${product.id}"
                title="Quick Order on WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    this.bindProductInteractions();
  }

  renderCardBadge(variant, product) {
    if (variant.discountEligible) {
      return `
        <span class="product-pill">${product.defaultBadge}</span>
        <span class="product-offer-tag">10% OFF APPLIED</span>
      `;
    }
    return `
      <span class="product-pill">${product.defaultBadge}</span>
      <span class="product-trial-tag">TRIAL PACK (MRP)</span>
    `;
  }

  renderPriceBox(variant, currency) {
    if (variant.discountEligible) {
      // 500ml, 1L, 2L ghee & 500g, 1kg, 2kg butter:
      // Price: ~~₹350~~ 10% OFF
      // ₹315  You Save ₹35
      return `
        <div class="price-strikethrough-row">
          <span class="price-prefix">Price:</span>
          <del class="product-base-price">${currency}${variant.mrp}</del>
          <span class="discount-pill-small">10% OFF</span>
        </div>
        <div class="price-current-row">
          <span class="product-current-price">${currency}${variant.price}</span>
          <span class="savings-tag">You Save ${currency}${variant.savings}</span>
        </div>
      `;
    }

    // 200 ml ghee & 200 g butter:
    // Normal MRP ONLY. NO crossed-out price, NO 10% OFF badge, NO savings.
    return `
      <div class="price-strikethrough-row normal-mrp">
        <span class="price-prefix">Price:</span>
      </div>
      <div class="price-current-row">
        <span class="product-current-price">${currency}${variant.price}</span>
      </div>
    `;
  }

  bindProductInteractions() {
    const currency = SITE_CONFIG.brand.currency;

    // 1. Variant Chip Selection with Dynamic Pricing Updates
    document.querySelectorAll('.variant-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const productId = chip.getAttribute('data-product');
        const variantId = chip.getAttribute('data-variant');
        const product = SITE_CONFIG.products.find(p => p.id === productId);
        if (!product) return;

        const variant = product.variants.find(v => v.id === variantId);
        if (!variant) return;

        this.selectedVariants[productId] = variantId;

        // Update active chip state
        const parentGroup = chip.closest('.variant-chips-group');
        parentGroup.querySelectorAll('.variant-chip').forEach(c => {
          c.classList.remove('is-selected');
          c.setAttribute('aria-checked', 'false');
        });
        chip.classList.add('is-selected');
        chip.setAttribute('aria-checked', 'true');

        // Update top badge dynamically
        const badgeWrap = document.getElementById(`badge-wrap-${productId}`);
        if (badgeWrap) {
          badgeWrap.innerHTML = this.renderCardBadge(variant, product);
        }

        // Update offer indicator
        const hintEl = document.getElementById(`variant-hint-${productId}`);
        if (hintEl) {
          hintEl.textContent = variant.discountEligible ? '⚡ 10% OFF on this size' : 'Standard MRP Pack';
          hintEl.className = variant.discountEligible 
            ? 'variant-offer-hint discount-active' 
            : 'variant-offer-hint standard-mrp';
        }

        // Update price box dynamically
        const priceBox = document.getElementById(`price-box-${productId}`);
        if (priceBox) {
          priceBox.innerHTML = this.renderPriceBox(variant, currency);
        }
      });
    });

    // 2. Quantity Stepper
    document.querySelectorAll('[data-stepper-change]').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-target');
        const delta = parseInt(btn.getAttribute('data-stepper-change'), 10);
        let currentQty = this.selectedQuantities[productId] || 1;
        currentQty = Math.max(1, currentQty + delta);
        this.selectedQuantities[productId] = currentQty;

        const valEl = document.getElementById(`qty-val-${productId}`);
        if (valEl) valEl.textContent = currentQty;
      });
    });

    // 3. Gallery Thumbnails
    document.querySelectorAll('.thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-product');
        const newSrc = btn.getAttribute('data-src');

        const mainImg = document.getElementById(`main-img-${productId}`);
        if (mainImg) {
          mainImg.src = newSrc;
        }

        const parent = btn.closest('.product-thumbs');
        parent.querySelectorAll('.thumb-btn').forEach(t => t.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });

    // 4. Add to Cart Button (Takes exact selected variant price!)
    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-add-to-cart');
        const product = SITE_CONFIG.products.find(p => p.id === productId);
        if (!product) return;

        const variantId = this.selectedVariants[productId];
        const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
        const qty = this.selectedQuantities[productId] || 1;

        cart.addItem(product, variant, qty);
      });
    });

    // 5. Direct WhatsApp Order Button on Product Card
    document.querySelectorAll('[data-direct-whatsapp-product]').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-direct-whatsapp-product');
        const product = SITE_CONFIG.products.find(p => p.id === productId);
        if (!product) return;

        const variantId = this.selectedVariants[productId];
        const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
        const qty = this.selectedQuantities[productId] || 1;

        // Add to cart and immediately open checkout form
        cart.addItem(product, variant, qty);
        cart.closeDrawer();
        whatsAppSystem.openModal();
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 4. BULK & WHOLESALE ORDERS SECTION (SUBTLE & REFINED)
  // ---------------------------------------------------------------------------
  renderBulkOrdersSection() {
    const container = document.getElementById('bulk-orders-container');
    if (!container) return;

    const { bulkOrders, brand } = SITE_CONFIG;

    container.innerHTML = `
      <div class="bulk-wholesale-banner">
        <div class="bulk-banner-main">
          <div class="bulk-tag-pill">
            <span class="bulk-tag-icon">📦</span>
            <span>${bulkOrders.badge || 'Commercial & Catering Supply'}</span>
          </div>
          <h3 class="bulk-banner-title">${bulkOrders.title || bulkOrders.headline}</h3>
          <p class="bulk-banner-desc">${bulkOrders.description}</p>
          <div class="bulk-tier-chips">
            <span class="tier-chip"><strong>5 kg</strong> Sealed Pack</span>
            <span class="tier-chip"><strong>10 kg</strong> Catering Tin</span>
            <span class="tier-chip"><strong>15 kg+</strong> Express Supply</span>
          </div>
        </div>
        <div class="bulk-banner-side">
          <a 
            href="https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(bulkOrders.waMessage)}" 
            target="_blank" 
            rel="noopener" 
            class="btn btn-whatsapp-bulk"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>${bulkOrders.ctaText || 'Inquire Bulk Order on WhatsApp'}</span>
          </a>
          <span class="bulk-sub-guarantee">Direct dairy reservation · Bulk discount pricing</span>
        </div>
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // 5. DEDICATED CINEMATIC VIDEO SECTION WITH SMOOTH BORDERS & CLEAN EDGES
  // ---------------------------------------------------------------------------
  renderVideoSection() {
    const section = document.getElementById('cinematic-video-section');
    if (!section) return;

    const { video } = SITE_CONFIG;

    const videoMarkup = `
      <div class="video-theater-wrapper">
        <div class="video-ambient-glow"></div>

        <div class="video-container-card clean-frame">
          <div class="video-header-badge">
            <span class="video-tag">🎬 ${video.sectionBadge}</span>
            <span class="video-live-badge">● Official Film</span>
          </div>

          <!-- Clean Smooth Video Container -->
          <div class="video-screen-ratio clean-video-aspect" id="video-player-frame">
            <video 
              id="brand-story-video"
              controls 
              poster="${video.posterImage}" 
              class="video-element-smooth"
              playsinline
              preload="metadata"
            >
              <source src="${video.videoUrl}" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <!-- Video Under-Bar Information -->
          <div class="video-meta-bar">
            <div class="video-meta-left">
              <h3 class="video-meta-title">${video.title}</h3>
              <p class="video-meta-subtitle">${video.subtitle}</p>
            </div>
            <div class="video-meta-right">
              <a href="#products" class="btn btn-secondary btn-sm" style="font-size: 0.8125rem;">
                Shop Pure Ghee & Butter
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    section.innerHTML = videoMarkup;
  }

  // ---------------------------------------------------------------------------
  // 6. OUR STORY SECTION (THE 10-STEP VISUAL JOURNEY USING DRIVE PHOTOS)
  // ---------------------------------------------------------------------------
  renderStoryMilestones() {
    const container = document.getElementById('story-milestones-grid');
    if (!container) return;

    const { steps } = SITE_CONFIG.productionJourney;

    container.innerHTML = `
      <!-- Compact Visual Production Gallery (4 Columns Desktop / 2 Columns Mobile) -->
      <div class="prod-gallery-grid" role="region" aria-label="Visual production journey gallery">
        ${steps.map(step => `
          <div class="prod-gallery-card">
            <div class="prod-gallery-img-wrap">
              <img 
                src="${step.image}" 
                alt="${step.imageAlt || step.title}" 
                class="prod-gallery-img" 
                loading="lazy" 
              />
            </div>
            <div class="prod-gallery-caption">
              <h4 class="prod-gallery-step-title">${step.step} — ${step.shortTitle || step.title}</h4>
              <p class="prod-gallery-one-liner">${step.oneLiner || step.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // 7. WHY CHOOSE US
  // ---------------------------------------------------------------------------
  renderWhyChooseUs() {
    const container = document.getElementById('why-us-grid');
    if (!container) return;

    container.innerHTML = SITE_CONFIG.whyChooseUs.pillars.map((pillar, idx) => `
      <div class="pillar-card">
        <div class="pillar-top">
          <div class="pillar-icon">${pillar.icon}</div>
          <span class="pillar-num">0${idx + 1}</span>
        </div>
        <h3 class="pillar-title">${pillar.title}</h3>
        <p class="pillar-desc">${pillar.description}</p>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 8. FOOD & CULINARY PAIRINGS
  // ---------------------------------------------------------------------------
  renderFoodPairings() {
    const container = document.getElementById('food-pairings-grid');
    if (!container) return;

    container.innerHTML = SITE_CONFIG.foodSection.pairings.map(item => `
      <div class="food-card">
        <div class="food-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy" />
          <span class="food-tag">${item.highlight}</span>
        </div>
        <div class="food-card-body">
          <h3 class="food-title">${item.title}</h3>
          <p class="food-desc">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 9. EDITORIAL PHILOSOPHY
  // ---------------------------------------------------------------------------
  renderEditorial() {
    const container = document.getElementById('editorial-content');
    if (!container) return;

    const { editorial } = SITE_CONFIG;
    container.innerHTML = `
      <div class="editorial-card">
        <span class="editorial-tag">${editorial.tagline}</span>
        <h2 class="editorial-title">${editorial.headline}</h2>
        <div class="editorial-text">
          ${editorial.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="editorial-quote-author">
          <div class="quote-signature">— MANAM Dairy Foods</div>
          <div class="quote-creed">Pallavaram, Tambaram, Tamil Nadu · Direct Farmer Sourcing</div>
        </div>
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // 10. TESTIMONIALS
  // ---------------------------------------------------------------------------
  renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    const { testimonials } = SITE_CONFIG;
    container.innerHTML = testimonials.items.map(item => `
      <div class="testimonial-card">
        <div class="testimonial-stars" aria-label="${item.rating} out of 5 stars">
          ${'★'.repeat(item.rating)}
        </div>
        <blockquote class="testimonial-quote">
          “${item.quote}”
        </blockquote>
        <div class="testimonial-author-box">
          <div class="author-avatar">${item.author.charAt(0)}</div>
          <div class="author-info">
            <span class="author-name">${item.author}</span>
            <span class="author-location">${item.location}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // 11. FAQ ACCORDION
  // ---------------------------------------------------------------------------
  renderFaqs() {
    const container = document.getElementById('faqs-accordion');
    if (!container) return;

    container.innerHTML = SITE_CONFIG.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'is-active' : ''}">
        <button 
          type="button" 
          class="faq-question-btn" 
          id="faq-btn-${idx}" 
          aria-expanded="${idx === 0}" 
          aria-controls="faq-ans-${idx}"
        >
          <span class="faq-q-text">${faq.question}</span>
          <span class="faq-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div 
          class="faq-answer-panel" 
          id="faq-ans-${idx}" 
          role="region" 
          aria-labelledby="faq-btn-${idx}"
          ${idx !== 0 ? 'hidden' : ''}
        >
          <div class="faq-answer-content">
            <p>${faq.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    this.bindFaqAccordion();
  }

  bindFaqAccordion() {
    document.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('is-active');
        const panel = item.querySelector('.faq-answer-panel');

        // Close other items
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('is-active');
            const otherBtn = other.querySelector('.faq-question-btn');
            const otherPanel = other.querySelector('.faq-answer-panel');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.hidden = true;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('is-active');
          btn.setAttribute('aria-expanded', 'false');
          if (panel) panel.hidden = true;
        } else {
          item.classList.add('is-active');
          btn.setAttribute('aria-expanded', 'true');
          if (panel) panel.hidden = false;
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 12. FOOTER DETAILS & GOOGLE MAPS LINK
  // ---------------------------------------------------------------------------
  renderFooter() {
    const { brand } = SITE_CONFIG;

    const locEl = document.getElementById('footer-location');
    const phoneEl = document.getElementById('footer-phone');
    const emailEl = document.getElementById('footer-email');
    const waEl = document.getElementById('footer-wa-link');
    const gmapsEl = document.getElementById('footer-gmaps-link');

    if (locEl) locEl.textContent = brand.address;
    if (phoneEl) {
      phoneEl.textContent = brand.phoneDisplay;
      phoneEl.href = `tel:${brand.whatsappNumber}`;
    }
    if (emailEl) {
      emailEl.textContent = brand.email;
      emailEl.href = `mailto:${brand.email}`;
    }
    if (waEl) {
      waEl.href = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent('Hello MANAM! I would like to place an order.')}`;
    }
    if (gmapsEl) {
      gmapsEl.href = brand.gmapsUrl;
    }
  }

  // ---------------------------------------------------------------------------
  // 13. NAVIGATION & MOBILE DRAWER
  // ---------------------------------------------------------------------------
  bindNavigation() {
    const navToggle = document.getElementById('mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    const mobileBackdrop = document.getElementById('mobile-menu-backdrop');

    if (navToggle && mobileMenu) {
      const openMenu = () => {
        mobileMenu.classList.add('is-open');
        if (mobileBackdrop) mobileBackdrop.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      };

      const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        if (mobileBackdrop) mobileBackdrop.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      };

      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
      });

      if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', closeMenu);
      }

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 14. SCROLL EFFECTS & NAVBAR ELEVATION
  // ---------------------------------------------------------------------------
  bindScrollEffects() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }
}

// Instantiate and boot application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
