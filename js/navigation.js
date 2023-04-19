var lnks = document .querySelectorAll('a[href*="#"]');

for (var i = 0; i < lnks.length; i++) {
    lnks[i].onclick = function(e){
    e.preventDefault();
    var  b = this; 
		
    var c = b.getAttribute("href").substring(1); 
    var el = document .querySelectorAll('div[data-name="'+c+'"]')[0];
  	window.scrollTo({
        top: el.offsetTop -50, 
        behavior: "smooth"
    });
  };
}

/* burger menu */
const wrapper = document.getElementById('hamburger-wrapper');
const body = document.body;
wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open-mobile-menu");
  body.parentNode.classList.toggle("active-mobile-menu");
})
