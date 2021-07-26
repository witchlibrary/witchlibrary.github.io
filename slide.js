if(screen.availHeight > screen.availWidth){
let sliders = document.querySelectorAll( '.bookinfo' );
let covers = document.querySelectorAll( '.bookcover' );
var heights = document.querySelectorAll('.bookinfo');
var heightlist = [];
for (let newheight of heights) {
newheight = newheight.offsetHeight;
heightlist.push(newheight);
}
for (let slider of sliders) {
    slider.style.height = "0px";
}

    covers.forEach (function(cover, i) {
        cover.addEventListener( 'click', function() {
         
            if (sliders[i].style.height == "0px") {
                sliders.forEach(function(slider){
                    slider.style.height = "0px";
                })
                sliders[i].style.height = heightlist[i] + "px";

            } else {
                sliders[i].style.height = "0px";

            }
            
            
        }, false );
        });
    } 
