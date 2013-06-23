/**
* @author Paul Radich
* better_slide_down.js
* betterSlideDown jQuery plugin
*/

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var downDefaults = {
            speed: 900,
            wrapper : 'outer',
        };
    
    var upDefaults = {
            speed: 900,
            wrapper : 'outer',
        };

    
    function slideDown( element, speed ) {
        this.elem = element;
        var options = {};
        options['speed'] = speed;
        this.options = $.extend( {}, downDefaults, options );
		this.selector = element['selector'];
		selector = this.selector.replace('.', '');
		selector = selector.replace('#', '');
        
        
		this.wrapper = 'bs'+'_'+selector+'_'+this.options['wrapper'];
		this.speed = this.options['speed'];
        this.init();
    }
	
	function slideUp( element, speed ) {
        this.elem = element;
        var options = {};
        options['speed'] = speed;
        this.options = $.extend( {}, upDefaults, options );
		this.selector = element['selector'];
		selector = this.selector.replace('.', '');
		selector = selector.replace('#', '');
        
        this.wrapper = 'bs'+'_'+selector+'_'+this.options['wrapper'];
		this.speed = this.options['speed'];
        this.init();
    }
    
    slideDown.prototype = {

        init: function() {
        	
            // set up the wrapper around the element and apply styles 
            var wrapper = this.wrapper;
            var target = $(this.elem);
			var speed = this.speed;
			
			// If the parent wrapper has not been set up do so
			if(!target.parent().hasClass(wrapper)) {
				
				// Set up parent wrapper
	            var newdiv = target.wrap('<div class="'+wrapper+'" />');
				$('.'+wrapper).css({height: 'auto', display:'none', overflow: 'hidden'});
	         	
	         	// Calculate the init height of the target.
	         	// With both elem hidden the height calc does not work
	         	// Currently it shows both elems, calculates the height and hides the wrapper
	         	// ***** There has to be a better way
	         	target.show();
				$('.'+wrapper).show();
				h = target.outerHeight();
				$('.'+wrapper).hide();
				
				//move target to top of wrapper div so it can slide down
				target.css({top:'-'+h+'px'})
			}
			
			// Do it
			this.slide(target, wrapper, speed)
        },

        slide: function(target, wrapper, speed) {
        	
            // Get the height of the elem (performed each time for responsivenes) 
            h = target.outerHeight();
            
            //slide down the outer wrapper an animate the element position
			$('.'+wrapper).slideDown(speed);
			target.animate({top:'0'}, speed)
        }
    };
    
    
    slideUp.prototype = {

        init: function() {
        	
			// Do it
			this.slide($(this.elem),this.wrapper, this.speed)
        },

        slide: function(target, wrapper, speed) {
            // Get the height of the elem (performed each time for responsivenes) 
            h = target.outerHeight();
            
			$('.'+wrapper).slideUp(speed);
			target.animate({top:'-'+h}, speed)
        }
    };
    
    // the slideDown constructor
    $.fn['betterSlideDown'] = function ( options ) {
        new slideDown( this, options );
    };
    
    // the slideUp constructor
    $.fn['betterSlideUp'] = function ( options ) {
        new slideUp( this, options );
    };

})( jQuery, window, document );