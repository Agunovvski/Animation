CSSPlugin.useSVGTransformAttr = false;

// buttons

var rotateBtn = $('#rotate');
var disappearBtn = $('#disappear');

// //  elements
var layer = $('#Layer_1');
var wholeCard = $('#Whole_Card');
var head = $('#HEAD');
var behind = $('#Behind');
var jokerTop = $('#Joker_1');
var jokerBottom = $('#Joker_2');
var mouth = $('#Mouth');
var eyes = $('#Eyes');
var shadow = $('#Shadow');




// Idle State

var tlIdle = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

tlIdle.to(head, 1, {
  y: 80
})
.to(behind, 1, {
  y: 20
}, "-=.5")
.fromTo(jokerTop, 1,
  {transformOrigin: 'center bottom'},
  {rotationY: -180}, "-=.5")
.fromTo(jokerBottom, 1,
  {transformOrigin: 'center top'},
  {rotationY: -180}, "-=1")
;


// timelines functions

function getTimeLineRotate(){

  var tlLayerRotate = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerRotate
  .set(shadow, {transformOrigin:"center bottom"})
  .to(wholeCard, 2, {
      rotation: -360,
      y: -200,
      scale: .25,
      repeat: 1,
      yoyo: true,
      transformOrigin: 'center',
      ease: Back.easeIn.config(1.7)
    }, "+=.5")
    .to(shadow, 1, {
      scale: .5,
      yoyo: true,
      repeat: 1,
      ease: Back.easeIn.config(1.7)
    }, "-=3.5")
    .to(mouth, 1, {
        // rotation: 180,
        // attr:{}
        yoyo: true,
        repeat: 1,
        ease: Bounce.easeOut, y: -180
      });

    return tlLayerRotate;
}

function getTimeLineDisappear(){

  var tlLayerDisappear = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerDisappear
    .fromTo(wholeCard, 1, {xPercent:0, transformOrigin: 'center bottom', ease: Power1.easeIn}, {xPercent: 50, transformOrigin: 'left bottom'})
    .fromTo(wholeCard, 1, {rotation:0}, {rotation: -10})
    .fromTo(wholeCard, 1, {scale: 1}, {scale: .9}, "-=1")
    .to(wholeCard, 2, {
      ease: Back.easeIn.config(1.7),
      // transformOrigin: 'center bottom',
      rotationY: 180,
      repeat: 1,
      yoyo: true
    })
    .fromTo(wholeCard, 1, {skewX: 0}, {skewX: 5}, "-=2")
    .to(head, 1,{
      opacity: 0,
      ease: Power1.easeOut,
    }, "-=2")
    .to(head, 1,{
      yPercent: 100,
      ease: Power1.easeOut
    })
    .to(head, 1 ,{
      yPercent: 0,
      opacity: 100,
      ease: Power2.easeInOut
    })
    .fromTo([head, jokerTop, jokerBottom], .3 ,{x:0}, {x: 800})
    .to([head, jokerTop, jokerBottom], 1, {x:0},"+=2")
    .to(wholeCard, 1, {skewX: 0, rotation: 0, scale: 1, xPercent:0})
    ;

    return tlLayerDisappear;
}



// Eventlisteneres

rotateBtn.addEventListener('click', getTimeLineRotate);
disappearBtn.addEventListener('click', getTimeLineDisappear);




// helper functions
function $(el) {
  return document.querySelector(el);
}
function $$(els) {
  return document.querySelectorAll(els);
}
