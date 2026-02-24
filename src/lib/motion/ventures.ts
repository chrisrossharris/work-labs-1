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

  const toggles = Array.from(scope.querySelectorAll<HTMLButtonElement>('[data-view-toggle]'));
  if (!toggles.length) return;
  if (toggles[0]?.dataset.bound === 'true') return;

  const setView = async (view: 'list' | 'grid') => {
    await flipLayout(wrap, () => {
      wrap.classList.toggle('grid-mode', view === 'grid');
      toggles.forEach((toggle) => {
        const active = toggle.dataset.viewToggle === view;
        toggle.classList.toggle('is-active', active);
        toggle.setAttribute('aria-pressed', String(active));
      });
    });
    ScrollTrigger.refresh();
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', async () => {
      const view = toggle.dataset.viewToggle === 'grid' ? 'grid' : 'list';
      await setView(view);
    });
    toggle.dataset.bound = 'true';
  });
}

export function killVenturesTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
