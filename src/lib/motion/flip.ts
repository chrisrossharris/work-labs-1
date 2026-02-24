import gsap from 'gsap';

let FlipPlugin: any;

async function getFlip() {
  if (FlipPlugin) return FlipPlugin;
  try {
    const module = await import('gsap/Flip');
    FlipPlugin = module.Flip;
    gsap.registerPlugin(FlipPlugin);
  } catch {
    FlipPlugin = null;
  }
  return FlipPlugin;
}

const FLIP_KEY = 'work-flip-source';

type StoredFlip = {
  key: string;
  rect: DOMRect;
  text: string;
};

function readStored(): StoredFlip | null {
  const raw = sessionStorage.getItem(FLIP_KEY);
  if (!raw) return null;
  sessionStorage.removeItem(FLIP_KEY);
  try {
    return JSON.parse(raw) as StoredFlip;
  } catch {
    return null;
  }
}

export function registerFlipSources(scope: ParentNode = document) {
  const sources = scope.querySelectorAll<HTMLElement>('[data-flip-source]');
  sources.forEach((source) => {
    source.addEventListener('click', () => {
      const key = source.dataset.flipSource;
      if (!key) return;
      const payload: StoredFlip = {
        key,
        rect: source.getBoundingClientRect().toJSON() as DOMRect,
        text: source.textContent?.trim() ?? ''
      };
      sessionStorage.setItem(FLIP_KEY, JSON.stringify(payload));
    });
  });
}

export async function runStoredFlip(scope: ParentNode = document) {
  const stored = readStored();
  if (!stored) return;

  const target = scope.querySelector<HTMLElement>(`[data-flip-key="${stored.key}"]`);
  if (!target) return;

  const Flip = await getFlip();
  if (!Flip) {
    gsap.fromTo(target, { autoAlpha: 0, yPercent: 10 }, { autoAlpha: 1, yPercent: 0, duration: 0.4 });
    return;
  }

  const ghost = document.createElement('span');
  ghost.textContent = stored.text;
  ghost.style.position = 'fixed';
  ghost.style.left = `${stored.rect.x}px`;
  ghost.style.top = `${stored.rect.y}px`;
  ghost.style.width = `${stored.rect.width}px`;
  ghost.style.height = `${stored.rect.height}px`;
  ghost.style.margin = '0';
  ghost.style.display = 'inline-flex';
  ghost.style.alignItems = 'center';
  ghost.style.zIndex = '200';
  ghost.style.pointerEvents = 'none';
  ghost.style.font = getComputedStyle(target).font;
  ghost.style.letterSpacing = getComputedStyle(target).letterSpacing;
  ghost.style.textTransform = getComputedStyle(target).textTransform;
  document.body.appendChild(ghost);

  const state = Flip.getState([ghost, target]);
  target.style.opacity = '1';

  Flip.from(state, {
    targets: target,
    absolute: true,
    duration: 0.62,
    ease: 'power2.inOut',
    onComplete: () => ghost.remove()
  });
}

export async function flipLayout(container: HTMLElement, mutator: () => void) {
  const Flip = await getFlip();
  if (!Flip) {
    mutator();
    return;
  }

  const state = Flip.getState(container.querySelectorAll('.venture-card'));
  mutator();
  Flip.from(state, {
    absolute: false,
    duration: 0.55,
    stagger: 0.02,
    ease: 'power2.inOut'
  });
}
