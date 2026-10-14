/**
 * MODEVA — The Fashion Directory
 * Application State, Interactive Directory Engine & Editorial Modals
 */

// ==========================================
// 1. DATA REPOSITORY: DIRECTORY LISTINGS
// ==========================================
const DIRECTORY_LISTINGS = [
  {
    id: 'maison-delombre',
    name: "Maison de L'Ombre",
    category: "Luxury Fashion",
    city: "Paris",
    location: "Paris, France",
    address: "18 Rue du Faubourg Saint-Honoré, 75008 Paris",
    lat: 48.8698,
    lng: 2.3195,
    priceRange: "$$$$",
    rating: 4.9,
    reviewCount: 94,
    verified: true,
    featured: true,
    tags: ["Haute Couture", "Silk Eveningwear", "Bespoke", "Heritage"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An intimate Parisian haute atelier celebrated for architectural silhouettes, hand-draped silk organza, and rare archival fabric recreations.",
    fullStory: "Founded in 2018 in the heart of Paris' 8th arrondissement, Maison de L'Ombre marries classical French drapery with forward-thinking structural tailoring. Every evening coat and gown is cut to order, ensuring zero excess production and impeccable custom fit. Celebrated during Paris Fashion Week for their poetic restraint and sculptural minimalism.",
    hours: "Mon – Sat: 10:30 AM – 7:30 PM (Private appointments welcome)",
    phone: "+33 1 42 68 55 00",
    website: "https://maison-delombre-paris.example.com",
    specialties: "Sculptural outerwear, pure mulberry silk gowns, archival restorations",
    reviews: [
      { author: "Hélène de Montmirail", date: "October 2026", rating: 5, comment: "The bespoke tailoring is completely unmatched. The atelier team made the fitting an unforgettable Parisian memory.", verified: true },
      { author: "Marcus Sterling", date: "September 2026", rating: 5, comment: "Acquired their double-faced cashmere overcoat. It feels like an heirloom piece from day one.", verified: true }
    ]
  },
  {
    id: 'solstice-atelier',
    name: "Solstice Atelier",
    category: "Sustainable Fashion",
    city: "New York",
    location: "New York, USA",
    address: "412 West Broadway, SoHo, NY 10012",
    lat: 40.7243,
    lng: -74.0018,
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 68,
    verified: true,
    featured: true,
    tags: ["Zero-Waste", "Botanical Dyes", "Organic Linen", "Artisanal"],
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Conscious luxury born in SoHo, featuring zero-waste pattern drafting, regenerative plant dyes, and traceable deadstock textiles.",
    fullStory: "Solstice Atelier operates under a strict closed-loop manifesto: every garment is crafted from GOTS-certified organic cotton, wild nettle fibers, or salvaged luxury deadstock. Their SoHo showroom features a visible dye laboratory where guests can observe natural madder and indigo extraction processes.",
    hours: "Tue – Sun: 11:00 AM – 7:00 PM",
    phone: "+1 212 555 0192",
    website: "https://solstice-atelier-ny.example.com",
    specialties: "Botanical pigment trenches, circular knitwear, compostable button details",
    reviews: [
      { author: "Camille Vance", date: "October 2026", rating: 5, comment: "True transparency in high fashion. The linen jumpsuit fits like a dream and the natural madder pink is breathtaking.", verified: true },
      { author: "Oliver Quinn", date: "August 2026", rating: 4, comment: "Exceptional fabric quality. Knowledgeable staff who take time to explain textile origins.", verified: true }
    ]
  },
  {
    id: 'kin-contemporary',
    name: "KIN Contemporary",
    category: "Streetwear & Contemporary",
    city: "London",
    location: "London, UK",
    address: "24 Redchurch Street, Shoreditch, London E2 7DD",
    lat: 51.5245,
    lng: -0.0768,
    priceRange: "$$",
    rating: 4.9,
    reviewCount: 112,
    verified: true,
    featured: true,
    tags: ["Genderless", "Heavyweight Fleece", "Tokyo-London Collabs", "Limited Drops"],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80"
    ],
    description: "East London's premier concept space celebrating elevated utilitarian streetwear, oversized tailoring, and independent subculture releases.",
    fullStory: "KIN Contemporary bridges the underground aesthetics of Tokyo's Harajuku and London's East End. Known for hyper-limited seasonal drops, heavy Japanese loopwheel cottons, and functional modular trousers, KIN has earned a global cult following among stylists and designers.",
    hours: "Mon – Sat: 11:00 AM – 8:00 PM | Sun: 12:00 PM – 6:00 PM",
    phone: "+44 20 7946 0884",
    website: "https://kin-contemporary.example.co.uk",
    specialties: "Heavyweight loopwheel hoodies, technical trench coats, artisanal titanium eyewear",
    reviews: [
      { author: "Liam Chen", date: "October 2026", rating: 5, comment: "Best streetwear curation in Europe. Their seasonal collaboration drop with Japanese artisans sold out in 15 minutes.", verified: true },
      { author: "Sienna Brooks", date: "September 2026", rating: 5, comment: "The modular cargo pants are the most comfortable and durable piece in my rotation.", verified: true }
    ]
  },
  {
    id: 'sartoria-venti',
    name: "Sartoria Venti",
    category: "Menswear",
    city: "Milan",
    location: "Milan, Italy",
    address: "Via Montenapoleone 14, 20121 Milano",
    lat: 45.4687,
    lng: 9.1956,
    priceRange: "$$$$",
    rating: 5.0,
    reviewCount: 76,
    verified: true,
    featured: true,
    tags: ["Neapolitan Shoulders", "Biella Wool", "Hand-Stitched", "Sprezzatura"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bespoke Italian tailoring honoring classic spalla camicia craftsmanship, unconstructed blazers, and rare cashmere blends from Biella.",
    fullStory: "Founded by master tailor Gianluca Venti, this atelier is the Milanese benchmark for effortless sprezzatura. With hand-sewn buttonholes, floating horsehair canvas, and personalized styling consultations, each commission takes 45 hours of meticulous artisan labor.",
    hours: "Mon – Fri: 9:30 AM – 7:00 PM (By appointment)",
    phone: "+39 02 8739 4410",
    website: "https://sartoriaventi.example.it",
    specialties: "Unlined silk-wool jackets, bespoke formal tuxedos, hand-rolled pocket squares",
    reviews: [
      { author: "Matteo Rossi", date: "September 2026", rating: 5, comment: "Perfection in every stitch. The lightweight hopsack blazer feels like a second skin even in midsummer.", verified: true }
    ]
  },
  {
    id: 'aethelgard-co',
    name: "Aethelgard & Co.",
    category: "Designer Collections",
    city: "Copenhagen",
    location: "Copenhagen, Denmark",
    address: "Kronprinsensgade 9, 1114 København",
    lat: 55.6811,
    lng: 12.5786,
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 52,
    verified: true,
    featured: false,
    tags: ["Nordic Minimalism", "Chunky Knitwear", "Structured Coats", "Earthy Palette"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sculptural Danish design defined by architectural proportions, chunky alpaca knits, and functional timeless elegance.",
    fullStory: "Aethelgard & Co. reinterprets Scandinavia's harsh coastal beauty into hyper-refined wool outerwear and sculptural knitwear. Their Copenhagen flagship is an architectural gem of raw travertine, blonde oak, and museum-grade lighting.",
    hours: "Mon – Sat: 10:00 AM – 6:30 PM",
    phone: "+45 33 12 45 89",
    website: "https://aethelgard.example.dk",
    specialties: "Double-face boiled wool overcoats, undyed Gotland wool knitwear",
    reviews: [
      { author: "Astrid Lindholm", date: "August 2026", rating: 5, comment: "The aesthetic purity is remarkable. An essential stop for any design enthusiast visiting Copenhagen.", verified: true }
    ]
  },
  {
    id: 'velvet-archive',
    name: "Velvet Archive",
    category: "Vintage & Pre-Loved",
    city: "London",
    location: "London, UK",
    address: "71 Portobello Road, Notting Hill, London W11 2QB",
    lat: 51.5165,
    lng: -0.2057,
    priceRange: "$$$",
    rating: 4.9,
    reviewCount: 88,
    verified: true,
    featured: true,
    tags: ["Archival Fashion", "1990s Runway", "Designer Handbags", "Verified Authentic"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Curated archival fashion destination preserving museum-quality 80s and 90s runway pieces, verified vintage silks, and iconic leather accessories.",
    fullStory: "Stepping into Velvet Archive is like browsing a living museum of modern fashion history. Each piece comes with a provenance certificate and detailed condition report, making it a favorite sourcing haven for Hollywood stylists and fashion archivists.",
    hours: "Wed – Sun: 11:00 AM – 6:00 PM",
    phone: "+44 20 7229 9012",
    website: "https://velvetarchive.example.co.uk",
    specialties: "90s Galliano & McQueen pieces, archival Hermès foulards, verified rare leather goods",
    reviews: [
      { author: "Eleanor Wright", date: "October 2026", rating: 5, comment: "Found a flawless 1996 bias-cut slip dress in mint condition. The provenance documentation gave me immense confidence.", verified: true }
    ]
  },
  {
    id: 'nami-studio',
    name: "Nami Studio",
    category: "Independent Boutiques",
    city: "Tokyo",
    location: "Tokyo, Japan",
    address: "5-7-22 Minamiaoyama, Minato-ku, Tokyo 107-0062",
    lat: 35.6631,
    lng: 139.7153,
    priceRange: "$$$",
    rating: 4.9,
    reviewCount: 104,
    verified: true,
    featured: true,
    tags: ["Origami Draping", "Raw Indigo", "Aoyama Concept", "Modern Kimono"],
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Tokyo flagship blending traditional Japanese sashiko craftsmanship with avant-garde origami draping and natural indigo washes.",
    fullStory: "Nami Studio collaborates directly with weaving guilds in Okayama and Tokushima. Their garments explore the interplay between rigid structural folds and flowing asymmetric textiles.",
    hours: "Mon – Sun: 11:30 AM – 8:00 PM",
    phone: "+81 3 5468 7721",
    website: "https://namistudio.example.jp",
    specialties: "Sashiko hand-stitched jackets, asymmetric pleat skirts, raw selvage trench",
    reviews: [
      { author: "Kenji Sato", date: "September 2026", rating: 5, comment: "True Japanese artisan spirit with contemporary international vision. Outstanding craftsmanship.", verified: true }
    ]
  },
  {
    id: 'laura-botanique',
    name: "L'Aura Botanique",
    category: "Womenswear",
    city: "Berlin",
    location: "Berlin, Germany",
    address: "Alte Schönhauser Str. 34, 10119 Berlin",
    lat: 52.5273,
    lng: 13.4077,
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 47,
    verified: true,
    featured: false,
    tags: ["Fluid Silhouettes", "Cruelty-Free Silk", "Mitte Boutique", "Relaxed Elegance"],
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Berlin Mitte atelier specializing in effortless, fluid feminine silhouettes crafted from peace silk, Tencel, and gentle bio-resins.",
    fullStory: "Celebrating the unhurried elegance of modern European women, L'Aura Botanique produces limited seasonal editions made exclusively within a 200km radius of Berlin to minimize carbon footprint.",
    hours: "Tue – Sat: 12:00 PM – 7:00 PM",
    phone: "+49 30 8920 3144",
    website: "https://laurabotanique.example.de",
    specialties: "Fluid slip gowns, botanical-printed kimonos, relaxed linen blazers",
    reviews: [
      { author: "Greta Weber", date: "August 2026", rating: 5, comment: "The drape of the peace silk is magnificent. Sustainable fashion that sacrifices zero glamour.", verified: true }
    ]
  }
];

// ==========================================
// 2. DATA: CURATED EDITORIAL COLLECTIONS
// ==========================================
const CURATED_COLLECTIONS = [
  {
    id: 'independent-labels',
    title: "The Independent Labels Worth Discovering",
    subtitle: "Original voices defying mass market conventions",
    category: "Independent Boutiques",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    description: "An intimate exploration of designer-owned spaces where craft, provenance, and idiosyncratic aesthetics take center stage over fleeting trends.",
    listingIds: ['solstice-atelier', 'nami-studio', 'laura-botanique'],
    curatorQuote: "These are the creators who still cut patterns by hand and know the name of every textile mill they partner with."
  },
  {
    id: 'contemporary-designers',
    title: "Contemporary Designers to Watch",
    subtitle: "New silhouettes reshaping the modern wardrobe",
    category: "Designer Collections",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    description: "From deconstructed suiting to hyper-tactile knitwear, meet the visionary design houses redefining day-to-night luxury across Europe and Asia.",
    listingIds: ['maison-delombre', 'kin-contemporary', 'aethelgard-co'],
    curatorQuote: "We look for sharp structural clarity combined with an effortless, lived-in sensibility."
  },
  {
    id: 'sustainable-pioneers',
    title: "Exceptional Sustainable Fashion Brands",
    subtitle: "Pioneering the circular and zero-waste revolution",
    category: "Sustainable Fashion",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    description: "Eco-conscious studios demonstrating that radical environmental responsibility can coexist with uncompromising runway grandeur.",
    listingIds: ['solstice-atelier', 'laura-botanique'],
    curatorQuote: "True sustainability is not a marketing label—it is a completely re-engineered supply chain."
  },
  {
    id: 'hidden-boutique-gems',
    title: "Hidden Boutique Gems of European Capitals",
    subtitle: "Secret courtyards and tucked-away flagships",
    category: "Luxury Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    description: "Curated shopping addresses in Paris, Milan, and London known only to industry insiders, stylists, and discerning collectors.",
    listingIds: ['maison-delombre', 'sartoria-venti', 'velvet-archive'],
    curatorQuote: "Shopping in these spaces is a sensorial journey reminiscent of golden age haute couture salons."
  },
  {
    id: 'modern-streetwear-edit',
    title: "The Modern Streetwear Edit",
    subtitle: "Refined utility, heavyweight fleece, and architectural sportswear",
    category: "Streetwear & Contemporary",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    description: "Where street culture converges with luxury textile mills. Elevate your everyday silhouette with precision cuts and limited drops.",
    listingIds: ['kin-contemporary', 'nami-studio'],
    curatorQuote: "Comfort engineered with couture-level attention to seam placement and weight."
  }
];

// ==========================================
// 3. DATA: TRENDING BRANDS SHOWCASE
// ==========================================
const TRENDING_BRANDS = [
  {
    name: "Studio Orobianco",
    city: "Florence, Italy",
    specialty: "Vegetable-Tanned Tuscan Leatherwear",
    tag: "Trending",
    description: "Hand-buffed aniline leather trenches and sculptural weekenders crafted along the banks of the Arno.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kaelen Vance",
    city: "New York, USA",
    specialty: "Monochromatic Silk Georgette & Tailoring",
    tag: "Editor's Choice",
    description: "Celebrated at NYFW for razor-sharp shoulder lines and fluid floor-sweeping silk palazzos.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sora Oblique",
    city: "Kyoto / Paris",
    specialty: "Hand-Pleated Washi Paper Garments",
    tag: "Avant-Garde",
    description: "Interweaving ancient Japanese washi paper thread with French wild silk for structural dresses that defy gravity.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ELYSIAN Knitwear",
    city: "Reykjavik, Iceland",
    specialty: "Heritage Volcanic Wool Outerwear",
    tag: "Sustainable",
    description: "Thick Icelandic dual-fleece wool crafted into water-repellent oversized coccon coats.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vesper & Vale",
    city: "Mayfair, London",
    specialty: "Bespoke Velvet Evening Smoking Jackets",
    tag: "Bespoke",
    description: "Opulent silk-velvet dinner jackets with quilted silk linings and monogrammed horn buttons.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
  }
];

// ==========================================
// 4. DATA: EDITORIAL JOURNAL ARTICLES
// ==========================================
const JOURNAL_ARTICLES = [
  {
    id: 'independent-designers-guide',
    category: "Curator's Guide",
    readTime: "6 min read",
    title: "How to Discover Independent Fashion Designers",
    excerpt: "Moving beyond algorithmically driven high-street feeds to uncover authentic ateliers, showroom salons, and bespoke craftspeople across world capitals.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    author: "Genevieve Moreau — Fashion Features Director",
    date: "October 12, 2026",
    content: `
      <p class="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#E8D7B5]">In an era saturated by algorithmic fast fashion and mass-produced uniformity, the thrill of stumbling upon a quiet, independent atelier remains one of fashion's purest joys. Independent designers operate outside the rigid calendar of industrial production, focusing instead on limited batches, heirloom craft, and intimate client relationships.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">1. Look for Textile Provenance, Not Celebrity Endorsements</h4>
      <p>True independent fashion houses are passionate about where their threads originate. Look for mentions of specific mills—whether Biella wool from Northern Italy, Okayama denim loomed on vintage shuttle looms, or peace silk harvested in small cooperative farms in Meghalaya. A maker who understands their raw fibers invariably respects the architecture of the finished garment.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">2. Seek Out Multi-Brand Concept Havens</h4>
      <p>Boutiques like those curated within MODEVA represent vital cultural hubs. Rather than buying from wholesale distributors, premier curators visit graduate shows at Central Saint Martins, IFM Paris, and Bunka Fashion College to scout breakthrough voices before global conglomerates discover them.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">3. Embrace the Made-to-Order Cadence</h4>
      <p>Patience is the ultimate luxury. When an atelier drafts a pattern specifically to your posture, sleeve length, and movement, the resulting silhouette creates an unmatched confidence that no off-the-rack garment can emulate.</p>
    `
  },
  {
    id: 'sustainable-fashion-guide',
    category: "Sustainability",
    readTime: "8 min read",
    title: "A Guide to Finding Genuine Sustainable Clothing Brands",
    excerpt: "Demystifying greenwashing: how to evaluate natural fibers, deadstock salvage, closed-loop dyeing, and true garment longevity.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    author: "Elena Rostova — Sustainable Textiles Editor",
    date: "October 08, 2026",
    content: `
      <p class="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#E8D7B5]">Sustainability in the luxury sector has evolved far past simplistic recycled polyester tags. Today's most compelling sustainable labels operate with architectural rigor: calculating life-cycle emissions, preserving heritage artisanal weaving techniques, and designing garments with eventual biodegradation or total disassembly in mind.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">The Monomaterial Imperative</h4>
      <p>When searching for long-term investments, inspect garment labels for monomaterial composition. Garments woven from 100% natural wool, 100% organic linen, or 100% silk can be recycled mechanically or composted back into agricultural soil. Blends containing synthetic elastane or poly-nylon are exponentially harder for textile recyclers to segregate.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">Deadstock: The Art of Rescuing Archival Rolls</h4>
      <p>Ateliers highlighted in MODEVA's Sustainable Directory frequently partner with historic luxury fashion houses to purchase untouched rolls of silk, tweed, and cashmere sitting abandoned in warehouse storage. Transforming forgotten vintage yardage into modern outerwear is the pinnacle of circular luxury.</p>
    `
  },
  {
    id: 'local-boutiques-exploration',
    category: "City Guides",
    readTime: "5 min read",
    title: "The Best Ways to Explore Local Fashion Boutiques",
    excerpt: "An insider's roadmap to navigating the backstreets of Le Marais, Soho, Shoreditch, and Brera like a seasoned fashion director.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    author: "Julian St. Claire — European Editor at Large",
    date: "September 29, 2026",
    content: `
      <p class="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#E8D7B5]">Every great fashion capital possesses two distinct realities: the glossy, neon-lit luxury boulevards where tourists queue outside franchise flagships, and the clandestine cobblestone passages where true fashion discourse occurs.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">Engage with the Atelier Staff</h4>
      <p>Independent boutique owners and stylists are passionate curators. Ask them about the designer behind an intriguing lapel cut or where the leather was tanned. Their stories reveal an entire ecosystem of artists, milliners, and jewelers who share their creative orbit.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">Use MODEVA's Real-Time Proximity Filter</h4>
      <p>Our location discovery allows you to explore independent boutiques within walking distance of your current hotel or apartment, highlighting verified ratings and opening hours so you never encounter closed wooden shutters.</p>
    `
  },
  {
    id: 'understanding-luxury-categories',
    category: "Fashion Theory",
    readTime: "7 min read",
    title: "Understanding Contemporary and Luxury Fashion Categories",
    excerpt: "Unpacking the stylistic nuances separating Haute Couture, Ready-to-Wear, Demi-Couture, and elevated Contemporary streetwear.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    author: "Margot de la Tour — Fashion Historian",
    date: "September 18, 2026",
    content: `
      <p class="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#E8D7B5]">Fashion lexicon can often feel deliberately opaque. Understanding the legal definitions and design distinctions between categories empowers collectors to make informed acquisitions that retain aesthetic and financial value across decades.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">Haute Couture vs. Demi-Couture</h4>
      <p>Strictly regulated by France's Fédération de la Haute Couture et de la Mode, 'Haute Couture' requires Paris-based ateliers employing at least 15 full-time artisans. Meanwhile, the emerging 'Demi-Couture' movement democratizes these artisanal techniques, creating hand-finished garments in strictly numbered limited runs.</p>
      <h4 class="font-serif text-xl font-bold mt-6 mb-3 text-[#302137] dark:text-[#E8D7B5]">Elevated Contemporary</h4>
      <p>The sweet spot for daily life: contemporary brands that employ luxury-grade textiles and tailored construction, priced accessibly by bypassing celebrity fashion shows and extravagant traditional ad buys in favor of direct directory discoverability.</p>
    `
  }
];

// ==========================================
// 5. APPLICATION STATE
// ==========================================
const AppState = {
  theme: 'light',
  userLocation: null, // { lat, lng, cityName }
  favorites: JSON.parse(localStorage.getItem('modeva_favorites') || '[]'),
  
  // Directory filter state
  filters: {
    query: '',
    category: 'All',
    city: 'All',
    rating: 'All',
    price: 'All',
    specialty: 'All',
    sortBy: 'featured',
    onlyVerified: false,
    onlyFavorites: false
  },

  // Near You section state
  nearby: {
    selectedCity: 'Paris',
    maxDistance: 50,
    category: 'All',
    sortBy: 'distance'
  }
};

// ==========================================
// 6. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCategoriesGrid();
  renderCuratedCollections();
  renderTrendingShowcase();
  renderDirectoryListings();
  renderNearbySection();
  renderJournalArticles();
  renderReviewListingDropdown();
  setupEventListeners();
  setupScrollSpy();
  setupImageFallbacks();
});

// ==========================================
// 7. THEME MANAGEMENT (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem('modeva_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    AppState.theme = savedTheme;
  } else if (prefersDark) {
    AppState.theme = 'dark';
  } else {
    AppState.theme = 'light';
  }

  applyTheme(AppState.theme);

  // Toggle button clicks
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function applyTheme(theme) {
  const body = document.body;
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeIcons.forEach(icon => {
      icon.innerHTML = `<svg class="w-5 h-5 text-[#E8D7B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
    });
  } else {
    body.classList.remove('dark-mode');
    themeIcons.forEach(icon => {
      icon.innerHTML = `<svg class="w-5 h-5 text-[#302137]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    });
  }

  localStorage.setItem('modeva_theme', theme);
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(AppState.theme);
  showToast(`Switched to ${AppState.theme === 'dark' ? 'Midnight Noir' : 'Porcelain Ivory'} theme`);
}

// ==========================================
// 8. SECTION 02: CATEGORIES ASYMMETRICAL EDITORIAL GRID
// ==========================================
const CATEGORIES_DATA = [
  {
    name: "Luxury Fashion",
    count: "48 Boutiques",
    description: "High-end couture, architectural silhouettes, and bespoke tailoring houses.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-7 row-span-2 min-h-[380px] md:min-h-[460px]"
  },
  {
    name: "Independent Boutiques",
    count: "64 Ateliers",
    description: "Curated designer spaces with idiosyncratic aesthetics and limited runs.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-5 min-h-[220px]"
  },
  {
    name: "Streetwear & Contemporary",
    count: "39 Destinations",
    description: "Elevated utilitarian cuts, oversized heavyweight fleece, and drops.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-5 min-h-[220px]"
  },
  {
    name: "Sustainable Fashion",
    count: "32 Studios",
    description: "Regenerative textiles, botanical dyes, and circular zero-waste craftsmanship.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 min-h-[260px]"
  },
  {
    name: "Designer Collections",
    count: "51 Labels",
    description: "Runway-acclaimed labels presenting seasonal conceptual masterworks.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 min-h-[260px]"
  },
  {
    name: "Vintage & Pre-Loved",
    count: "27 Archives",
    description: "Verified archival runway pieces, rare 90s silks, and vintage leathers.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 min-h-[260px]"
  },
  {
    name: "Menswear",
    count: "42 Sartorias",
    description: "Unconstructed blazers, hand-sewn buttonholes, and modern suiting.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-6 min-h-[280px]"
  },
  {
    name: "Womenswear",
    count: "78 Showrooms",
    description: "Draped bias cuts, conscious silk slips, and empowering daytime elegance.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-6 min-h-[280px]"
  }
];

function renderCategoriesGrid() {
  const container = document.getElementById('categoriesGridContainer');
  if (!container) return;

  container.innerHTML = CATEGORIES_DATA.map((cat, index) => `
    <div class="relative group cursor-pointer overflow-hidden rounded-2xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${cat.gridSpan}"
         onclick="filterDirectoryByCategory('${cat.name}')">
      <!-- Background Image with Zoom -->
      <img src="${cat.image}" 
           alt="${cat.name} editorial imagery" 
           loading="lazy"
           class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-[0.88] dark:brightness-[0.75] group-hover:brightness-95" />
      
      <!-- Gradient Overlays for High Contrast -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#302137]/90 via-[#302137]/40 to-transparent"></div>
      
      <!-- Editorial Content -->
      <div class="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        <div class="flex justify-between items-start">
          <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#302137] bg-[#E8D7B5] rounded-full shadow-sm">
            ${cat.count}
          </span>
          <div class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[#FAF7F2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#E8D7B5] group-hover:text-[#302137]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>

        <div>
          <span class="text-xs uppercase tracking-widest text-[#E8D7B5]/90 mb-1 block">Curated Category 0${index + 1}</span>
          <h3 class="font-serif text-2xl md:text-3xl text-[#FAF7F2] font-semibold mb-2 group-hover:text-[#E8D7B5] transition-colors">
            ${cat.name}
          </h3>
          <p class="text-xs md:text-sm text-[#FAF7F2]/80 line-clamp-2 max-w-md font-light">
            ${cat.description}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

function filterDirectoryByCategory(categoryName) {
  AppState.filters.category = categoryName;
  
  // Update select in directory if present
  const catSelect = document.getElementById('dirCategoryFilter');
  if (catSelect) catSelect.value = categoryName;

  // Scroll to directory section
  const dirSection = document.getElementById('directory');
  if (dirSection) {
    dirSection.scrollIntoView({ behavior: 'smooth' });
  }

  renderDirectoryListings();
  showToast(`Filtered Directory by ${categoryName}`);
}

// ==========================================
// 9. SECTION 03: DISCOVER FASHION NEAR YOU
// ==========================================
function renderNearbySection() {
  const container = document.getElementById('nearbyResultsContainer');
  if (!container) return;

  const city = AppState.nearby.selectedCity;
  const filtered = DIRECTORY_LISTINGS.filter(item => {
    const matchCity = (city === 'All' || item.city.toLowerCase() === city.toLowerCase());
    const matchCat = (AppState.nearby.category === 'All' || item.category === AppState.nearby.category);
    return matchCity && matchCat;
  });

  // Calculate distance if user location is available, or use realistic city anchor
  const renderedList = (filtered.length > 0 ? filtered : DIRECTORY_LISTINGS).slice(0, 4);

  container.innerHTML = renderedList.map(item => {
    let distanceLabel = 'Centrally Located';
    if (AppState.userLocation && AppState.userLocation.lat) {
      const d = calculateDistance(AppState.userLocation.lat, AppState.userLocation.lng, item.lat, item.lng);
      distanceLabel = `${d.toFixed(1)} km away`;
    } else {
      distanceLabel = `In ${item.city} Center`;
    }

    const isFav = AppState.favorites.includes(item.id);

    return `
      <div class="bg-white dark:bg-[#281B2E] rounded-2xl overflow-hidden border border-[#302137]/10 dark:border-[#E8D7B5]/20 p-4 md:p-5 flex flex-col sm:flex-row gap-5 hover-lift transition-all">
        <!-- Thumbnail -->
        <div class="w-full sm:w-44 h-48 sm:h-auto rounded-xl overflow-hidden relative flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover" />
          <span class="absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#302137]/85 text-[#E8D7B5] backdrop-blur-sm">
            ${item.priceRange}
          </span>
          <button onclick="toggleFavorite('${item.id}', event)" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/80 dark:bg-[#302137]/80 backdrop-blur-sm flex items-center justify-center text-[#302137] dark:text-[#E8D7B5] hover:scale-110 transition-transform" title="Save to favorites">
            <svg class="w-4 h-4 ${isFav ? 'fill-current text-[#E8D7B5]' : ''}" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>

        <!-- Info -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span class="text-xs font-semibold tracking-wider uppercase text-[#E8D7B5] bg-[#302137] dark:bg-[#3E2B47] px-2.5 py-0.5 rounded-full">
                ${item.category}
              </span>
              <div class="flex items-center gap-1.5 text-xs text-[#302137]/70 dark:text-[#FAF7F2]/70">
                <svg class="w-3.5 h-3.5 text-[#E8D7B5]" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/></svg>
                <span>${distanceLabel}</span>
              </div>
            </div>

            <h4 class="font-serif text-xl font-bold text-[#302137] dark:text-[#FAF7F2] hover:text-[#E8D7B5] transition-colors cursor-pointer" onclick="openListingModal('${item.id}')">
              ${item.name}
            </h4>
            
            <p class="text-xs text-[#302137]/75 dark:text-[#FAF7F2]/75 line-clamp-2 my-2 font-light">
              ${item.description}
            </p>
          </div>

          <div class="pt-3 border-t border-[#302137]/10 dark:border-[#E8D7B5]/15 flex items-center justify-between mt-2">
            <div class="flex items-center gap-1.5">
              <span class="text-amber-500 text-sm">★</span>
              <span class="text-xs font-bold text-[#302137] dark:text-[#FAF7F2]">${item.rating}</span>
              <span class="text-[11px] text-[#302137]/60 dark:text-[#FAF7F2]/60">(${item.reviewCount} reviews)</span>
            </div>

            <button onclick="openListingModal('${item.id}')" class="text-xs font-semibold tracking-wider uppercase text-[#302137] dark:text-[#E8D7B5] hover:underline flex items-center gap-1">
              <span>View Details</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Request Browser Geolocation
function requestUserGeolocation() {
  const statusEl = document.getElementById('locationStatusNotice');
  if (statusEl) {
    statusEl.classList.remove('hidden');
    statusEl.innerHTML = `<span class="inline-block animate-pulse text-[#302137] dark:text-[#E8D7B5]">Requesting location permission from browser...</span>`;
  }

  if (!navigator.geolocation) {
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-red-500">Geolocation is not supported by your browser. Please select a city manually.</span>`;
    }
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      AppState.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        cityName: "Detected Location"
      };

      if (statusEl) {
        statusEl.innerHTML = `<span class="text-emerald-700 dark:text-emerald-400 font-medium">✓ Location verified (${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}). Sorting results by nearest distance.</span>`;
      }

      showToast("Location updated! Showing nearest fashion destinations.");
      renderNearbySection();
      renderDirectoryListings();
    },
    (error) => {
      let msg = "Location permission denied. Please choose your city manually.";
      if (error.code === error.TIMEOUT) msg = "Location request timed out. Please choose a city.";
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-[#302137]/70 dark:text-[#FAF7F2]/70">${msg}</span>`;
      }
      showToast(msg);
    },
    { timeout: 10000, maximumAge: 60000 }
  );
}

// Haversine distance formula in kilometers
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// ==========================================
// 10. SECTION 04: EDITOR'S PICKS & CURATED RECOMMENDATIONS
// ==========================================
function renderCuratedCollections() {
  const container = document.getElementById('curatedCollectionsContainer');
  if (!container) return;

  container.innerHTML = CURATED_COLLECTIONS.map((col, idx) => {
    const isEven = idx % 2 === 1;
    return `
      <div class="relative bg-white dark:bg-[#281B2E] rounded-3xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          <!-- Editorial Image Column -->
          <div class="lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-[440px] ${isEven ? 'lg:order-2' : ''}">
            <img src="${col.image}" alt="${col.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#302137]/60 via-transparent to-transparent lg:hidden"></div>
            <div class="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-[#302137]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E8D7B5]/30">
              <span class="text-[11px] uppercase tracking-widest text-[#E8D7B5] font-semibold block">Curated Edit 0${idx + 1}</span>
              <span class="text-xs text-[#FAF7F2] font-light">${col.category}</span>
            </div>
          </div>

          <!-- Editorial Text Column -->
          <div class="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="w-6 h-[1px] bg-[#E8D7B5]"></span>
                <span class="text-xs uppercase tracking-widest font-semibold text-[#302137]/60 dark:text-[#E8D7B5]">Volume Autumn/Winter</span>
              </div>

              <h3 class="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#302137] dark:text-[#FAF7F2] leading-tight mb-4">
                ${col.title}
              </h3>

              <p class="text-sm md:text-base text-[#302137]/80 dark:text-[#FAF7F2]/80 font-light leading-relaxed mb-6">
                ${col.description}
              </p>

              <!-- Curator Note Quote -->
              <div class="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#1E1423] border-l-2 border-[#E8D7B5] mb-6">
                <p class="text-xs italic text-[#302137]/85 dark:text-[#FAF7F2]/85">
                  "${col.curatorQuote}"
                </p>
                <span class="text-[10px] uppercase tracking-wider font-semibold text-[#E8D7B5] block mt-1.5">— MODEVA Editorial Board</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-[#302137]/10 dark:border-[#E8D7B5]/15 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <span class="text-xs text-[#302137]/60 dark:text-[#FAF7F2]/60">${col.listingIds.length} Flagship Ateliers Featured</span>
              </div>

              <button onclick="openCollectionModal('${col.id}')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#302137] text-[#E8D7B5] dark:bg-[#E8D7B5] dark:text-[#302137] font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity">
                <span>Explore Collection</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 11. SECTION 05: VERIFIED FASHION DIRECTORY
// ==========================================
function renderDirectoryListings() {
  const container = document.getElementById('directoryListingsGrid');
  const countEl = document.getElementById('directoryResultsCount');
  const emptyState = document.getElementById('directoryEmptyState');
  if (!container) return;

  const { query, category, city, rating, price, specialty, sortBy, onlyVerified, onlyFavorites } = AppState.filters;

  let results = DIRECTORY_LISTINGS.filter(item => {
    // Search query matches name, category, tags, or description
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchLoc = item.location.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchLoc && !matchTags && !matchDesc) return false;
    }

    // Category
    if (category !== 'All' && item.category !== category) return false;

    // City
    if (city !== 'All' && item.city.toLowerCase() !== city.toLowerCase()) return false;

    // Rating
    if (rating !== 'All') {
      const minR = parseFloat(rating);
      if (item.rating < minR) return false;
    }

    // Price
    if (price !== 'All' && item.priceRange !== price) return false;

    // Specialty / tag
    if (specialty !== 'All') {
      const hasTag = item.tags.some(t => t.toLowerCase() === specialty.toLowerCase());
      if (!hasTag) return false;
    }

    // Verified only
    if (onlyVerified && !item.verified) return false;

    // Saved Favorites only
    if (onlyFavorites && !AppState.favorites.includes(item.id)) return false;

    return true;
  });

  // Sorting
  results.sort((a, b) => {
    if (sortBy === 'highest-rated') return b.rating - a.rating;
    if (sortBy === 'most-reviewed') return b.reviewCount - a.reviewCount;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    // Default featured
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  if (countEl) {
    countEl.textContent = `Showing ${results.length} of ${DIRECTORY_LISTINGS.length} curated fashion listings`;
  }

  if (results.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = results.map(item => {
    const isFav = AppState.favorites.includes(item.id);

    return `
      <article class="bg-white dark:bg-[#281B2E] rounded-3xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 overflow-hidden shadow-sm hover-lift flex flex-col justify-between transition-all group">
        <div>
          <!-- Image Banner -->
          <div class="relative h-64 overflow-hidden">
            <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#302137]/70 via-transparent to-transparent"></div>
            
            <!-- Badges -->
            <div class="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
              ${item.verified ? `
                <span class="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-[#302137]/90 text-[#E8D7B5] border border-[#E8D7B5]/40 backdrop-blur-md">
                  <svg class="w-3.5 h-3.5 text-[#E8D7B5]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                  Verified
                </span>
              ` : ''}
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FAF7F2]/90 text-[#302137]">
                ${item.priceRange}
              </span>
            </div>

            <!-- Favorite Heart Button -->
            <button onclick="toggleFavorite('${item.id}', event)" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 dark:bg-[#302137]/80 backdrop-blur-md flex items-center justify-center text-[#302137] dark:text-[#E8D7B5] hover:scale-110 transition-transform shadow-md" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
              <svg class="w-4 h-4 ${isFav ? 'fill-[#E8D7B5] text-[#E8D7B5]' : ''}" fill="${isFav ? '#E8D7B5' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <!-- Bottom Image Bar -->
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#FAF7F2]">
              <span class="font-medium tracking-wide flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-[#E8D7B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                ${item.location}
              </span>
              <div class="flex items-center gap-1 bg-[#302137]/80 px-2 py-0.5 rounded-full text-[11px]">
                <span class="text-amber-400">★</span>
                <span class="font-bold">${item.rating}</span>
                <span class="opacity-75">(${item.reviewCount})</span>
              </div>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-[#302137]/70 dark:text-[#E8D7B5]">
                ${item.category}
              </span>
            </div>

            <h3 class="font-serif text-2xl font-bold text-[#302137] dark:text-[#FAF7F2] hover:text-[#E8D7B5] transition-colors cursor-pointer mb-2.5" onclick="openListingModal('${item.id}')">
              ${item.name}
            </h3>

            <p class="text-xs md:text-sm text-[#302137]/75 dark:text-[#FAF7F2]/75 line-clamp-2 font-light leading-relaxed mb-4">
              ${item.description}
            </p>

            <!-- Specialty Tags -->
            <div class="flex flex-wrap gap-1.5 mb-2">
              ${item.tags.map(t => `
                <span class="text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#FAF7F2] dark:bg-[#1E1423] text-[#302137]/80 dark:text-[#E8D7B5] border border-[#302137]/5 dark:border-[#E8D7B5]/15">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Card Footer CTA -->
        <div class="p-6 pt-0 border-t border-[#302137]/10 dark:border-[#E8D7B5]/10 mt-2 flex items-center justify-between">
          <button onclick="openListingModal('${item.id}')" class="w-full py-2.5 px-4 rounded-xl bg-[#302137] text-[#E8D7B5] dark:bg-[#E8D7B5] dark:text-[#302137] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span>View Full Atelier Dossier</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Reset all directory filters
function resetDirectoryFilters() {
  AppState.filters = {
    query: '',
    category: 'All',
    city: 'All',
    rating: 'All',
    price: 'All',
    specialty: 'All',
    sortBy: 'featured',
    onlyVerified: false,
    onlyFavorites: false
  };

  const qInput = document.getElementById('dirSearchInput');
  const catSel = document.getElementById('dirCategoryFilter');
  const citySel = document.getElementById('dirCityFilter');
  const rateSel = document.getElementById('dirRatingFilter');
  const sortSel = document.getElementById('dirSortBy');
  const verCheck = document.getElementById('dirVerifiedCheck');
  const favCheck = document.getElementById('dirFavoritesCheck');

  if (qInput) qInput.value = '';
  if (catSel) catSel.value = 'All';
  if (citySel) citySel.value = 'All';
  if (rateSel) rateSel.value = 'All';
  if (sortSel) sortSel.value = 'featured';
  if (verCheck) verCheck.checked = false;
  if (favCheck) favCheck.checked = false;

  renderDirectoryListings();
  showToast("All directory filters have been reset.");
}

// Favorites Toggle
function toggleFavorite(listingId, event) {
  if (event) event.stopPropagation();

  const idx = AppState.favorites.indexOf(listingId);
  const item = DIRECTORY_LISTINGS.find(l => l.id === listingId);
  const itemName = item ? item.name : 'Listing';

  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
    showToast(`Removed "${itemName}" from saved bookmarks`);
  } else {
    AppState.favorites.push(listingId);
    showToast(`Saved "${itemName}" to your fashion bookmarks`);
  }

  localStorage.setItem('modeva_favorites', JSON.stringify(AppState.favorites));
  renderDirectoryListings();
  renderNearbySection();
}

// ==========================================
// 12. SECTION 06: TRENDING BRANDS HORIZONTAL SHOWCASE
// ==========================================
function renderTrendingShowcase() {
  const container = document.getElementById('trendingBrandsTrack');
  if (!container) return;

  container.innerHTML = TRENDING_BRANDS.map((brand, i) => `
    <div class="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] bg-white dark:bg-[#281B2E] rounded-3xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
      <div>
        <div class="relative h-64 overflow-hidden">
          <img src="${brand.image}" alt="${brand.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#302137]/80 via-[#302137]/20 to-transparent"></div>
          <span class="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#E8D7B5] text-[#302137]">
            ${brand.tag}
          </span>
          <span class="absolute bottom-4 left-4 text-xs tracking-wider text-[#E8D7B5] font-light flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
            ${brand.city}
          </span>
        </div>

        <div class="p-6">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-[#E8D7B5] block mb-1.5">${brand.specialty}</span>
          <h4 class="font-serif text-2xl font-bold text-[#302137] dark:text-[#FAF7F2] mb-3">${brand.name}</h4>
          <p class="text-xs text-[#302137]/75 dark:text-[#FAF7F2]/75 font-light leading-relaxed">
            ${brand.description}
          </p>
        </div>
      </div>

      <div class="p-6 pt-0">
        <button onclick="showToast('Opening spotlight for ${brand.name}')" class="text-xs font-semibold uppercase tracking-wider text-[#302137] dark:text-[#E8D7B5] flex items-center gap-1.5 hover:translate-x-1 transition-transform">
          <span>Read Emerging Profile</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function scrollTrendingTrack(direction) {
  const track = document.getElementById('trendingBrandsTrack');
  if (!track) return;
  const offset = direction === 'left' ? -380 : 380;
  track.scrollBy({ left: offset, behavior: 'smooth' });
}

// ==========================================
// 13. SECTION 07: COMMUNITY RATINGS & WRITE A REVIEW
// ==========================================
function renderReviewListingDropdown() {
  const select = document.getElementById('reviewListingSelect');
  if (!select) return;

  select.innerHTML = `<option value="">Select a fashion listing...</option>` + 
    DIRECTORY_LISTINGS.map(item => `<option value="${item.id}">${item.name} (${item.city})</option>`).join('');
}

function openWriteReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function setReviewStarRating(rating) {
  const stars = document.querySelectorAll('.review-star-btn');
  const ratingInput = document.getElementById('reviewRatingValue');
  if (ratingInput) ratingInput.value = rating;

  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('text-amber-400');
      star.classList.remove('text-gray-300', 'dark:text-gray-600');
    } else {
      star.classList.remove('text-amber-400');
      star.classList.add('text-gray-300', 'dark:text-gray-600');
    }
  });
}

function handleReviewSubmission(event) {
  event.preventDefault();
  const listingId = document.getElementById('reviewListingSelect').value;
  const rating = parseInt(document.getElementById('reviewRatingValue').value || '5', 10);
  const authorName = document.getElementById('reviewAuthorName').value.trim();
  const title = document.getElementById('reviewTitleInput').value.trim();
  const feedback = document.getElementById('reviewFeedbackInput').value.trim();
  const categoryAspect = document.getElementById('reviewAspectSelect').value;

  if (!listingId) {
    showToast("Please select which fashion listing you are reviewing.");
    return;
  }
  if (!authorName || !title || feedback.length < 15) {
    showToast("Please complete your name, title, and at least 15 characters of feedback.");
    return;
  }

  // Find listing & attach review
  const targetListing = DIRECTORY_LISTINGS.find(l => l.id === listingId);
  if (targetListing) {
    const newRev = {
      author: authorName,
      date: "Just Now",
      rating: rating,
      title: title,
      aspect: categoryAspect,
      comment: feedback,
      verified: true
    };
    targetListing.reviews.unshift(newRev);
    targetListing.reviewCount += 1;
    showToast(`Thank you, ${authorName}! Your review for ${targetListing.name} has been published.`);
  }

  // Reset form & close
  document.getElementById('writeReviewForm').reset();
  setReviewStarRating(5);
  closeReviewModal();
  renderDirectoryListings();
  renderNearbySection();
}

// ==========================================
// 14. SECTION 08: FASHION BUSINESS LISTING SUBMISSION
// ==========================================
function handleImagePreview(event) {
  const file = event.target.files[0];
  const previewContainer = document.getElementById('imageUploadPreview');
  const previewImg = document.getElementById('imagePreviewImg');
  const placeholderText = document.getElementById('uploadPlaceholderText');

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      if (previewImg && previewContainer) {
        previewImg.src = e.target.result;
        previewContainer.classList.remove('hidden');
        if (placeholderText) placeholderText.classList.add('hidden');
      }
    };
    reader.readAsDataURL(file);
  }
}

function handleBusinessSubmission(event) {
  event.preventDefault();

  const form = document.getElementById('businessSubmissionForm');
  const brandName = document.getElementById('subBrandName').value.trim();
  const contactName = document.getElementById('subContactName').value.trim();
  const email = document.getElementById('subEmail').value.trim();
  const website = document.getElementById('subWebsite').value.trim();
  const city = document.getElementById('subLocation').value.trim();
  const category = document.getElementById('subCategory').value;
  const description = document.getElementById('subDescription').value.trim();
  const tags = document.getElementById('subTags').value.trim();
  const termsAgreed = document.getElementById('subTermsCheck').checked;
  const btn = document.getElementById('subSubmitBtn');

  // Basic Validations
  if (!brandName || !contactName || !city || !category) {
    showToast("Please fill in all mandatory business identity fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Please provide a valid corporate or atelier email address.");
    return;
  }

  if (description.length < 25) {
    showToast("Please write a meaningful brand description (at least 25 characters).");
    return;
  }

  if (!termsAgreed) {
    showToast("Please confirm agreement with the MODEVA Curation Terms.");
    return;
  }

  // Visual submission process state
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-[#302137]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Reviewing & Transmitting Dossier...
    `;
  }

  setTimeout(() => {
    // Open Confirmation Dialog Modal
    const modal = document.getElementById('submissionSuccessModal');
    const msgBrand = document.getElementById('successBrandNameSpan');
    if (msgBrand) msgBrand.textContent = brandName;
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // Reset button
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `
        <span>Submit Brand for Editorial Curation</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
    }

    form.reset();
    const previewContainer = document.getElementById('imageUploadPreview');
    const placeholderText = document.getElementById('uploadPlaceholderText');
    if (previewContainer) previewContainer.classList.add('hidden');
    if (placeholderText) placeholderText.classList.remove('hidden');
  }, 1400);
}

function closeSuccessModal() {
  const modal = document.getElementById('submissionSuccessModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// 15. SECTION 09: JOURNAL ARTICLES
// ==========================================
function renderJournalArticles() {
  const container = document.getElementById('journalArticlesGrid');
  if (!container) return;

  const [leadArticle, ...subArticles] = JOURNAL_ARTICLES;

  container.innerHTML = `
    <!-- Featured Major Article -->
    <div class="col-span-12 lg:col-span-7 bg-white dark:bg-[#281B2E] rounded-3xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
      <div>
        <div class="relative h-80 md:h-96 overflow-hidden">
          <img src="${leadArticle.image}" alt="${leadArticle.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#302137]/80 via-transparent to-transparent"></div>
          <span class="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#E8D7B5] text-[#302137]">
            ${leadArticle.category}
          </span>
          <span class="absolute bottom-4 left-4 text-xs text-[#FAF7F2] font-light">
            ${leadArticle.readTime} • ${leadArticle.date}
          </span>
        </div>

        <div class="p-8 md:p-10">
          <h3 class="font-serif text-2xl md:text-4xl font-bold text-[#302137] dark:text-[#FAF7F2] group-hover:text-[#E8D7B5] transition-colors mb-4">
            ${leadArticle.title}
          </h3>
          <p class="text-sm md:text-base text-[#302137]/80 dark:text-[#FAF7F2]/80 font-light leading-relaxed mb-4">
            ${leadArticle.excerpt}
          </p>
          <p class="text-xs text-[#E8D7B5] font-medium tracking-wider uppercase">— By ${leadArticle.author}</p>
        </div>
      </div>

      <div class="p-8 md:p-10 pt-0">
        <button onclick="openJournalModal('${leadArticle.id}')" class="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#302137] dark:text-[#E8D7B5] hover:gap-3 transition-all">
          <span>Read Full Journal Feature</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    </div>

    <!-- Secondary Articles List -->
    <div class="col-span-12 lg:col-span-5 flex flex-col gap-6">
      ${subArticles.map(art => `
        <div class="bg-white dark:bg-[#281B2E] rounded-3xl border border-[#302137]/10 dark:border-[#E8D7B5]/20 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5 group cursor-pointer" onclick="openJournalModal('${art.id}')">
          <div class="w-full sm:w-36 h-36 rounded-2xl overflow-hidden relative flex-shrink-0">
            <img src="${art.image}" alt="${art.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <span class="absolute top-2 left-2 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#302137]/80 text-[#E8D7B5] backdrop-blur-sm">
              ${art.readTime}
            </span>
          </div>

          <div class="flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-wider text-[#E8D7B5] block mb-1">
                ${art.category}
              </span>
              <h4 class="font-serif text-lg md:text-xl font-bold text-[#302137] dark:text-[#FAF7F2] group-hover:text-[#E8D7B5] transition-colors leading-snug mb-2">
                ${art.title}
              </h4>
              <p class="text-xs text-[#302137]/70 dark:text-[#FAF7F2]/70 line-clamp-2 font-light">
                ${art.excerpt}
              </p>
            </div>

            <div class="pt-2 flex items-center justify-between text-xs font-semibold text-[#302137] dark:text-[#E8D7B5] mt-2">
              <span class="text-[11px] opacity-75 font-normal">${art.date}</span>
              <span class="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Journal Article Reader Modal
function openJournalModal(articleId) {
  const article = JOURNAL_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('journalModal');
  const titleEl = document.getElementById('journalModalTitle');
  const catEl = document.getElementById('journalModalCategory');
  const authorEl = document.getElementById('journalModalAuthor');
  const bodyEl = document.getElementById('journalModalBody');
  const imgEl = document.getElementById('journalModalImg');

  if (titleEl) titleEl.textContent = article.title;
  if (catEl) catEl.textContent = `${article.category} • ${article.readTime}`;
  if (authorEl) authorEl.textContent = `Published on ${article.date} by ${article.author}`;
  if (imgEl) imgEl.src = article.image;
  if (bodyEl) bodyEl.innerHTML = article.content;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeJournalModal() {
  const modal = document.getElementById('journalModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// ==========================================
// 16. MODALS: LISTING DOSSIER & COLLECTIONS
// ==========================================
function openListingModal(listingId) {
  const item = DIRECTORY_LISTINGS.find(l => l.id === listingId);
  if (!item) return;

  const modal = document.getElementById('listingModal');
  if (!modal) return;

  const isFav = AppState.favorites.includes(item.id);

  modal.innerHTML = `
    <div class="modal-backdrop fixed inset-0 bg-[#302137]/80 dark:bg-black/85 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" onclick="closeListingModal(event)">
      <div class="modal-content-box bg-[#FAF7F2] dark:bg-[#1E1423] w-full max-w-4xl rounded-3xl border border-[#E8D7B5]/30 shadow-2xl overflow-hidden my-8" onclick="event.stopPropagation()">
        
        <!-- Modal Header Gallery -->
        <div class="relative h-72 sm:h-96 w-full">
          <img id="modalMainHeroImg" src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#302137] via-[#302137]/30 to-transparent"></div>
          
          <!-- Close Button -->
          <button onclick="closeListingModal()" class="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all z-20" title="Close dossier">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <!-- Badges & Title in Banner -->
          <div class="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 z-10">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#E8D7B5] text-[#302137]">
                  ${item.category}
                </span>
                ${item.verified ? `
                  <span class="px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-full bg-white/20 text-[#FAF7F2] backdrop-blur-sm border border-white/20 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-[#E8D7B5]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    Verified Boutique
                  </span>
                ` : ''}
              </div>
              <h2 class="font-serif text-3xl sm:text-5xl font-bold text-[#FAF7F2]">${item.name}</h2>
              <p class="text-xs sm:text-sm text-[#E8D7B5] mt-1 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                ${item.address}
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="toggleFavorite('${item.id}'); updateModalFavButton('${item.id}')" id="modalFavBtn" class="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-white/30 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all">
                <svg class="w-4 h-4 ${isFav ? 'fill-[#E8D7B5] text-[#E8D7B5]' : ''}" fill="${isFav ? '#E8D7B5' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span>${isFav ? 'Bookmarked' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Thumbnail Gallery Strip -->
        <div class="px-6 py-3 bg-[#302137] border-b border-[#E8D7B5]/20 flex gap-3 overflow-x-auto">
          <img src="${item.image}" onclick="document.getElementById('modalMainHeroImg').src='${item.image}'" class="w-20 h-14 object-cover rounded-lg cursor-pointer border border-[#E8D7B5]/40 hover:opacity-100 transition-opacity flex-shrink-0" alt="Gallery thumbnail 1" />
          ${(item.secondaryImages || []).map((img, i) => `
            <img src="${img}" onclick="document.getElementById('modalMainHeroImg').src='${img}'" class="w-20 h-14 object-cover rounded-lg cursor-pointer border border-white/20 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0" alt="Gallery thumbnail ${i + 2}" />
          `).join('')}
        </div>

        <!-- Modal Content Grid -->
        <div class="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <!-- Left Column: Editorial Overview & Reviews -->
          <div class="md:col-span-7">
            <h4 class="text-xs uppercase tracking-widest font-semibold text-[#E8D7B5] mb-2">Editorial Narrative</h4>
            <h3 class="font-serif text-2xl font-bold text-[#302137] dark:text-[#FAF7F2] mb-4">${item.description}</h3>
            
            <p class="text-sm text-[#302137]/80 dark:text-[#FAF7F2]/80 font-light leading-relaxed mb-6">
              ${item.fullStory || item.description}
            </p>

            <div class="mb-6">
              <h4 class="text-xs uppercase tracking-widest font-semibold text-[#302137] dark:text-[#E8D7B5] mb-2.5">House Specialties & Craft</h4>
              <p class="text-xs sm:text-sm text-[#302137]/75 dark:text-[#FAF7F2]/75 font-light bg-white dark:bg-[#281B2E] p-3.5 rounded-xl border border-[#302137]/10 dark:border-[#E8D7B5]/20">
                ${item.specialties}
              </p>
            </div>

            <!-- Verified Reviews in Modal -->
            <div class="mt-8 pt-6 border-t border-[#302137]/10 dark:border-[#E8D7B5]/20">
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-serif text-xl font-bold text-[#302137] dark:text-[#FAF7F2]">Client Impressions</h4>
                <button onclick="closeListingModal(); openWriteReviewModal(); document.getElementById('reviewListingSelect').value='${item.id}'" class="text-xs font-semibold uppercase tracking-wider text-[#302137] dark:text-[#E8D7B5] underline">
                  Write Review
                </button>
              </div>

              <div class="space-y-3">
                ${(item.reviews || []).map(r => `
                  <div class="p-3.5 rounded-xl bg-white dark:bg-[#281B2E] border border-[#302137]/5 dark:border-[#E8D7B5]/15">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold text-[#302137] dark:text-[#FAF7F2]">${r.author}</span>
                      <div class="flex items-center text-amber-500 text-xs">
                        ${'★'.repeat(r.rating)}
                      </div>
                    </div>
                    <p class="text-xs text-[#302137]/75 dark:text-[#FAF7F2]/75 font-light">${r.comment}</p>
                    <span class="text-[10px] text-[#302137]/50 dark:text-[#FAF7F2]/50 block mt-1">${r.date} ${r.verified ? '• Verified Atelier Visit' : ''}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Column: Practical Details Box -->
          <div class="md:col-span-5 flex flex-col gap-5">
            <div class="p-6 rounded-2xl bg-white dark:bg-[#281B2E] border border-[#302137]/10 dark:border-[#E8D7B5]/20 space-y-4 shadow-sm">
              <h4 class="font-serif text-lg font-bold text-[#302137] dark:text-[#FAF7F2] border-b border-[#302137]/10 dark:border-[#E8D7B5]/15 pb-2">
                Atelier Directory Record
              </h4>

              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-[#302137]/60 dark:text-[#E8D7B5]/70 block">Operating Hours</span>
                <p class="text-xs text-[#302137] dark:text-[#FAF7F2] font-medium mt-0.5">${item.hours}</p>
              </div>

              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-[#302137]/60 dark:text-[#E8D7B5]/70 block">Direct Atelier Contact</span>
                <p class="text-xs text-[#302137] dark:text-[#FAF7F2] font-medium mt-0.5">${item.phone}</p>
              </div>

              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-[#302137]/60 dark:text-[#E8D7B5]/70 block">Price Positioning</span>
                <p class="text-xs text-[#302137] dark:text-[#FAF7F2] font-medium mt-0.5">${item.priceRange} — High Editorial / Bespoke</p>
              </div>

              <div>
                <span class="text-[11px] uppercase tracking-wider font-semibold text-[#302137]/60 dark:text-[#E8D7B5]/70 block">Official Online Presence</span>
                <a href="${item.website}" target="_blank" rel="noopener noreferrer" class="text-xs text-[#302137] dark:text-[#E8D7B5] font-semibold underline break-all mt-0.5 block hover:opacity-80">
                  ${item.website}
                </a>
              </div>

              <div class="pt-2">
                <a href="https://maps.google.com/?q=${encodeURIComponent(item.name + ' ' + item.address)}" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-[#302137] text-[#E8D7B5] dark:bg-[#E8D7B5] dark:text-[#302137] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  <span>Open Directions in Maps</span>
                </a>
              </div>
            </div>

            <!-- Trust Badge Box -->
            <div class="p-4 rounded-2xl bg-[#302137] text-[#FAF7F2] border border-[#E8D7B5]/30 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#E8D7B5] text-[#302137] flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg">
                M
              </div>
              <p class="text-xs text-[#FAF7F2]/90 font-light">
                This atelier was physically scouted and independently verified by MODEVA's European Fashion Commission.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function updateModalFavButton(listingId) {
  const btn = document.getElementById('modalFavBtn');
  if (!btn) return;
  const isFav = AppState.favorites.includes(listingId);
  btn.innerHTML = `
    <svg class="w-4 h-4 ${isFav ? 'fill-[#E8D7B5] text-[#E8D7B5]' : ''}" fill="${isFav ? '#E8D7B5' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
    <span>${isFav ? 'Bookmarked' : 'Save'}</span>
  `;
}

function closeListingModal(event) {
  if (event && event.target !== event.currentTarget) return;
  const modal = document.getElementById('listingModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.innerHTML = '';
  document.body.style.overflow = '';
}

// Open Collection Modal
function openCollectionModal(collectionId) {
  const col = CURATED_COLLECTIONS.find(c => c.id === collectionId);
  if (!col) return;

  // Filter listings belonging to collection
  AppState.filters.query = '';
  AppState.filters.category = col.category;
  renderDirectoryListings();

  const dirSection = document.getElementById('directory');
  if (dirSection) {
    dirSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Loaded "${col.title}" in Verified Directory.`);
}

// ==========================================
// 17. HERO SEARCH FORM INTERACTION
// ==========================================
function handleHeroSearch(event) {
  event.preventDefault();
  const query = document.getElementById('heroSearchQuery').value.trim();
  const city = document.getElementById('heroLocationInput').value.trim();
  const cat = document.getElementById('heroCategorySelect').value;

  AppState.filters.query = query;
  if (cat && cat !== 'All') AppState.filters.category = cat;
  if (city) AppState.filters.city = city;

  // Update directory inputs
  const dirQ = document.getElementById('dirSearchInput');
  const dirC = document.getElementById('dirCategoryFilter');
  const dirCity = document.getElementById('dirCityFilter');

  if (dirQ) dirQ.value = query;
  if (dirC) dirC.value = cat || 'All';
  if (dirCity && city) dirCity.value = city;

  renderDirectoryListings();

  const dirSection = document.getElementById('directory');
  if (dirSection) {
    dirSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Searching directory for "${query || cat || city}"...`);
}

// ==========================================
// 18. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Hero Search Form
  const heroForm = document.getElementById('heroSearchForm');
  if (heroForm) heroForm.addEventListener('submit', handleHeroSearch);

  // Directory Search Input with debounce
  const dirSearch = document.getElementById('dirSearchInput');
  if (dirSearch) {
    let timeout = null;
    dirSearch.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        AppState.filters.query = e.target.value;
        renderDirectoryListings();
      }, 250);
    });
  }

  // Directory Category Filter
  const dirCat = document.getElementById('dirCategoryFilter');
  if (dirCat) {
    dirCat.addEventListener('change', (e) => {
      AppState.filters.category = e.target.value;
      renderDirectoryListings();
    });
  }

  // Directory City Filter
  const dirCity = document.getElementById('dirCityFilter');
  if (dirCity) {
    dirCity.addEventListener('change', (e) => {
      AppState.filters.city = e.target.value;
      renderDirectoryListings();
    });
  }

  // Directory Rating Filter
  const dirRating = document.getElementById('dirRatingFilter');
  if (dirRating) {
    dirRating.addEventListener('change', (e) => {
      AppState.filters.rating = e.target.value;
      renderDirectoryListings();
    });
  }

  // Directory Sort By
  const dirSort = document.getElementById('dirSortBy');
  if (dirSort) {
    dirSort.addEventListener('change', (e) => {
      AppState.filters.sortBy = e.target.value;
      renderDirectoryListings();
    });
  }

  // Directory Verified Check
  const dirVerified = document.getElementById('dirVerifiedCheck');
  if (dirVerified) {
    dirVerified.addEventListener('change', (e) => {
      AppState.filters.onlyVerified = e.target.checked;
      renderDirectoryListings();
    });
  }

  // Directory Favorites Check
  const dirFav = document.getElementById('dirFavoritesCheck');
  if (dirFav) {
    dirFav.addEventListener('change', (e) => {
      AppState.filters.onlyFavorites = e.target.checked;
      renderDirectoryListings();
    });
  }

  // Nearby city select
  const nearbyCitySel = document.getElementById('nearbyCitySelect');
  if (nearbyCitySel) {
    nearbyCitySel.addEventListener('change', (e) => {
      AppState.nearby.selectedCity = e.target.value;
      renderNearbySection();
    });
  }

  // Nearby category filter
  const nearbyCatSel = document.getElementById('nearbyCategorySelect');
  if (nearbyCatSel) {
    nearbyCatSel.addEventListener('change', (e) => {
      AppState.nearby.category = e.target.value;
      renderNearbySection();
    });
  }

  // Business submission image upload
  const brandImgInput = document.getElementById('subBrandImage');
  if (brandImgInput) {
    brandImgInput.addEventListener('change', handleImagePreview);
  }

  // Business submission form submit
  const busForm = document.getElementById('businessSubmissionForm');
  if (busForm) {
    busForm.addEventListener('submit', handleBusinessSubmission);
  }

  // Write review form submit
  const revForm = document.getElementById('writeReviewForm');
  if (revForm) {
    revForm.addEventListener('submit', handleReviewSubmission);
  }

  // Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.add('opacity-100');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn?.classList.remove('opacity-100');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu drawer
  const mobileMenuBtn = document.getElementById('mobileMenuToggle');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobileMenu = () => {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
}

// ==========================================
// 19. SCROLL SPY FOR ACTIVE NAVIGATION LINK
// ==========================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================
// 20. IMAGE ERROR HANDLING (NO BROKEN IMAGES)
// ==========================================
function setupImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      // Graceful high-contrast fashion fallback
      this.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80";
    });
  });
}

// ==========================================
// 21. LIGHTWEIGHT TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#302137] text-[#FAF7F2] border border-[#E8D7B5]/40 shadow-2xl text-xs font-medium tracking-wide transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#E8D7B5]"></span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3200);
}
