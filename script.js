// ==========================================================
// Rotating "slot machine" line on the home page
// ==========================================================

// How long each phrase stays up, in seconds
const SECONDS_PER_PHRASE = 5;

(function () {
  const reel = document.getElementById('reel');
  if (!reel) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Copy the first phrase onto the end so the loop rolls forward seamlessly
  const items = reel.children.length;
  reel.appendChild(reel.children[0].cloneNode(true));

  const lineHeight = () => reel.children[0].getBoundingClientRect().height;
  let index = 0;

  function move(animate) {
    reel.style.transition = animate ? '' : 'none';
    reel.style.transform = `translateY(-${index * lineHeight()}px)`;
  }

  function next() {
    index += 1;
    move(!reduceMotion);

    // After landing on the copied first phrase, jump back to the real one invisibly
    if (index === items) {
      setTimeout(() => {
        index = 0;
        move(false);
      }, reduceMotion ? 0 : 750);
    }
  }

  let timer = setInterval(next, SECONDS_PER_PHRASE * 1000);

  // Pause while the tab is hidden so it doesn't spin wildly when you come back
  document.addEventListener('visibilitychange', () => {
    clearInterval(timer);
    if (!document.hidden) timer = setInterval(next, SECONDS_PER_PHRASE * 1000);
  });

  // Keep the position right if the window is resized (line height can change)
  window.addEventListener('resize', () => move(false));
})();
