export interface WorkPage {
  slug: string;
  index: string;
  label: string;
  title: string;
  summary: string;
  outcome: string;
  bullets: string[];
}

export const workPages: WorkPage[] = [
  {
    slug: 'experience-reputation',
    index: '01',
    label: 'Experience + Reputation',
    title: 'Decades of Trusted Execution',
    summary:
      'WORK Labs has operated since 1994 across agency and direct-client engagements, delivering high-stakes brand and launch work with senior oversight.',
    outcome: 'Lower risk on complex projects with faster confidence in decision quality.',
    bullets: [
      'Cross-category brand, product, and campaign execution.',
      'Senior-level decision making from kickoff through launch.',
      'Consistent standards across strategy, design, and production.'
    ]
  },
  {
    slug: 'streamlined-process',
    index: '02',
    label: 'Streamlined Process',
    title: 'A Tight System From Brief to Delivery',
    summary:
      'The workflow is intentionally lean: Discover, Define, Design, Develop, Deploy, Measure, Refine. No unnecessary layers or delay points.',
    outcome: 'More shipped work, fewer handoff failures, and clearer accountability.',
    bullets: [
      'Clear scope gates and milestone reviews.',
      'Fast feedback loops with concise working sessions.',
      'Execution-first planning tied to measurable outcomes.'
    ]
  },
  {
    slug: 'flexible-team',
    index: '03',
    label: 'Flexibility',
    title: 'Core Studio + Best-of-Class Associates',
    summary:
      'WORK Labs leads from the center and activates specialist associates only when needed, matching capability to scope without overhead inflation.',
    outcome: 'Senior depth when required, lean cost structure at all times.',
    bullets: [
      'Core leadership continuity across every engagement.',
      'Specialized experts added by project need, not by template.',
      'Scalable staffing for launches, campaigns, and sustained support.'
    ]
  },
  {
    slug: 'execution-services',
    index: '04',
    label: 'Execution Services',
    title: 'Modernized Delivery Across Brand and Build',
    summary:
      'WORK Labs integrates brand systems, web and content production, launch operations, and fractional leadership into one coordinated execution arm.',
    outcome: 'One accountable partner across strategy-to-market delivery.',
    bullets: [
      'Brand systems, messaging, and identity implementation.',
      'Web, content, and production rollout management.',
      'Fractional creative and brand leadership during critical stages.'
    ]
  }
];

export const workPageBySlug = (slug: string) => workPages.find((item) => item.slug === slug);
