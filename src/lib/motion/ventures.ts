import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { flipLayout, registerFlipSources } from './flip';

gsap.registerPlugin(ScrollTrigger);

export function initVenturesPage(scope: ParentNode = document) {
  registerFlipSources(scope);

  const wrap = scope.querySelector<HTMLElement>('[data-ventures-wrap]');
  if (!wrap) return;

  const cards = Array.from(wrap.querySelectorAll<HTMLElement>('.venture-card'));
  if (!cards.length) return;

  cards.forEach((card) => {
    gsap.set(card, { scale: 0.92, transformOrigin: 'center center' });
    ScrollTrigger.create({
      trigger: card,
      start: 'top 70%',
      end: 'bottom 35%',
      onEnter: () => gsap.to(card, { scale: 1, duration: 0.45, ease: 'power2.out' }),
      onEnterBack: () => gsap.to(card, { scale: 1, duration: 0.45, ease: 'power2.out' }),
      onLeave: () => gsap.to(card, { scale: 0.92, duration: 0.4, ease: 'power2.inOut' }),
      onLeaveBack: () => gsap.to(card, { scale: 0.92, duration: 0.4, ease: 'power2.inOut' })
    });
  });

  const button = scope.querySelector<HTMLButtonElement>('[data-grid-toggle]');
  if (!button) return;
  if (button.dataset.bound === 'true') return;

  button.addEventListener('click', async () => {
    await flipLayout(wrap, () => {
      wrap.classList.toggle('grid-mode');
      button.textContent = wrap.classList.contains('grid-mode') ? 'View Vertical' : 'View Grid';
    });
    ScrollTrigger.refresh();
  });

  button.dataset.bound = 'true';
}

export function killVenturesTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
