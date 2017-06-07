'use strict';
var Search = function() {
		
	var $form = $('<form class="search"></form>');	
	var $divformGroup = $('<div class="form-group"></div>');
	var $divInputGroup = $('<div class="input-group"</div>');
	var $divInputGroupAddon = $('<div class="input-group-addon"></div>');
	var $spanIcon = $('<span class="glyphicon glyphicon-search"></span>');
	var $input = $('<input type="text" class="form-control" id="buscarDistrito" placeholder="Ingrese tu distrito a buscar"></input>')

	$form.append($divformGroup);
	$divformGroup.append($divInputGroup);
	$divInputGroup
				.append($divInputGroupAddon)
				.append($input);		
	$divInputGroupAddon.append($spanIcon);			
	
	$input.on('click',function(){
		$('.detalle').hide('slow');	
	});

	
	$form.on('submit',function(e){
		e.preventDefault();
			filterByDistrict(state.stations,$input.val())
	
	});


return  $form;

}


