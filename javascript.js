// timelines
var tlAtomen = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

// //  elements
var atomen = $('#Atomen');

tlAtomen.to(atomen, 2, {
    rotation: 120,
    scale: 2.5,
    transformOrigin: 'center'
  });

// MorphSVGPlugin.convertToPath('ellipse');

// tlAtomen.to('#Sterren36', 2, {morphSVG: '#Sterren5', ease: Bounce.easeOut });

// helper functions
function $(el) {
  return document.querySelector(el);
}
function $$(els) {
  return document.querySelectorAll(els);
}
