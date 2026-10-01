/**
 * ==============================================================================
 * MANAM DAIRY & FOODS — CENTRAL SITE CONFIGURATION
 * ==============================================================================
 * 
 * FINAL CONFIGURATION (UX REFINED):
 * - Pure Cow Ghee sizes: 200 ml (MRP, NO DISCOUNT), 500 ml (10% OFF), 1 L (10% OFF), 2 L (10% OFF)
 *   Strictly ml / L units (NEVER kg for Ghee).
 * - Uthukuli Butter sizes: 200 g (MRP, NO DISCOUNT), 500 g (10% OFF), 1 kg (10% OFF), 2 kg (10% OFF)
 *   Units: g / kg.
 * - Dynamic pricing per variant with `discountEligible` flag.
 * - Production Journey: 10 visual sequential steps using authentic Drive and making photos.
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
    name: "MANAM",
    legalName: "MANAM Dairy Foods",
    tagline: "From the hands of farmers, to the heart of your home.",
    shortDescription: "Farm-sourced Uthukuli Butter & Pure Cow Ghee, crafted for authentic South Indian kitchens.",
    
    // Official Master Logos
    logoBadge: "assets/images/manam-official-logo-badge.png",
    logoTransparent: "assets/images/manam-official-logo-transparent.png",
    logoOfficial: "assets/images/manam-official-logo.jpg",
    
    // Official Contact & WhatsApp
    whatsappNumber: "919344020730",
    phoneDisplay: "+91 93440 20730",
    
    // Store Location & Maps
    address: "Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043",
    gmapsUrl: "https://maps.app.goo.gl/VQ2UF23fypefmNVQ7",
    email: "contact@manamfoods.com",
    
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
    headline: "Pure by Origin.\nRich in Tradition.",
    supportingCopy: "Farm-sourced Uthukuli Butter & Pure Cow Ghee, made for the taste of home. Order directly on WhatsApp with exclusive introductory offers.",
    shopButtonText: "Shop Products",
    storyButtonText: "Explore Production Story",
    heroImage: "assets/images/product-ghee-hero-hd.jpg",
    floatingBadge: {
      tag: "Pure Cow Dairy",
      title: "Signature Granular Texture",
      subtitle: "The classic 'Manal Manal' aroma of South India"
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. TRUST STRIP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  trustStrip: [
    {
      icon: "🌾",
      title: "Farmer Sourced",
      description: "Direct partnership with local dairy farmers in Tamil Nadu"
    },
    {
      icon: "🐄",
      title: "Pure Cow Ghee",
      description: "Carefully clarified cow milk butter with rich aroma (ml & L only)"
    },
    {
      icon: "🧈",
      title: "Uthukuli Butter",
      description: "Renowned traditional butter from the historic dairy region"
    },
    {
      icon: "✨",
      title: "Quality First",
      description: "Carefully selected and packed for everyday family kitchens"
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. PRODUCTS CATALOG (STRICT VARIANT-LEVEL DYNAMIC PRICING)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  products: [
    // -------------------------------------------------------------
    // PRODUCT 1: PURE COW GHEE (STRICTLY ml & L — NEVER kg)
    // -------------------------------------------------------------
    {
      id: "pure-cow-ghee",
      name: "MANAM Pure Cow Ghee",
      tagline: "Slowly clarified golden cow ghee with authentic granular texture",
      defaultBadge: "Customer Favorite",
      shortDescription: "Crafted by slowly clarifying wholesome cow milk butter sourced from grassroots rural dairy farmers. Features a vibrant golden hue, traditional granular ('manal manal') texture, and an authentic South Indian aroma.",
      primaryImage: "assets/images/product-ghee-hero-hd.jpg",
      gallery: [
        "assets/images/product-ghee-hero-hd.jpg",
        "assets/images/making-ghee-simmering.jpg",
        "assets/images/product-range-collage-hd.jpg",
        "assets/images/making-dairy-ghee-jars.jpg"
      ],
      features: [
        "Signature granular ('manal manalaana') mouthfeel",
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
          price: 140, // Normal MRP
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
    },

    // -------------------------------------------------------------
    // PRODUCT 2: UTHUKULI BUTTER (STRICTLY g & kg)
    // -------------------------------------------------------------
    {
      id: "uthukuli-butter",
      name: "MANAM Uthukuli Butter",
      tagline: "Authentic Churned Butter from Uthukuli Heartland",
      defaultBadge: "Heritage Creamery",
      shortDescription: "Sourced from the celebrated dairy farming hub of Uthukuli, Tamil Nadu. Fresh cow milk cream is traditionally churned into velvety, dense butter balls with clean dairy sweetness and exceptional clarification.",
      primaryImage: "assets/images/product-butter-tub-hd.jpg",
      gallery: [
        "assets/images/product-butter-tub-hd.jpg",
        "assets/images/making-butter-churning.jpg",
        "assets/images/making-churned-butter-hd.jpg",
        "assets/images/product-range-collage-hd.jpg"
      ],
      features: [
        "Sourced from the famed Uthukuli dairy heartland",
        "Freshly churned from wholesome cow milk cream",
        "Velvety texture with clean dairy sweetness",
        "Available in 200 g, 500 g, 1 kg, and 2 kg"
      ],
      variants: [
        {
          id: "butter-200g",
          size: "200 g",
          unit: "g",
          mrp: 150,
          price: 150, // Normal MRP
          discountEligible: false,
          discountPercentage: 0,
          savings: 0,
          label: "Trial Pack",
          isDefault: false
        },
        {
          id: "butter-500g",
          size: "500 g",
          unit: "g",
          mrp: 375,
          price: 338, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 37,
          label: "Most Popular",
          isDefault: true,
          popular: true
        },
        {
          id: "butter-1kg",
          size: "1 kg",
          unit: "kg",
          mrp: 750,
          price: 675, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 75,
          label: "Best Value",
          isDefault: false
        },
        {
          id: "butter-2kg",
          size: "2 kg",
          unit: "kg",
          mrp: 1500,
          price: 1350, // 10% OFF
          discountEligible: true,
          discountPercentage: 10,
          savings: 150,
          label: "Max Savings",
          isDefault: false
        }
      ]
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 5. PRODUCTION JOURNEY (10 VISUAL SEQUENTIAL STEPS)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  productionJourney: {
    badge: "Authentic Dairy Heritage",
    title: "From Farm to Home: Our Production Journey",
    subtitle: "Follow our honest step-by-step process: from green pastures and morning milking to golden ghee clarifying on your tawa.",
    steps: [
      {
        step: "01",
        stage: "FARM & GRAZING",
        title: "Grassroots Dairy Partnerships",
        shortTitle: "Grassroots Dairy",
        oneLiner: "Desi cows cared for with fresh green fodder by Tamil Nadu farmers.",
        description: "We work directly with rural dairy farming families across Tamil Nadu. Native desi cows are cared for daily with fresh, wholesome green fodder to ensure pure, nutrient-rich milk.",
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
        description: "Every morning begins with dedicated hand-milking at sunrise. Practicing gentle animal care ensures uncontaminated dairy straight from the source.",
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
        description: "Wholesome cow milk cream is naturally separated and churned in dedicated vessels using traditional churning motions until the golden butter grains cluster together.",
        image: "assets/images/making-butter-churning.jpg",
        imageAlt: "Traditional butter churning in vessel with churner shaft",
        tag: "Tradition"
      },
      {
        step: "05",
        stage: "UTHUKULI BUTTER",
        title: "Velvety Churned Butter Balls",
        shortTitle: "Uthukuli Butter",
        oneLiner: "Silky, dense butter balls hand-gathered in traditional uruli pots.",
        description: "Freshly churned butter is hand-gathered into silky, dense balls in traditional uruli vessels. Celebrated for its low moisture content and signature milky aroma.",
        image: "assets/images/making-churned-butter-hd.jpg",
        imageAlt: "Fresh churned Uthukuli butter balls in traditional uruli pot",
        tag: "Heritage"
      },
      {
        step: "06",
        stage: "SLOW CLARIFICATION",
        title: "Gentle Simmering & Boiling",
        shortTitle: "Slow Clarification",
        oneLiner: "Simmered over controlled heat into golden, aromatic clarified ghee.",
        description: "The butter is transferred to heavy boiling vessels and gently simmered over controlled heat. Moisture evaporates as the golden milk solids clarify into rich amber ghee.",
        image: "assets/images/making-ghee-simmering.jpg",
        imageAlt: "Golden clarified cow ghee bubbling and simmering in boiler",
        tag: "Clarification"
      },
      {
        step: "07",
        stage: "PACKED WITH INTEGRITY",
        title: "Sealed in Food-Grade Glass & Tubs",
        shortTitle: "Packed with Care",
        oneLiner: "Carefully sealed in clean jars, locking in natural granular texture.",
        description: "Freshly clarified ghee is carefully settled and sealed in clean jars and containers at our facility, locking in the natural granular texture without artificial additives.",
        image: "assets/images/making-dairy-ghee-jars.jpg",
        imageAlt: "Rows of freshly packed yellow ghee jars at dairy facility",
        tag: "Integrity"
      },
      {
        step: "08",
        stage: "OUR BRAND",
        title: "The MANAM Product Range",
        shortTitle: "The MANAM Range",
        oneLiner: "Farm-direct Cow Ghee & Uthukuli Butter for everyday home cooking.",
        description: "Pure Cow Ghee and Uthukuli Butter packaged with pride under the MANAM brand, honoring generations of South Indian dairy traditions.",
        image: "assets/images/product-range-collage-hd.jpg",
        imageAlt: "MANAM Cow Ghee and Butter complete product line",
        tag: "Authenticity"
      },
      {
        step: "09",
        stage: "MOTHER'S KITCHEN",
        title: "The Sizzle of the Hot Tawa",
        shortTitle: "Mother's Kitchen",
        oneLiner: "Irresistible morning aroma over golden dosas and fluffy idli podi.",
        description: "A ladle of MANAM Cow Ghee swirled over a scorching iron tawa creates the irresistible morning aroma of golden crisp ghee roast dosa and fluffy idli podi.",
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
        description: "From festival sweets like melt-in-mouth Mysore pak to daily family meals, MANAM brings the genuine, timeless taste of South Indian comfort to your home.",
        image: "assets/images/food/food-traditional-sweets.jpg",
        imageAlt: "Traditional ghee Mysore pak sweets on antique brass tray",
        tag: "Belonging"
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6. BULK & WHOLESALE ORDERS (CLEAN & REFINED)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  bulkOrders: {
    badge: "Commercial & Catering",
    title: "Bulk & Wholesale Inquiries",
    description: "Planning a wedding, temple function, catering event, or commercial kitchen? We supply MANAM Pure Cow Ghee and Uthukuli Butter in 5kg, 10kg, and 15kg sealed containers with volume-tiered wholesale pricing.",
    tiers: ["5 kg", "10 kg", "15 kg+"],
    ctaText: "Inquire for Bulk Order on WhatsApp",
    waMessage: "Hello MANAM! I would like to inquire about Bulk Orders (5kg+) for Pure Cow Ghee / Uthukuli Butter. Please share wholesale pricing and delivery details."
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 7. CINEMATIC BRAND STORY VIDEO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  video: {
    videoUrl: "assets/video/manam-story.mp4",
    posterImage: "assets/images/video-poster-frame.jpg",
    sectionBadge: "Brand Film",
    title: "Pure by Origin: The Story of MANAM",
    subtitle: "From morning pastures in Tamil Nadu and traditional churning to the sizzle of your mother’s tawa.",
    storyNarrative: "Witness the journey of MANAM: Grassroots dairy farmers tending to healthy cows, fresh milk collection at dawn, traditional churning of velvety butter, slow clarification into golden grainy ghee, and the joy of home-cooked meals."
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 8. WHY CHOOSE US
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  whyChooseUs: {
    headline: "Rooted in Integrity",
    subheadline: "Why households choose MANAM for their everyday food.",
    pillars: [
      {
        icon: "🌾",
        title: "Farmer Sourced",
        description: "We work directly with regional dairy farmers, ensuring fair partnerships and wholesome milk straight from rural farming clusters."
      },
      {
        icon: "🥛",
        title: "Quality Ingredients",
        description: "No adulterants, no synthetic colors, and no artificial essences. Just pure cow milk cream crafted with traditional respect."
      },
      {
        icon: "🏺",
        title: "Rich Traditional Taste",
        description: "The distinct golden color, soothing nutty aroma, and granular 'manal manal' texture that South Indian families cherish."
      },
      {
        icon: "🔍",
        title: "Carefully Selected",
        description: "Every batch is inspected for flavor profile, clarity, aroma, and moisture balance before being sealed in jars."
      },
      {
        icon: "🍳",
        title: "Made for Everyday Cooking",
        description: "Versatile and dependable — from simple morning idli-podi to grand festive feasts and family celebration sweets."
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 9. FOOD & CULINARY PAIRINGS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  foodSection: {
    headline: "A little ghee. A lot of flavour.",
    subheadline: "From morning tiffin to afternoon meals and festive sweets, MANAM brings unmatched richness to every bite.",
    pairings: [
      {
        title: "Crisp Ghee Roast Dosa",
        description: "A ladle of MANAM Cow Ghee swirled over a paper-thin dosa creates a golden crackling crust and irresistible tiffin aroma.",
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
        description: "Warm rice and lentils tempered with cumin, crushed black peppercorns, curry leaves, and crunchy ghee-fried cashews.",
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
    headline: "“Good food begins with good ingredients.”",
    paragraphs: [
      "In South Indian homes, ghee is never merely a cooking medium; it is a gesture of hospitality, an aroma that summons children to the table, and the quiet soul of sacred family recipes handed down across generations.",
      "MANAM was founded on a simple conviction: honour the dairy farmer, respect the traditional craft of butter churning, and bring uncompromised purity to the city kitchen. We don't invent shortcuts or artificial claims. We source wholesome dairy from farmers who know and love their craft.",
      "When you spoon MANAM Ghee or spread our Uthukuli Butter, you taste the sunlit pasture lands, the quiet skill of rural hands, and the unmistakable warmth of home."
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 11. TESTIMONIALS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  testimonials: {
    headline: "Loved in Everyday Kitchens",
    subheadline: "Feedback from early food lovers and home cooks across Tamil Nadu",
    items: [
      {
        quote: "The aroma when I poured this ghee over hot rice and paruppu took me straight back to my grandmother's home in Erode. The granular texture is absolutely genuine.",
        author: "Lakshmi R.",
        location: "Home Cook · Chennai",
        rating: 5
      },
      {
        quote: "True Uthukuli butter is very hard to find in cities today. MANAM's butter has that distinct milky richness and clarified cleanly into the most fragrant golden ghee.",
        author: "Karthikeyan S.",
        location: "Food Enthusiast · Coimbatore",
        rating: 5
      },
      {
        quote: "I tried MANAM Cow Ghee for making festive Mysore Pak during Diwali. The melt-in-mouth texture and pure aroma made it an instant favorite with our entire family.",
        author: "Revathi S.",
        location: "Bengaluru",
        rating: 5
      }
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 12. FAQ ACCORDION SECTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  faqs: [
    {
      question: "What products and sizes do you sell?",
      answer: "We specialize in MANAM Pure Cow Ghee (available in 200 ml, 500 ml, 1 L, and 2 L) and MANAM Uthukuli Butter (available in 200 g, 500 g, 1 kg, and 2 kg). We also cater to commercial bulk orders (5kg, 10kg, 15kg+)."
    },
    {
      question: "What is your pricing and discount policy?",
      answer: "We offer flat 10% OFF on all regular and family sizes: Pure Cow Ghee 500 ml (₹315), 1 L (₹630), 2 L (₹1,260); Uthukuli Butter 500 g (₹338), 1 kg (₹675), 2 kg (₹1,350). The starter trial packs (200 ml Ghee at ₹140 and 200 g Butter at ₹150) are sold at standard MRP without discount."
    },
    {
      question: "What is Uthukuli Butter?",
      answer: "Uthukuli is a historic town in Tirupur district, Tamil Nadu, renowned for generations as South India's butter capital. Butter from this region is celebrated for its natural churning method, fresh cow milk cream, light moisture content, and outstanding aroma when clarified into ghee."
    },
    {
      question: "Do you offer bulk orders and extra discounts?",
      answer: "Yes! We provide special volume-tiered wholesale pricing for bulk orders of 5kg, 10kg, 15kg and above for weddings, temples, restaurants, and catering. Contact us via WhatsApp at +91 93440 20730 for custom bulk quotes."
    },
    {
      question: "How should I store the ghee?",
      answer: "Store MANAM Cow Ghee in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to preserve its freshness. Refrigerator storage is not required for ghee, as pure clarified ghee stays fresh naturally at room temperature."
    },
    {
      question: "How can I place an order?",
      answer: "Ordering is seamless! Simply select your desired products and quantities on this website, click 'Proceed to Order', fill in your delivery details, and click 'Confirm & Order via WhatsApp'. This instantly opens WhatsApp (+91 93440 20730) with your pre-filled cart ready to send to our team."
    },
    {
      question: "Where is your address and do you deliver?",
      answer: "Our location is Sunnambu Colony, Pallavaram, Tambaram, Tamil Nadu 600043 (view on Google Maps: https://maps.app.goo.gl/VQ2UF23fypefmNVQ7). We deliver locally in Chennai/Tambaram as well as ship across Tamil Nadu and South India."
    },
    {
      question: "How can I contact you?",
      answer: "You can message our official WhatsApp number directly at +91 93440 20730 by clicking the 'Order on WhatsApp' button anywhere on this website, or visit our location in Pallavaram."
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 13. FINAL CALL TO ACTION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  finalCta: {
    headline: "Bring Home the Taste of Tradition.",
    supportingLine: "Pure Cow Ghee & Uthukuli Butter for the food you love.",
    primaryBtn: "Shop Products",
    secondaryBtn: "Order on WhatsApp"
  }
};
