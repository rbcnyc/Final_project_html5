// function show() { 

// if ($('button#open').hasClass('open')){
// 		$('button#open').removeClass('open').addClass('hide');
// 		$('div#hide').removeClass('hide').addClass('open');
// 	} else {
// 		return false;
// 	}
// 	event.preventDefault();
//  } 

$(document).ready(function(){
  // $('.bxslider').bxSlider();

// $("button#open").click(show(){});

$("button#open").click(function(){
	if ($('button#open').hasClass('open')){
		$('button#open').removeClass('open').addClass('hide');
		$('div#hide').removeClass('hide').addClass('open');
	} else {
		return false;
	}
	event.preventDefault();
	});

// Getting info from the form
// $(selector).val();

// Preventing default behaviour
// $("form").submit(function(event) {
// event.preventDefault();
// form will now not POST / redirect
// so you can use the data!
// });

// Testing the submit button - it doesn't work yet.
// $('#submit').click(function(){
// 	var url = $(location).attr("final_thanks.html");
// 	$('div.hide').html('<strong>' + url + '</strong>');
// 	});

});