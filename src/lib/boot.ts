import { initLenis } from './lenis';
import { initSwup } from './swup';
import { enterPage } from './motion/transitions';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function boot() {
  if (!reducedMotion) initLenis();
  await enterPage(document);
  await initSwup();
}

boot();
