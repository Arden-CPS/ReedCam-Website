function changeButtonColor(buttonID){
	var selected_button = document.getElementById(buttonID);
	selected_button.style.color = "black";
	selected_button.style.background = "white";
}

$(document).ready(function(){
	var generalQuestions = $('.contact-page-menu-items > DIV:nth-child(1)');
	var productInquiry = $('.contact-page-menu-items > DIV:nth-child(2)');
	var becomePartener = $('.contact-page-menu-items > DIV:nth-child(3)');
	var animation_time = 500;

	/*$('.slideshow').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        pauseOnHover: true,
    });*/

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
	var job_description1 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(2) > td:nth-child(1) > div');
	var job_description2 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(3) > td:nth-child(1) > div');
	var job_description3 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(4) > td:nth-child(1) > div');

	var job_header1 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(2) > td:nth-child(1) > h3');
	var job_header2 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(3) > td:nth-child(1) > h3');
	var job_header3 = $('body > div.container-fluid > div > div.span10 > table > tbody > tr:nth-child(4) > td:nth-child(1) > h3');

	job_description1.hide(); job_description2.hide(); job_description3.hide();

	job_header1.on('click', function(){
	job_description3.fadeOut(animation_time, function(){
		job_description2.fadeOut(animation_time, function(){
			job_description1.fadeIn(animation_time);
		});
	});
	});
	job_header2.on('click', function(){
	job_description3.fadeOut(animation_time, function(){
		job_description1.fadeOut(animation_time, function(){
			job_description2.fadeIn(animation_time);
		});
	});
	});
	job_header3.on('click', function(){
	job_description1.fadeOut(animation_time, function(){
		job_description2.fadeOut(animation_time, function(){
			job_description3.fadeIn(animation_time);
		});
	});
	});
});