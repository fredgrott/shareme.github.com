/*  Fred Grott

    1.1.1

    0 es5-es6 adjsutment
    1 BSM initialization



*/

/* 0 es5-es6 adjustment */
'use strict';

/* ! BSM initialization */
$( document ).ready(function() {
  $('body').bootstrapMaterialDesign();
  /* preload css class applied to body until page load to prevent premature triggering of transitions */
  $("body").removeClass("preload");


});
