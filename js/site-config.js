/**
 * ==============================================================================
 * GOKULA AMUDHAM — CENTRAL SITE CONFIGURATION
 * ==============================================================================
 * 
 * BRAND: Gokula Amudham
 * WEBSITE: gokula-amudham
 * TAGLINE: Traditional Ghee
 * MOTTO: "Made the traditional way. Tastes divine."
 * 
 * PRODUCT SCOPE: PURE COW GHEE ONLY (STRICTLY NO BUTTER FOR SALE)
 * - 200 ml: MRP ₹140 (Standard MRP, NO DISCOUNT)
 * - 500 ml: MRP ₹350 ➔ ₹315 (10% OFF, You Save ₹35)
 * - 1 L:    MRP ₹700 ➔ ₹630 (10% OFF, You Save ₹70)
 * - 2 L:    MRP ₹1400 ➔ ₹1260 (10% OFF, You Save ₹140)
 * Units: ml / L only.
 * 
 * SOURCING & HERITAGE:
 * - Dairy sourced from grassroots farmers in Tamil Nadu.
 * - Traditional butter churning & open-fire clarification into granular golden ghee.
 * - Confirmed Contact: +91 93440 20730 (WhatsApp & Phone)
 * - Address: Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043
 * - Google Maps: https://maps.app.goo.gl/VQ2UF23fypefmNVQ7
 * ==============================================================================
 */

