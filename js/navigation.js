/*Get all anchor links, you can be more specific or use a classname to be sure it only selects the links you want.*/
var lnks = document .querySelectorAll('a[href*="#"]');

/*Loop through each link to add the click event*/
for (var i = 0; i < lnks.length; i++) {
    lnks[i].onclick = function(e){
	/*prevent default behavior [clicking through]*/
    e.preventDefault();
    var  b = this; 
		
	/*get the name without the hash character and match it to the corresponding anchor*/
    var c = b.getAttribute("href").substring(1); 
    var el = document .querySelectorAll('div[data-name="'+c+'"]')[0];
	/*scroll to that position*/
	window.scrollTo({
        top: el.offsetTop -50, 
        behavior: "smooth"
    });
	/*This number subtracted from the offsetTop can be adjusted based on how much above the actual anchor you need to be.
You'll need to change this based on the height of your anchored element and also if your site has a sticky header. You make it slightly larger than its height. Play with it.*/	
    };
}