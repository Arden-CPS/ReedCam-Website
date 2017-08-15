$(document).ready(function(){
	var generalQuestions = $('.contact-page-menu-items > DIV:nth-child(1)');
	var productInquiry = $('.contact-page-menu-items > DIV:nth-child(2)');
	var becomePartener = $('.contact-page-menu-items > DIV:nth-child(3)');
	var animation_time = 500;
	generalQuestions.hide();
	productInquiry.hide();
	becomePartener.hide();
	$('.contact-page-right-menu UL LI:nth-child(1)').on('click',function(){ 
		productInquiry.hide(animation_time);
		becomePartener.hide(animation_time);
		generalQuestions.show(animation_time);
	});
	$('.contact-page-right-menu UL LI:nth-child(2)').on('click',function(){  
		generalQuestions.hide(animation_time);
		becomePartener.hide(animation_time);
		productInquiry.show(animation_time);
	});
	$('.contact-page-right-menu UL LI:nth-child(3)').on('click',function(){  
		generalQuestions.hide(animation_time);
		productInquiry.hide(animation_time);
		becomePartener.show(animation_time);
	});
});