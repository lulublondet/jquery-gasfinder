'use strict';
var reRender = function(resultado){

if(resultado.length == 0){
	alert("Lo sentimos, No hay grifos en ese distrito!!");

}

else {
		var lat = resultado[0].lat;
		var long = resultado[0].long;
		
		var $container = $('<div class="container"></div>');
		var $row = $('<div class="row"></div>');
		var $col = $('<div class="col-xs-12 col-md-12"></div>');
		var $a = $('<a href="mapa.html" class="glyphicon glyphicon-export"></a>');	
		var $h2 = $('<h2 class="nombreEstacion">'+resultado[0].name+'</h2>');
		var $p = $('<p>'+resultado[0].address+'</p>');
		var $span = $('<span>'+resultado[0].district+'</span>');	
		var $mapa = $('<div id="map"></div')
			$container.append($row);
			$row.append($col);
			$col
				.append($a)
				.append($h2)
				.append($p)
				.append($span);
			$('.detalle').children().hide('slow');		
			$('.detalle').first().show('slow');	
			$('.detalle').prepend($container);
			$col.append($mapa);	
			$mapa.insertAfter( $( ".detalle" ) );

		var map = new GMaps({
    	 div: $mapa[0],
    	 lat: lat,
    	 lng: long
	});


	$a.on("click",function(e){
	 e.preventDefault();

})	;

return $('.detalle'); 


}


}




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
	

	
	$form.on('submit',function(e){
		e.preventDefault();
		var resultado =	filterByDistrict(state.stations,$input.val())
			$input.val("");
			reRender(resultado);
			
	});


return  $form;

}


