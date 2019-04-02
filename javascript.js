CSSPlugin.useSVGTransformAttr = false;
CSSPlugin.defaultTransformPerspective = 300;

// buttons

var rotateBtn = $('#rotate');
var disappearBtn = $('#disappear');
var flipBtn = $('#flip');

// sounds

var flipSound = new Audio('./assets/card-flip.mp3');

// //  elements
var layer = $('#Layer_1');
var wholeCard = $('#Whole_Card');
var card = $('#Card');
var head = $('#HEAD');
var headTwo = $('#HEAD_2');
var behind = $('#Behind');
var jokerTop = $('#Joker_1');
var jokerBottom = $('#Joker_2');
var mouth = $('#Mouth');
var eyes = $('#Eyes');




// Idle State

var tlIdle = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

tlIdle.to(head, 1, {
  y: 80
})
.to(behind, 1, {
  y: 20
}, "-=.75")
.fromTo(jokerTop, 1,
  {transformOrigin: 'center bottom'},
  {rotationY: -180}, "-=1.75")
.fromTo(jokerBottom, 1,
  {transformOrigin: 'center top'},
  {rotationY: -180}, "-=2")
;


// timelines functions

function getTimeLineRotate(){

  var tlLayerRotate = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerRotate
  .set([wholeCard, head], {transformOrigin: 'center'})
  .to(wholeCard, 2, {
      rotation: -360,
      scale: 8,
      ease: Back.easeIn.config(1.7)
    })
    .to(head, 1, {
        scale: .4,
        ease: Back.easeInOut.config(1.7)
      }, "-=2")
    .to([wholeCard, head], 2, {
      scale: 1,
      rotation: 0
    }, "+=3")
      ;

    return tlLayerRotate;
}



function getTimeLineFlip(){

  var tlLayerFlip = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerFlip
    .set([wholeCard, head], {transformOrigin: 'center'})
    .to(head, .5,{
      opacity: 0,
      x: 600,
      ease: Power2.easeOut,
    })
    .to([ jokerTop, jokerBottom ], .5,{
      opacity: 0,
      x: 600,
      ease: Power2.easeOut,
    }, "-=.2")
    .to(wholeCard, 2, {
      ease: Expo.easeInOut,
      rotationX: 30,
      rotation: -30,
      skewX: 20,
      rotationY: 180,
      scale: 1.5
    })
    .to(head, 1,{
      opacity: 100,
      x: 0,
      ease: Power2.easeIn,
    })
    .to([ jokerTop, jokerBottom ], 1,{
      opacity: 100,
      x: 0,
      ease: Power2.easeIn,
    }, "-=.75")
    .to(wholeCard, 3, {
      ease: Expo.easeInOut,
      rotationX: 0,
      rotationY: 0,
      rotation: 0,
      skewX: 0,
      scale: 1
    }, "+=2")
    ;

      flipSound.play();

    return tlLayerFlip;
}

function getTimeLineDisappear(){

  var tlLayerDisappear = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerDisappear

    .set([wholeCard, card], {transformOrigin: "center"})
    .to(card, 2, {scale: 10, ease: Sine.easeInOut, rotation: 180})
    .to(head, 2, {
        rotation: 360,
        transformOrigin: 'center',
        y: 400,
        scale: .8,
        yoyo: true,
        repeat: 1,
        ease: Back.easeInOut.config(1.7)
      }, "-=1")
      .to(headTwo, 2, {
        rotation: -180,
        transformOrigin: 'center',
        opacity: 100,
        scale: .8,
        y: -400,
        yoyo: true,
        repeat: 1,
        ease: Back.easeInOut.config(1.7)
      }, "-=4")
      .to(card, 2, {scale: 1,y: 0, ease: Power1.easeInOut, rotation: 0}, "-=1.5")
    ;


    return tlLayerDisappear;
}



// Eventlisteneres

rotateBtn.addEventListener('click', getTimeLineRotate);
disappearBtn.addEventListener('click', getTimeLineDisappear);
flipBtn.addEventListener('click', getTimeLineFlip);




// helper functions
function $(el) {
  return document.querySelector(el);
}
function $$(els) {
  return document.querySelectorAll(els);
}
