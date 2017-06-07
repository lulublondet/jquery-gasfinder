'use strict';
var StationDetails = function() {
	var estaciones = state.stations;
	var $section = $('<section class="detalle"></section>');
	jQuery.each(estaciones, function( i, val ) {
 		var $container = $('<div class="container"></div>');
		var $row = $('<div class="row"></div>');
		var $col = $('<div class="col-xs-12 col-md-12"></div>');
		var $a = $('<a href="mapa.html" class="glyphicon glyphicon-export"></a>');	
		var $h2 = $('<h2 class="nombreEstacion">'+ estaciones[i].name+'</h2>');
		var $p = $('<p>'+estaciones[i].address+'</p>');
			$section.append($container);
			$container.append($row);
			$row.append($col);
			$col
				.append($a)
				.append($h2)
				.append($p);

 		});



return  $section;

}
