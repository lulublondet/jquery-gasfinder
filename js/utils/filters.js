'use strict';

const filterByDistrict = (stations,query) => {
	var arr = [];

jQuery.each(stations,function(i,val){

	if (query.toUpperCase() === val.district.toUpperCase()){
		arr.push(val);
		 }
	

});

	return arr;

};

	



