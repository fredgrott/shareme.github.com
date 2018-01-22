/*  Fred Grott

    0.0.1

    0 es5-es6 adjsutment
    1 BSM initialization

*/

/* 0 es5-es6 adjustment */
'use strict';

/* ! BSM initialization */
$( document ).ready(function() {
  $('body').bootstrapMaterialDesign();


});
$('.meanimation').textillate({
  initialDelay: 100,
  loop: false,
  in: {
    effect: 'fadeInUp',
    delayScale: .4,
    delay: 56,
    sync: false,
    shuffle: true,
    reverse: true
  },
  type: 'word'
});
