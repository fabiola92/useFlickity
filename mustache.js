    'use strict';
(function(){ 

    var templateList = document.getElementById('template-product-list').innerHTML;
	var templateItem = document.getElementById('template-product-item').innerHTML;

    Mustache.parse(templateItem);

    var listItems = '';

    	for(var i = 0; i < productsData.length; i++){
		console.log(productsData);
		listItems += Mustache.render(templateItem, productsData[i]);

        var fullProductList = Mustache.render(templateList, {products: listItems});

        results.insertAdjacentHTML('beforeend', fullProductList);



	}
