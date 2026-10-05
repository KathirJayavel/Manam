(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const l={brand:{name:"Gokula Amudham",tagline:"Traditional Ghee",logoBadge:"assets/images/gokula-logo-badge.png",whatsappNumber:"919344020730",phoneDisplay:"+91 93440 20730",address:"Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043",gmapsUrl:"https://maps.app.goo.gl/VQ2UF23fypefmNVQ7",email:"contact@gokulaamudham.com",currency:"₹"},hero:{badge:"Direct Farmer Sourcing · Traditional Tamil Nadu Dairy",headline:`Made the Traditional Way.
Tastes Divine.`,supportingCopy:"Pure Cow Ghee crafted through traditional butter churning and patient slow-fire clarification. Sourced with honor from grassroots dairy farmers for the authentic taste of home.",heroImage:"assets/images/gokula-product-hero.jpg"},trustStrip:[{icon:"🌾",title:"Farmer Sourced",description:"Direct partnership with local dairy farming families across Tamil Nadu"},{icon:"🐄",title:"Pure Cow Ghee",description:"Crafted from fresh cow milk butter with natural golden hue (ml & L only)"},{icon:"🪔",title:"Traditional Clarification",description:"Patiently simmered over controlled heat to create signature granular grain"},{icon:"✨",title:"Pure & Honest",description:"No artificial essences, no chemical preservatives — sealed fresh in clean jars"}],products:[{id:"traditional-cow-ghee",name:"Gokula Amudham Traditional Ghee",tagline:"Slowly clarified golden cow ghee with authentic granular texture",defaultBadge:"Customer Favorite",shortDescription:"Prepared by slowly clarifying wholesome cow milk butter sourced directly from grassroots rural dairy farmers. Celebrated for its deep golden hue, traditional granular ('manal manal') mouthfeel, and rich sacred aroma that brings comforting warmth to every South Indian meal.",primaryImage:"assets/images/gokula-product-hero.jpg",gallery:["assets/images/gokula-product-hero.jpg","assets/images/gokula-product-range.jpg","assets/images/making-ghee-simmering.jpg","assets/images/making-dairy-ghee-jars.jpg"],features:["Signature granular ('manal manalaana') mouthfeel","Slowly clarified over controlled open flame from churned butter","Wholesome cow dairy base sourced directly from farmers","Food-grade sealed packaging preserving fresh aroma","Units strictly in ml & L: 200 ml, 500 ml, 1 L, 2 L"],variants:[{id:"ghee-200ml",size:"200 ml",unit:"ml",mrp:140,price:140,discountEligible:!1,discountPercentage:0,savings:0,label:"Trial Pack",isDefault:!1},{id:"ghee-500ml",size:"500 ml",unit:"ml",mrp:350,price:315,discountEligible:!0,discountPercentage:10,savings:35,label:"Most Popular",isDefault:!0,popular:!0},{id:"ghee-1L",size:"1 L",unit:"L",mrp:700,price:630,discountEligible:!0,discountPercentage:10,savings:70,label:"Best Family Value",isDefault:!1},{id:"ghee-2L",size:"2 L",unit:"L",mrp:1400,price:1260,discountEligible:!0,discountPercentage:10,savings:140,label:"Max Savings",isDefault:!1}]}],productionJourney:{steps:[{step:"01",stage:"FARM & GRAZING",title:"Grassroots Dairy Partnerships",shortTitle:"Grassroots Dairy",oneLiner:"Desi cows cared for with fresh green fodder by rural farming families.",description:"We work directly with rural dairy farming families across Tamil Nadu. Native cows are cared for daily with fresh green fodder to yield wholesome, pure cow milk.",image:"assets/images/story-cows-grazing.jpg",imageAlt:"Desi cows feeding on green grass in dairy farm shed",tag:"Origin"},{step:"02",stage:"FRESH DAIRY",title:"Morning Milking at Dawn",shortTitle:"Morning Milking",oneLiner:"Gentle daily hand-milking at dawn straight from the farm source.",description:"Every morning begins with dedicated hand-milking at sunrise. Practicing gentle animal care ensures uncontaminated, wholesome dairy straight from the source.",image:"assets/images/story-hand-milking.jpg",imageAlt:"Farmer hand milking cow into bucket at dawn",tag:"Purity"},{step:"03",stage:"DAIRY COLLECTION",title:"Direct Farm Milk Collection",shortTitle:"Milk Collection",oneLiner:"Fresh cow milk collected in clean metal dairy cans without delay.",description:"Fresh, unadulterated cow milk is poured into clean traditional metal dairy cans and transported promptly for cream separation without unnecessary delays.",image:"assets/images/story-milk-can-pour.jpg",imageAlt:"Fresh milk poured from metal can in green pasture",tag:"Freshness"},{step:"04",stage:"TRADITIONAL CHURNING",title:"Cream Separation & Churning",shortTitle:"Cream Churning",oneLiner:"Wholesome cream traditionally churned until fresh butter clusters.",description:"Wholesome cow milk cream is naturally set and churned in dedicated vessels using traditional churning motions until golden butter grains cluster together.",image:"assets/images/making-butter-churning.jpg",imageAlt:"Traditional butter churning in vessel with churner shaft",tag:"Tradition"},{step:"05",stage:"TRADITIONAL BUTTER",title:"Velvety Churned Butter Extraction",shortTitle:"Pure Churned Butter",oneLiner:"Dense, silky butter balls gathered by hand in traditional uruli pots.",description:"Freshly churned butter is hand-gathered into silky, dense balls in traditional uruli vessels. This pure cultured butter forms the essential intermediate heart of our traditional ghee.",image:"assets/images/making-churned-butter-hd.jpg",imageAlt:"Fresh churned traditional butter balls in uruli pot for making ghee",tag:"Craft"},{step:"06",stage:"SLOW CLARIFICATION",title:"Gentle Simmering & Boiling",shortTitle:"Slow Clarification",oneLiner:"Simmered over controlled heat into golden, aromatic clarified ghee.",description:"The fresh butter is transferred to heavy boiling vessels and gently simmered over controlled heat. Moisture evaporates as milk solids caramelize, clarifying into rich amber ghee.",image:"assets/images/making-ghee-simmering.jpg",imageAlt:"Golden clarified cow ghee bubbling and simmering in boiler",tag:"Clarification"},{step:"07",stage:"GRANULAR SETTING",title:"Gradual Cooling to Grainy Texture",shortTitle:"Natural Granulation",oneLiner:"Naturally settled to achieve the signature granular ('manal manal') grain.",description:"Freshly clarified ghee is gently strained and allowed to cool slowly at ambient temperature, allowing the ghee crystals to form the authentic, melt-in-mouth granular texture.",image:"assets/images/making-dairy-ghee-jars.jpg",imageAlt:"Rows of freshly packed yellow ghee jars at dairy facility",tag:"Texture"},{step:"08",stage:"OUR BRAND",title:"Gokula Amudham Packaging",shortTitle:"Gokula Amudham",oneLiner:"Sealed in sacred food-grade glass jars preserving natural aroma.",description:"Pure Cow Ghee packaged with honor under the Gokula Amudham brand, adorned with Lord Krishna and Kamadhenu, celebrating sacred South Indian dairy traditions.",image:"assets/images/gokula-product-range.jpg",imageAlt:"Gokula Amudham Traditional Ghee glass jars lineup on marble pedestal",tag:"Authenticity"},{step:"09",stage:"MOTHER'S KITCHEN",title:"The Sizzle of the Hot Tawa",shortTitle:"Mother's Kitchen",oneLiner:"Irresistible morning aroma over golden dosas and fluffy idli podi.",description:"A ladle of Gokula Amudham Cow Ghee swirled over a scorching iron tawa creates the irresistible morning aroma of golden crisp ghee roast dosa and fluffy idli podi.",image:"assets/images/food/food-ghee-dosa.jpg",imageAlt:"Golden crisp South Indian ghee roast dosa on banana leaf",tag:"Aroma"},{step:"10",stage:"FAMILY & TASTE OF HOME",title:"Bringing Generations Together",shortTitle:"Family Comfort",oneLiner:"Traditional South Indian flavours bringing warmth to every meal.",description:"From festival sweets like melt-in-mouth Mysore pak to daily family meals and temple poojas, Gokula Amudham brings the genuine, timeless taste of South Indian comfort to your home.",image:"assets/images/food/food-traditional-sweets.jpg",imageAlt:"Traditional ghee Mysore pak sweets on antique brass tray",tag:"Belonging"}]},bulkOrders:{badge:"Temple & Catering Supply",title:"Bulk & Commercial Ghee Orders",description:"Planning a wedding feast, temple pooja, annadhanam, catering event, or commercial kitchen? We supply Gokula Amudham Pure Cow Ghee in 5 L, 10 L, and 15 L+ sealed containers with volume-tiered wholesale pricing.",ctaText:"Inquire for Bulk Ghee on WhatsApp",waMessage:"Hello Gokula Amudham! I would like to inquire about Bulk Orders (5L+) for Pure Cow Ghee. Please share wholesale pricing and delivery details."},video:{videoUrl:"assets/video/gokula-amudham-story.mp4",posterImage:"assets/images/gokula-video-poster.jpg",sectionBadge:"Brand Film",title:"Made the Traditional Way: The Story of Gokula Amudham",subtitle:"From morning pastures in Tamil Nadu and traditional churning to the sizzle of your mother’s tawa."},whyChooseUs:{pillars:[{icon:"🌾",title:"Farmer Sourced",description:"We work directly with regional dairy farmers across Tamil Nadu, ensuring wholesome cow milk straight from grassroots farming clusters."},{icon:"🥛",title:"Quality Ingredients",description:"No adulterants, no synthetic colors, and no artificial essences. Just pure cow milk cream crafted with traditional respect."},{icon:"🏺",title:"Rich Granular Texture",description:"The distinct golden color, soothing nutty aroma, and authentic granular ('manal manal') mouthfeel that South Indian families cherish."},{icon:"🪔",title:"Slow-Simmered Purity",description:"Patiently clarified in traditional vessels over controlled flame to preserve natural dairy sweetness and wholesome clarity."},{icon:"🍳",title:"Everyday Cooking & Poojas",description:"Versatile and dependable — from simple morning idli-podi to grand festive feasts, temple prasadam, and family sweets."}]},foodSection:{pairings:[{title:"Crisp Ghee Roast Dosa",description:"A ladle of Gokula Amudham Cow Ghee swirled over a paper-thin dosa creates a golden crackling crust and irresistible tiffin aroma.",image:"assets/images/food/food-ghee-dosa.jpg",highlight:"The Signature Sizzle"},{title:"Steaming Idli & Spicy Podi",description:"Pillowy white steamed idlis sprinkled with fiery gun-powder milagai podi and a warm pool of melting golden ghee.",image:"assets/images/food/food-idli-podi.jpg",highlight:"Morning Comfort"},{title:"Fragrant Ven Pongal",description:"Warm rice and lentils tempered with cumin, crushed black peppercorns, curry leaves, and crunchy cashews fried in pure ghee.",image:"assets/images/food/food-ven-pongal.jpg",highlight:"Sunday Breakfast Classic"},{title:"Traditional South Indian Sweets",description:"Melt-in-mouth Mysore pak, fragrant wheat halwa, boondi laddus, and rich festival payasam enriched with pure cow ghee.",image:"assets/images/food/food-traditional-sweets.jpg",highlight:"Festive Perfection"}]},editorial:{tagline:"Our Core Philosophy",headline:"“Made the traditional way. Tastes divine.”",paragraphs:["In South Indian homes, ghee is never merely a cooking medium; it is a sacred gesture of hospitality, an aroma that summons children to the table, and the quiet soul of traditional family recipes handed down across generations.","Gokula Amudham was founded on a simple conviction: honor the dairy farmer, respect the traditional craft of butter churning and slow clarification, and bring uncompromised purity to the everyday kitchen. We source wholesome dairy from rural farming families who know and revere their craft.","When you spoon Gokula Amudham Traditional Ghee over steaming food, you taste the sunlit pasture lands, the quiet skill of pastoral hands, and the unmistakable divine warmth of home."]},testimonials:{items:[{quote:"The aroma when I poured Gokula Amudham ghee over hot rice and paruppu took me straight back to my grandmother's home in Erode. The granular texture is absolutely genuine.",author:"Lakshmi R.",location:"Home Cook · Chennai",rating:5},{quote:"You can tell the difference in the very first spoonful. Slow clarification gives it that authentic nutty aroma and rich golden color. We order the 1L jar every month.",author:"Karthikeyan S.",location:"Food Enthusiast · Coimbatore",rating:5},{quote:"We used Gokula Amudham Cow Ghee for our temple pooja and Diwali sweets. Melt-in-mouth Mysore Pak and incredible fragrance that filled the whole home.",author:"Revathi S.",location:"Bengaluru",rating:5}]},faqs:[{question:"What products and sizes do you sell?",answer:"We specialize exclusively in Gokula Amudham Traditional Pure Cow Ghee, available in 200 ml, 500 ml, 1 L, and 2 L jars. We also cater to commercial and temple bulk orders in 5 L, 10 L, and 15 L+ sealed containers."},{question:"What is your pricing and discount policy?",answer:"We offer flat 10% OFF on all regular and family sizes: Pure Cow Ghee 500 ml (₹315, save ₹35), 1 L (₹630, save ₹70), and 2 L (₹1,260, save ₹140). The starter trial pack (200 ml Ghee at ₹140) is sold at standard MRP without discount."},{question:"How is Gokula Amudham Ghee prepared?",answer:"Our ghee is crafted using time-honored traditional methods. Wholesome cow milk is collected fresh from rural farmers, naturally cultured and churned into pure butter, and then patiently simmered over controlled heat. As water evaporates and milk solids clarify, the golden aromatic ghee is gently cooled to develop its signature granular ('manal manal') texture."},{question:"Do you sell butter directly?",answer:"No, Gokula Amudham focuses exclusively on producing and delivering pure cow ghee. Traditional butter is an essential intermediate stage in our ghee-making craft, but we do not sell butter as a retail product."},{question:"Do you offer bulk orders and temple supplies?",answer:"Yes! We provide special volume-tiered wholesale pricing for bulk orders of 5 L, 10 L, 15 L and above for weddings, temples, poojas, and catering. Contact us directly on WhatsApp at +91 93440 20730 for custom bulk quotes."},{question:"How should I store Gokula Amudham Ghee?",answer:"Store Gokula Amudham Ghee in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to preserve its purity. Refrigerator storage is not required, as pure clarified ghee stays fresh naturally at room temperature."},{question:"How can I place an order?",answer:"Ordering is seamless! Simply select your desired pack size and quantity on this website, click 'Proceed to Order', fill in your delivery details, and click 'Confirm & Order via WhatsApp'. This instantly opens WhatsApp (+91 93440 20730) with your pre-filled order ready to send to our team."},{question:"Where is your address and do you deliver?",answer:"Our store location is Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043 (view on Google Maps: https://maps.app.goo.gl/VQ2UF23fypefmNVQ7). We deliver locally in Chennai/Tambaram as well as dispatch across Tamil Nadu and South India."}]},g="gokula_amudham_cart_v1";class y{constructor(){this.items=this.loadFromStorage(),this.drawerEl=null,this.backdropEl=null,this.badgeEls=[]}init(){this.drawerEl=document.getElementById("cart-drawer"),this.backdropEl=document.getElementById("cart-backdrop"),this.badgeEls=document.querySelectorAll(".cart-count-badge"),this.bindEvents(),this.render()}loadFromStorage(){try{const t=localStorage.getItem(g);return t?JSON.parse(t):[]}catch(t){return console.warn("Could not read cart from localStorage",t),[]}}saveToStorage(){try{localStorage.setItem(g,JSON.stringify(this.items))}catch(t){console.warn("Could not save cart to localStorage",t)}}addItem(t,e,a=1){const i=this.items.findIndex(r=>r.productId===t.id&&r.variantId===e.id);i>-1?this.items[i].quantity+=a:this.items.push({productId:t.id,variantId:e.id,name:t.name,size:e.size,price:e.price,image:t.primaryImage,quantity:a}),this.saveToStorage(),this.render(),this.openDrawer(),this.triggerToast(`Added ${a} × ${t.name} (${e.size}) to cart`)}updateQuantity(t,e,a){const i=this.items.findIndex(s=>s.productId===t&&s.variantId===e);if(i===-1)return;const r=this.items[i].quantity+a;r<=0?this.removeItem(t,e):(this.items[i].quantity=r,this.saveToStorage(),this.render())}removeItem(t,e){this.items=this.items.filter(a=>!(a.productId===t&&a.variantId===e)),this.saveToStorage(),this.render()}clear(){this.items=[],this.saveToStorage(),this.render()}getTotalCount(){return this.items.reduce((t,e)=>t+e.quantity,0)}getSubtotal(){return this.items.reduce((t,e)=>t+e.price*e.quantity,0)}openDrawer(){!this.drawerEl||!this.backdropEl||(this.drawerEl.classList.add("is-open"),this.backdropEl.classList.add("is-open"),document.body.style.overflow="hidden")}closeDrawer(){!this.drawerEl||!this.backdropEl||(this.drawerEl.classList.remove("is-open"),this.backdropEl.classList.remove("is-open"),document.body.style.overflow="")}bindEvents(){document.querySelectorAll('[data-action="open-cart"]').forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),this.openDrawer()})}),document.querySelectorAll('[data-action="close-cart"]').forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),this.closeDrawer()})}),this.backdropEl&&this.backdropEl.addEventListener("click",()=>this.closeDrawer()),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeDrawer()});const t=document.getElementById("cart-checkout-btn");t&&t.addEventListener("click",()=>{this.items.length!==0&&(this.closeDrawer(),window.dispatchEvent(new CustomEvent("open-checkout-modal",{detail:{items:this.items,subtotal:this.getSubtotal()}})))})}render(){const t=this.getTotalCount(),e=this.getSubtotal(),a=l.brand.currency;this.badgeEls.forEach(n=>{n.textContent=t,t>0?n.classList.add("has-items"):n.classList.remove("has-items")});const i=document.getElementById("cart-items-list"),r=document.getElementById("cart-empty-state"),s=document.getElementById("cart-footer"),o=document.getElementById("cart-subtotal-val"),d=document.getElementById("cart-total-val");if(o&&(o.textContent=`${a}${e.toLocaleString("en-IN")}`),d&&(d.textContent=`${a}${e.toLocaleString("en-IN")}`),this.items.length===0){i&&(i.innerHTML=""),r&&(r.style.display="flex"),s&&(s.style.display="none");return}r&&(r.style.display="none"),s&&(s.style.display="block"),i&&(i.innerHTML=this.items.map(n=>`
        <div class="cart-item" data-product="${n.productId}" data-variant="${n.variantId}">
          <div class="cart-item-img-wrap">
            <img src="${n.image}" alt="${n.name}" class="cart-item-img" loading="lazy" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-header">
              <h4 class="cart-item-title">${n.name}</h4>
              <button type="button" class="cart-item-remove" data-remove-product="${n.productId}" data-remove-variant="${n.variantId}" title="Remove item" aria-label="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
            <div class="cart-item-size-badge">${n.size}</div>
            <div class="cart-item-price-row">
              <div class="cart-item-unit-price">${a}${n.price} each</div>
              <div class="cart-item-line-total">${a}${(n.price*n.quantity).toLocaleString("en-IN")}</div>
            </div>
            <div class="cart-item-actions">
              <div class="cart-qty-stepper">
                <button type="button" class="qty-btn" data-qty-change="-1" data-p="${n.productId}" data-v="${n.variantId}" aria-label="Decrease quantity">
                  −
                </button>
                <span class="qty-count">${n.quantity}</span>
                <button type="button" class="qty-btn" data-qty-change="1" data-p="${n.productId}" data-v="${n.variantId}" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join(""),i.querySelectorAll("[data-qty-change]").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-p"),u=n.getAttribute("data-v"),p=parseInt(n.getAttribute("data-qty-change"),10);this.updateQuantity(c,u,p)})}),i.querySelectorAll("[data-remove-product]").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-remove-product"),u=n.getAttribute("data-remove-variant");this.removeItem(c,u)})}))}triggerToast(t){let e=document.getElementById("cart-toast");e||(e=document.createElement("div"),e.id="cart-toast",e.className="cart-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("is-visible"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{e.classList.remove("is-visible")},2800)}}const m=new y,f="gokula_amudham_customer_details_v1";class b{constructor(){this.modalEl=null,this.formEl=null,this.orderPreviewEl=null}init(){this.modalEl=document.getElementById("checkout-modal"),this.formEl=document.getElementById("checkout-form"),this.orderPreviewEl=document.getElementById("checkout-order-summary"),this.bindEvents(),this.populateSavedCustomer()}bindEvents(){window.addEventListener("open-checkout-modal",()=>{this.openModal()}),document.querySelectorAll('[data-action="close-checkout"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.closeModal()})}),this.modalEl&&this.modalEl.addEventListener("click",t=>{t.target===this.modalEl&&this.closeModal()}),this.formEl&&this.formEl.addEventListener("submit",t=>{t.preventDefault(),this.handleSubmit()}),document.querySelectorAll('[data-action="direct-whatsapp"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.openDirectChat()})})}populateSavedCustomer(){try{const t=localStorage.getItem(f);if(t){const e=JSON.parse(t),a=document.getElementById("cust-name"),i=document.getElementById("cust-phone"),r=document.getElementById("cust-address");a&&e.name&&(a.value=e.name),i&&e.phone&&(i.value=e.phone),r&&e.address&&(r.value=e.address)}}catch(t){console.warn("Error reading saved customer details",t)}}openModal(){if(!this.modalEl)return;this.renderSummary(),this.modalEl.classList.add("is-open"),document.body.style.overflow="hidden";const t=document.getElementById("cust-name");t&&setTimeout(()=>t.focus(),150)}closeModal(){this.modalEl&&(this.modalEl.classList.remove("is-open"),document.body.style.overflow="")}renderSummary(){if(!this.orderPreviewEl)return;const t=m.items,e=m.getSubtotal(),a=l.brand.currency;if(t.length===0){this.orderPreviewEl.innerHTML='<p class="empty-msg">Your basket is currently empty.</p>';return}const i=t.map(r=>`
      <div class="summary-line">
        <span class="summary-line-name">
          <strong>${r.name}</strong> (${r.size}) × ${r.quantity}
        </span>
        <span class="summary-line-price">${a}${(r.price*r.quantity).toLocaleString("en-IN")}</span>
      </div>
    `).join("");this.orderPreviewEl.innerHTML=`
      <div class="checkout-summary-box">
        <h4 class="summary-title">Order Summary (${m.getTotalCount()} items)</h4>
        <div class="summary-lines">${i}</div>
        <div class="summary-total-row">
          <span>Total:</span>
          <strong>${a}${e.toLocaleString("en-IN")}</strong>
        </div>
      </div>
    `}handleSubmit(){const t=document.getElementById("cust-name"),e=document.getElementById("cust-phone"),a=document.getElementById("cust-address"),i=document.getElementById("cust-notes"),r=t?t.value.trim():"",s=e?e.value.trim():"",o=a?a.value.trim():"",d=i?i.value.trim():"";let n=!1;r?this.clearInputError(t):(this.showInputError(t,"Please enter your full name"),n=!0);const c=s.replace(/[^0-9]/g,"");if(!c||c.length<10?(this.showInputError(e,"Please enter a valid 10-digit phone number"),n=!0):this.clearInputError(e),!o||o.length<10?(this.showInputError(a,"Please enter your complete delivery address (street, city, pincode)"),n=!0):this.clearInputError(a),n)return;if(m.items.length===0){alert("Your cart is empty. Please add products before placing an order."),this.closeModal();return}try{localStorage.setItem(f,JSON.stringify({name:r,phone:s,address:o}))}catch(p){console.warn("Could not save customer info",p)}const u=this.generateOrderMessage({items:m.items,total:m.getSubtotal(),name:r,phone:s,address:o,notes:d});this.closeModal(),this.sendToWhatsApp(u)}showInputError(t,e){if(!t)return;t.classList.add("has-error");let a=t.parentElement.querySelector(".form-field-error");a||(a=document.createElement("span"),a.className="form-field-error",t.parentElement.appendChild(a)),a.textContent=e}clearInputError(t){if(!t)return;t.classList.remove("has-error");const e=t.parentElement.querySelector(".form-field-error");e&&e.remove()}generateOrderMessage({items:t,total:e,name:a,phone:i,address:r,notes:s}){const o=l.brand.currency;let n=`Hello! I'd like to place an order.

${t.map(c=>{const u=(c.price*c.quantity).toLocaleString("en-IN");return`${c.name} — ${c.size} × ${c.quantity} = ${o}${u}`}).join(`
`)}

Total: ${o}${e.toLocaleString("en-IN")}

Name: ${a}
Phone: ${i}
Delivery Address: ${r}`;return s&&(n+=`
Delivery Notes / Landmark: ${s}`),n}sendToWhatsApp(t){const e=l.brand.whatsappNumber,a=encodeURIComponent(t),i=`https://wa.me/${e}?text=${a}`;window.open(i,"_blank","noopener,noreferrer")}openDirectChat(){const t=l.brand.whatsappNumber,e=`Hello ${l.brand.name}! I would like to know more about your Traditional Cow Ghee.`,a=`https://wa.me/${t}?text=${encodeURIComponent(e)}`;window.open(a,"_blank","noopener,noreferrer")}}const v=new b;class w{constructor(){this.selectedVariants={},this.selectedQuantities={}}init(){this.setupBrandDetails(),this.renderTrustStrip(),this.renderProducts(),this.renderBulkOrdersSection(),this.renderStoryMilestones(),this.renderVideoSection(),this.renderWhyChooseUs(),this.renderFoodPairings(),this.renderEditorial(),this.renderTestimonials(),this.renderFaqs(),this.renderFooter(),m.init(),v.init(),this.bindNavigation(),this.bindScrollEffects(),console.log("Gokula Amudham website controller initialized with strict dynamic pricing.")}setupBrandDetails(){const{brand:t,hero:e}=l;document.title=`${t.name} — ${t.tagline} | Made the Traditional Way, Tastes Divine`,document.querySelectorAll(".brand-name-text").forEach(o=>o.textContent=t.name),document.querySelectorAll(".brand-tagline-text").forEach(o=>o.textContent=t.tagline),document.querySelectorAll(".brand-emblem-img").forEach(o=>{o.src=t.logoBadge});const a=document.getElementById("hero-title"),i=document.getElementById("hero-copy"),r=document.getElementById("hero-badge"),s=document.getElementById("hero-main-img");a&&(a.innerHTML=e.headline.replace(/\n/g,"<br/>")),i&&(i.textContent=e.supportingCopy),r&&(r.textContent=e.badge),s&&(s.src=e.heroImage,s.alt=`${t.name} Traditional Cow Ghee`),document.querySelectorAll('[data-bind="whatsapp-link"]').forEach(o=>{o.href=`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(`Hello ${t.name}! I would like to order Traditional Cow Ghee.`)}`})}renderTrustStrip(){const t=document.getElementById("trust-strip-grid");t&&(t.innerHTML=l.trustStrip.map(e=>`
      <div class="trust-item">
        <div class="trust-icon" aria-hidden="true">${e.icon}</div>
        <div class="trust-text">
          <h3 class="trust-title">${e.title}</h3>
          <p class="trust-desc">${e.description}</p>
        </div>
      </div>
    `).join(""))}renderProducts(){const t=document.getElementById("products-grid");if(!t)return;const e=l.brand.currency;t.innerHTML=l.products.map(a=>{const i=a.variants.find(r=>r.isDefault)||a.variants[0];return this.selectedVariants[a.id]=i.id,this.selectedQuantities[a.id]=1,`
        <article class="product-card" id="product-${a.id}">
          
          <!-- Dynamic Badge Area (Updates dynamically based on variant selection) -->
          <div class="product-badge-wrap" id="badge-wrap-${a.id}">
            ${this.renderCardBadge(i,a)}
          </div>

          <!-- Product Image & Gallery -->
          <div class="product-media">
            <div class="product-main-img-wrap">
              <img 
                src="${a.primaryImage}" 
                alt="${a.name}" 
                class="product-main-img" 
                id="main-img-${a.id}"
                loading="lazy"
              />
            </div>
            ${a.gallery&&a.gallery.length>1?`
              <div class="product-thumbs" role="tablist" aria-label="${a.name} gallery">
                ${a.gallery.map((r,s)=>`
                  <button 
                    type="button" 
                    class="thumb-btn ${s===0?"is-active":""}" 
                    data-product="${a.id}" 
                    data-src="${r}"
                    aria-label="View photo ${s+1}"
                  >
                    <img src="${r}" alt="${a.name} angle ${s+1}" loading="lazy" />
                  </button>
                `).join("")}
              </div>
            `:""}
          </div>

          <!-- Product Details -->
          <div class="product-content">
            <div class="product-header">
              <h3 class="product-title">${a.name}</h3>
              <p class="product-tagline">${a.tagline}</p>
            </div>

            <p class="product-desc">${a.description}</p>

            <!-- Feature Badges -->
            <ul class="product-features-list">
              ${a.features.map(r=>`
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${r}</span>
                </li>
              `).join("")}
            </ul>

            <!-- Pack Size Selector Chips (Clean simple pills) -->
            <div class="product-variants-wrapper">
              <div class="variant-label-row">
                <label class="variant-label">Select Pack Size:</label>
                <span class="variant-offer-hint ${i.discountEligible?"discount-active":"standard-mrp"}" id="variant-hint-${a.id}">
                  ${i.discountEligible?"⚡ 10% OFF on this size":"Standard MRP Pack"}
                </span>
              </div>
              <div class="variant-chips-group" role="radiogroup" aria-label="${a.name} pack size options">
                ${a.variants.map(r=>`
                  <button 
                    type="button" 
                    class="variant-chip ${r.id===i.id?"is-selected":""}" 
                    data-product="${a.id}" 
                    data-variant="${r.id}"
                    role="radio"
                    aria-checked="${r.id===i.id}"
                  >
                    <span class="chip-size">${r.size}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Dynamic Price & Stepper Row (Original clean action bar) -->
            <div class="product-action-bar">
              <div class="product-price-box" id="price-box-${a.id}">
                ${this.renderPriceBox(i,e)}
              </div>

              <div class="product-qty-selector">
                <label for="qty-${a.id}" class="sr-only">Quantity</label>
                <div class="qty-stepper">
                  <button type="button" class="stepper-btn" data-stepper-change="-1" data-target="${a.id}" aria-label="Decrease quantity">−</button>
                  <span class="stepper-val" id="qty-val-${a.id}">1</span>
                  <button type="button" class="stepper-btn" data-stepper-change="1" data-target="${a.id}" aria-label="Increase quantity">+</button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="product-cta-buttons">
              <button 
                type="button" 
                class="btn btn-primary btn-add-cart" 
                data-add-to-cart="${a.id}"
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
                data-direct-whatsapp-product="${a.id}"
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
      `}).join(""),this.bindProductInteractions()}renderCardBadge(t,e){return t.discountEligible?`
        <span class="product-pill">${e.defaultBadge}</span>
        <span class="product-offer-tag">10% OFF APPLIED</span>
      `:`
      <span class="product-pill">${e.defaultBadge}</span>
      <span class="product-trial-tag">TRIAL PACK (MRP)</span>
    `}renderPriceBox(t,e){return t.discountEligible?`
        <div class="price-strikethrough-row">
          <span class="price-prefix">Price:</span>
          <del class="product-base-price">${e}${t.mrp}</del>
          <span class="discount-pill-small">10% OFF</span>
        </div>
        <div class="price-current-row">
          <span class="product-current-price">${e}${t.price}</span>
          <span class="savings-tag">You Save ${e}${t.savings}</span>
        </div>
      `:`
      <div class="price-strikethrough-row normal-mrp">
        <span class="price-prefix">Price:</span>
      </div>
      <div class="price-current-row">
        <span class="product-current-price">${e}${t.price}</span>
      </div>
    `}bindProductInteractions(){const t=l.brand.currency;document.querySelectorAll(".variant-chip").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-product"),i=e.getAttribute("data-variant"),r=l.products.find(u=>u.id===a);if(!r)return;const s=r.variants.find(u=>u.id===i);if(!s)return;this.selectedVariants[a]=i,e.closest(".variant-chips-group").querySelectorAll(".variant-chip").forEach(u=>{u.classList.remove("is-selected"),u.setAttribute("aria-checked","false")}),e.classList.add("is-selected"),e.setAttribute("aria-checked","true");const d=document.getElementById(`badge-wrap-${a}`);d&&(d.innerHTML=this.renderCardBadge(s,r));const n=document.getElementById(`variant-hint-${a}`);n&&(n.textContent=s.discountEligible?"⚡ 10% OFF on this size":"Standard MRP Pack",n.className=s.discountEligible?"variant-offer-hint discount-active":"variant-offer-hint standard-mrp");const c=document.getElementById(`price-box-${a}`);c&&(c.innerHTML=this.renderPriceBox(s,t))})}),document.querySelectorAll("[data-stepper-change]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-target"),i=parseInt(e.getAttribute("data-stepper-change"),10);let r=this.selectedQuantities[a]||1;r=Math.max(1,r+i),this.selectedQuantities[a]=r;const s=document.getElementById(`qty-val-${a}`);s&&(s.textContent=r)})}),document.querySelectorAll(".thumb-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-product"),i=e.getAttribute("data-src"),r=document.getElementById(`main-img-${a}`);r&&(r.src=i),e.closest(".product-thumbs").querySelectorAll(".thumb-btn").forEach(o=>o.classList.remove("is-active")),e.classList.add("is-active")})}),document.querySelectorAll("[data-add-to-cart]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-add-to-cart"),i=l.products.find(d=>d.id===a);if(!i)return;const r=this.selectedVariants[a],s=i.variants.find(d=>d.id===r)||i.variants[0],o=this.selectedQuantities[a]||1;m.addItem(i,s,o)})}),document.querySelectorAll("[data-direct-whatsapp-product]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-direct-whatsapp-product"),i=l.products.find(d=>d.id===a);if(!i)return;const r=this.selectedVariants[a],s=i.variants.find(d=>d.id===r)||i.variants[0],o=this.selectedQuantities[a]||1;m.addItem(i,s,o),m.closeDrawer(),v.openModal()})})}renderBulkOrdersSection(){const t=document.getElementById("bulk-orders-container");if(!t)return;const{bulkOrders:e,brand:a}=l;t.innerHTML=`
      <div class="bulk-wholesale-banner">
        <div class="bulk-banner-main">
          <div class="bulk-tag-pill">
            <span class="bulk-tag-icon">📦</span>
            <span>${e.badge}</span>
          </div>
          <h3 class="bulk-banner-title">${e.title}</h3>
          <p class="bulk-banner-desc">${e.description}</p>
          <div class="bulk-tier-chips">
            <span class="tier-chip"><strong>5 kg</strong> Sealed Pack</span>
            <span class="tier-chip"><strong>10 kg</strong> Catering Tin</span>
            <span class="tier-chip"><strong>15 kg+</strong> Express Supply</span>
          </div>
        </div>
        <div class="bulk-banner-side">
          <a 
            href="https://wa.me/${a.whatsappNumber}?text=${encodeURIComponent(e.waMessage)}" 
            target="_blank" 
            rel="noopener" 
            class="btn btn-whatsapp-bulk"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>${e.ctaText}</span>
          </a>
          <span class="bulk-sub-guarantee">Direct dairy reservation · Bulk discount pricing</span>
        </div>
      </div>
    `}renderVideoSection(){const t=document.getElementById("cinematic-video-section");if(!t)return;const{video:e}=l,a=`
      <div class="video-theater-wrapper">
        <div class="video-ambient-glow"></div>

        <div class="video-container-card clean-frame">
          <div class="video-header-badge">
            <span class="video-tag">🎬 ${e.sectionBadge}</span>
            <span class="video-live-badge">● Official Film</span>
          </div>

          <!-- Clean Smooth Video Container -->
          <div class="video-screen-ratio clean-video-aspect" id="video-player-frame">
            <video 
              id="brand-story-video"
              controls 
              poster="${e.posterImage}" 
              class="video-element-smooth"
              playsinline
              preload="metadata"
            >
              <source src="${e.videoUrl}" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <!-- Video Under-Bar Information -->
          <div class="video-meta-bar">
            <div class="video-meta-left">
              <h3 class="video-meta-title">${e.title}</h3>
              <p class="video-meta-subtitle">${e.subtitle}</p>
            </div>
            <div class="video-meta-right">
              <a href="#products" class="btn btn-secondary btn-sm" style="font-size: 0.8125rem;">
                Order Traditional Ghee
              </a>
            </div>
          </div>
        </div>
      </div>
    `;t.innerHTML=a}renderStoryMilestones(){const t=document.getElementById("story-milestones-grid");if(!t)return;const{steps:e}=l.productionJourney;t.innerHTML=`
      <!-- Compact Visual Production Gallery (4 Columns Desktop / 2 Columns Mobile) -->
      <div class="prod-gallery-grid" role="region" aria-label="Visual production journey gallery">
        ${e.map(a=>`
          <div class="prod-gallery-card">
            <div class="prod-gallery-img-wrap">
              <img 
                src="${a.image}" 
                alt="${a.imageAlt||a.title}" 
                class="prod-gallery-img" 
                loading="lazy" 
              />
            </div>
            <div class="prod-gallery-caption">
              <h4 class="prod-gallery-step-title">${a.step} — ${a.shortTitle||a.title}</h4>
              <p class="prod-gallery-one-liner">${a.oneLiner||a.description}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `}renderWhyChooseUs(){const t=document.getElementById("why-us-grid");t&&(t.innerHTML=l.whyChooseUs.pillars.map((e,a)=>`
      <div class="pillar-card">
        <div class="pillar-top">
          <div class="pillar-icon">${e.icon}</div>
          <span class="pillar-num">0${a+1}</span>
        </div>
        <h3 class="pillar-title">${e.title}</h3>
        <p class="pillar-desc">${e.description}</p>
      </div>
    `).join(""))}renderFoodPairings(){const t=document.getElementById("food-pairings-grid");t&&(t.innerHTML=l.foodSection.pairings.map(e=>`
      <div class="food-card">
        <div class="food-img-wrap">
          <img src="${e.image}" alt="${e.title}" class="food-img" loading="lazy" />
          <span class="food-tag">${e.highlight}</span>
        </div>
        <div class="food-card-body">
          <h3 class="food-title">${e.title}</h3>
          <p class="food-desc">${e.description}</p>
        </div>
      </div>
    `).join(""))}renderEditorial(){const t=document.getElementById("editorial-content");if(!t)return;const{editorial:e}=l;t.innerHTML=`
      <div class="editorial-card">
        <span class="editorial-tag">${e.tagline}</span>
        <h2 class="editorial-title">${e.headline}</h2>
        <div class="editorial-text">
          ${e.paragraphs.map(a=>`<p>${a}</p>`).join("")}
        </div>
        <div class="editorial-quote-author">
          <div class="quote-signature">— Gokula Amudham Dairy Foods</div>
          <div class="quote-creed">Pallavaram, Tambaram, Tamil Nadu · Direct Farmer Sourcing</div>
        </div>
      </div>
    `}renderTestimonials(){const t=document.getElementById("testimonials-grid");if(!t)return;const{testimonials:e}=l;t.innerHTML=e.items.map(a=>`
      <div class="testimonial-card">
        <div class="testimonial-stars" aria-label="${a.rating} out of 5 stars">
          ${"★".repeat(a.rating)}
        </div>
        <blockquote class="testimonial-quote">
          “${a.quote}”
        </blockquote>
        <div class="testimonial-author-box">
          <div class="author-avatar">${a.author.charAt(0)}</div>
          <div class="author-info">
            <span class="author-name">${a.author}</span>
            <span class="author-location">${a.location}</span>
          </div>
        </div>
      </div>
    `).join("")}renderFaqs(){const t=document.getElementById("faqs-accordion");t&&(t.innerHTML=l.faqs.map((e,a)=>`
      <div class="faq-item ${a===0?"is-active":""}">
        <button 
          type="button" 
          class="faq-question-btn" 
          id="faq-btn-${a}" 
          aria-expanded="${a===0}" 
          aria-controls="faq-ans-${a}"
        >
          <span class="faq-q-text">${e.question}</span>
          <span class="faq-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div 
          class="faq-answer-panel" 
          id="faq-ans-${a}" 
          role="region" 
          aria-labelledby="faq-btn-${a}"
          ${a!==0?"hidden":""}
        >
          <div class="faq-answer-content">
            <p>${e.answer}</p>
          </div>
        </div>
      </div>
    `).join(""),this.bindFaqAccordion())}bindFaqAccordion(){document.querySelectorAll(".faq-question-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".faq-item"),a=e.classList.contains("is-active"),i=e.querySelector(".faq-answer-panel");document.querySelectorAll(".faq-item").forEach(r=>{if(r!==e){r.classList.remove("is-active");const s=r.querySelector(".faq-question-btn"),o=r.querySelector(".faq-answer-panel");s&&s.setAttribute("aria-expanded","false"),o&&(o.hidden=!0)}}),a?(e.classList.remove("is-active"),t.setAttribute("aria-expanded","false"),i&&(i.hidden=!0)):(e.classList.add("is-active"),t.setAttribute("aria-expanded","true"),i&&(i.hidden=!1))})})}renderFooter(){const{brand:t}=l,e=document.getElementById("footer-location"),a=document.getElementById("footer-phone"),i=document.getElementById("footer-email"),r=document.getElementById("footer-wa-link"),s=document.getElementById("footer-gmaps-link");e&&(e.textContent=t.address),a&&(a.textContent=t.phoneDisplay,a.href=`tel:${t.whatsappNumber}`),i&&(i.textContent=t.email,i.href=`mailto:${t.email}`),r&&(r.href=`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(`Hello ${t.name}! I would like to place an order.`)}`),s&&(s.href=t.gmapsUrl)}bindNavigation(){const t=document.getElementById("mobile-nav-toggle"),e=document.getElementById("mobile-menu-drawer"),a=document.getElementById("mobile-menu-backdrop");if(t&&e){const i=()=>{e.classList.add("is-open"),a&&a.classList.add("is-open"),t.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},r=()=>{e.classList.remove("is-open"),a&&a.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),document.body.style.overflow=""};t.addEventListener("click",s=>{s.preventDefault(),e.classList.contains("is-open")?r():i()}),a&&a.addEventListener("click",r),e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r)})}document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(r){const s=this.getAttribute("href");if(s==="#"||s==="#!")return;const o=document.querySelector(s);o&&(r.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"}))})})}bindScrollEffects(){const t=document.getElementById("main-header");t&&window.addEventListener("scroll",()=>{window.scrollY>40?t.classList.add("is-scrolled"):t.classList.remove("is-scrolled")},{passive:!0})}}document.addEventListener("DOMContentLoaded",()=>{new w().init()});
