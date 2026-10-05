/**
 * ==============================================================================
 * GOKULA AMUDHAM — SHOPPING BASKET ENGINE
 * ==============================================================================
 * Handles cart state, localStorage persistence, cart drawer rendering,
 * quantity updates, and checkout triggers.
 * ==============================================================================
 */

import { SITE_CONFIG } from './site-config.js';

const STORAGE_KEY = 'gokula_amudham_cart_v1';

class ShoppingCart {
  constructor() {
    this.items = this.loadFromStorage();
    this.drawerEl = null;
    this.backdropEl = null;
    this.badgeEls = [];
  }

  init() {
    this.drawerEl = document.getElementById('cart-drawer');
    this.backdropEl = document.getElementById('cart-backdrop');
    this.badgeEls = document.querySelectorAll('.cart-count-badge');
    
    this.bindEvents();
    this.render();
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      return [];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }

  addItem(product, variant, quantity = 1) {
    const existingIndex = this.items.findIndex(
      item => item.productId === product.id && item.variantId === variant.id
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        productId: product.id,
        variantId: variant.id,
        name: product.name,
        size: variant.size,
        price: variant.price,
        image: product.primaryImage,
        quantity: quantity
      });
    }

    this.saveToStorage();
    this.render();
    this.openDrawer();
    this.triggerToast(`Added ${quantity} × ${product.name} (${variant.size}) to cart`);
  }

  updateQuantity(productId, variantId, delta) {
    const itemIndex = this.items.findIndex(
      item => item.productId === productId && item.variantId === variantId
    );

    if (itemIndex === -1) return;

    const newQty = this.items[itemIndex].quantity + delta;
    if (newQty <= 0) {
      this.removeItem(productId, variantId);
    } else {
      this.items[itemIndex].quantity = newQty;
      this.saveToStorage();
      this.render();
    }
  }

  removeItem(productId, variantId) {
    this.items = this.items.filter(
      item => !(item.productId === productId && item.variantId === variantId)
    );
    this.saveToStorage();
    this.render();
  }

  clear() {
    this.items = [];
    this.saveToStorage();
    this.render();
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  openDrawer() {
    if (!this.drawerEl || !this.backdropEl) return;
    this.drawerEl.classList.add('is-open');
    this.backdropEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    if (!this.drawerEl || !this.backdropEl) return;
    this.drawerEl.classList.remove('is-open');
    this.backdropEl.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  bindEvents() {
    // Open cart buttons
    document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    // Close cart triggers
    document.querySelectorAll('[data-action="close-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeDrawer();
      });
    });

    if (this.backdropEl) {
      this.backdropEl.addEventListener('click', () => this.closeDrawer());
    }

    // Escape key closes drawer
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDrawer();
      }
    });

    // Proceed to Order action
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (this.items.length === 0) return;
        this.closeDrawer();
        window.dispatchEvent(new CustomEvent('open-checkout-modal', {
          detail: { items: this.items, subtotal: this.getSubtotal() }
        }));
      });
    }
  }

  render() {
    const totalCount = this.getTotalCount();
    const subtotal = this.getSubtotal();
    const currency = SITE_CONFIG.brand.currency;

    // Update live badges
    this.badgeEls.forEach(badge => {
      badge.textContent = totalCount;
      if (totalCount > 0) {
        badge.classList.add('has-items');
      } else {
        badge.classList.remove('has-items');
      }
    });

    // Render items inside drawer
    const listEl = document.getElementById('cart-items-list');
    const emptyStateEl = document.getElementById('cart-empty-state');
    const footerEl = document.getElementById('cart-footer');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const totalEl = document.getElementById('cart-total-val');

    if (subtotalEl) subtotalEl.textContent = `${currency}${subtotal.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `${currency}${subtotal.toLocaleString('en-IN')}`;

    if (this.items.length === 0) {
      if (listEl) listEl.innerHTML = '';
      if (emptyStateEl) emptyStateEl.style.display = 'flex';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (emptyStateEl) emptyStateEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';

    if (listEl) {
      listEl.innerHTML = this.items.map(item => `
        <div class="cart-item" data-product="${item.productId}" data-variant="${item.variantId}">
          <div class="cart-item-img-wrap">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-header">
              <h4 class="cart-item-title">${item.name}</h4>
              <button type="button" class="cart-item-remove" data-remove-product="${item.productId}" data-remove-variant="${item.variantId}" title="Remove item" aria-label="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
            <div class="cart-item-size-badge">${item.size}</div>
            <div class="cart-item-price-row">
              <div class="cart-item-unit-price">${currency}${item.price} each</div>
              <div class="cart-item-line-total">${currency}${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            </div>
            <div class="cart-item-actions">
              <div class="cart-qty-stepper">
                <button type="button" class="qty-btn" data-qty-change="-1" data-p="${item.productId}" data-v="${item.variantId}" aria-label="Decrease quantity">
                  −
                </button>
                <span class="qty-count">${item.quantity}</span>
                <button type="button" class="qty-btn" data-qty-change="1" data-p="${item.productId}" data-v="${item.variantId}" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      // Bind quantity steppers
      listEl.querySelectorAll('[data-qty-change]').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = btn.getAttribute('data-p');
          const v = btn.getAttribute('data-v');
          const delta = parseInt(btn.getAttribute('data-qty-change'), 10);
          this.updateQuantity(p, v, delta);
        });
      });

      // Bind remove buttons
      listEl.querySelectorAll('[data-remove-product]').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = btn.getAttribute('data-remove-product');
          const v = btn.getAttribute('data-remove-variant');
          this.removeItem(p, v);
        });
      });
    }
  }

  triggerToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }
}

export const cart = new ShoppingCart();
