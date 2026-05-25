export const collections = [
  {
    id: 'all',
    title: 'The Master Collection',
    description: 'Explore our complete curation of luxury digital gifting experiences, fine floral arrangements, and premium hampers.'
  },
  {
    id: 'flowers',
    title: 'Floral Studio',
    description: 'Bespoke floral arrangements and hand-tied luxury bouquets crafted daily by our master floral artisans.'
  },
  {
    id: 'gifts',
    title: 'Luxury Gift Boxes',
    description: 'Curated premium gift boxes featuring elite pairings of fine treats, sensory wellness, and custom keepsakes.'
  },
  {
    id: 'hampers',
    title: 'Signature Hampers',
    description: 'Exceptional artisanal hampers constructed for majestic celebrations, Eid, corporate achievements, and milestone events.'
  },
  {
    id: 'occasions',
    title: 'Curated Occasions',
    description: 'Exclusive, thoughtful curations perfectly tailored for birthdays, anniversaries, blessings, and noble moments.'
  },
  {
    id: 'corporate',
    title: 'Corporate Concierge',
    description: 'Sophisticated corporate gifting suites with branded custom embossing, prestige packaging, and white-glove logistics.'
  }
];

export const products = [
  {
    id: 'blush-serenity',
    title: 'Blush Serenity Bouquet',
    price: 'AED 350',
    priceNumber: 350,
    image: '/images/flowers.png',
    collection: 'flowers',
    rating: 5,
    reviews: 48,
    tagline: 'An exquisite hand-tied gesture of timeless affection.',
    description: 'An elegant composition of velvet blush pink garden roses, delicate white hydrangeas, and fresh mountain eucalyptus foliage. Every arrangement is hand-tied with imported silk ribbons and presented inside our signature embossed luxury circular box in a warm dusty rose hue.',
    details: [
      'Features 12 Premium blush garden roses',
      'Assorted premium white hydrangeas and eucalyptus stems',
      'Arrives inside signature embossed circular box',
      'Includes custom gold-stamped wax-sealed blank card',
      'Arranged in specialized moisture-locking floral gel'
    ],
    packaging: 'Each bouquet is hand-assembled and housed inside our bespoke rose gold embossed circular luxury gift box, wrapped in delicate silk paper and sealed with a heavy-weave satin ribbon.',
    delivery: 'Complimentary same-day temperature-controlled delivery is available inside Dubai, Sharjah, and Abu Dhabi for orders completed before 4:00 PM.'
  },
  {
    id: 'ultimate-indulgence',
    title: 'The Ultimate Indulgence Box',
    price: 'AED 440',
    priceNumber: 440,
    image: '/images/bestseller1.png',
    collection: 'gifts',
    rating: 5,
    reviews: 32,
    tagline: 'An elegant sensory escape of pure chocolate and wellness.',
    description: 'A grand luxury gifting experience combining artisanal single-origin chocolate truffles, organic sensory candles, and rich moisturizing beauty balms. Crafted for individuals who appreciate the delicate balance of fine craftsmanship and sensory relaxation.',
    details: [
      '16 pieces of artisanal organic dark chocolate truffles',
      'Hand-poured lavender & vanilla botanical candle',
      'Organic moisturizing floral beauty balm',
      'Housed in our rigid matte-black luxury keepsake box',
      'Accents of premium velvet interior linings'
    ],
    packaging: 'Presented in our signature rigid magnetic-close premium black box with delicate gold-leaf embossing and a customized silk sash.',
    delivery: 'Same-day delivery across Dubai and Sharjah. Next-day delivery in Abu Dhabi and all other emirates.'
  },
  {
    id: 'everlasting-elegance',
    title: 'Everlasting Elegance Arrangement',
    price: 'AED 550',
    priceNumber: 550,
    image: '/images/bestseller2.png',
    collection: 'flowers',
    rating: 5,
    reviews: 27,
    tagline: 'Majestic white flowers to command architectural presence.',
    description: 'A striking tall floral sculpture featuring long-stemmed Ecuadorian white roses, majestic avalanche lilies, and delicate dried ornamental botanicals. Carefully balanced to add absolute elegance and structural beauty to luxury modern homes and corporate spaces.',
    details: [
      '18 Long-stemmed Ecuadorian white roses',
      'Stems of fresh white avalanche lilies',
      'Accentuated with premium dried pampas grass and botanicals',
      'Housed in our customized matte-ceramic minimal white vase',
      'Delivered in upright protected luxury custom crates'
    ],
    packaging: 'Housed in a custom minimalist ivory ceramic vase, secure-packed in specialized temperature-controlled upright timber frames for safe transit.',
    delivery: 'Same-day white-glove VIP delivery inside Dubai and Abu Dhabi.'
  },
  {
    id: 'luxury-celebration',
    title: 'Luxury Celebration Hamper',
    price: 'AED 660',
    priceNumber: 660,
    image: '/images/hampers.png',
    collection: 'hampers',
    rating: 5,
    reviews: 21,
    tagline: 'The ultimate prestige hamper for grand Dubai events.',
    description: 'A breathtaking gourmet hamper overflowing with artisanal delicacies, including non-alcoholic sparkling date champagne, elite organic honey, fine gold-dusted chocolate medallions, and premium medjool dates. The crown jewel of luxurious UAE celebrations.',
    details: [
      'Sparkling gold-dusted date celebration grape (750ml, non-alcoholic)',
      'Prestige organic mountain sidr honey jar with bespoke server',
      '24 Premium organic Medjool dates stuffed with walnuts and orange peel',
      'Prestige gold-dusted dark chocolate medallions',
      'Housed in our massive custom hand-woven leather and suede hamper basket'
    ],
    packaging: 'Arranged beautifully inside a majestic custom hand-woven leather hamper basket with gold buckles and velvet lining, wrapped in heavy transparent cellophanes and silk bows.',
    delivery: 'Same-day VIP courier delivery available throughout all UAE emirates.'
  },
  {
    id: 'corporate-gifting-suite',
    title: 'Prestige Corporate Gifting Suite',
    price: 'AED 1200',
    priceNumber: 1200,
    image: '/images/corporate.png',
    collection: 'corporate',
    rating: 5,
    reviews: 15,
    tagline: 'Prestige custom branding and culinary pairings for VIP clients.',
    description: 'A custom-embossed corporate luxury package containing full-grain leather notebooks, prestige fountain pens, organic premium teas, and single-origin dark chocolates. Perfect for executive milestones, VIP clients, and high-end brand partnerships inside the UAE.',
    details: [
      'Prestige full-grain calf leather customized notebook',
      'Limited-edition brushed gold luxury fountain pen',
      'Gourmet loose-leaf prestige tea selection with copper infuser',
      'Three bars of single-origin craft dark chocolates',
      'Custom gold hot-stamped logo embossing on box exterior'
    ],
    packaging: 'Rigid architectural cardboard gift chest with magnetic closure, custom leather sashes, and tailored custom gold-foil corporate logo stamping.',
    delivery: 'Bulk logistics coordinated via VIP dedicated white-glove transport team across all UAE offices.'
  },
  {
    id: 'royal-floral-arch',
    title: 'Royal White Floral Arch',
    price: 'AED 4500',
    priceNumber: 4500,
    image: '/images/wedding.png',
    collection: 'occasions',
    rating: 5,
    reviews: 12,
    tagline: 'An architectural fantasy of white garden roses and orchids.',
    description: 'A majestic architectural floral installation crafted for private luxury weddings, royal banquets, and high-end Dubai galas. Features hundreds of premium garden roses, cascading phalaenopsis orchids, and structural green botanicals tailored to frame magical moments.',
    details: [
      'Approximately 150 premium avalanche roses',
      '30 Cascading premium white phalaenopsis orchid stems',
      'Curated structural silver dollar eucalyptus and seasonal greens',
      'Rigid hidden self-watering lightweight structural arch frame',
      'On-site installation and styling by our master florists'
    ],
    packaging: 'Arranged and built live at the venue by our design team, utilizing specialized eco-friendly moisture grids to keep flowers fresh for 48 hours.',
    delivery: 'Delivered, assembled, styled, and disassembled on-site anywhere inside the UAE by our master design studio.'
  },
  {
    id: 'gold-leaf-monogram',
    title: 'Gold-Leaf Monogram Hamper',
    price: 'AED 950',
    priceNumber: 950,
    image: '/images/personalized.png',
    collection: 'gifts',
    rating: 5,
    reviews: 19,
    tagline: 'Personalized bespoke luxury detailing for an unforgettable gift.',
    description: 'A beautiful luxury hamper personalized with a custom hand-painted gold-leaf monogram of the recipient’s initials. Filled with prestigious sensory items, fine organic honey, and customized lavender sleep-mist essentials.',
    details: [
      'Hand-painted solid gold-leaf monogram initials on box lid',
      'Prestige organic honey jar with personalized server',
      'Signature hand-poured custom soy botanical candle',
      'Lavender sleeping mist spray with organic silk eye mask',
      'Custom handwritten card sealed with gold wax'
    ],
    packaging: 'Presented in our massive personalized high-gloss heavy lacquer chest with brass hardware and custom hand-painted gold leaf monograms.',
    delivery: 'Requires 24-hour lead time for custom hand-painting. Delivered across the UAE.'
  },
  {
    id: 'crescent-orchid-hamper',
    title: 'Crescent Date & Orchid Hamper',
    price: 'AED 850',
    priceNumber: 850,
    image: '/images/ramadan.png',
    collection: 'hampers',
    rating: 5,
    reviews: 29,
    tagline: 'The definitive high-end hamper for Ramadan and Eid.',
    description: 'A pristine, premium circular hamper featuring a fresh arrangement of delicate phalaenopsis orchids in the center, flanked by an exquisite circular ring of gourmet stuffed dates, organic dry figs, and premium UAE sidr honey.',
    details: [
      'Live premium phalaenopsis orchid plant in custom ceramic pot',
      '32 gourmet Medjool dates stuffed with premium pistachio paste',
      'Imported luxury organic soft dried figs and apricots',
      'Prestige Sidr honey jar with bronze honeycomb server',
      'Signature custom velvet crescent base box with gold embroidery'
    ],
    packaging: 'Beautiful custom round velvet base box with gold crescent hand-embroidery, transparent dust lid, and signature gold cord handles.',
    delivery: 'Same-day VIP priority courier delivery across Dubai, Sharjah, and Abu Dhabi.'
  },
  {
    id: 'royal-diwali-gold-hamper',
    title: 'The Royal Diwali Gold Hamper',
    price: 'AED 890',
    priceNumber: 890,
    image: '/images/festive_diwali_hamper.png',
    collection: 'occasions',
    rating: 5,
    reviews: 36,
    tagline: 'An opulent golden tribute for the Festival of Lights.',
    description: 'An exceptionally opulent Diwali luxury tribute tray. Features a heavy gold-plated brass master tray filled with premium saffron threads, organic almond and pistachio velvet pouches, certified pure silver coins, and an exquisite array of gourmet North Indian sweets (mithai) decorated with edible silver leaf. Adorned with glowing earthen clay diyas and fresh marigold blossoms.',
    details: [
      'Gourmet kaju katli and premium pistachio/almond mithai selection',
      'Ornate gold-plated floral brass serving tray',
      'Velvet pouches of organic California almonds and Iranian pistachios',
      'Three glass jars of Grade-A premium Kashmiri saffron threads',
      'Certified pure 999 silver coins for festive blessings',
      'Fresh orange marigolds and six terracotta clay oil diyas'
    ],
    packaging: 'Presented on a stunning gold-plated floral brass tray, wrapped in high-clarity festive cellophane, secured with pure raw silk sashes and a traditional red-and-gold mauli tie.',
    delivery: 'Same-day priority delivery available throughout Dubai and Sharjah. Pre-orders highly recommended for peak Diwali shipping windows.'
  },
  {
    id: 'imperial-shubh-bandhan-box',
    title: 'The Imperial Shubh Bandhan Box',
    price: 'AED 620',
    priceNumber: 620,
    image: '/images/festive_rakhi_hamper.png',
    collection: 'occasions',
    rating: 5,
    reviews: 24,
    tagline: 'Celebrate eternal sibling bonds with handcrafted gold-leaf mithai.',
    description: 'Celebrate sacred sibling bonds, Karwa Chauth, or monsoon Teej with pure royal luxury. Resting inside a round ivory velvet keeping chest is a magnificent hand-woven royal silk rakhi thread decorated with gold beads and pearls, paired with gold-leaf dusted dry-fruit laddoos, glass jars of premium green cardamoms and choice nuts, and fragrant fresh jasmine and red rose garlands.',
    details: [
      'Bespoke hand-woven royal silk rakhi thread on a velvet cushion',
      'Handcrafted dry-fruit royal laddoos topped with 24K gold leaf',
      'Fine glass jars with gold lids containing premium cardamom pods and mixed nuts',
      'Ornate glass crystal sweets bowl with brass handles',
      'Delicate hand-tied fresh red rose and jasmine flower garlands',
      'Premium round ivory velvet keepsake box with gold embroidery details'
    ],
    packaging: 'Presented in our signature round ivory velvet keepsake box, hand-finished with an elegant gold-stitched ivory ribbon sash.',
    delivery: 'Complimentary same-day express delivery across Dubai, Ajman, and Sharjah.'
  }
];
