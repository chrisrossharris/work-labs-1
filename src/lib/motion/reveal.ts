import gsap from 'gsap';

let splitTextReady = false;
let SplitTextCtor: any;

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function getSplitText() {
  if (SplitTextCtor) return SplitTextCtor;
  try {
    const module = await import('gsap/SplitText');
    SplitTextCtor = module.SplitText;
    gsap.registerPlugin(SplitTextCtor);
    splitTextReady = true;
  } catch {
    splitTextReady = false;
  }
  return SplitTextCtor;
}

function fallbackReveal(elements: HTMLElement[]) {
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, yPercent: 8 },
      { autoAlpha: 1, yPercent: 0, duration: 0.55, ease: 'power2.out' }
    );
  });
}

export async function runReveals(scope: ParentNode = document) {
  const targets = Array.from(scope.querySelectorAll<HTMLElement>('.reveal-text'));
  if (!targets.length || reducedMotion()) {
    targets.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const SplitText = await getSplitText();
  if (!SplitText || !splitTextReady) {
    fallbackReveal(targets);
    return;
  }

  targets.forEach((target) => {
    const isTitle = target.dataset.reveal === 'title';
    const mode = isTitle ? 'chars' : 'lines';
    const split = SplitText.create(target, {
      type: isTitle ? 'words,chars' : 'lines',
      wordsClass: 'reveal-word',
      linesClass: 'reveal-line',
      charsClass: 'reveal-char',
      autoSplit: true,
      onSplit(self: any) {
        const units = mode === 'chars' ? self.chars : self.lines;
        gsap.set(units, { willChange: 'transform,opacity' });
        return gsap.fromTo(
          units,
          { yPercent: 100, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            stagger: mode === 'chars' ? 0.012 : 0.06,
            duration: 0.65,
            ease: 'power3.out'
          }
        );
      }
    });

    target.dataset.splitInstance = split?.id ?? '';
  });
}

export function clearReveals(scope: ParentNode = document) {
  const targets = Array.from(scope.querySelectorAll<HTMLElement>('.reveal-text'));
  targets.forEach((target) => {
    gsap.killTweensOf(target);
  });
}
