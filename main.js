
function changeButtonColor(buttonID){
	$(buttonID).css({
		'background' : 'white',
		'color' : 'black'
	});
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onmouseenter = function(){
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
  }
  
  acc[i].onmouseout = function(){
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  panel.onmouseenter = function() { 
    panel.style.maxHeight = panel.scrollHeight + "px";
        panel.onmouseleave = function() {
            panel.style.maxHeight = null;
          }
      }
   panel.style.maxHeight = null;
    }
}

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


$(document).ready(function(){
	var title = $('title').text();
	console.log(title);
	switch(title){
		case "About Us": changeButtonColor('about_button'); break;
		case "Global": changeButtonColor('globalCoop_button'); break;
		case "Products": changeButtonColor('products_button'); break;
		case "News": changeButtonColor('newspage_button'); break;
		case "Recruitment": changeButtonColor('recruit_button'); break;
		case "Contact Us": changeButtonColor('contact_button'); break;
		case "Support": changeButtonColor('support_button'); break;
	}
	 $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        pauseOnHover: true,
        dots: true,
    });
	
	var generalQuestions = $('.contact-page-menu-items > DIV:nth-child(1)');
	var productInquiry = $('.contact-page-menu-items > DIV:nth-child(2)');
	var becomePartener = $('.contact-page-menu-items > DIV:nth-child(3)');
	var animation_time = 500;

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