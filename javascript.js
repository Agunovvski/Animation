// buttons

var rotateBtn = $('#rotate');

// //  elements
var layer = $('#Layer_1');
var head = $('#HEAD');
var behind = $('#Behind');


// main timeline Rotate
// var tlMain = new TimelineMax({ repeat: -1, paused: true, yoyo: true });

var tlIdle = new TimelineMax({ repeat: -1, paused: false, yoyo: true });

tlIdle.to(head, 1, {
  y: 80
})
.to(behind, 1, {
  y: 20
}, "-=.5")
;


// timelines
function getTimeLine(){

  var tlLayer = new TimelineMax({ repeat: 1, paused: false, yoyo: true });


  tlLayer.to(layer, 2, {
      rotation: -360,
      transformOrigin: 'center',
      ease: Back.easeIn.config(1.7)
    })
    .to(head, 2, {
        rotation: 180,
        transformOrigin: 'center'
      },"-=1");

    return tlLayer;
}



// Eventlisteneres

rotateBtn.addEventListener('click', getTimeLine);




// helper functions
function $(el) {
  return document.querySelector(el);
}
function $$(els) {
  return document.querySelectorAll(els);
}
