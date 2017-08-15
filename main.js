function changeButtonColor(buttonID){
	var selected_button = document.getElementById(buttonID);
	selected_button.style.color = "black";
	selected_button.style.background = "white";
}

$(document).ready(function(){
	var title = $('title').text();
	switch(title){
		case "About Us": changeButtonColor('about_button'); break;
		case "Global": changeButtonColor('globalCoop_button'); break;
		case "Products": changeButtonColor('products_button'); break;
		case "News": changeButtonColor('newspage_button'); break;
		case "Recruitment": changeButtonColor('recruit_button'); break;
		case "Contact Us": changeButtonColor('contact_button'); break;
	}
}



$(document).ready(function(){
	var generalQuestions = $('.contact-page-menu-items > DIV:nth-child(1)');
	var productInquiry = $('.contact-page-menu-items > DIV:nth-child(2)');
	var becomePartener = $('.contact-page-menu-items > DIV:nth-child(3)');
	var animation_time = 500;

	$('.slideshow').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        pauseOnHover: true,
    });

    generalQuestions.hide();
	productInquiry.hide();
	becomePartener.hide();
	$('.contact-page-right-menu UL LI:nth-child(1)').on('click',function(){ 
		productInquiry.fadeOut(animation_time, function(){
			becomePartener.fadeOut(animation_time, function(){
				generalQuestions.fadeIn(animation_time);
			});
		});
	});
	$('.contact-page-right-menu UL LI:nth-child(2)').on('click',function(){  
		generalQuestions.fadeOut(animation_time, function(){
			becomePartener.fadeOut(animation_time, function(){
				productInquiry.fadeIn(animation_time);
			});
		});
	});
	$('.contact-page-right-menu UL LI:nth-child(3)').on('click',function(){  
		productInquiry.fadeOut(animation_time, function(){
			generalQuestions.fadeOut(animation_time, function(){
				becomePartener.fadeIn(animation_time);
			});
		});
	});

});