export const SITE_CONFIG = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1. BRAND & CONTACT INFORMATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  brand: {
    name: "Gokula Amudham",
    websiteName: "gokula-amudham",
    legalName: "Gokula Amudham Dairy Foods",
    tagline: "Traditional Ghee",
    motto: "Made the traditional way. Tastes divine.",
    shortDescription: "Authentic farm-sourced Traditional Cow Ghee, slowly clarified to golden perfection with a signature granular texture and comforting aroma.",
    
    // Official Master Logos & Badges
    logoBadge: "assets/images/gokula-logo-badge.png",
    logoEmblem: "assets/images/gokula-emblem.jpg",
    logoFull: "assets/images/gokula-logo-full.jpg",
    favicon: "assets/images/gokula-favicon.png",
    
    // Official Contact & WhatsApp
    whatsappNumber: "919344020730",
    phoneDisplay: "+91 93440 20730",
    
    // Store Location & Maps
    address: "Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043",
    gmapsUrl: "https://maps.app.goo.gl/VQ2UF23fypefmNVQ7",
    email: "contact@gokulaamudham.com",
    
    socials: {
      whatsapp: "https://wa.me/919344020730",
      gmaps: "https://maps.app.goo.gl/VQ2UF23fypefmNVQ7"
    },
    
    currency: "₹",
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 2. HERO SECTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  hero: {
    badge: "Direct Farmer Sourcing · Traditional Tamil Nadu Dairy",
    headline: "Made the Traditional Way.\nTastes Divine.",
    supportingCopy: "Pure Cow Ghee crafted through traditional butter churning and patient slow-fire clarification. Sourced with honor from grassroots dairy farmers for the authentic taste of home.",
    shopButtonText: "Order Pure Ghee",
    storyButtonText: "Explore The Journey",
    heroImage: "assets/images/gokula-product-hero.jpg",
    floatingBadge: {
      tag: "Pure Cow Dairy",
      title: "Signature Granular Texture",
      subtitle: "The classic 'Manal Manal' aroma loved in South Indian homes"
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. TRUST STRIP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  trustStrip: [
    {
      icon: "🌾",
      title: "Farmer Sourced",
      description: "Direct partnership with local dairy farming families across Tamil Nadu"
    },
    {
      icon: "🐄",
      title: "Pure Cow Ghee",
      description: "Crafted from fresh cow milk butter with natural golden hue (ml & L only)"
    },
    {
      icon: "🪔",
      title: "Traditional Clarification",
      description: "Patiently simmered over controlled heat to create signature granular grain"
    },
    {
      icon: "✨",
      title: "Pure & Honest",
      description: "No artificial essences, no chemical preservatives — sealed fresh in clean jars"
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. PRODUCTS CATALOG (GHEE ONLY — STRICT DYNAMIC VARIANT PRICING)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  products: [
    {
      id: "traditional-cow-ghee",
      name: "Gokula Amudham Traditional Ghee",
      tagline: "Slowly clarified golden cow ghee with authentic granular texture",
      defaultBadge: "Customer Favorite",
      shortDescription: "Prepared by slowly clarifying wholesome cow milk butter sourced directly from grassroots rural dairy farmers. Celebrated for its deep golden hue, traditional granular ('manal manal') mouthfeel, and rich sacred aroma that brings comforting warmth to every South Indian meal.",
      primaryImage: "assets/images/gokula-product-hero.jpg",
      gallery: [
        "assets/images/gokula-product-hero.jpg",
        "assets/images/gokula-product-range.jpg",
        "assets/images/making-ghee-simmering.jpg",
        "assets/images/making-dairy-ghee-jars.jpg"
      ],
      features: [
        "Signature granular ('manal manalaana') mouthfeel",
        "Slowly clarified over controlled open flame from churned butter",
        "Wholesome cow dairy base sourced directly from farmers",
        "Food-grade sealed packaging preserving fresh aroma",
        "Units strictly in ml & L: 200 ml, 500 ml, 1 L, 2 L"
      ],
      variants: [
        {
          id: "ghee-200ml",
          size: "200 ml",
          unit: "ml",
          mrp: 140,
          price: 140, // Standard MRP, NO DISCOUNT
          discountEligible: false,
          discountPercentage: 0,
          savings: 0,
          label: "Trial Pack",
          isDefault: false
        },
        {
          id: "ghee-500ml",
          size: "500 ml",
          unit: "ml",
          mrp: 350,
          price: 315, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 35,
          label: "Most Popular",
          isDefault: true,
          popular: true
        },
        {
          id: "ghee-1L",
          size: "1 L",
          unit: "L",
          mrp: 700,
          price: 630, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 70,
          label: "Best Family Value",
          isDefault: false
        },
        {
          id: "ghee-2L",
          size: "2 L",
          unit: "L",
          mrp: 1400,
          price: 1260, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 140,
          label: "Max Savings",
          isDefault: false
        }
      ]
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 5. PRODUCTION JOURNEY (10 VISUAL SEQUENTIAL STEPS)
  // Butter celebrated as the essential intermediate stage in making ghee
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  productionJourney: {
    badge: "Authentic Dairy Heritage",
    title: "From Farm to Home: The Ghee Making Journey",
    subtitle: "Follow our honest step-by-step process: from green morning pastures and traditional butter churning to golden ghee simmering on the open flame.",
    steps: [
      {
        step: "01",
        stage: "FARM & GRAZING",
        title: "Grassroots Dairy Partnerships",
        shortTitle: "Grassroots Dairy",
        oneLiner: "Desi cows cared for with fresh green fodder by rural farming families.",
        description: "We work directly with rural dairy farming families across Tamil Nadu. Native cows are cared for daily with fresh green fodder to yield wholesome, pure cow milk.",
        image: "assets/images/story-cows-grazing.jpg",
        imageAlt: "Desi cows feeding on green grass in dairy farm shed",
        tag: "Origin"
      },
      {
        step: "02",
        stage: "FRESH DAIRY",
        title: "Morning Milking at Dawn",
        shortTitle: "Morning Milking",
        oneLiner: "Gentle daily hand-milking at dawn straight from the farm source.",
        description: "Every morning begins with dedicated hand-milking at sunrise. Practicing gentle animal care ensures uncontaminated, wholesome dairy straight from the source.",
        image: "assets/images/story-hand-milking.jpg",
        imageAlt: "Farmer hand milking cow into bucket at dawn",
        tag: "Purity"
      },
      {
        step: "03",
        stage: "DAIRY COLLECTION",
        title: "Direct Farm Milk Collection",
        shortTitle: "Milk Collection",
        oneLiner: "Fresh cow milk collected in clean metal dairy cans without delay.",
        description: "Fresh, unadulterated cow milk is poured into clean traditional metal dairy cans and transported promptly for cream separation without unnecessary delays.",
        image: "assets/images/story-milk-can-pour.jpg",
        imageAlt: "Fresh milk poured from metal can in green pasture",
        tag: "Freshness"
      },
      {
        step: "04",
        stage: "TRADITIONAL CHURNING",
        title: "Cream Separation & Churning",
        shortTitle: "Cream Churning",
        oneLiner: "Wholesome cream traditionally churned until fresh butter clusters.",
        description: "Wholesome cow milk cream is naturally set and churned in dedicated vessels using traditional churning motions until golden butter grains cluster together.",
        image: "assets/images/making-butter-churning.jpg",
        imageAlt: "Traditional butter churning in vessel with churner shaft",
        tag: "Tradition"
      },
      {
        step: "05",
        stage: "TRADITIONAL BUTTER",
        title: "Velvety Churned Butter Extraction",
        shortTitle: "Pure Churned Butter",
        oneLiner: "Dense, silky butter balls gathered by hand in traditional uruli pots.",
        description: "Freshly churned butter is hand-gathered into silky, dense balls in traditional uruli vessels. This pure cultured butter forms the essential intermediate heart of our traditional ghee.",
        image: "assets/images/making-churned-butter-hd.jpg",
        imageAlt: "Fresh churned traditional butter balls in uruli pot for making ghee",
        tag: "Craft"
      },
      {
        step: "06",
        stage: "SLOW CLARIFICATION",
        title: "Gentle Simmering & Boiling",
        shortTitle: "Slow Clarification",
        oneLiner: "Simmered over controlled heat into golden, aromatic clarified ghee.",
        description: "The fresh butter is transferred to heavy boiling vessels and gently simmered over controlled heat. Moisture evaporates as milk solids caramelize, clarifying into rich amber ghee.",
        image: "assets/images/making-ghee-simmering.jpg",
        imageAlt: "Golden clarified cow ghee bubbling and simmering in boiler",
        tag: "Clarification"
      },
      {
        step: "07",
        stage: "GRANULAR SETTING",
        title: "Gradual Cooling to Grainy Texture",
        shortTitle: "Natural Granulation",
        oneLiner: "Naturally settled to achieve the signature granular ('manal manal') grain.",
        description: "Freshly clarified ghee is gently strained and allowed to cool slowly at ambient temperature, allowing the ghee crystals to form the authentic, melt-in-mouth granular texture.",
        image: "assets/images/making-dairy-ghee-jars.jpg",
        imageAlt: "Rows of freshly packed yellow ghee jars at dairy facility",
        tag: "Texture"
      },
      {
        step: "08",
        stage: "OUR BRAND",
        title: "Gokula Amudham Packaging",
        shortTitle: "Gokula Amudham",
        oneLiner: "Sealed in sacred food-grade glass jars preserving natural aroma.",
        description: "Pure Cow Ghee packaged with honor under the Gokula Amudham brand, adorned with Lord Krishna and Kamadhenu, celebrating sacred South Indian dairy traditions.",
        image: "assets/images/gokula-product-range.jpg",
        imageAlt: "Gokula Amudham Traditional Ghee glass jars lineup on marble pedestal",
        tag: "Authenticity"
      },
      {
        step: "09",
        stage: "MOTHER'S KITCHEN",
        title: "The Sizzle of the Hot Tawa",
        shortTitle: "Mother's Kitchen",
        oneLiner: "Irresistible morning aroma over golden dosas and fluffy idli podi.",
        description: "A ladle of Gokula Amudham Cow Ghee swirled over a scorching iron tawa creates the irresistible morning aroma of golden crisp ghee roast dosa and fluffy idli podi.",
        image: "assets/images/food/food-ghee-dosa.jpg",
        imageAlt: "Golden crisp South Indian ghee roast dosa on banana leaf",
        tag: "Aroma"
      },
      {
        step: "10",
        stage: "FAMILY & TASTE OF HOME",
        title: "Bringing Generations Together",
        shortTitle: "Family Comfort",
        oneLiner: "Traditional South Indian flavours bringing warmth to every meal.",
        description: "From festival sweets like melt-in-mouth Mysore pak to daily family meals and temple poojas, Gokula Amudham brings the genuine, timeless taste of South Indian comfort to your home.",
        image: "assets/images/food/food-traditional-sweets.jpg",
        imageAlt: "Traditional ghee Mysore pak sweets on antique brass tray",
        tag: "Belonging"
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6. BULK & WHOLESALE ORDERS (GHEE ONLY)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  bulkOrders: {
    badge: "Temple & Catering Supply",
    title: "Bulk & Commercial Ghee Orders",
    description: "Planning a wedding feast, temple pooja, annadhanam, catering event, or commercial kitchen? We supply Gokula Amudham Pure Cow Ghee in 5 L, 10 L, and 15 L+ sealed containers with volume-tiered wholesale pricing.",
    tiers: ["5 L Sealed Pack", "10 L Temple Tin", "15 L+ Express Supply"],
    ctaText: "Inquire for Bulk Ghee on WhatsApp",
    waMessage: "Hello Gokula Amudham! I would like to inquire about Bulk Orders (5L+) for Pure Cow Ghee. Please share wholesale pricing and delivery details."
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 7. CINEMATIC BRAND STORY VIDEO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  video: {
    videoUrl: "assets/video/gokula-amudham-story.mp4",
    posterImage: "assets/images/gokula-video-poster.jpg",
    sectionBadge: "Brand Film",
    title: "Made the Traditional Way: The Story of Gokula Amudham",
    subtitle: "From morning pastures in Tamil Nadu and traditional churning to the sizzle of your mother’s tawa.",
    storyNarrative: "Witness the sacred journey of Gokula Amudham: Grassroots dairy farmers tending to healthy cows, fresh milk collection at dawn, traditional churning of wholesome butter, patient slow clarification into golden grainy ghee, and the divine taste of home."
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 8. WHY CHOOSE US
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  whyChooseUs: {
    headline: "Rooted in Sacred Tradition",
    subheadline: "Why households trust Gokula Amudham for their everyday food and festive offerings.",
    pillars: [
      {
        icon: "🌾",
        title: "Farmer Sourced",
        description: "We work directly with regional dairy farmers across Tamil Nadu, ensuring wholesome cow milk straight from grassroots farming clusters."
      },
      {
        icon: "🥛",
        title: "Quality Ingredients",
        description: "No adulterants, no synthetic colors, and no artificial essences. Just pure cow milk cream crafted with traditional respect."
      },
      {
        icon: "🏺",
        title: "Rich Granular Texture",
        description: "The distinct golden color, soothing nutty aroma, and authentic granular ('manal manal') mouthfeel that South Indian families cherish."
      },
      {
        icon: "🪔",
        title: "Slow-Simmered Purity",
        description: "Patiently clarified in traditional vessels over controlled flame to preserve natural dairy sweetness and wholesome clarity."
      },
      {
        icon: "🍳",
        title: "Everyday Cooking & Poojas",
        description: "Versatile and dependable — from simple morning idli-podi to grand festive feasts, temple prasadam, and family sweets."
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 9. FOOD & CULINARY PAIRINGS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  foodSection: {
    headline: "A little ghee. A lot of divine flavour.",
    subheadline: "From morning tiffin to afternoon meals and festive sweets, Gokula Amudham brings unmatched richness to every bite.",
    pairings: [
      {
        title: "Crisp Ghee Roast Dosa",
        description: "A ladle of Gokula Amudham Cow Ghee swirled over a paper-thin dosa creates a golden crackling crust and irresistible tiffin aroma.",
        image: "assets/images/food/food-ghee-dosa.jpg",
        highlight: "The Signature Sizzle"
      },
      {
        title: "Steaming Idli & Spicy Podi",
        description: "Pillowy white steamed idlis sprinkled with fiery gun-powder milagai podi and a warm pool of melting golden ghee.",
        image: "assets/images/food/food-idli-podi.jpg",
        highlight: "Morning Comfort"
      },
      {
        title: "Fragrant Ven Pongal",
        description: "Warm rice and lentils tempered with cumin, crushed black peppercorns, curry leaves, and crunchy cashews fried in pure ghee.",
        image: "assets/images/food/food-ven-pongal.jpg",
        highlight: "Sunday Breakfast Classic"
      },
      {
        title: "Traditional South Indian Sweets",
        description: "Melt-in-mouth Mysore pak, fragrant wheat halwa, boondi laddus, and rich festival payasam enriched with pure cow ghee.",
        image: "assets/images/food/food-traditional-sweets.jpg",
        highlight: "Festive Perfection"
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 10. EDITORIAL PHILOSOPHY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  editorial: {
    tagline: "Our Core Philosophy",
    headline: "“Made the traditional way. Tastes divine.”",
    paragraphs: [
      "In South Indian homes, ghee is never merely a cooking medium; it is a sacred gesture of hospitality, an aroma that summons children to the table, and the quiet soul of traditional family recipes handed down across generations.",
      "Gokula Amudham was founded on a simple conviction: honor the dairy farmer, respect the traditional craft of butter churning and slow clarification, and bring uncompromised purity to the everyday kitchen. We source wholesome dairy from rural farming families who know and revere their craft.",
      "When you spoon Gokula Amudham Traditional Ghee over steaming food, you taste the sunlit pasture lands, the quiet skill of pastoral hands, and the unmistakable divine warmth of home."
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 11. TESTIMONIALS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  testimonials: {
    headline: "Loved in Everyday Kitchens",
    subheadline: "Feedback from home cooks and food lovers across Tamil Nadu",
    items: [
      {
        quote: "The aroma when I poured Gokula Amudham ghee over hot rice and paruppu took me straight back to my grandmother's home in Erode. The granular texture is absolutely genuine.",
        author: "Lakshmi R.",
        location: "Home Cook · Chennai",
        rating: 5
      },
      {
        quote: "You can tell the difference in the very first spoonful. Slow clarification gives it that authentic nutty aroma and rich golden color. We order the 1L jar every month.",
        author: "Karthikeyan S.",
        location: "Food Enthusiast · Coimbatore",
        rating: 5
      },
      {
        quote: "We used Gokula Amudham Cow Ghee for our temple pooja and Diwali sweets. Melt-in-mouth Mysore Pak and incredible fragrance that filled the whole home.",
        author: "Revathi S.",
        location: "Bengaluru",
        rating: 5
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 12. FREQUENTLY ASKED QUESTIONS (ACCORDION)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  faqs: [
    {
      question: "What products and sizes do you sell?",
      answer: "We specialize exclusively in Gokula Amudham Traditional Pure Cow Ghee, available in 200 ml, 500 ml, 1 L, and 2 L jars. We also cater to commercial and temple bulk orders in 5 L, 10 L, and 15 L+ sealed containers."
    },
    {
      question: "What is your pricing and discount policy?",
      answer: "We offer flat 10% OFF on all regular and family sizes: Pure Cow Ghee 500 ml (₹315, save ₹35), 1 L (₹630, save ₹70), and 2 L (₹1,260, save ₹140). The starter trial pack (200 ml Ghee at ₹140) is sold at standard MRP without discount."
    },
    {
      question: "How is Gokula Amudham Ghee prepared?",
      answer: "Our ghee is crafted using time-honored traditional methods. Wholesome cow milk is collected fresh from rural farmers, naturally cultured and churned into pure butter, and then patiently simmered over controlled heat. As water evaporates and milk solids clarify, the golden aromatic ghee is gently cooled to develop its signature granular ('manal manal') texture."
    },
    {
      question: "Do you sell butter directly?",
      answer: "No, Gokula Amudham focuses exclusively on producing and delivering pure cow ghee. Traditional butter is an essential intermediate stage in our ghee-making craft, but we do not sell butter as a retail product."
    },
    {
      question: "Do you offer bulk orders and temple supplies?",
      answer: "Yes! We provide special volume-tiered wholesale pricing for bulk orders of 5 L, 10 L, 15 L and above for weddings, temples, poojas, and catering. Contact us directly on WhatsApp at +91 93440 20730 for custom bulk quotes."
    },
    {
      question: "How should I store Gokula Amudham Ghee?",
      answer: "Store Gokula Amudham Ghee in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to preserve its purity. Refrigerator storage is not required, as pure clarified ghee stays fresh naturally at room temperature."
    },
    {
      question: "How can I place an order?",
      answer: "Ordering is seamless! Simply select your desired pack size and quantity on this website, click 'Proceed to Order', fill in your delivery details, and click 'Confirm & Order via WhatsApp'. This instantly opens WhatsApp (+91 93440 20730) with your pre-filled order ready to send to our team."
    },
    {
      question: "Where is your address and do you deliver?",
      answer: "Our store location is Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043 (view on Google Maps: https://maps.app.goo.gl/VQ2UF23fypefmNVQ7). We deliver locally in Chennai/Tambaram as well as dispatch across Tamil Nadu and South India."
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 13. FINAL CALL TO ACTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  finalCta: {
    headline: "Bring Home the Taste of Tradition.",
    supportingLine: "Pure Cow Ghee made the traditional way for the food you love.",
    primaryBtn: "Order Pure Ghee",
    secondaryBtn: "Order on WhatsApp"
  }
};
