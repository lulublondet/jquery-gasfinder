'use strict';
var StationDetails = () => {
	const estaciones = state.stations;
	const $section = $('<section class="detalle"></section>');
	jQuery.each(estaciones, function( i, val ) {
 		const $container = $('<div class="container"></div>');
		const $row = $('<div class="row"></div>');
		const $col = $('<div class="col-xs-12 col-md-12"></div>');
		const $a = $('<a href="mapa.html" class="glyphicon glyphicon-export"></a>');	
		const $h2 = $('<h2 class="nombreEstacion">'+ estaciones[i].name+'</h2>');
		const $p = $('<p>'+estaciones[i].address+'</p>');
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
