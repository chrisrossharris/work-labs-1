import Swup from 'swup';
import { enterPage, leavePage } from './motion/transitions';

let swupInstance: Swup | null = null;

export async function initSwup() {
  if (swupInstance) return swupInstance;

  swupInstance = new Swup({
    containers: ['#swup'],
    linkSelector: 'a[data-transition-link]'
  });

  swupInstance.hooks.on('visit:start', () => leavePage(document));
  swupInstance.hooks.on('page:view', async () => {
    await enterPage(document);
  });

  return swupInstance;
}
