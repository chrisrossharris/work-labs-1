import gsap from 'gsap';
import { clearReveals, runReveals } from './reveal';
import { initVenturesPage, killVenturesTriggers } from './ventures';
import { registerFlipSources, runStoredFlip } from './flip';

export async function enterPage(scope: ParentNode = document) {
  registerFlipSources(scope);
  initVenturesPage(scope);
  await runReveals(scope);
  await runStoredFlip(scope);
}

export function leavePage(scope: ParentNode = document) {
  killVenturesTriggers();
  clearReveals(scope);
  gsap.killTweensOf('*');
}
