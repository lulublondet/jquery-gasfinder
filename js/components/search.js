'use strict';
const reRender =(resultado)=>{

if(resultado.length == 0){
	alert("Lo sentimos, No hay grifos en ese distrito!!");

}

else {
		const lat = resultado[0].lat;
		const long = resultado[0].long;
		
		const $container = $('<div class="container"></div>');
		const $row = $('<div class="row"></div>');
		const $col = $('<div class="col-xs-12 col-md-12"></div>');
		const $a = $('<a href="mapa.html" class="glyphicon glyphicon-export"></a>');	
		const $h2 = $('<h2 class="nombreEstacion">'+resultado[0].name+'</h2>');
		const $p = $('<p>'+resultado[0].address+'</p>');
		const $span = $('<span>'+resultado[0].district+'</span>');	
		const $mapa = $('<div id="map"></div');
	

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
			$mapa.insertAfter( $(".detalle") );


/*Funciones pra el mapa */
/*Ojo-->No debe estar aqui, estoy trabajando para llevarlo al componente corresponidente */

	var map = new GMaps({
    	 	div: $mapa[0],
    	 	lat: lat,
    	 	lng: long
		});

	map.addMarker({
    		lat: lat,
    		lng: long,
    		zoom: 18
  		});


	GMaps.geolocate({
  		success: function(position) {
    		map.setCenter(position.coords.latitude, position.coords.longitude);
  			map.addMarker({
        		 lat: position.coords.latitude,
        		 lng: position.coords.longitude,
        		zoom:18     
			});

			map.drawRoute({
        	origin: [position.coords.latitude, position.coords.longitude],
        	destination: [lat,long],
        	travelMode: 'driving',
        	strokeColor: '#aaa',
        	strokeOpacity: 1,
        	strokeWeight: 6
      		});  
		},
		error: function(error) {
    	 alert('No lo pudimos ubicar: '+error.message);
  		},

  		not_supported: function() {
    		alert("Actualice el navegador");
  		},
  });

	$a.on("click",(e)=>{
		 e.preventDefault();
		});

	return $('.detalle'); 
	}
}


var Search = ()=> {
		
	const $form = $('<form class="search"></form>');	
	const $divformGroup = $('<div class="form-group"></div>');
	const $divInputGroup = $('<div class="input-group"</div>');
	const $divInputGroupAddon = $('<div class="input-group-addon"></div>');
	const $spanIcon = $('<span class="glyphicon glyphicon-search"></span>');
	const $input = $('<input type="text" class="form-control" id="buscarDistrito" placeholder="Ingrese tu distrito a buscar"></input>')

	$form.append($divformGroup);
	$divformGroup.append($divInputGroup);
	$divInputGroup
				.append($divInputGroupAddon)
				.append($input);		
	$divInputGroupAddon.append($spanIcon);			
	

	
	$form.on('submit',(e)=>{
		e.preventDefault();
		const resultado =	filterByDistrict(state.stations,$input.val())
			$input.val("");
			reRender(resultado);
			
	});


return  $form;

}


