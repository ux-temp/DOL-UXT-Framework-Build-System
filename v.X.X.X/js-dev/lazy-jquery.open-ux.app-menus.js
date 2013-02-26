(function($){
	
	// Create the plugin
	$.fn.appMenu = function(options) {

		return this.each(function(i) {

			var menu = $(this);

			// Check to see if the item has a sub menu to display.
			if (menu.next('div:first').length) {

				var subMenu = menu.next('div:first');

				// Bind the click event the menu items
				menu.on("click", function(e) {

					// Prevent default action.
					e.preventDefault();

					// Disable any possible click throught
					e.stopPropagation();

					// Check to see if the side menu is open if its, close it
					if ($('#ux-side-nav-toggle.active').length > 0) {
						$('#ux-side-nav-toggle.active').removeClass('active').next('div').hide();
					}

					// Check to see if the clicked link is already open
					if (menu.hasClass('selected')) {
						
						// Drop sub-menu down
						menu.removeClass("selected");

						// Hide the sub-menu
						subMenu.hide();

						// Check to see if any there is still a submenu open
						if (!$('#ux-domain-menu a.selected').length) {
						
							// Remove the html click event as there are no open menus
							$(document).off('click');
							$(document).off('keyup');
						}

					} else {


						// Check to see if this link is a child of a selected menu (LEVEL 2 menus)
						if (menu.closest('nav').length) {

							// Save of menu parent
							var parent = menu.closest('nav');

							if (parent.find('a.selected').length > 0) {

								// The item selected is not part of the same aactive menu path, remove all selected links
								parent.find('a.selected').removeClass('selected').next('div').hide();
							}

						}
						
						// Add the active menu class
						menu.addClass("selected");

						subMenu.show();

						// Unbind any possible html click 
						$(document).on("click", function() {

							// Find a remove any open item
							$('#ux-domain-menu a.selected').removeClass('selected').next('div').hide();

							// Unbind this html click now that the item has been removed.
							$(this).off('click');
							$(this).off('keyup');
							
						});	

						// bind keyup event 
						document.onkeyup = function(evt) {
                			evt = evt || window.event;

                			if (evt.keyCode == 27) {

                				// Find the last active menu item and hide the submenu, then refocus on this a tag.
                				$('#ux-domain-menu a.selected').slice(-1).removeClass('selected').next('div:first').hide().focus();

                			}

            			};

					}



				});

			}

		});

	}

})( jQuery );