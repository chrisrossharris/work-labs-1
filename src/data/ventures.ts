export type Venture = {
  slug: string;
  index: string;
  name: string;
  stage: string;
  focus: string;
  thesis: string;
  metric: string;
  note: string;
  image: string;
  externalUrl: string;
  projects: string[];
};

export const ventures: Venture[] = [
  {
    slug: 'collateral',
    index: '01',
    name: 'Collateral',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Brand support systems: sales tools, campaign assets, and communication materials.',
    metric: 'Tag: collateral',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1554.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=collateral',
    projects: ['Sales Deck System', 'Retail One-Sheets', 'Launch Handouts', 'Campaign Support Kit', 'Partner Leave-Behinds', 'Event Collateral Set']
  },
  {
    slug: 'environment',
    index: '02',
    name: 'Environment',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Spatial and environmental brand expressions across physical touchpoints.',
    metric: 'Tag: environment',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1556.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=environment',
    projects: ['In-Store Brand Wayfinding', 'Pop-Up Space Graphics', 'Trade Show Footprint', 'Office Brand Environment', 'Experiential Build Concept', 'Venue Signage Suite']
  },
  {
    slug: 'holiday',
    index: '03',
    name: 'Holiday',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Seasonal campaigns and timed brand activations.',
    metric: 'Tag: holiday',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1560.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=holiday',
    projects: ['Holiday Campaign Theme', 'Seasonal Gift Packaging', 'Q4 Promo Toolkit', 'Email Countdown Series', 'Retail Window Graphics', 'Limited Edition Launch']
  },
  {
    slug: 'identity',
    index: '04',
    name: 'Identity',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Logo systems, visual language, and foundational brand identity work.',
    metric: 'Tag: identity',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1566.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=identity',
    projects: ['Logo System', 'Brand Mark Refresh', 'Type + Color Standards', 'Identity Guidelines', 'Sub-Brand Architecture', 'Brand Asset Library']
  },
  {
    slug: 'miscellaneous',
    index: '05',
    name: 'Miscellaneous',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Cross-format experimental and special assignment work.',
    metric: 'Tag: miscellaneous',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1557.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=miscellaneous',
    projects: ['Special Assignment Campaign', 'Cross-Channel Concepts', 'Partnership Activation', 'Experimental Brand Piece', 'Prototype Media Asset', 'One-Off Production Work']
  },
  {
    slug: 'new-products',
    index: '06',
    name: 'New Products',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'New product concepts, launch systems, and go-to-market development.',
    metric: 'Tag: new-products',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1565.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=new-products',
    projects: ['New Product Naming', 'Launch Positioning', 'Packaging + Label System', 'Product Page Narrative', 'Retail Sell-In Story', 'Go-To-Market Toolkit']
  },
  {
    slug: 'non-traditional',
    index: '07',
    name: 'Non-Traditional',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Ideas outside standard media formats and expected channels.',
    metric: 'Tag: non-traditional',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1558.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=non-traditional',
    projects: ['Guerrilla Campaign Concept', 'Ambient Media Program', 'Street-Level Activation', 'Experiential Stunt Design', 'Alternative Placement Series', 'Earned Attention Build']
  },
  {
    slug: 'packaging',
    index: '08',
    name: 'Packaging',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Packaging systems built for shelf impact, clarity, and conversion.',
    metric: 'Tag: packaging',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1559.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=packaging',
    projects: ['Primary Pack Design', 'Line Extension System', 'Shelf Impact Refresh', 'DTC Shipping Experience', 'Structural Package Study', 'Label Hierarchy Update']
  },
  {
    slug: 'photography',
    index: '09',
    name: 'Photography',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Photography-led brand storytelling and campaign imagery.',
    metric: 'Tag: photography',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1562.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=photography',
    projects: ['Hero Product Shoot', 'Lifestyle Campaign Set', 'Founder Portrait Series', 'Retail Environment Shoot', 'Editorial Brand Story', 'Social Photo Library']
  },
  {
    slug: 'print',
    index: '10',
    name: 'Print',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Print campaigns and editorial-style communication pieces.',
    metric: 'Tag: print',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1561.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=print',
    projects: ['Print Campaign System', 'Magazine Ad Series', 'Poster Program', 'Direct Mail Package', 'Brochure Suite', 'Publication Inserts']
  },
  {
    slug: 'publications',
    index: '11',
    name: 'Publications',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Long-form publication design and branded editorial systems.',
    metric: 'Tag: publications',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1563.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=publications',
    projects: ['Annual Report Design', 'Brand Journal', 'Thought Leadership Booklet', 'Editorial Layout System', 'Print + Digital Publication', 'Issue Framework']
  },
  {
    slug: 'social-media',
    index: '12',
    name: 'Social Media',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Social content systems aligned to campaign strategy and brand voice.',
    metric: 'Tag: social-media',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1564.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=social-media',
    projects: ['Content Pillar Framework', 'Short-Form Series', 'Launch Teaser Cadence', 'Campaign Social Toolkit', 'Community Engagement Assets', 'Social Art Direction']
  },
  {
    slug: 'video',
    index: '13',
    name: 'Video',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Video-first narratives across campaign, social, and digital placements.',
    metric: 'Tag: video',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1567.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=video',
    projects: ['Brand Anthem Film', 'Product Explainer', 'Campaign Cutdowns', 'Paid Social Video Pack', 'Founder Story Edit', 'Launch Trailer']
  },
  {
    slug: 'web',
    index: '14',
    name: 'Web',
    stage: 'Category',
    focus: 'Portfolio Tag',
    thesis: 'Web experiences, landing systems, and digital brand environments.',
    metric: 'Tag: web',
    note: 'From WORK Labs categories archive.',
    image: 'https://worklabs.com/wp-content/uploads/2020/02/IMG_1570.jpg',
    externalUrl: 'https://worklabs.com/portfolio/?envira-tag=web',
    projects: ['Website Redesign', 'Landing Page System', 'Conversion UX Flow', 'CMS Content Architecture', 'Microsite Launch', 'Ecommerce Experience']
  }
];

export const ventureBySlug = (slug: string) => ventures.find((venture) => venture.slug === slug);
