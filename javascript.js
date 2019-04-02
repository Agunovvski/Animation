// soundManager.setup({
//   url: '../Animatie/',
//   flashVersion: 9, // optional: shiny features (default = 8)
//   // optional: ignore Flash where possible, use 100% HTML5 mode
//   preferFlash: false,
// });


CSSPlugin.useSVGTransformAttr = false;
CSSPlugin.defaultTransformPerspective = 300;

// buttons

var rotateBtn = $('#rotate');
var disappearBtn = $('#disappear');
var flipBtn = $('#flip');

// sounds

var flipSound = new Audio('./assets/card-flip.mp3');
var teleportSound = new Audio('./assets/teleport.wav');
var wooshSound = new Audio('./assets/woosh.wav');
var laughSound = new Audio('./assets/laugh.wav');
var jokerSoundOne = new Audio('./assets/joker1.wav');
var jokerSoundChange = new Audio('./assets/Joker_Change.mp3');
var jokerSoundPlan = new Audio('./assets/Joker_plan.mp3');
var jokerSoundBeautiful = new Audio('./assets/joker_beautiful.mp3');
var jokerSoundCard = new Audio('./assets/Joker_Card.mp3');

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


// Icons elements

var iconOne = $('#Icon_1');
var iconOneRadius = $('#Icon_Radius');
var iconOneCard = $('#Icon_Card');
var iconOneHead = $('#Icon_Head');

var iconTwo = $('#Icon_2');
var iconTwoRadius = $('#Icon_Radius_2');
var iconTwoCardGroup = $('#Icon_Card_Group_2');
var iconTwoCard = $('#Icon_Card_2');
var iconTwoHead = $('#Icon_Head_2');

var iconThree = $('#Icon_3');
var iconThreeRadius = $('#Icon_Radius_3');
var iconThreeHeadBlack = $('#Icon_Head_3');
var iconThreeHeadRed = $('#Icon_Head_3A');



function playSoundOne(){
  flipSound.play();
}

function playSoundTwo(){
  teleportSound.play();
}

function playSoundThree(){
  wooshSound.play();
}

function playSoundFour(){
  laughSound.play();
}

function playSoundJoker(){
  jokerSoundOne.play();
}

function playSoundJokerChange(){
  jokerSoundChange.play();
}

function playSoundJokerPlan(){
  jokerSoundPlan.play();
}

function playSoundJokerBeautiful(){
  jokerSoundBeautiful.play();
}

function playSoundJokerCard(){
  jokerSoundCard.play();
}





// Idle State

var tlIdle = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

tlIdle
.to(head, 1, {
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


// forever timeline
var tlForever = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

tlForever.set(iconTwoCardGroup, {
  rotationX: 30,
  rotation: -30,
  skewX: 20,
  rotationY: 180,
  scale: 1.2,
  transformOrigin: 'center'
})
.set([iconOneHead, iconOneCard], {
  // rotationX: 30,
  rotation: 30,
  // skewX: 20,

  transformOrigin: 'center'
});

// Icon_Radius




// timelines functions

function getTimeLineRotate(){

  var tlLayerRotate = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerRotate
  .set([wholeCard, head], {transformOrigin: 'center'})
  .call(playSoundJoker)
  .to(wholeCard, 2, {
      rotation: -360,
      scale: 8,
      ease: Back.easeIn.config(1.7)
    })
    // .call(playSoundJoker)
    .to(head, 1, {
        scale: .4,
        ease: Back.easeInOut.config(1.7)
      }, "-=2")
    .to(eyes, 1, {
      ease: Circ.easeInOut,
      y: 30,
      repeat: 1,
      yoyo: true
    })
    .to(behind, 1, {
      y: -40,
      ease: Bounce.easeOut,
      repeat: 1,
      yoyo: true
    }, "-=1")
    .call(playSoundJokerBeautiful, this, "-=5")
    .to([wholeCard, head, eyes, behind], 2, {
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
    // .call(playSoundJokerPlan)
    .to(head, .5,{
      opacity: 0,
      x: 600,
      ease: Power2.easeOut,
    })
    .call(playSoundTwo, this, "-=.5")
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
    .call(playSoundThree)
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
        .call(playSoundJokerPlan)
    // .call(playSoundJokerCard, this, "+=2")
    .to(wholeCard, 3, {
      ease: Expo.easeInOut,
      rotationX: 0,
      rotationY: 0,
      rotation: 0,
      skewX: 0,
      scale: 1
    }, "+=2")
    ;

    // flipSound.play();

    return tlLayerFlip;
}

function getTimeLineDisappear(){

  var tlLayerDisappear = new TimelineMax({ repeat: 0, paused: false, yoyo: false });


  tlLayerDisappear

    .set([wholeCard, card], {transformOrigin: "center"})
    .call(playSoundJokerChange)
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


// icons events
function playIconOne(){

  var tlIconOne = new TimelineMax({ repeat: 0, paused: false, yoyo: false });

  tlIconOne
  .to(iconOneRadius, .3, {
    transformOrigin: "center",
    scale: 1.1,
    repeat: 1,
    yoyo: true
  })
  .to([iconOneCard, iconOneHead], 1, {
    rotation: 180,
    scale: 1.5,
    transformOrigin: 'center',
    ease: Power1.easeOut,
    repeat: 1,
    yoyo: true
  }, "-=1");
  return tlIconOne;
}



function playIconTwo(){

  var tlIconTwo = new TimelineMax({ repeat: 0, paused: false, yoyo: false });

  tlIconTwo
  .to(iconTwoRadius, .3, {
    transformOrigin: "center",
    scale: 1.1,
    repeat: 1,
    yoyo: true
  })
  .to(iconTwoHead, 1, {
    ease: Power2.easeInOut,
    opacity: 0,
    repeat: 1,
    yoyo: true
  }, "-=1");
  return tlIconTwo;
}


function playIconThree(){

  var tlIconThree = new TimelineMax({ repeat: 0, paused: false, yoyo: false });

  tlIconThree
  .to(iconThreeRadius, .3, {
    transformOrigin: "center",
    scale: 1.1,
    repeat: 1,
    yoyo: true
  })
  .to(iconThreeHeadRed, 1, {
    ease: Expo.easeInOut,
    x: 200,
    scale: 1.1,
    repeat: 1,
    yoyo: true
  }, "-=1")
  .to(iconThreeHeadBlack, 1, {
    ease: Expo.easeInOut,
    x: -200,
    scale: 1.1,
    repeat: 1,
    yoyo: true
  }, "-=2");
  return tlIconThree;
}



// Eventlisteneres

iconOne.addEventListener('click', getTimeLineRotate);
iconOne.addEventListener('click', playIconOne);
iconTwo.addEventListener('click', getTimeLineFlip);
iconTwo.addEventListener('click', playIconTwo);
iconThree.addEventListener('click', getTimeLineDisappear);
iconThree.addEventListener('click', playIconThree);




// helper functions
function $(el) {
  return document.querySelector(el);
}
function $$(els) {
  return document.querySelectorAll(els);
}
