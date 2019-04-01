CSSPlugin.useSVGTransformAttr = false;

// buttons

var rotateBtn = $('#rotate');
var disappearBtn = $('#disappear');
var flipBtn = $('#flip')

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
// var shadow = $('#Shadow');




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
  .to(wholeCard, 2, {
      rotation: -360,
      y: -200,
      scale: .25,
      repeat: 1,
      yoyo: true,
      transformOrigin: 'left center',
      ease: Back.easeIn.config(1.7)
    })
    .to(head, 1, {
        rotation: 360,
        transformOrigin: 'center',
        yoyo: true,
        repeat: 1,
        ease: Back.easeInOut.config(1.7)
      }, "-=3")
      ;

    return tlLayerRotate;
}

function getTimeLineDisappear(){

  var tlLayerDisappear = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerDisappear
    // .to(wholeCard, 2, {
    //   ease: Back.easeIn.config(1.7),
    //   transformOrigin: 'center',
    //   rotationY: 180,
    //   repeat: 1,
    //   yoyo: true,
    //   // skewX: 5,
    //   perspective: 200
    // })
    // .to(head, 1,{
    //   opacity: 0,
    //   ease: Power1.easeOut,
    // }, "-=2")
    // .to(head, 1,{
    //   yPercent: 100,
    //   ease: Power1.easeOut
    // })
    // .to(head, 1 ,{
    //   yPercent: 0,
    //   opacity: 100,
    //   ease: Power2.easeInOut
    // })
    // .fromTo([head, jokerTop, jokerBottom], .3 ,{x:0}, {x: 800})
    // .to([head, jokerTop, jokerBottom], 1, {x:0},"+=2")
    // .to(wholeCard, 1, {skewX: 0, rotation: 0, scale: 1, xPercent:0})


    // .set(wholeCard, {transformPerspective: 300, transformOrigin: "left 50% -100px"})
    // .fromTo(wholeCard, 2, {rotationY: 0}, {rotationY: 360}, "+=1")
    // .to(wholeCard, 2, {rotationY: 0})
    .set([wholeCard, card], {transformOrigin: "center"})
    .to(card, 2, {scale: 10, ease: Power1.easeOut, rotation: 180})
    .to(head, 2, {
        rotation: 360,
        transformOrigin: 'center',
        y: 400,
        scale: .8,
        yoyo: true,
        repeat: 1,
        ease: Back.easeInOut.config(1.7)
      }, "-=1.5")
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


function getTimeLineFlip(){

  var tlLayerFlip = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerFlip
    .to(wholeCard, 2, {
      ease: Expo.easeInOut,
      transformOrigin: 'center',
      rotationX: 30,
      rotation: -30,
      skewX: 20,
      rotationY: 180
    })
    // .to(wholeCard, 1, {rotationY: 180})
    .to(head, 1,{
      opacity: 0,
      ease: Power4.easeOut,
    }, "-=1.2")
    .to(wholeCard, 3, {
      ease: Expo.easeInOut,
      rotationX: 0,
      rotationY: 0,
      rotation: 0,
      skewX: 0
    })
    .to(head, 1, {
      ease: Power4.easeIn,
      opacity:100
    }, "-=1.75")
    ;

      flipSound.play();

    return tlLayerFlip;
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
