/**
 * ==============================================================================
 * MANAM WHATSAPP ORDER SYSTEM
 * ==============================================================================
 * Validates customer delivery details and constructs the formatted
 * WhatsApp order message according to the exact brand specification.
 * ==============================================================================
 */

import { SITE_CONFIG } from './site-config.js';
import { cart } from './cart.js';

const CUSTOMER_STORAGE_KEY = 'manam_customer_details_v1';

class WhatsAppOrderSystem {
  constructor() {
    this.modalEl = null;
    this.formEl = null;
    this.orderPreviewEl = null;
  }

  init() {
    this.modalEl = document.getElementById('checkout-modal');
    this.formEl = document.getElementById('checkout-form');
    this.orderPreviewEl = document.getElementById('checkout-order-summary');

    this.bindEvents();
    this.populateSavedCustomer();
  }

  bindEvents() {
    // Listen for custom event from cart
    window.addEventListener('open-checkout-modal', () => {
      this.openModal();
    });

    // Close modal triggers
    document.querySelectorAll('[data-action="close-checkout"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    });

    // Close on backdrop click
    if (this.modalEl) {
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          this.closeModal();
        }
      });
    }

    // Form submission
    if (this.formEl) {
      this.formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }

    // Direct WhatsApp Chat triggers (for general inquiries)
    document.querySelectorAll('[data-action="direct-whatsapp"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDirectChat();
      });
    });
  }

  populateSavedCustomer() {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        const nameInput = document.getElementById('cust-name');
        const phoneInput = document.getElementById('cust-phone');
        const addressInput = document.getElementById('cust-address');

        if (nameInput && data.name) nameInput.value = data.name;
        if (phoneInput && data.phone) phoneInput.value = data.phone;
        if (addressInput && data.address) addressInput.value = data.address;
      }
    } catch (e) {
      console.warn('Error reading saved customer details', e);
    }
  }

  openModal() {
    if (!this.modalEl) return;
    this.renderSummary();
    this.modalEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus first input field
    const nameInput = document.getElementById('cust-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 150);
  }

  closeModal() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  renderSummary() {
    if (!this.orderPreviewEl) return;

    const items = cart.items;
    const subtotal = cart.getSubtotal();
    const currency = SITE_CONFIG.brand.currency;

    if (items.length === 0) {
      this.orderPreviewEl.innerHTML = `<p class="empty-msg">Your basket is currently empty.</p>`;
      return;
    }

    const linesHtml = items.map(item => `
      <div class="summary-line">
        <span class="summary-line-name">
          <strong>${item.name}</strong> (${item.size}) × ${item.quantity}
        </span>
        <span class="summary-line-price">${currency}${(item.price * item.quantity).toLocaleString('en-IN')}</span>
      </div>
    `).join('');

    this.orderPreviewEl.innerHTML = `
      <div class="checkout-summary-box">
        <h4 class="summary-title">Order Summary (${cart.getTotalCount()} items)</h4>
        <div class="summary-lines">${linesHtml}</div>
        <div class="summary-total-row">
          <span>Total:</span>
          <strong>${currency}${subtotal.toLocaleString('en-IN')}</strong>
        </div>
      </div>
    `;
  }

  handleSubmit() {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const addressInput = document.getElementById('cust-address');
    const notesInput = document.getElementById('cust-notes');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';
    const notes = notesInput ? notesInput.value.trim() : '';

    // Validation
    let hasError = false;

    if (!name) {
      this.showInputError(nameInput, 'Please enter your full name');
      hasError = true;
    } else {
      this.clearInputError(nameInput);
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      this.showInputError(phoneInput, 'Please enter a valid 10-digit phone number');
      hasError = true;
    } else {
      this.clearInputError(phoneInput);
    }

    if (!address || address.length < 10) {
      this.showInputError(addressInput, 'Please enter your complete delivery address (street, city, pincode)');
      hasError = true;
    } else {
      this.clearInputError(addressInput);
    }

    if (hasError) return;

    if (cart.items.length === 0) {
      alert('Your cart is empty. Please add products before placing an order.');
      this.closeModal();
      return;
    }

    // Save customer details locally for future convenience
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify({
        name,
        phone,
        address
      }));
    } catch (e) {
      console.warn('Could not save customer info', e);
    }

    // Generate WhatsApp Order Message
    const message = this.generateOrderMessage({
      items: cart.items,
      total: cart.getSubtotal(),
      name,
      phone,
      address,
      notes
    });

    // Close checkout modal
    this.closeModal();

    // Trigger WhatsApp Redirection
    this.sendToWhatsApp(message);
  }

  showInputError(input, message) {
    if (!input) return;
    input.classList.add('has-error');
    let errEl = input.parentElement.querySelector('.form-field-error');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'form-field-error';
      input.parentElement.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  clearInputError(input) {
    if (!input) return;
    input.classList.remove('has-error');
    const errEl = input.parentElement.querySelector('.form-field-error');
    if (errEl) errEl.remove();
  }

  /**
   * Constructs the message matching the exact prompt format:
   * 
   * Hello! I'd like to place an order.
   * 
   * [Product Name] — [Size] × [Quantity] = ₹[Price]
   * [Product Name] — [Size] × [Quantity] = ₹[Price]
   * 
   * Total: ₹[Total]
   * 
   * Name: [Customer Name]
   * Phone: [Customer Phone]
   * Delivery Address: [Address]
   */
  generateOrderMessage({ items, total, name, phone, address, notes }) {
    const currency = SITE_CONFIG.brand.currency;
    
    const productLines = items.map(item => {
      const linePrice = (item.price * item.quantity).toLocaleString('en-IN');
      return `${item.name} — ${item.size} × ${item.quantity} = ${currency}${linePrice}`;
    }).join('\n');

    let msg = `Hello! I'd like to place an order.\n\n${productLines}\n\nTotal: ${currency}${total.toLocaleString('en-IN')}\n\nName: ${name}\nPhone: ${phone}\nDelivery Address: ${address}`;

    if (notes) {
      msg += `\nDelivery Notes / Landmark: ${notes}`;
    }

    return msg;
  }

  sendToWhatsApp(message) {
    const whatsappNum = SITE_CONFIG.brand.whatsappNumber;
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNum}?text=${encoded}`;
    
    // Open in new tab or trigger native WhatsApp client
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  openDirectChat() {
    const whatsappNum = SITE_CONFIG.brand.whatsappNumber;
    const msg = `Hello ${SITE_CONFIG.brand.name}! I would like to know more about your Pure Cow Ghee and Uthukuli Butter.`;
    const waUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }
}

export const whatsAppSystem = new WhatsAppOrderSystem();
