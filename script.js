$(document).ready(function() {
  
    var contactLink = $('#contact-link');
  
    var popup = $('#popup');
    var overlay = $('#overlay');
  
    var closeBtn = $('#close-btn');
  
    contactLink.on('click', function(event) {
      
      event.preventDefault();
  
    
      popup.show();
      overlay.show();
    });
  
   
    closeBtn.on('click', function(event) {

      popup.hide();
      overlay.hide();
    });
  
  
    overlay.on('click', function(event) {
  
      popup.hide();
      overlay.hide();
    });
  });
  /*pentru imagini*/
  $(document).ready(function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("slideshow-wrapper")[0].getElementsByTagName("img");
    
    function showSlides() {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("last-active");
      }
    
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
    
      slides[slideIndex].classList.add("active");
      slides[slideIndex == 0 ? slides.length - 1 : slideIndex - 1].classList.add("last-active");
    
      setTimeout(showSlides, 5000);
    }
    
    showSlides();
});

/* bine ati venit*/
window.onload = function() {
	setTimeout(function() {
		document.getElementById("welcome").style.display = "block";
	}, 500); 
};
/*mijloc*/
window.onload=function() {
  setTimeout(function() {
    document.getElementById("mijloc").style.display= "block";
  }, 700);
};
