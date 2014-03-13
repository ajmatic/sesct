/*headerArray = ["img/horse-ses2.jpg", "img/lighthouse2.jpg", "img/ses-blueshirt-cat.jpg"];

headerIndex = 0;

function changeHeader() {

	var myHeader = document.getElementById("myHeader");

	$('#myHeader').fadeOut(500, changeWords).fadeIn(500);

	//myHeader.innerHTML = headerArray[headerIndex];
	
}

function changeWords() {
	
	$('#myHeader').setAttribute("src", headerArray[headerIndex]);
	headerIndex++;
	if (headerIndex >= headerArray.length) {
		//clearInterval(intervalHandle);
		headerIndex = 0;
	}
}

intervalHandle = setInterval(changeHeader, 5000);*/

$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});


