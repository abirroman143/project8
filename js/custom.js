jQuery(document).ready(function(){
	
	jQuery(".owl-carousel").owlCarousel({
		
		
		'autoplay':true,
		'autoplayTimeout':2000,
		'autoplayHoverPause':true,
		'loop':true,
		'items':1,
		'nav':true,
		'responsiveClass':true,
		'responsive':{
			
			0:{
				
				'items':1,
				'nav':true,
				'loop':false
			},
			768:{
				
				'items':1,
				'nav':true,
				'loop':true
			},
			1000:{
				
				'items':1,
				'nav':true,
				'loop':true
			}
		}
	
	});
	
	jQuery(window).scroll(function(){
		
		var utd = jQuery(window).scrollTop();
		
		if(utd >55){
			
			jQuery(".header-middle").addClass("fixed");
		
		}
		
		else{
			
			jQuery(".header-middle").removeClass("fixed");
		}
		
		
	});
	
	jQuery(".scrollup").click(function(){
		
		jQuery("html").animate({'scrollTop':'0'},1000);

	});
	
	var availableTags =['roman','abir','akash','java'];
	
	jQuery("#search").autocomplete({
		
		'source':availableTags
	
	});
	
	
	jQuery(".bxslider").bxSlider({
		
		'auto':true,
		'autoControls':true,
		'captions':true,
	
	});

	jQuery(".tabs").tabs();
	
	
	jQuery(".navbarr").click(function(){
		
		jQuery(".header-menu ul").slideToggle();
		
		
	});
	
	jQuery(window).resize(function(){
		
		
		var screensize = jQuery(window).width();
		
		if(screensize>768){
			
			jQuery(".header-menu ul").removeAttr("style");
		}
		
	});

});


	new WOW().init();
