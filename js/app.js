var listItems = $("#catList > li");
var cats = $(".cat");

function hideAllCats(){
    for(var i = 0; i < cats.length; i++){
        $(cats[i]).hide();
    }
}

function bindCatPhotos(id){
    var cat = "#cat"+id;
    $(cat).click(function(){
		var counter = $(cat+" .count").text();
        counter = parseInt(counter) +1 ;
        $(cat+" .count").text(counter);
	})
}

function bindListItemToCat(id){
    $("#catItem"+id).click(function(){
		hideAllCats();
        var catName = $("#catItem"+id).text();
        $("#cat"+id+">.cat-name").text(catName);
		$("#cat"+id).show();
	})
}

for(var i=0;i<cats.length;i++){
    bindListItemToCat(i);
}

for(var i=0;i<cats.length;i++){
    bindCatPhotos(i);
}

hideAllCats();
var catName = $("#catItem1").text();
$("#cat1>.cat-name").text(catName);
$("#cat1").show();