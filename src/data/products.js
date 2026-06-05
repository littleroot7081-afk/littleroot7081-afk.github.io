export const categories = [
  { id: 'all', label: 'All' },
  { id: 'bestsellers', label: 'Bestsellers' },
  { id: 'fashion-wear', label: 'Fashion Wear' },
  { id: 'outdoor-wear', label: 'Outdoor Wear' },
  { id: 'sleepwear', label: 'Sleepwear' },
  { id: 'books', label: 'Books' },
  { id: 'plush-toys', label: 'Plush Toys' },
  { id: 'gift-boxes', label: 'Gift Boxes' },
]

// ─── Pexels CDN helper ─────────────────────────────────────────────────────────
// All IDs verified 200 OK. Free for commercial use (Pexels License).
const px = (id, w = 600, h = 750) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

// ─── Verified photo pools by category ─────────────────────────────────────────

// Kids fashion wear & toddler outfits (from Pexels "baby clothes" + "toddler fashion" searches)
const FASHION = [
  px(2083325),   // baby in clothes
  px(29015875),  // baby clothes
  px(7282448),   // baby outfit
  px(7055886),   // cute baby clothing
  px(7484842),   // toddler wear
  px(4858394),   // baby fashion
  px(7973642),   // kids clothing
  px(18762372),  // baby outfit
  px(2252000),   // toddler clothes
  px(5427302),   // baby wear
  px(3875080),   // kids fashion
  px(3875082),   // toddler outfit
  px(15443075),  // toddler fashion
  px(32069221),  // toddler style
  px(13627298),  // kids outfit
  px(20871203),  // baby fashion
  px(13999334),  // toddler clothing
  px(30480964),  // kids wear
  px(18649563),  // baby outfit
  px(2132937),   // toddler fashion
  px(32989520),  // cute baby
  px(36848846),  // baby portrait
  px(36848843),  // cute infant
  px(14941957),  // adorable baby
  px(33653834),  // baby smile
  px(20582732),  // cute toddler
  px(20509003),  // baby joy
  px(7328426),   // infant close-up
  px(12125967),  // baby lifestyle
]

// Sleepwear — baby onesie / sleeping / pajamas (from "baby onesie sleeping" search)
const SLEEP = [
  px(18649618),  // baby in onesie
  px(5791338),   // sleeping baby
  px(14649862),  // baby sleepsuit
  px(5872739),   // infant sleeping
  px(11906475),  // baby sleep
  px(6849471),   // baby onesie
  px(3845420),   // sleeping infant
  px(5791353),   // baby in pajamas
  px(5791339),   // baby sleep close-up
]

// Stuffed animals & plush toys (from "stuffed animal plush toy" search)
const PLUSH = [
  px(36803453),  // plush toy
  px(19066549),  // stuffed animal
  px(6182234),   // plush bear
  px(9119278),   // stuffed toy
  px(5868299),   // plush collection
  px(15130364),  // soft toy
  px(6182240),   // stuffed animal
  px(9765308),   // plush bear close-up
  px(30500861),  // soft plush
]

// Children reading / picture books (from "children reading picture book" search)
const BOOKS = [
  px(6437458),   // child reading
  px(1741230),   // kids with book
  px(3661489),   // children story time
  px(8922401),   // child with picture book
  px(6437467),   // reading together
  px(7269539),   // kids book time
  px(6437484),   // child reading story
  px(6437502),   // toddler with book
  px(6668319),   // kids reading
]

// Baby gift boxes / newborn hamper (from "baby shower gift" search)
const GIFTS = [
  px(9214966),   // baby shower gift
  px(9214988),   // newborn gift
  px(9215406),   // baby gift box
  px(7802442),   // gift wrapped baby
  px(7802467),   // baby hamper
  px(7802430),   // newborn gift set
  px(7802469),   // baby present
  px(9215216),   // gift box newborn
]

// Kids outdoor adventure (from "kids outdoor playing" search)
const OUTDOOR = [
  px(27788084),  // kids outdoor
  px(5274605),   // children playing outside
  px(5275451),   // kids adventure
  px(5859828),   // child outdoor
  px(5278824),   // kids playing
  px(5275812),   // children outside
  px(5275821),   // toddler outdoor
  px(13222073),  // kids nature
]

