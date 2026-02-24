export type Venture = {
  slug: string;
  index: string;
  name: string;
  stage: string;
  focus: string;
  thesis: string;
  metric: string;
  note: string;
};

export const ventures: Venture[] = [
  {
    slug: 'atlas-cpg',
    index: '01',
    name: 'Atlas CPG',
    stage: 'Validation',
    focus: 'D2C Infrastructure',
    thesis: 'Turn underpriced creative IP into owned commerce systems.',
    metric: 'Target: 18-month payback',
    note: 'Built for repeatable SKU launches and royalty participation.'
  },
  {
    slug: 'signal-health',
    index: '02',
    name: 'Signal Health',
    stage: 'Build',
    focus: 'Health Communication',
    thesis: 'Translate complex care pathways into high-adoption user products.',
    metric: 'Target: +35% activation',
    note: 'Execution network combines product, media, and clinical advisors.'
  },
  {
    slug: 'northline-studio',
    index: '03',
    name: 'Northline Studio',
    stage: 'Scale',
    focus: 'Brand Systems',
    thesis: 'Brand engineering as a valuation multiplier for service firms.',
    metric: 'Target: 3x pipeline velocity',
    note: 'Hybrid retainer + equity structure tied to defined milestones.'
  },
  {
    slug: 'forge-learning',
    index: '04',
    name: 'Forge Learning',
    stage: 'Discover',
    focus: 'Applied Education',
    thesis: 'Bundle curriculum, tooling, and operator coaching into one asset.',
    metric: 'Target: 65% completion',
    note: 'Workshops convert into recurring memberships and licensing.'
  }
];

export const ventureBySlug = (slug: string) => ventures.find((venture) => venture.slug === slug);
