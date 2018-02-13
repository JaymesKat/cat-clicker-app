$(function() {

    var model = {
        cats : [
        {
            name: "Fat cat",
            imgUrl : "fat-black-cat.svg",
            clickCount : 0
        },
         {
            name: "Heath Cliff",
            imgUrl: "heathcliff.png",
            clickCount: 0
        },
        {
            name: "Garfield",
            imgUrl: "garfield.svg",
            clickCount: 0
        },
        {
            name: "Tom",
            imgUrl: "tom-cat.png",
            clickCount: 0
        },
        {
            name: "Sylvester",
            imgUrl: "sylvester-cat.png",
            clickCount: 0
        }],
        getCats: function(){
            return this.cats;
        },
        getCat: function(index){
            return this.cats[index]
        },
        setActiveCat: function(cat){
            this.activeCat = cat;
        },
        activeCat : null
    };
    
    var octopus = {
        init: function(){
            model.setActiveCat(model.cats[0]);
            catListView.render();
            catDetailView.init();           
        },
        getAllCats: function(){
            return model.getCats();
        },
        getActiveCat: function(){
            return model.activeCat;
        },        
        increaseCount: function(){
            model.activeCat.clickCount++; 
            catDetailView.render();
        } 
    };

    var catListView = {
        render: function(){
            var catList = document.getElementById('catList');
            var cats = octopus.getAllCats();
            
            catList.innerHTML = "";
            
            //iterate over cats
            for(var i=0;i<cats.length;i++){
                var cat = cats[i];
                // create a cat html list item
                var catElement = document.createElement("li");
                catElement.textContent = cat.name;
                
                catElement.addEventListener("click", (function(cat){
                    return function(){
                        model.setActiveCat(cat);
                        catDetailView.render();
                    };
                })(cat));
                
                // Add list item html to list
                catList.appendChild(catElement);
            }
        }
    };
    
     var catDetailView = { 
        init: function(){            
            this.name = document.getElementsByClassName("cat-name")[0];  
            this.pic = document.getElementsByClassName("cat-pic")[0];
            this.count = document.getElementsByClassName("count")[0];
            
            this.pic.addEventListener("click", function(){
                octopus.increaseCount(); 
            });
            
            this.render();
        },
        render: function(){
            // Update DOM Elements with selected cat
            var catData = model.activeCat;    
            this.clear();
            this.name.textContent = catData.name;
            this.pic.src = catData.imgUrl;
            this.count.textContent = catData.clickCount;
            
            
        },
         clear: function(){
             // Clear DOM elements of content
            this.name.innerHTML = "";
            this.pic.src = "";
            this.count.innerHTML = "";
        }
    };

    octopus.init();
});