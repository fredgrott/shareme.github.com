/*
   Part of Fred Grott's Github Pages site,
   Copyright 2017 by Fred Grott, all rights reserved
   @fredgrott
   fred.grott@gmail.com
   gv: 1-219-448-5844

   v0.0.1
*/

          /* initialize bootstrap material design */
	       $('body').bootstrapMaterialDesign();





				 /* tooltip initialization,
					 you will use them both ways so I initialize both ways...

					 function searches for intances in DOM tree of the data-toggle
					 or rel set to tooltip and initializes tooltip on those elements.

					 Note: By default BS and BSM set tooltips to off black-grey and the
								 browser defaults to white background, so if its a white
								 background than you do not have BS tooltips initialized.

					 */
				$(function () {
					 $('[data-toggle="tooltip"]').tooltip();
					 $('[rel="tooltip"]').tooltip();
					})

				 /* tooltips adding an extra class as than we can do
						special tooltips besides the ones provided

						means now you can specify a data-custom-class specifying
						your special css tooltip class on elements that
						are tooltip enabled.
						*/
						if (typeof $.fn.tooltip.Constructor === 'undefined') {
								 throw new Error('Bootstrap Tooltip must be included first!');
						}

							var Tooltip = $.fn.tooltip.Constructor;

						// add customClass option to Bootstrap Tooltip
						 $.extend( Tooltip.Default, {
									 customClass: ''
					 });

					var _show = Tooltip.prototype.show;

					 Tooltip.prototype.show = function () {

							// invoke parent method
						_show.apply(this,Array.prototype.slice.apply(arguments));

					 if ( this.config.customClass ) {
							 var tip = this.getTipElement();
							$(tip).addClass(this.config.customClass);
						}

				 };




					 /* parallax */
					$('parallax').animate({scrollTop: 70});

					var transparent = true;



						/* navbar color change,

               using BS JS api to fix it so that
							 on mobile the menu overlay gets dark
							 and when collapsed goes back to transparent.


						 */



						$(window).scroll(function(){

                  if ($(window).scrollTop() <= 70) {
										if( !transparent ) {
			                           transparent = true;
			                     $('.navbar').addClass('navbar-transparent');
	                                }


                  } else {


																	if(transparent) {
												             transparent = false;
												                   $('.navbar').removeClass('navbar-transparent');

							                     }

                   }

             });
						 /* for the mobile toggler on mobile so that we have a dark
						    overlay when menu is not collapsed */
						 $('#navbarSupportedContent').on('shown.bs.collapse', function (e) {
							 if(transparent) {
									transparent = false;
												$('.navbar').removeClass('navbar-transparent');

								}

						 });
						 /* Need to check two conditions here:
                   not transparent ANd equal or below scroll of 70 as than
									 we should be adding the transparent class back otherwise not
						 */
						 $('#navbarSupportedContent').on('hidden.bs.collapse', function (e) {
							 if( !transparent && $(window).scrollTop() <= 70) {
														transparent = true;
											$('.navbar').addClass('navbar-transparent');
														 }


						 });
