(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const l={brand:{name:"MANAM",tagline:"From the hands of farmers, to the heart of your home.",logoBadge:"assets/images/manam-official-logo-badge.png",whatsappNumber:"919344020730",phoneDisplay:"+91 93440 20730",address:"Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043",gmapsUrl:"https://maps.app.goo.gl/VQ2UF23fypefmNVQ7",email:"contact@manamfoods.com",currency:"₹"},hero:{badge:"Direct Farmer Sourcing · Traditional Tamil Nadu Dairy",headline:`Pure by Origin.
Rich in Tradition.`,supportingCopy:"Farm-sourced Uthukuli Butter & Pure Cow Ghee, made for the taste of home. Order directly on WhatsApp with exclusive introductory offers.",heroImage:"assets/images/product-ghee-hero-hd.jpg"},trustStrip:[{icon:"🌾",title:"Farmer Sourced",description:"Direct partnership with local dairy farmers in Tamil Nadu"},{icon:"🐄",title:"Pure Cow Ghee",description:"Carefully clarified cow milk butter with rich aroma (ml & L only)"},{icon:"🧈",title:"Uthukuli Butter",description:"Renowned traditional butter from the historic dairy region"},{icon:"✨",title:"Quality First",description:"Carefully selected and packed for everyday family kitchens"}],products:[{id:"pure-cow-ghee",name:"MANAM Pure Cow Ghee",tagline:"Slowly clarified golden cow ghee with authentic granular texture",defaultBadge:"Customer Favorite",shortDescription:"Crafted by slowly clarifying wholesome cow milk butter sourced from grassroots rural dairy farmers. Features a vibrant golden hue, traditional granular ('manal manal') texture, and an authentic South Indian aroma.",primaryImage:"assets/images/product-ghee-hero-hd.jpg",gallery:["assets/images/product-ghee-hero-hd.jpg","assets/images/making-ghee-simmering.jpg","assets/images/product-range-collage-hd.jpg","assets/images/making-dairy-ghee-jars.jpg"],features:["Signature granular ('manal manalaana') mouthfeel","Wholesome cow dairy base sourced directly from farmers","Food-grade sealed packaging preserving fresh aroma","Units strictly in ml & L: 200 ml, 500 ml, 1 L, 2 L"],variants:[{id:"ghee-200ml",size:"200 ml",unit:"ml",mrp:140,price:140,discountEligible:!1,discountPercentage:0,savings:0,label:"Trial Pack",isDefault:!1},{id:"ghee-500ml",size:"500 ml",unit:"ml",mrp:350,price:315,discountEligible:!0,discountPercentage:10,savings:35,label:"Most Popular",isDefault:!0,popular:!0},{id:"ghee-1L",size:"1 L",unit:"L",mrp:700,price:630,discountEligible:!0,discountPercentage:10,savings:70,label:"Best Family Value",isDefault:!1},{id:"ghee-2L",size:"2 L",unit:"L",mrp:1400,price:1260,discountEligible:!0,discountPercentage:10,savings:140,label:"Max Savings",isDefault:!1}]},{id:"uthukuli-butter",name:"MANAM Uthukuli Butter",tagline:"Authentic Churned Butter from Uthukuli Heartland",defaultBadge:"Heritage Creamery",shortDescription:"Sourced from the celebrated dairy farming hub of Uthukuli, Tamil Nadu. Fresh cow milk cream is traditionally churned into velvety, dense butter balls with clean dairy sweetness and exceptional clarification.",primaryImage:"assets/images/product-butter-tub-hd.jpg",gallery:["assets/images/product-butter-tub-hd.jpg","assets/images/making-butter-churning.jpg","assets/images/making-churned-butter-hd.jpg","assets/images/product-range-collage-hd.jpg"],features:["Sourced from the famed Uthukuli dairy heartland","Freshly churned from wholesome cow milk cream","Velvety texture with clean dairy sweetness","Available in 200 g, 500 g, 1 kg, and 2 kg"],variants:[{id:"butter-200g",size:"200 g",unit:"g",mrp:150,price:150,discountEligible:!1,discountPercentage:0,savings:0,label:"Trial Pack",isDefault:!1},{id:"butter-500g",size:"500 g",unit:"g",mrp:375,price:338,discountEligible:!0,discountPercentage:10,savings:37,label:"Most Popular",isDefault:!0,popular:!0},{id:"butter-1kg",size:"1 kg",unit:"kg",mrp:750,price:675,discountEligible:!0,discountPercentage:10,savings:75,label:"Best Value",isDefault:!1},{id:"butter-2kg",size:"2 kg",unit:"kg",mrp:1500,price:1350,discountEligible:!0,discountPercentage:10,savings:150,label:"Max Savings",isDefault:!1}]}],productionJourney:{steps:[{step:"01",stage:"FARM & GRAZING",title:"Grassroots Dairy Partnerships",shortTitle:"Grassroots Dairy",oneLiner:"Desi cows cared for with fresh green fodder by Tamil Nadu farmers.",description:"We work directly with rural dairy farming families across Tamil Nadu. Native desi cows are cared for daily with fresh, wholesome green fodder to ensure pure, nutrient-rich milk.",image:"assets/images/story-cows-grazing.jpg",imageAlt:"Desi cows feeding on green grass in dairy farm shed",tag:"Origin"},{step:"02",stage:"FRESH DAIRY",title:"Morning Milking at Dawn",shortTitle:"Morning Milking",oneLiner:"Gentle daily hand-milking at dawn straight from the farm source.",description:"Every morning begins with dedicated hand-milking at sunrise. Practicing gentle animal care ensures uncontaminated dairy straight from the source.",image:"assets/images/story-hand-milking.jpg",imageAlt:"Farmer hand milking cow into bucket at dawn",tag:"Purity"},{step:"03",stage:"DAIRY COLLECTION",title:"Direct Farm Milk Collection",shortTitle:"Milk Collection",oneLiner:"Fresh cow milk collected in clean metal dairy cans without delay.",description:"Fresh, unadulterated cow milk is poured into clean traditional metal dairy cans and transported promptly for cream separation without unnecessary delays.",image:"assets/images/story-milk-can-pour.jpg",imageAlt:"Fresh milk poured from metal can in green pasture",tag:"Freshness"},{step:"04",stage:"TRADITIONAL CHURNING",title:"Cream Separation & Churning",shortTitle:"Cream Churning",oneLiner:"Wholesome cream traditionally churned until fresh butter clusters.",description:"Wholesome cow milk cream is naturally separated and churned in dedicated vessels using traditional churning motions until the golden butter grains cluster together.",image:"assets/images/making-butter-churning.jpg",imageAlt:"Traditional butter churning in vessel with churner shaft",tag:"Tradition"},{step:"05",stage:"UTHUKULI BUTTER",title:"Velvety Churned Butter Balls",shortTitle:"Uthukuli Butter",oneLiner:"Silky, dense butter balls hand-gathered in traditional uruli pots.",description:"Freshly churned butter is hand-gathered into silky, dense balls in traditional uruli vessels. Celebrated for its low moisture content and signature milky aroma.",image:"assets/images/making-churned-butter-hd.jpg",imageAlt:"Fresh churned Uthukuli butter balls in traditional uruli pot",tag:"Heritage"},{step:"06",stage:"SLOW CLARIFICATION",title:"Gentle Simmering & Boiling",shortTitle:"Slow Clarification",oneLiner:"Simmered over controlled heat into golden, aromatic clarified ghee.",description:"The butter is transferred to heavy boiling vessels and gently simmered over controlled heat. Moisture evaporates as the golden milk solids clarify into rich amber ghee.",image:"assets/images/making-ghee-simmering.jpg",imageAlt:"Golden clarified cow ghee bubbling and simmering in boiler",tag:"Clarification"},{step:"07",stage:"PACKED WITH INTEGRITY",title:"Sealed in Food-Grade Glass & Tubs",shortTitle:"Packed with Care",oneLiner:"Carefully sealed in clean jars, locking in natural granular texture.",description:"Freshly clarified ghee is carefully settled and sealed in clean jars and containers at our facility, locking in the natural granular texture without artificial additives.",image:"assets/images/making-dairy-ghee-jars.jpg",imageAlt:"Rows of freshly packed yellow ghee jars at dairy facility",tag:"Integrity"},{step:"08",stage:"OUR BRAND",title:"The MANAM Product Range",shortTitle:"The MANAM Range",oneLiner:"Farm-direct Cow Ghee & Uthukuli Butter for everyday home cooking.",description:"Pure Cow Ghee and Uthukuli Butter packaged with pride under the MANAM brand, honoring generations of South Indian dairy traditions.",image:"assets/images/product-range-collage-hd.jpg",imageAlt:"MANAM Cow Ghee and Butter complete product line",tag:"Authenticity"},{step:"09",stage:"MOTHER'S KITCHEN",title:"The Sizzle of the Hot Tawa",shortTitle:"Mother's Kitchen",oneLiner:"Irresistible morning aroma over golden dosas and fluffy idli podi.",description:"A ladle of MANAM Cow Ghee swirled over a scorching iron tawa creates the irresistible morning aroma of golden crisp ghee roast dosa and fluffy idli podi.",image:"assets/images/food/food-ghee-dosa.jpg",imageAlt:"Golden crisp South Indian ghee roast dosa on banana leaf",tag:"Aroma"},{step:"10",stage:"FAMILY & TASTE OF HOME",title:"Bringing Generations Together",shortTitle:"Family Comfort",oneLiner:"Traditional South Indian flavours bringing warmth to every meal.",description:"From festival sweets like melt-in-mouth Mysore pak to daily family meals, MANAM brings the genuine, timeless taste of South Indian comfort to your home.",image:"assets/images/food/food-traditional-sweets.jpg",imageAlt:"Traditional ghee Mysore pak sweets on antique brass tray",tag:"Belonging"}]},bulkOrders:{badge:"Commercial & Catering",title:"Bulk & Wholesale Inquiries",description:"Planning a wedding, temple function, catering event, or commercial kitchen? We supply MANAM Pure Cow Ghee and Uthukuli Butter in 5kg, 10kg, and 15kg sealed containers with volume-tiered wholesale pricing.",ctaText:"Inquire for Bulk Order on WhatsApp",waMessage:"Hello MANAM! I would like to inquire about Bulk Orders (5kg+) for Pure Cow Ghee / Uthukuli Butter. Please share wholesale pricing and delivery details."},video:{videoUrl:"assets/video/manam-story.mp4",posterImage:"assets/images/video-poster-frame.jpg",sectionBadge:"Brand Film",title:"Pure by Origin: The Story of MANAM",subtitle:"From morning pastures in Tamil Nadu and traditional churning to the sizzle of your mother’s tawa."},whyChooseUs:{pillars:[{icon:"🌾",title:"Farmer Sourced",description:"We work directly with regional dairy farmers, ensuring fair partnerships and wholesome milk straight from rural farming clusters."},{icon:"🥛",title:"Quality Ingredients",description:"No adulterants, no synthetic colors, and no artificial essences. Just pure cow milk cream crafted with traditional respect."},{icon:"🏺",title:"Rich Traditional Taste",description:"The distinct golden color, soothing nutty aroma, and granular 'manal manal' texture that South Indian families cherish."},{icon:"🔍",title:"Carefully Selected",description:"Every batch is inspected for flavor profile, clarity, aroma, and moisture balance before being sealed in jars."},{icon:"🍳",title:"Made for Everyday Cooking",description:"Versatile and dependable — from simple morning idli-podi to grand festive feasts and family celebration sweets."}]},foodSection:{pairings:[{title:"Crisp Ghee Roast Dosa",description:"A ladle of MANAM Cow Ghee swirled over a paper-thin dosa creates a golden crackling crust and irresistible tiffin aroma.",image:"assets/images/food/food-ghee-dosa.jpg",highlight:"The Signature Sizzle"},{title:"Steaming Idli & Spicy Podi",description:"Pillowy white steamed idlis sprinkled with fiery gun-powder milagai podi and a warm pool of melting golden ghee.",image:"assets/images/food/food-idli-podi.jpg",highlight:"Morning Comfort"},{title:"Fragrant Ven Pongal",description:"Warm rice and lentils tempered with cumin, crushed black peppercorns, curry leaves, and crunchy ghee-fried cashews.",image:"assets/images/food/food-ven-pongal.jpg",highlight:"Sunday Breakfast Classic"},{title:"Traditional South Indian Sweets",description:"Melt-in-mouth Mysore pak, fragrant wheat halwa, boondi laddus, and rich festival payasam enriched with pure cow ghee.",image:"assets/images/food/food-traditional-sweets.jpg",highlight:"Festive Perfection"}]},editorial:{tagline:"Our Core Philosophy",headline:"“Good food begins with good ingredients.”",paragraphs:["In South Indian homes, ghee is never merely a cooking medium; it is a gesture of hospitality, an aroma that summons children to the table, and the quiet soul of sacred family recipes handed down across generations.","MANAM was founded on a simple conviction: honour the dairy farmer, respect the traditional craft of butter churning, and bring uncompromised purity to the city kitchen. We don't invent shortcuts or artificial claims. We source wholesome dairy from farmers who know and love their craft.","When you spoon MANAM Ghee or spread our Uthukuli Butter, you taste the sunlit pasture lands, the quiet skill of rural hands, and the unmistakable warmth of home."]},testimonials:{items:[{quote:"The aroma when I poured this ghee over hot rice and paruppu took me straight back to my grandmother's home in Erode. The granular texture is absolutely genuine.",author:"Lakshmi R.",location:"Home Cook · Chennai",rating:5},{quote:"True Uthukuli butter is very hard to find in cities today. MANAM's butter has that distinct milky richness and clarified cleanly into the most fragrant golden ghee.",author:"Karthikeyan S.",location:"Food Enthusiast · Coimbatore",rating:5},{quote:"I tried MANAM Cow Ghee for making festive Mysore Pak during Diwali. The melt-in-mouth texture and pure aroma made it an instant favorite with our entire family.",author:"Revathi S.",location:"Bengaluru",rating:5}]},faqs:[{question:"What products and sizes do you sell?",answer:"We specialize in MANAM Pure Cow Ghee (available in 200 ml, 500 ml, 1 L, and 2 L) and MANAM Uthukuli Butter (available in 200 g, 500 g, 1 kg, and 2 kg). We also cater to commercial bulk orders (5kg, 10kg, 15kg+)."},{question:"What is your pricing and discount policy?",answer:"We offer flat 10% OFF on all regular and family sizes: Pure Cow Ghee 500 ml (₹315), 1 L (₹630), 2 L (₹1,260); Uthukuli Butter 500 g (₹338), 1 kg (₹675), 2 kg (₹1,350). The starter trial packs (200 ml Ghee at ₹140 and 200 g Butter at ₹150) are sold at standard MRP without discount."},{question:"What is Uthukuli Butter?",answer:"Uthukuli is a historic town in Tirupur district, Tamil Nadu, renowned for generations as South India's butter capital. Butter from this region is celebrated for its natural churning method, fresh cow milk cream, light moisture content, and outstanding aroma when clarified into ghee."},{question:"Do you offer bulk orders and extra discounts?",answer:"Yes! We provide special volume-tiered wholesale pricing for bulk orders of 5kg, 10kg, 15kg and above for weddings, temples, restaurants, and catering. Contact us via WhatsApp at +91 93440 20730 for custom bulk quotes."},{question:"How should I store the ghee?",answer:"Store MANAM Cow Ghee in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to preserve its freshness. Refrigerator storage is not required for ghee, as pure clarified ghee stays fresh naturally at room temperature."},{question:"How can I place an order?",answer:"Ordering is seamless! Simply select your desired products and quantities on this website, click 'Proceed to Order', fill in your delivery details, and click 'Confirm & Order via WhatsApp'. This instantly opens WhatsApp (+91 93440 20730) with your pre-filled cart ready to send to our team."},{question:"Where is your address and do you deliver?",answer:"Our location is Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043 (view on Google Maps: https://maps.app.goo.gl/VQ2UF23fypefmNVQ7). We deliver locally in Chennai/Tambaram as well as ship across Tamil Nadu and South India."},{question:"How can I contact you?",answer:"You can message our official WhatsApp number directly at +91 93440 20730 by clicking the 'Order on WhatsApp' button anywhere on this website, or visit our location in Pallavaram."}]},g="manam_cart_v1";class y{constructor(){this.items=this.loadFromStorage(),this.drawerEl=null,this.backdropEl=null,this.badgeEls=[]}init(){this.drawerEl=document.getElementById("cart-drawer"),this.backdropEl=document.getElementById("cart-backdrop"),this.badgeEls=document.querySelectorAll(".cart-count-badge"),this.bindEvents(),this.render()}loadFromStorage(){try{const a=localStorage.getItem(g);return a?JSON.parse(a):[]}catch(a){return console.warn("Could not read cart from localStorage",a),[]}}saveToStorage(){try{localStorage.setItem(g,JSON.stringify(this.items))}catch(a){console.warn("Could not save cart to localStorage",a)}}addItem(a,e,t=1){const i=this.items.findIndex(r=>r.productId===a.id&&r.variantId===e.id);i>-1?this.items[i].quantity+=t:this.items.push({productId:a.id,variantId:e.id,name:a.name,size:e.size,price:e.price,image:a.primaryImage,quantity:t}),this.saveToStorage(),this.render(),this.openDrawer(),this.triggerToast(`Added ${t} × ${a.name} (${e.size}) to cart`)}updateQuantity(a,e,t){const i=this.items.findIndex(s=>s.productId===a&&s.variantId===e);if(i===-1)return;const r=this.items[i].quantity+t;r<=0?this.removeItem(a,e):(this.items[i].quantity=r,this.saveToStorage(),this.render())}removeItem(a,e){this.items=this.items.filter(t=>!(t.productId===a&&t.variantId===e)),this.saveToStorage(),this.render()}clear(){this.items=[],this.saveToStorage(),this.render()}getTotalCount(){return this.items.reduce((a,e)=>a+e.quantity,0)}getSubtotal(){return this.items.reduce((a,e)=>a+e.price*e.quantity,0)}openDrawer(){!this.drawerEl||!this.backdropEl||(this.drawerEl.classList.add("is-open"),this.backdropEl.classList.add("is-open"),document.body.style.overflow="hidden")}closeDrawer(){!this.drawerEl||!this.backdropEl||(this.drawerEl.classList.remove("is-open"),this.backdropEl.classList.remove("is-open"),document.body.style.overflow="")}bindEvents(){document.querySelectorAll('[data-action="open-cart"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.openDrawer()})}),document.querySelectorAll('[data-action="close-cart"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.closeDrawer()})}),this.backdropEl&&this.backdropEl.addEventListener("click",()=>this.closeDrawer()),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeDrawer()});const a=document.getElementById("cart-checkout-btn");a&&a.addEventListener("click",()=>{this.items.length!==0&&(this.closeDrawer(),window.dispatchEvent(new CustomEvent("open-checkout-modal",{detail:{items:this.items,subtotal:this.getSubtotal()}})))})}render(){const a=this.getTotalCount(),e=this.getSubtotal(),t=l.brand.currency;this.badgeEls.forEach(n=>{n.textContent=a,a>0?n.classList.add("has-items"):n.classList.remove("has-items")});const i=document.getElementById("cart-items-list"),r=document.getElementById("cart-empty-state"),s=document.getElementById("cart-footer"),o=document.getElementById("cart-subtotal-val"),d=document.getElementById("cart-total-val");if(o&&(o.textContent=`${t}${e.toLocaleString("en-IN")}`),d&&(d.textContent=`${t}${e.toLocaleString("en-IN")}`),this.items.length===0){i&&(i.innerHTML=""),r&&(r.style.display="flex"),s&&(s.style.display="none");return}r&&(r.style.display="none"),s&&(s.style.display="block"),i&&(i.innerHTML=this.items.map(n=>`
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
              <div class="cart-item-unit-price">${t}${n.price} each</div>
              <div class="cart-item-line-total">${t}${(n.price*n.quantity).toLocaleString("en-IN")}</div>
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
      `).join(""),i.querySelectorAll("[data-qty-change]").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-p"),u=n.getAttribute("data-v"),p=parseInt(n.getAttribute("data-qty-change"),10);this.updateQuantity(c,u,p)})}),i.querySelectorAll("[data-remove-product]").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-remove-product"),u=n.getAttribute("data-remove-variant");this.removeItem(c,u)})}))}triggerToast(a){let e=document.getElementById("cart-toast");e||(e=document.createElement("div"),e.id="cart-toast",e.className="cart-toast",document.body.appendChild(e)),e.textContent=a,e.classList.add("is-visible"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{e.classList.remove("is-visible")},2800)}}const m=new y,f="manam_customer_details_v1";class b{constructor(){this.modalEl=null,this.formEl=null,this.orderPreviewEl=null}init(){this.modalEl=document.getElementById("checkout-modal"),this.formEl=document.getElementById("checkout-form"),this.orderPreviewEl=document.getElementById("checkout-order-summary"),this.bindEvents(),this.populateSavedCustomer()}bindEvents(){window.addEventListener("open-checkout-modal",()=>{this.openModal()}),document.querySelectorAll('[data-action="close-checkout"]').forEach(a=>{a.addEventListener("click",e=>{e.preventDefault(),this.closeModal()})}),this.modalEl&&this.modalEl.addEventListener("click",a=>{a.target===this.modalEl&&this.closeModal()}),this.formEl&&this.formEl.addEventListener("submit",a=>{a.preventDefault(),this.handleSubmit()}),document.querySelectorAll('[data-action="direct-whatsapp"]').forEach(a=>{a.addEventListener("click",e=>{e.preventDefault(),this.openDirectChat()})})}populateSavedCustomer(){try{const a=localStorage.getItem(f);if(a){const e=JSON.parse(a),t=document.getElementById("cust-name"),i=document.getElementById("cust-phone"),r=document.getElementById("cust-address");t&&e.name&&(t.value=e.name),i&&e.phone&&(i.value=e.phone),r&&e.address&&(r.value=e.address)}}catch(a){console.warn("Error reading saved customer details",a)}}openModal(){if(!this.modalEl)return;this.renderSummary(),this.modalEl.classList.add("is-open"),document.body.style.overflow="hidden";const a=document.getElementById("cust-name");a&&setTimeout(()=>a.focus(),150)}closeModal(){this.modalEl&&(this.modalEl.classList.remove("is-open"),document.body.style.overflow="")}renderSummary(){if(!this.orderPreviewEl)return;const a=m.items,e=m.getSubtotal(),t=l.brand.currency;if(a.length===0){this.orderPreviewEl.innerHTML='<p class="empty-msg">Your basket is currently empty.</p>';return}const i=a.map(r=>`
      <div class="summary-line">
        <span class="summary-line-name">
          <strong>${r.name}</strong> (${r.size}) × ${r.quantity}
        </span>
        <span class="summary-line-price">${t}${(r.price*r.quantity).toLocaleString("en-IN")}</span>
      </div>
    `).join("");this.orderPreviewEl.innerHTML=`
      <div class="checkout-summary-box">
        <h4 class="summary-title">Order Summary (${m.getTotalCount()} items)</h4>
        <div class="summary-lines">${i}</div>
        <div class="summary-total-row">
          <span>Total:</span>
          <strong>${t}${e.toLocaleString("en-IN")}</strong>
        </div>
      </div>
    `}handleSubmit(){const a=document.getElementById("cust-name"),e=document.getElementById("cust-phone"),t=document.getElementById("cust-address"),i=document.getElementById("cust-notes"),r=a?a.value.trim():"",s=e?e.value.trim():"",o=t?t.value.trim():"",d=i?i.value.trim():"";let n=!1;r?this.clearInputError(a):(this.showInputError(a,"Please enter your full name"),n=!0);const c=s.replace(/[^0-9]/g,"");if(!c||c.length<10?(this.showInputError(e,"Please enter a valid 10-digit phone number"),n=!0):this.clearInputError(e),!o||o.length<10?(this.showInputError(t,"Please enter your complete delivery address (street, city, pincode)"),n=!0):this.clearInputError(t),n)return;if(m.items.length===0){alert("Your cart is empty. Please add products before placing an order."),this.closeModal();return}try{localStorage.setItem(f,JSON.stringify({name:r,phone:s,address:o}))}catch(p){console.warn("Could not save customer info",p)}const u=this.generateOrderMessage({items:m.items,total:m.getSubtotal(),name:r,phone:s,address:o,notes:d});this.closeModal(),this.sendToWhatsApp(u)}showInputError(a,e){if(!a)return;a.classList.add("has-error");let t=a.parentElement.querySelector(".form-field-error");t||(t=document.createElement("span"),t.className="form-field-error",a.parentElement.appendChild(t)),t.textContent=e}clearInputError(a){if(!a)return;a.classList.remove("has-error");const e=a.parentElement.querySelector(".form-field-error");e&&e.remove()}generateOrderMessage({items:a,total:e,name:t,phone:i,address:r,notes:s}){const o=l.brand.currency;let n=`Hello! I'd like to place an order.

${a.map(c=>{const u=(c.price*c.quantity).toLocaleString("en-IN");return`${c.name} — ${c.size} × ${c.quantity} = ${o}${u}`}).join(`
`)}

Total: ${o}${e.toLocaleString("en-IN")}

Name: ${t}
Phone: ${i}
Delivery Address: ${r}`;return s&&(n+=`
Delivery Notes / Landmark: ${s}`),n}sendToWhatsApp(a){const e=l.brand.whatsappNumber,t=encodeURIComponent(a),i=`https://wa.me/${e}?text=${t}`;window.open(i,"_blank","noopener,noreferrer")}openDirectChat(){const a=l.brand.whatsappNumber,e=`Hello ${l.brand.name}! I would like to know more about your Pure Cow Ghee and Uthukuli Butter.`,t=`https://wa.me/${a}?text=${encodeURIComponent(e)}`;window.open(t,"_blank","noopener,noreferrer")}}const v=new b;class w{constructor(){this.selectedVariants={},this.selectedQuantities={}}init(){this.setupBrandDetails(),this.renderTrustStrip(),this.renderProducts(),this.renderBulkOrdersSection(),this.renderStoryMilestones(),this.renderVideoSection(),this.renderWhyChooseUs(),this.renderFoodPairings(),this.renderEditorial(),this.renderTestimonials(),this.renderFaqs(),this.renderFooter(),m.init(),v.init(),this.bindNavigation(),this.bindScrollEffects(),console.log("MANAM Dairy Foods website controller initialized with strict dynamic pricing.")}setupBrandDetails(){const{brand:a,hero:e}=l;document.title=`${a.name} — Pure Cow Ghee & Uthukuli Butter | Farm to Home`,document.querySelectorAll(".brand-name-text").forEach(o=>o.textContent=a.name),document.querySelectorAll(".brand-tagline-text").forEach(o=>o.textContent=a.tagline),document.querySelectorAll(".brand-emblem-img").forEach(o=>{o.src=a.logoBadge});const t=document.getElementById("hero-title"),i=document.getElementById("hero-copy"),r=document.getElementById("hero-badge"),s=document.getElementById("hero-main-img");t&&(t.innerHTML=e.headline.replace(/\n/g,"<br/>")),i&&(i.textContent=e.supportingCopy),r&&(r.textContent=e.badge),s&&(s.src=e.heroImage,s.alt=`${a.name} Pure Cow Ghee`),document.querySelectorAll('[data-bind="whatsapp-link"]').forEach(o=>{o.href=`https://wa.me/${a.whatsappNumber}?text=${encodeURIComponent("Hello MANAM! I would like to order Pure Cow Ghee / Uthukuli Butter.")}`})}renderTrustStrip(){const a=document.getElementById("trust-strip-grid");a&&(a.innerHTML=l.trustStrip.map(e=>`
      <div class="trust-item">
        <div class="trust-icon" aria-hidden="true">${e.icon}</div>
        <div class="trust-text">
          <h3 class="trust-title">${e.title}</h3>
          <p class="trust-desc">${e.description}</p>
        </div>
      </div>
    `).join(""))}renderProducts(){const a=document.getElementById("products-grid");if(!a)return;const e=l.brand.currency;a.innerHTML=l.products.map(t=>{const i=t.variants.find(r=>r.isDefault)||t.variants[0];return this.selectedVariants[t.id]=i.id,this.selectedQuantities[t.id]=1,`
        <article class="product-card" id="product-${t.id}">
          
          <!-- Dynamic Badge Area (Updates dynamically based on variant selection) -->
          <div class="product-badge-wrap" id="badge-wrap-${t.id}">
            ${this.renderCardBadge(i,t)}
          </div>

          <!-- Product Image & Gallery -->
          <div class="product-media">
            <div class="product-main-img-wrap">
              <img 
                src="${t.primaryImage}" 
                alt="${t.name}" 
                class="product-main-img" 
                id="main-img-${t.id}"
                loading="lazy"
              />
            </div>
            ${t.gallery&&t.gallery.length>1?`
              <div class="product-thumbs" role="tablist" aria-label="${t.name} gallery">
                ${t.gallery.map((r,s)=>`
                  <button 
                    type="button" 
                    class="thumb-btn ${s===0?"is-active":""}" 
                    data-product="${t.id}" 
                    data-src="${r}"
                    aria-label="View photo ${s+1}"
                  >
                    <img src="${r}" alt="${t.name} angle ${s+1}" loading="lazy" />
                  </button>
                `).join("")}
              </div>
            `:""}
          </div>

          <!-- Product Details -->
          <div class="product-content">
            <div class="product-header">
              <h3 class="product-title">${t.name}</h3>
              <p class="product-tagline">${t.tagline}</p>
            </div>

            <p class="product-desc">${t.description}</p>

            <!-- Feature Badges -->
            <ul class="product-features-list">
              ${t.features.map(r=>`
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
                <span class="variant-offer-hint ${i.discountEligible?"discount-active":"standard-mrp"}" id="variant-hint-${t.id}">
                  ${i.discountEligible?"⚡ 10% OFF on this size":"Standard MRP Pack"}
                </span>
              </div>
              <div class="variant-chips-group" role="radiogroup" aria-label="${t.name} pack size options">
                ${t.variants.map(r=>`
                  <button 
                    type="button" 
                    class="variant-chip ${r.id===i.id?"is-selected":""}" 
                    data-product="${t.id}" 
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
              <div class="product-price-box" id="price-box-${t.id}">
                ${this.renderPriceBox(i,e)}
              </div>

              <div class="product-qty-selector">
                <label for="qty-${t.id}" class="sr-only">Quantity</label>
                <div class="qty-stepper">
                  <button type="button" class="stepper-btn" data-stepper-change="-1" data-target="${t.id}" aria-label="Decrease quantity">−</button>
                  <span class="stepper-val" id="qty-val-${t.id}">1</span>
                  <button type="button" class="stepper-btn" data-stepper-change="1" data-target="${t.id}" aria-label="Increase quantity">+</button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="product-cta-buttons">
              <button 
                type="button" 
                class="btn btn-primary btn-add-cart" 
                data-add-to-cart="${t.id}"
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
                data-direct-whatsapp-product="${t.id}"
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
      `}).join(""),this.bindProductInteractions()}renderCardBadge(a,e){return a.discountEligible?`
        <span class="product-pill">${e.defaultBadge}</span>
        <span class="product-offer-tag">10% OFF APPLIED</span>
      `:`
      <span class="product-pill">${e.defaultBadge}</span>
      <span class="product-trial-tag">TRIAL PACK (MRP)</span>
    `}renderPriceBox(a,e){return a.discountEligible?`
        <div class="price-strikethrough-row">
          <span class="price-prefix">Price:</span>
          <del class="product-base-price">${e}${a.mrp}</del>
          <span class="discount-pill-small">10% OFF</span>
        </div>
        <div class="price-current-row">
          <span class="product-current-price">${e}${a.price}</span>
          <span class="savings-tag">You Save ${e}${a.savings}</span>
        </div>
      `:`
      <div class="price-strikethrough-row normal-mrp">
        <span class="price-prefix">Price:</span>
      </div>
      <div class="price-current-row">
        <span class="product-current-price">${e}${a.price}</span>
      </div>
    `}bindProductInteractions(){const a=l.brand.currency;document.querySelectorAll(".variant-chip").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-product"),i=e.getAttribute("data-variant"),r=l.products.find(u=>u.id===t);if(!r)return;const s=r.variants.find(u=>u.id===i);if(!s)return;this.selectedVariants[t]=i,e.closest(".variant-chips-group").querySelectorAll(".variant-chip").forEach(u=>{u.classList.remove("is-selected"),u.setAttribute("aria-checked","false")}),e.classList.add("is-selected"),e.setAttribute("aria-checked","true");const d=document.getElementById(`badge-wrap-${t}`);d&&(d.innerHTML=this.renderCardBadge(s,r));const n=document.getElementById(`variant-hint-${t}`);n&&(n.textContent=s.discountEligible?"⚡ 10% OFF on this size":"Standard MRP Pack",n.className=s.discountEligible?"variant-offer-hint discount-active":"variant-offer-hint standard-mrp");const c=document.getElementById(`price-box-${t}`);c&&(c.innerHTML=this.renderPriceBox(s,a))})}),document.querySelectorAll("[data-stepper-change]").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-target"),i=parseInt(e.getAttribute("data-stepper-change"),10);let r=this.selectedQuantities[t]||1;r=Math.max(1,r+i),this.selectedQuantities[t]=r;const s=document.getElementById(`qty-val-${t}`);s&&(s.textContent=r)})}),document.querySelectorAll(".thumb-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-product"),i=e.getAttribute("data-src"),r=document.getElementById(`main-img-${t}`);r&&(r.src=i),e.closest(".product-thumbs").querySelectorAll(".thumb-btn").forEach(o=>o.classList.remove("is-active")),e.classList.add("is-active")})}),document.querySelectorAll("[data-add-to-cart]").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-add-to-cart"),i=l.products.find(d=>d.id===t);if(!i)return;const r=this.selectedVariants[t],s=i.variants.find(d=>d.id===r)||i.variants[0],o=this.selectedQuantities[t]||1;m.addItem(i,s,o)})}),document.querySelectorAll("[data-direct-whatsapp-product]").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-direct-whatsapp-product"),i=l.products.find(d=>d.id===t);if(!i)return;const r=this.selectedVariants[t],s=i.variants.find(d=>d.id===r)||i.variants[0],o=this.selectedQuantities[t]||1;m.addItem(i,s,o),m.closeDrawer(),v.openModal()})})}renderBulkOrdersSection(){const a=document.getElementById("bulk-orders-container");if(!a)return;const{bulkOrders:e,brand:t}=l;a.innerHTML=`
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
            href="https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(e.waMessage)}" 
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
    `}renderVideoSection(){const a=document.getElementById("cinematic-video-section");if(!a)return;const{video:e}=l,t=`
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
                Shop Pure Ghee & Butter
              </a>
            </div>
          </div>
        </div>
      </div>
    `;a.innerHTML=t}renderStoryMilestones(){const a=document.getElementById("story-milestones-grid");if(!a)return;const{steps:e}=l.productionJourney;a.innerHTML=`
      <!-- Compact Visual Production Gallery (4 Columns Desktop / 2 Columns Mobile) -->
      <div class="prod-gallery-grid" role="region" aria-label="Visual production journey gallery">
        ${e.map(t=>`
          <div class="prod-gallery-card">
            <div class="prod-gallery-img-wrap">
              <img 
                src="${t.image}" 
                alt="${t.imageAlt||t.title}" 
                class="prod-gallery-img" 
                loading="lazy" 
              />
            </div>
            <div class="prod-gallery-caption">
              <h4 class="prod-gallery-step-title">${t.step} — ${t.shortTitle||t.title}</h4>
              <p class="prod-gallery-one-liner">${t.oneLiner||t.description}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `}renderWhyChooseUs(){const a=document.getElementById("why-us-grid");a&&(a.innerHTML=l.whyChooseUs.pillars.map((e,t)=>`
      <div class="pillar-card">
        <div class="pillar-top">
          <div class="pillar-icon">${e.icon}</div>
          <span class="pillar-num">0${t+1}</span>
        </div>
        <h3 class="pillar-title">${e.title}</h3>
        <p class="pillar-desc">${e.description}</p>
      </div>
    `).join(""))}renderFoodPairings(){const a=document.getElementById("food-pairings-grid");a&&(a.innerHTML=l.foodSection.pairings.map(e=>`
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
    `).join(""))}renderEditorial(){const a=document.getElementById("editorial-content");if(!a)return;const{editorial:e}=l;a.innerHTML=`
      <div class="editorial-card">
        <span class="editorial-tag">${e.tagline}</span>
        <h2 class="editorial-title">${e.headline}</h2>
        <div class="editorial-text">
          ${e.paragraphs.map(t=>`<p>${t}</p>`).join("")}
        </div>
        <div class="editorial-quote-author">
          <div class="quote-signature">— MANAM Dairy Foods</div>
          <div class="quote-creed">Pallavaram, Tambaram, Tamil Nadu · Direct Farmer Sourcing</div>
        </div>
      </div>
    `}renderTestimonials(){const a=document.getElementById("testimonials-grid");if(!a)return;const{testimonials:e}=l;a.innerHTML=e.items.map(t=>`
      <div class="testimonial-card">
        <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">
          ${"★".repeat(t.rating)}
        </div>
        <blockquote class="testimonial-quote">
          “${t.quote}”
        </blockquote>
        <div class="testimonial-author-box">
          <div class="author-avatar">${t.author.charAt(0)}</div>
          <div class="author-info">
            <span class="author-name">${t.author}</span>
            <span class="author-location">${t.location}</span>
          </div>
        </div>
      </div>
    `).join("")}renderFaqs(){const a=document.getElementById("faqs-accordion");a&&(a.innerHTML=l.faqs.map((e,t)=>`
      <div class="faq-item ${t===0?"is-active":""}">
        <button 
          type="button" 
          class="faq-question-btn" 
          id="faq-btn-${t}" 
          aria-expanded="${t===0}" 
          aria-controls="faq-ans-${t}"
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
          id="faq-ans-${t}" 
          role="region" 
          aria-labelledby="faq-btn-${t}"
          ${t!==0?"hidden":""}
        >
          <div class="faq-answer-content">
            <p>${e.answer}</p>
          </div>
        </div>
      </div>
    `).join(""),this.bindFaqAccordion())}bindFaqAccordion(){document.querySelectorAll(".faq-question-btn").forEach(a=>{a.addEventListener("click",()=>{const e=a.closest(".faq-item"),t=e.classList.contains("is-active"),i=e.querySelector(".faq-answer-panel");document.querySelectorAll(".faq-item").forEach(r=>{if(r!==e){r.classList.remove("is-active");const s=r.querySelector(".faq-question-btn"),o=r.querySelector(".faq-answer-panel");s&&s.setAttribute("aria-expanded","false"),o&&(o.hidden=!0)}}),t?(e.classList.remove("is-active"),a.setAttribute("aria-expanded","false"),i&&(i.hidden=!0)):(e.classList.add("is-active"),a.setAttribute("aria-expanded","true"),i&&(i.hidden=!1))})})}renderFooter(){const{brand:a}=l,e=document.getElementById("footer-location"),t=document.getElementById("footer-phone"),i=document.getElementById("footer-email"),r=document.getElementById("footer-wa-link"),s=document.getElementById("footer-gmaps-link");e&&(e.textContent=a.address),t&&(t.textContent=a.phoneDisplay,t.href=`tel:${a.whatsappNumber}`),i&&(i.textContent=a.email,i.href=`mailto:${a.email}`),r&&(r.href=`https://wa.me/${a.whatsappNumber}?text=${encodeURIComponent("Hello MANAM! I would like to place an order.")}`),s&&(s.href=a.gmapsUrl)}bindNavigation(){const a=document.getElementById("mobile-nav-toggle"),e=document.getElementById("mobile-menu-drawer"),t=document.getElementById("mobile-menu-backdrop");if(a&&e){const i=()=>{e.classList.add("is-open"),t&&t.classList.add("is-open"),a.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},r=()=>{e.classList.remove("is-open"),t&&t.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),document.body.style.overflow=""};a.addEventListener("click",s=>{s.preventDefault(),e.classList.contains("is-open")?r():i()}),t&&t.addEventListener("click",r),e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r)})}document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(r){const s=this.getAttribute("href");if(s==="#"||s==="#!")return;const o=document.querySelector(s);o&&(r.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"}))})})}bindScrollEffects(){const a=document.getElementById("main-header");a&&window.addEventListener("scroll",()=>{window.scrollY>40?a.classList.add("is-scrolled"):a.classList.remove("is-scrolled")},{passive:!0})}}document.addEventListener("DOMContentLoaded",()=>{new w().init()});
