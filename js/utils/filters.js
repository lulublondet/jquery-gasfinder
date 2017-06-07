'use strict';

const filterByDistrict = (stations,query) => {

jQuery.each(stations,function(i,val){

	if (query.toUpperCase() === val.district.toUpperCase()){
		stationUnit(val);
	}
});


}
