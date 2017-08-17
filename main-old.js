function changeButtonColor(buttonID){
	var selected_button = document.getElementById(buttonID);
	selected_button.style.color = "black";
	selected_button.style.background = "white";
}

$(document).ready(function(){
	var title = $('title').text();
	switch(title){
		case "About Us": changeButtonColor('Global'); break;
		case "Global": changeButtonColor('News'); break;
		case "Products": changeButtonColor('Products'); break;
		case "News": changeButtonColor('newspage_button'); break;
		case "Recruitment": changeButtonColor('recruit_button'); break;
		case "Contact Us": changeButtonColor('contact_button'); break;
	}

	$('.tabs').tabslet({
 	  mouseevent: 'hover',
 	  attribute: 'href',
	  animation: false,
	});

    $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed : 5000,
        adaptiveHeight: true,
        arrows: false,
        speed: 500,
        pauseOnHover: true,
    });

});
