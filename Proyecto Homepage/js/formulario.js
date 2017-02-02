
$(document).ready(function(){
	$("h1").hide();
	$("h1").fadeIn();
	$(".first").slideUp(0);
	$(".first").slideDown(700);
	$(".form-container").slideUp(0);
	$(".form-container").slideDown();
	$( "#datepicker" ).datepicker({
		inline: true
	});

	 $('#select_country').attr('data-selected-country','CO');
  	 $('#select_country').flagStrap();
  	 //Se elimina el primer dato del dropdown "Please select country"
  	 $(".flagstrap li:nth-child(1)").remove();
});

function validaciones() {

	var $nom = $("#nombre");
	var $ape= $("#apellido");
	var $mail= $("#email");
	var $date= $("#datepicker");
	var $dir= $("#direccion");
	var $city= $("#city");
	var $zip= $("#zip-code");

	var $caja = [$nom, $ape, $mail, $date, $dir, $city, $zip];

	$caja.forEach(function($elm){
		
		if ( $elm.val().trim()=="" ) {
			$elm.addClass("tf-vacio");
		} else {
			$elm.removeClass("tf-vacio");
		}

	});
	
	
	if ($nom.val().trim()=="" || $ape.val().trim()=="" || $mail.val().trim()=="" || 
		$dir.val().trim()=="" || $zip.val().trim()=="" || $date.val().trim()=="" ||
		$city.val().trim()=="" ) {
		
		$('#modal-wrong').modal('toggle');

	}else{

		if (isValidZip($zip.val())) {

			$zip.removeClass("tf-vacio");

			if (isValidEmail($mail.val())) {
				
				$mail.removeClass("tf-vacio");

				if(isAdult($date.val())) {

					$('#modal-good').modal('toggle');					
					$(".form-main").trigger("reset");

				}else{
					$('#modal-adult').modal('toggle');
					$date.addClass("tf-vacio");
				}

			} else {

				$('#modal-email').modal('toggle');
				$mail.addClass("tf-vacio");

			}

		}else{

			$('#modal-zip').modal('toggle');
			$zip.addClass("tf-vacio");
		}

	}

}

//Adult... 
function isAdult(date){
	
	fecha = new Date(date);
	hoy = new Date();
	edad = parseInt((hoy - fecha)/365/24/60/60/1000)
	
	if (edad>=18) {
		return true;
	} else {
		return false;
	}
}

//Zip Code US... 
function isValidZip(zip) {
   return /^\d{5}(-\d{4})?$/.test(zip);
}

//email... 
function isValidEmail(email) {
   return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