// ─── Products ──────────────────────────────────────────────────────────────────

export const products = [
  // ── Fashion Wear ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'harajuku-flow-pants-black',
    name: 'Harajuku Flow Pants',
    subtitle: 'Black',
    price: 3500,
    category: 'fashion-wear',
    bestseller: true,
    tags: ['unisex', 'cotton', 'relaxed-fit'],
    colors: [{ name: 'Black', hex: '#1A1A1A', slug: 'black' }],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[0], FASHION[1], FASHION[2], FASHION[3]],
    description: 'Effortlessly cool wide-leg pants inspired by Tokyo street style. Crafted from our signature soft cotton blend with an elasticated waist for all-day comfort. Perfect for little ones who want to move freely while looking impeccably styled.',
    fabric: '100% Organic Cotton',
    features: ['Wide-leg silhouette', 'Elasticated waist', 'Deep side pockets'],
    certifications: ['GOTS Certified', 'AZO Dye Free'],
    rating: 4.9,
    reviewCount: 24,
    inStock: true,
  },
  {
    id: 2,
    slug: 'gangnam-oversized-tshirt',
    name: 'Gangnam Oversized Tshirt',
    subtitle: 'Cocoa',
    price: 2500,
    category: 'fashion-wear',
    bestseller: true,
    tags: ['unisex', 'cotton-spandex', 'oversized'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[4], FASHION[5], FASHION[6], FASHION[7]],
    description: 'Our signature oversized tee with a structured drop-shoulder fit. Made from a premium 95% cotton, 5% spandex blend that holds its shape wash after wash.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Structured fit', 'Natural softness', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
  },
  {
    id: 3,
    slug: 'gangnam-oversized-tshirt-black',
    name: 'Gangnam Oversized Tshirt',
    subtitle: 'Black',
    price: 2500,
    category: 'fashion-wear',
    bestseller: true,
    tags: ['unisex', 'cotton-spandex', 'oversized'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[8], FASHION[9], FASHION[10]],
    description: 'Our signature oversized tee in classic black. Soft, structured, and endlessly wearable.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Structured fit', 'Natural softness', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
  },
  {
    id: 4,
    slug: 'gangnam-oversized-tshirt-oatmilk',
    name: 'Gangnam Oversized Tshirt',
    subtitle: 'Oatmilk',
    price: 2500,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'cotton-spandex', 'oversized'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[11], FASHION[12]],
    description: 'Our signature oversized tee in warm oatmilk. A versatile neutral that pairs with everything.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Structured fit', 'Natural softness', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
  },
  {
    id: 5,
    slug: 'gangnam-oversized-tshirt-olive',
    name: 'Gangnam Oversized Tshirt',
    subtitle: 'Olive Green',
    price: 2500,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'cotton-spandex', 'oversized'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[13], FASHION[14]],
    description: 'Our signature oversized tee in muted olive green. Earthy, effortless, and endlessly wearable.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Structured fit', 'Natural softness', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.7,
    reviewCount: 12,
    inStock: true,
  },
  {
    id: 6,
    slug: 'gangnam-oversized-onesie-cocoa',
    name: 'Gangnam Oversized Onesie',
    subtitle: 'Cocoa',
    price: 2500,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'cotton-spandex', 'oversized', 'onesie'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[15], FASHION[16]],
    description: 'All the cool of the Gangnam Oversized Tshirt, now in a one-piece format. Snap buttons at the crotch for easy dressing.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Snap buttons', 'Relaxed fit', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.9,
    reviewCount: 15,
    inStock: true,
  },
  {
    id: 7,
    slug: 'gangnam-oversized-onesie-black',
    name: 'Gangnam Oversized Onesie',
    subtitle: 'Black',
    price: 2500,
    category: 'fashion-wear',
    bestseller: true,
    tags: ['unisex', 'cotton-spandex', 'oversized', 'onesie'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[17], FASHION[18]],
    description: 'Gangnam Oversized Onesie in classic black. Easy to dress, hard to resist.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Snap buttons', 'Relaxed fit', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 5.0,
    reviewCount: 21,
    inStock: true,
  },
  {
    id: 8,
    slug: 'gangnam-oversized-onesie-oatmilk',
    name: 'Gangnam Oversized Onesie',
    subtitle: 'Oatmilk',
    price: 2500,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'cotton-spandex', 'oversized', 'onesie'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[19], FASHION[20]],
    description: 'Gangnam Oversized Onesie in warm oatmilk. Easy dressing, all-day comfort.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Snap buttons', 'Relaxed fit', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.8,
    reviewCount: 9,
    inStock: true,
  },
  {
    id: 9,
    slug: 'gangnam-oversized-onesie-olive',
    name: 'Gangnam Oversized Onesie',
    subtitle: 'Olive Green',
    price: 2500,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'cotton-spandex', 'oversized', 'onesie'],
    colors: [
      { name: 'Cocoa', hex: '#6B4226', slug: 'cocoa' },
      { name: 'Black', hex: '#1A1A1A', slug: 'black' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Olive Green', hex: '#6B7C3A', slug: 'olive-green' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[21]],
    description: 'Gangnam Oversized Onesie in muted olive. Earthy and effortless.',
    fabric: '95% Cotton, 5% Spandex',
    features: ['Snap buttons', 'Relaxed fit', 'Breathable'],
    certifications: ['OEKO-TEX Certified', 'AZO Dye Free'],
    rating: 4.7,
    reviewCount: 6,
    inStock: true,
  },
  {
    id: 10,
    slug: 'bondi-cotton-mesh-tshirt-panda-white',
    name: 'Bondi Cotton Mesh Tshirt',
    subtitle: 'Panda White',
    price: 2000,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'mesh', 'breathable'],
    colors: [
      { name: 'Panda White', hex: '#F2F0EB', slug: 'panda-white' },
      { name: 'Misty Blue', hex: '#B8C8D4', slug: 'misty-blue' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[22], FASHION[23]],
    description: 'A lightweight mesh tee perfect for warm days. Breathable open-knit cotton keeps little ones cool without sacrificing style.',
    fabric: '100% Cotton Mesh',
    features: ['Breathable mesh', 'Lightweight', 'Easy care'],
    certifications: ['GOTS Certified'],
    rating: 4.8,
    reviewCount: 11,
    inStock: true,
  },
  {
    id: 11,
    slug: 'bondi-cotton-mesh-tshirt-misty-blue',
    name: 'Bondi Cotton Mesh Tshirt',
    subtitle: 'Misty Blue',
    price: 2000,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'mesh', 'breathable'],
    colors: [
      { name: 'Panda White', hex: '#F2F0EB', slug: 'panda-white' },
      { name: 'Misty Blue', hex: '#B8C8D4', slug: 'misty-blue' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[24], FASHION[25]],
    description: 'Lightweight mesh tee in soft misty blue. Cool, calm, and stylish for warm days.',
    fabric: '100% Cotton Mesh',
    features: ['Breathable mesh', 'Lightweight', 'Easy care'],
    certifications: ['GOTS Certified'],
    rating: 4.7,
    reviewCount: 8,
    inStock: true,
  },
  {
    id: 12,
    slug: 'bondi-cotton-mesh-onesie-panda-white',
    name: 'Bondi Cotton Mesh Onesie',
    subtitle: 'Panda White',
    price: 2000,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'mesh', 'breathable', 'onesie'],
    colors: [
      { name: 'Panda White', hex: '#F2F0EB', slug: 'panda-white' },
      { name: 'Misty Blue', hex: '#B8C8D4', slug: 'misty-blue' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[26]],
    description: 'Bondi mesh in one-piece format for the youngest little originals. Snap buttons for easy dressing.',
    fabric: '100% Cotton Mesh',
    features: ['Snap buttons', 'Breathable mesh', 'Lightweight'],
    certifications: ['GOTS Certified'],
    rating: 4.8,
    reviewCount: 7,
    inStock: true,
  },
  {
    id: 13,
    slug: 'bondi-cotton-mesh-onesie-misty-blue',
    name: 'Bondi Cotton Mesh Onesie',
    subtitle: 'Misty Blue',
    price: 2000,
    category: 'fashion-wear',
    bestseller: false,
    tags: ['unisex', 'mesh', 'breathable', 'onesie'],
    colors: [
      { name: 'Panda White', hex: '#F2F0EB', slug: 'panda-white' },
      { name: 'Misty Blue', hex: '#B8C8D4', slug: 'misty-blue' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [FASHION[27]],
    description: 'Bondi mesh onesie in misty blue. Cool, breezy, and adorable.',
    fabric: '100% Cotton Mesh',
    features: ['Snap buttons', 'Breathable mesh', 'Lightweight'],
    certifications: ['GOTS Certified'],
    rating: 4.7,
    reviewCount: 5,
    inStock: true,
  },

  // ── Sleepwear ──────────────────────────────────────────────────────────────
  {
    id: 14,
    slug: 'liljeholmen-bamboo-sleepsuit-slate-gray',
    name: 'Liljeholmen Bamboo Sleepsuit',
    subtitle: 'Slate Gray',
    price: 2500,
    category: 'sleepwear',
    bestseller: true,
    tags: ['unisex', 'bamboo', 'sleepwear', 'onesie'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[0], SLEEP[1], SLEEP[2]],
    description: 'Ultra-soft bamboo sleepsuit that keeps little ones at just the right temperature all night. Buttery-soft bamboo viscose feels gentle against skin and naturally regulates body temperature.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Temperature regulating', 'Ultra-soft bamboo', 'Two-way zipper'],
    certifications: ['OEKO-TEX Certified'],
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
  },
  {
    id: 15,
    slug: 'liljeholmen-bamboo-sleepsuit-oatmilk',
    name: 'Liljeholmen Bamboo Sleepsuit',
    subtitle: 'Oatmilk',
    price: 2500,
    category: 'sleepwear',
    bestseller: true,
    tags: ['unisex', 'bamboo', 'sleepwear', 'onesie'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[3], SLEEP[4]],
    description: 'Ultra-soft bamboo sleepsuit in warm oatmilk. Perfect nights start with the perfect sleepsuit.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Temperature regulating', 'Ultra-soft bamboo', 'Two-way zipper'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.9,
    reviewCount: 27,
    inStock: true,
  },
  {
    id: 16,
    slug: 'liljeholmen-bamboo-sleeping-bag-slate-gray',
    name: 'Liljeholmen Bamboo Sleeping Bag',
    subtitle: 'Slate Gray',
    price: 4000,
    category: 'sleepwear',
    bestseller: false,
    tags: ['unisex', 'bamboo', 'sleeping-bag'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[5], SLEEP[6]],
    description: 'Bamboo sleeping bag that creates the perfect sleep environment. Cocoon-like design soothes little ones and helps establish consistent sleep routines.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Sleep-sack design', 'Shoulder snaps', 'Temperature regulating'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
  },
  {
    id: 17,
    slug: 'liljeholmen-bamboo-sleeping-bag-oatmilk',
    name: 'Liljeholmen Bamboo Sleeping Bag',
    subtitle: 'Oatmilk',
    price: 4000,
    category: 'sleepwear',
    bestseller: false,
    tags: ['unisex', 'bamboo', 'sleeping-bag'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[7]],
    description: 'Bamboo sleeping bag in oatmilk — as dreamy as it sounds.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Sleep-sack design', 'Shoulder snaps', 'Temperature regulating'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.8,
    reviewCount: 14,
    inStock: true,
  },
  {
    id: 18,
    slug: 'fitzroy-bamboo-onesie-oatmilk',
    name: 'Fitzroy Bamboo Onesie',
    subtitle: 'Oatmilk',
    price: 2000,
    category: 'sleepwear',
    bestseller: false,
    tags: ['unisex', 'bamboo', 'onesie'],
    colors: [
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[8], SLEEP[0]],
    description: 'A simple, perfectly-cut bamboo onesie. Soft, stretchy, and supremely comfortable from bedtime through morning.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Envelope neckline', 'Soft bamboo', 'Snap fasteners'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.8,
    reviewCount: 16,
    inStock: true,
  },
  {
    id: 19,
    slug: 'fitzroy-bamboo-onesie-slate-gray',
    name: 'Fitzroy Bamboo Onesie',
    subtitle: 'Slate Gray',
    price: 2000,
    category: 'sleepwear',
    bestseller: false,
    tags: ['unisex', 'bamboo', 'onesie'],
    colors: [
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [SLEEP[2]],
    description: 'Fitzroy Bamboo Onesie in slate gray — the perfect sleep essential in a cool neutral.',
    fabric: '95% Bamboo Viscose, 5% Spandex',
    features: ['Envelope neckline', 'Soft bamboo', 'Snap fasteners'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.7,
    reviewCount: 10,
    inStock: true,
  },

  // ── Plush Toys ─────────────────────────────────────────────────────────────
  {
    id: 20,
    slug: 'missy-pinenut-the-little-nut',
    name: 'Missy Pinenut',
    subtitle: 'The Little Nut',
    price: 700,
    category: 'plush-toys',
    bestseller: false,
    tags: ['soft-toy', 'gift'],
    colors: [],
    sizes: [],
    images: [PLUSH[0], PLUSH[1]],
    description: "Missy Pinenut is the friendliest little nut you'll ever meet. Soft, huggable, and safety-tested for little hands.",
    fabric: 'Soft plush, PP cotton filling',
    features: ['BIS/ISI Certified', 'Hypoallergenic', 'Machine washable'],
    certifications: ['BIS/ISI Certified'],
    rating: 5.0,
    reviewCount: 29,
    inStock: true,
  },
  {
    id: 21,
    slug: 'lil-coconut-the-little-nut',
    name: 'Lil Coconut',
    subtitle: 'The Little Nut',
    price: 700,
    category: 'plush-toys',
    bestseller: false,
    tags: ['soft-toy', 'gift'],
    colors: [],
    sizes: [],
    images: [PLUSH[2]],
    description: "Lil Coconut brings tropical charm to your little one's collection. Soft, safe, and irresistibly squeezable.",
    fabric: 'Soft plush, PP cotton filling',
    features: ['BIS/ISI Certified', 'Hypoallergenic', 'Machine washable'],
    certifications: ['BIS/ISI Certified'],
    rating: 4.9,
    reviewCount: 22,
    inStock: true,
  },
  {
    id: 22,
    slug: 'koa-the-koala-bear',
    name: 'Koa',
    subtitle: 'The Koala Bear',
    price: 1200,
    category: 'plush-toys',
    bestseller: false,
    tags: ['soft-toy', 'koala', 'gift'],
    colors: [],
    sizes: [],
    images: [PLUSH[3], PLUSH[4]],
    description: 'Koa is the cuddliest koala in the jungle. Oversized and ultra-huggable — the perfect sleep companion and play buddy.',
    fabric: 'Soft plush, PP cotton filling',
    features: ['BIS/ISI Certified', 'Hypoallergenic', 'Extra cuddly size'],
    certifications: ['BIS/ISI Certified'],
    rating: 5.0,
    reviewCount: 35,
    inStock: true,
  },
  {
    id: 23,
    slug: 'mr-walnut-the-little-nut',
    name: 'Mr. Walnut',
    subtitle: 'The Little Nut',
    price: 700,
    category: 'plush-toys',
    bestseller: false,
    tags: ['soft-toy', 'gift'],
    colors: [],
    sizes: [],
    images: [PLUSH[5]],
    description: 'Mr. Walnut is the distinguished member of the Little Nut family. Dapper, soft, and ready for adventure.',
    fabric: 'Soft plush, PP cotton filling',
    features: ['BIS/ISI Certified', 'Hypoallergenic', 'Machine washable'],
    certifications: ['BIS/ISI Certified'],
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
  },
  {
    id: 24,
    slug: 'joey-the-lil-koala',
    name: 'Joey',
    subtitle: 'The Lil Koala',
    price: 1000,
    category: 'plush-toys',
    bestseller: false,
    tags: ['soft-toy', 'koala', 'gift'],
    colors: [],
    sizes: [],
    images: [PLUSH[6], PLUSH[7]],
    description: "Joey is Koa's little sibling — equally cuddly, perfectly sized for little hands.",
    fabric: 'Soft plush, PP cotton filling',
    features: ['BIS/ISI Certified', 'Hypoallergenic', 'Perfect gift size'],
    certifications: ['BIS/ISI Certified'],
    rating: 5.0,
    reviewCount: 26,
    inStock: true,
  },

  // ── Books ──────────────────────────────────────────────────────────────────
  {
    id: 25,
    slug: 'my-huge-feelings-picture-book',
    name: 'My Huge Feelings',
    subtitle: 'A Picture Book',
    price: 700,
    category: 'books',
    bestseller: false,
    tags: ['picture-book', 'emotions', 'gift'],
    colors: [],
    sizes: [],
    images: [BOOKS[0], BOOKS[1]],
    description: 'A beautifully illustrated picture book that helps little ones understand and name their big emotions.',
    fabric: 'Hardcover, 32 pages',
    features: ['Ages 1-4', 'Bold illustrations', 'Emotional literacy'],
    certifications: [],
    rating: 5.0,
    reviewCount: 41,
    inStock: true,
  },
  {
    id: 26,
    slug: 'hey-thats-me-picture-book',
    name: "Hey, That's Me!",
    subtitle: 'A Picture Book',
    price: 700,
    category: 'books',
    bestseller: false,
    tags: ['picture-book', 'identity', 'gift'],
    colors: [],
    sizes: [],
    images: [BOOKS[2]],
    description: 'A joyful celebration of uniqueness. Helps children see themselves reflected in the world around them.',
    fabric: 'Hardcover, 28 pages',
    features: ['Ages 1-4', 'Bold illustrations', 'Inclusive representation'],
    certifications: [],
    rating: 4.9,
    reviewCount: 33,
    inStock: true,
  },
  {
    id: 27,
    slug: 'my-busy-little-plate-picture-book',
    name: 'My Busy Little Plate',
    subtitle: 'A Picture Book',
    price: 700,
    category: 'books',
    bestseller: false,
    tags: ['picture-book', 'food', 'gift'],
    colors: [],
    sizes: [],
    images: [BOOKS[3]],
    description: 'A colourful, food-loving picture book that makes mealtimes a joy.',
    fabric: 'Hardcover, 30 pages',
    features: ['Ages 1-4', 'Bold illustrations', 'Encourages healthy eating'],
    certifications: [],
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
  },
  {
    id: 28,
    slug: 'lets-play-today-picture-book',
    name: "Let's Play Today",
    subtitle: 'A Picture Book',
    price: 700,
    category: 'books',
    bestseller: false,
    tags: ['picture-book', 'play', 'gift'],
    colors: [],
    sizes: [],
    images: [BOOKS[4]],
    description: 'A vibrant picture book celebrating imaginative play. Every page sparks a new adventure.',
    fabric: 'Hardcover, 28 pages',
    features: ['Ages 1-4', 'Bold illustrations', 'Encourages creativity'],
    certifications: [],
    rating: 4.9,
    reviewCount: 15,
    inStock: true,
  },

  // ── Gift Boxes ─────────────────────────────────────────────────────────────
  {
    id: 29,
    slug: 'koala-duo-gift-box',
    name: 'Koala Duo Gift Box',
    subtitle: 'Koa + Joey',
    price: 2000,
    category: 'gift-boxes',
    bestseller: false,
    tags: ['gift', 'koala', 'bundle'],
    colors: [],
    sizes: [],
    images: [GIFTS[0], GIFTS[1]],
    description: 'The perfect pair — Koa the Koala Bear and Joey the Lil Koala nestled together in our signature gift box.',
    fabric: 'Includes: Koa + Joey plush toys, signature box',
    features: ['Gift-ready packaging', 'Ribbon tied', 'Greeting card included'],
    certifications: ['BIS/ISI Certified'],
    rating: 5.0,
    reviewCount: 37,
    inStock: true,
  },
  {
    id: 30,
    slug: 'curious-minds-gift-box',
    name: 'Curious Minds Gift Box',
    subtitle: 'Books + Toy',
    price: 1800,
    category: 'gift-boxes',
    bestseller: false,
    tags: ['gift', 'books', 'toy', 'bundle'],
    colors: [],
    sizes: [],
    images: [GIFTS[2], GIFTS[3]],
    description: 'Feed the curiosity of little minds with our curated gift box of picture books and a plush toy companion.',
    fabric: 'Includes: 2 picture books + 1 Little Nut plush, signature box',
    features: ['Gift-ready packaging', 'Curated selection', 'Greeting card included'],
    certifications: [],
    rating: 4.9,
    reviewCount: 28,
    inStock: true,
  },
  {
    id: 31,
    slug: 'comfort-crew-gift-box',
    name: 'Comfort Crew Gift Box',
    subtitle: 'Essentials Bundle',
    price: 1800,
    category: 'gift-boxes',
    bestseller: false,
    tags: ['gift', 'sleepwear', 'bundle'],
    colors: [],
    sizes: [],
    images: [GIFTS[4]],
    description: 'Everything needed for cozy days and dreamy nights. A thoughtful gift for new parents and growing families.',
    fabric: 'Includes: Bamboo onesie + plush toy + picture book, signature box',
    features: ['Gift-ready packaging', 'Curated for comfort', 'Greeting card included'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.9,
    reviewCount: 22,
    inStock: true,
  },
  {
    id: 32,
    slug: 'sleep-ritual-gift-box-slate-gray',
    name: 'Sleep Ritual Gift Box',
    subtitle: 'Slate Gray',
    price: 5000,
    category: 'gift-boxes',
    bestseller: false,
    tags: ['gift', 'sleepwear', 'bundle', 'premium'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [GIFTS[5], GIFTS[6]],
    description: 'The ultimate sleep gift — bamboo sleepsuit and sleeping bag together in one luxurious box.',
    fabric: 'Includes: Liljeholmen Bamboo Sleepsuit + Sleeping Bag, signature box',
    features: ['Gift-ready packaging', 'Premium bamboo', 'Greeting card included'],
    certifications: ['OEKO-TEX Certified'],
    rating: 5.0,
    reviewCount: 14,
    inStock: true,
  },
  {
    id: 33,
    slug: 'sleep-ritual-gift-box-oatmilk',
    name: 'Sleep Ritual Gift Box',
    subtitle: 'Oatmilk',
    price: 5000,
    category: 'gift-boxes',
    bestseller: false,
    tags: ['gift', 'sleepwear', 'bundle', 'premium'],
    colors: [
      { name: 'Slate Gray', hex: '#708090', slug: 'slate-gray' },
      { name: 'Oatmilk', hex: '#E8D5B7', slug: 'oatmilk' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [GIFTS[7]],
    description: 'The ultimate sleep gift in warm oatmilk — bamboo sleepsuit and sleeping bag in one luxurious box.',
    fabric: 'Includes: Liljeholmen Bamboo Sleepsuit + Sleeping Bag, signature box',
    features: ['Gift-ready packaging', 'Premium bamboo', 'Greeting card included'],
    certifications: ['OEKO-TEX Certified'],
    rating: 5.0,
    reviewCount: 11,
    inStock: true,
  },

  // ── Outdoor Wear ───────────────────────────────────────────────────────────
  {
    id: 34,
    slug: 'expedition-windbreaker-olive',
    name: 'Expedition Windbreaker',
    subtitle: 'Olive',
    price: 4500,
    category: 'outdoor-wear',
    bestseller: false,
    tags: ['unisex', 'outdoor', 'windbreaker'],
    colors: [
      { name: 'Olive', hex: '#6B7C3A', slug: 'olive' },
      { name: 'Navy', hex: '#2C3E6B', slug: 'navy' },
    ],
    sizes: ['1-2Y', '2-3Y', '3-4Y'],
    images: [OUTDOOR[0], OUTDOOR[1]],
    description: 'Built for adventure. A lightweight, packable windbreaker that keeps little explorers protected without weighing them down.',
    fabric: '100% Recycled Nylon with water-resistant coating',
    features: ['Water-resistant', 'Packable', 'Adjustable hood'],
    certifications: ['OEKO-TEX Certified'],
    rating: 4.8,
    reviewCount: 16,
    inStock: true,
  },
]

export const reviews = {
  2: [
    { id: 1, name: 'Priya M.', rating: 5, date: '2024-12-10', comment: 'Absolutely love this! The fabric is so soft and the fit is perfect. My son wears it everywhere.' },
    { id: 2, name: 'Rhea S.', rating: 5, date: '2024-11-28', comment: "Ordered the cocoa color and it's even more beautiful in person. Quality is exceptional." },
    { id: 3, name: 'Ananya K.', rating: 5, date: '2024-11-15', comment: 'My daughter refuses to wear anything else! Washed it multiple times and it still looks brand new.' },
    { id: 4, name: 'Kavitha R.', rating: 5, date: '2024-10-30', comment: 'Perfect oversized fit. Exactly what I was looking for — stylish but comfortable for a toddler.' },
    { id: 5, name: 'Deepa N.', rating: 5, date: '2024-10-12', comment: 'Incredible quality for the price. Will definitely be ordering more colors.' },
    { id: 6, name: 'Meera L.', rating: 5, date: '2024-09-20', comment: 'The fabric is so breathable. My kids wore these all summer without any complaints.' },
  ],
}

export const blogPosts = [
  {
    id: 1,
    slug: 'how-to-build-a-capsule-wardrobe-for-toddlers',
    title: 'How to Build a Capsule Wardrobe for Toddlers',
    date: '2024-12-15',
    category: 'Style Guide',
    excerpt: "Less is more when it comes to dressing little ones. Here's our guide to building a versatile, mix-and-match wardrobe that grows with your child.",
    image: px(15443075, 800, 500),
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'why-bamboo-is-the-gold-standard-for-baby-sleepwear',
    title: 'Why Bamboo is the Gold Standard for Baby Sleepwear',
    date: '2024-11-28',
    category: 'Materials',
    excerpt: 'We explain why bamboo viscose is our material of choice for sleepwear — from its temperature-regulating properties to its feather-soft texture.',
    image: px(5791338, 800, 500),
    readTime: '4 min read',
  },
  {
    id: 3,
    slug: 'the-art-of-gifting-for-little-ones',
    title: 'The Art of Gifting for Little Ones',
    date: '2024-11-10',
    category: 'Gift Guide',
    excerpt: 'Thoughtful gifts leave lasting impressions. Our guide to choosing gifts that parents will appreciate and children will love.',
    image: px(9214966, 800, 500),
    readTime: '6 min read',
  },
]

export const testimonials = [
  { id: 1, name: 'Shreya Agarwal', handle: '@shreya.a', text: "I've been dressing my daughter in Littleroot since she was 18 months. The quality is unmatched and the pieces just get better with every wash.", rating: 5 },
  { id: 2, name: 'Kabir Mehta', handle: '@kabirm', text: "Finally found a kidswear brand that I actually like as a design-conscious parent. The cuts are impeccable and the fabrics are incredibly soft.", rating: 5 },
  { id: 3, name: 'Nisha Patel', handle: '@nisha_p', text: 'The bamboo sleepsuit changed our nights completely. Our son sleeps so much better and wakes up in the happiest mood. Worth every rupee.', rating: 5 },
  { id: 4, name: 'Aryan Bose', handle: '@aryan.bose', text: "Ordered the Koala Duo gift box for my nephew's first birthday. The packaging is so beautiful — Koa and Joey are now his most treasured toys.", rating: 5 },
]

export function formatPrice(price) {
  return `Rs. ${price.toLocaleString('en-IN')}.00`
}

export function getProductsByCategory(category) {
  if (category === 'all') return products
  if (category === 'bestsellers') return products.filter(p => p.bestseller)
  return products.filter(p => p.category === category)
}

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null
}
