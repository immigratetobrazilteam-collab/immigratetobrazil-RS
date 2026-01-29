/** RS JS - Porto Alegre - Earthy-grounded with warm brown tones */
const STATE_CONFIG = {
  stateCode: 'rs',
  capital: 'Porto Alegre',
  formspreeUrl: 'https://formspree.io/f/xrsqbddb',
  colors: { primary: '#8b4513', secondary: '#d2691e', accent: '#cd853f' },
  animations: {"enabled": true, "header": {"type": "gauchoSlide", "duration": "0.6s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "pampasReveal", "duration": "1s", "easing": "ease-in-out", "stagger": "0.15s"}, "hero": {"type": "plainsParallax", "speed": 0.6, "direction": "horizontal"}, "cards": {"type": "traditionalLift", "cultural": true, "proud": true}, "images": {"type": "wineReveal", "rich": true, "duration": "1.1s"}},
  interactions: {"hover": "gaucho-rise", "scroll": "pampas-ride", "transitions": "traditional-ease", "click": "chimarrao-pour"},
  premiumEffects: ["pampas-gradient", "wind-motion", "vineyard-glow", "cultural-patterns"]
};

const SECTIONS = ["rs-index-section--map", "rs-index-section-frequently-asked-questions-about-living-in-", "rs-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
