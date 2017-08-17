function changeButtonColor(buttonID){
	var selected_button = document.getElementById(buttonID);
	selected_button.style.color = "black";
	selected_button.style.background = "white";
	


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
	$('.slideshow').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        dots: false,
    });
    $('.center_slideshow').slick({
		  centerMode: true,
		  autoplay: true,
	        autoplaySpeed : 3000,
	        adaptiveHeight: true,
	        arrows: false,
	        speed: 500,
	        dots: false,
		  centerPadding: '60px',
		  slidesToShow: 2,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
    });

	var title = $('title').text();
	console.log(title);
	switch(title){
		case "About Us": changeButtonColor('Global'); break;
		case "Global": changeButtonColor('News'); break;
		case "Products": changeButtonColor('Products'); break;
		case "News": changeButtonColor('About Us'); break;
		case "Recruitment": changeButtonColor('recruitment'); break;
		case "Contact Us": changeButtonColor('contact Us'); break;
		case "Support": changeButtonColor('support'); break;
	}
	 
	
	var generalQuestions = $('.contact-page-menu-items > DIV:nth-child(1)');
	generalQuestions.css('background','red');
	var productInquiry = $('.contact-page-menu-items > DIV:nth-child(2)');
	var becomePartener = $('.contact-page-menu-items > DIV:nth-child(3)');
	var animation_time = 500;

    generalQuestions.show();
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

	var four_square_img_1 = $('#four_square_top > DIV:nth-child(1) > IMG');
	var four_square_img_2 = $('#four_square_top > DIV:nth-child(2) > IMG');
	var four_square_img_3 = $('#four_square_bottom > DIV:nth-child(1) > IMG');
	var four_square_img_4 = $('#four_square_bottom > DIV:nth-child(2) > IMG');

	var img_1_p = $('#four_square_top > div:nth-child(1) > p');
	var img_2_p = $('#four_square_top > div:nth-child(2) > p');
	var img_3_p = $('#four_square_bottom > div:nth-child(1) > p');
	var img_4_p = $('#four_square_bottom > div:nth-child(2) > p');

	img_1_p.hide();
	img_2_p.hide();
	img_3_p.hide();
	img_4_p.hide();
	var animation_time_new = 300;
	four_square_img_1.on('mouseover',function(){
		console.log('img1');
		img_4_p.fadeOut(animation_time_new, function(){
			img_3_p.fadeOut(animation_time_new, function(){
				img_2_p.fadeOut(animation_time_new, function(){
					img_1_p.fadeIn(animation_time_new);
				});
			});
		});
	});
	four_square_img_2.on('mouseover',function(){
		console.log('img1');
		img_1_p.fadeOut(animation_time_new, function(){
			img_3_p.fadeOut(animation_time_new, function(){
				img_4_p.fadeOut(animation_time_new, function(){
					img_2_p.fadeIn(animation_time_new);
				});
			});
		});
	});
	four_square_img_3.on('mouseover',function(){
		console.log('img1');
		img_4_p.fadeOut(animation_time_new, function(){
			img_1_p.fadeOut(animation_time_new, function(){
				img_2_p.fadeOut(animation_time_new, function(){
					img_3_p.fadeIn(animation_time_new);
				});
			});
		});
	});
	four_square_img_4.on('mouseover',function(){
		console.log('img1');
		img_1_p.fadeOut(animation_time_new, function(){
			img_3_p.fadeOut(animation_time_new, function(){
				img_2_p.fadeOut(animation_time_new, function(){
					img_4_p.fadeIn(animation_time_new);
				});
			});
		});
	});
	var news_item_1 = $('#news_item1');
	var news_item_2 = $('#news_item2');
	var news_item_3 = $('#news_item3');

	news_item_1.css('width',initial_width);
	news_item_2.css('width',initial_width);
	news_item_3.css('width',initial_width);

	var initial_width = '30%';
	var small_width = '20%';
	var big_width = '50%';

	news_item_1.on('mouseover',function(){
		console.log('news_item_1');
		news_item_2.css('width',small_width);
		news_item_3.css('width',small_width);
		news_item_1.css('width',big_width);
	});
	news_item_2.on('mouseover',function(){
		console.log('news_item_2');
		news_item_1.css('width',small_width);
		news_item_3.css('width',small_width);
		news_item_2.css('width',big_width);
	});
	news_item_3.on('mouseover',function(){
		console.log('news_item_3');
		news_item_1.css('width',small_width);
		news_item_2.css('width',small_width);
		news_item_3.css('width',big_width);
	});
	if(news_item_1.is(":focus") !== true){
		if(news_item_2.is(":focus") !== true){
			if(news_item_3.is(":focus") !== true){
				console.log('out');
			}
		}
	}
});