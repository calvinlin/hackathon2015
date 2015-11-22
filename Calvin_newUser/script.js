$(document).ready(function() {
	$('.view').hide();

	function init() {
		$('#container').html($('#intro').html());
	}

	$(document).on('click', '.next', function() {
		var clicked = $(this).attr('id');
		$('#container input').css('background', 'white');

		switch(clicked) {
			case 'next_login' : 
				document.location.href="http://insertteamnamehere.mybluemix.net/";
				break;

			case 'next_view1' :

				if($('#firstName').val() == '')
					$('#firstName').css('background', '#FFB5B5');
				else if($('#lastName').val() == '')
					$('#lastName').css('background', '#FFB5B5');
				else{
					var firstName = $('#firstName').val();
					$('#container').html($('#view2').html());

					$('#firstName_val').html(firstName);
				}
					

				break;

			case 'next_view2' :

				if($('#email').val() == '')
					$('#email').css('background', '#FFB5B5');
				else if($('#pass1').val() == '')
					$('#pass1').css('background', '#FFB5B5');
				else if($('#pass2').val() == '')
					$('#pass2').css('background', '#FFB5B5');
				else if($('#pass1').val() != $('#pass2').val())
					$('#pass1, #pass2').css('background', '#FFB5B5');
				else
					$('#container').html($('#view3').html());

				break;

			case 'next_view3' :

				if($('#cc_name').val() == '')
					$('#cc_name').css('background', '#FFB5B5');
				else if($('#cc_cardNo').val() == '')
					$('#cc_cardNo').css('background', '#FFB5B5');
				else if($('#cc_security').val() == '')
					$('#cc_security').css('background', '#FFB5B5');
				else if($('#cc_exp').val() == '')
					$('#cc_exp').css('background', '#FFB5B5');
				else
					document.location.href="http://insertteamnamehere.mybluemix.net/";
				
				break;

			default :
				document.location.href="http://insertteamnamehere.mybluemix.net/";
				break;
		}
	});

	$(document).on('click', '#loginBtn', function() {
		$('#container').html($('#login').html());
	});

	$(document).on('click', '#registerBtn', function() {
		$('#container').html($('#view1').html());
	});

	init();

});






