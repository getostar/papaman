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
/*harta*/
function harta() {
  var url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.6816270077493!2d25.940913612315057!3d44.3370469078128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40adffaf66c51bdb%3A0xe5d3219eabc28619!2sPAPA%20MAN!5e0!3m2!1sro!2sro!4v1681741277217!5m2!1sro!2sro";
  window.open(url, "_blank");
}
/*50cm*/

function Pizza50cm() {
  var pizza = document.querySelector(".Pizza");
  var pizza50 = document.querySelector(".pizza50");

  pizza.classList.add("hidden"); 
  pizza50.classList.remove("hidden");
}

function Pizza32cm() {
  var pizza = document.querySelector(".Pizza");
  var pizza50 = document.querySelector(".pizza50");

  pizza.classList.remove("hidden");
  pizza50.classList.add("hidden");
}


window.addEventListener('load', function() {
  var overlay = document.getElementById('overlaypizza50');
  var popup = document.getElementById('pizza50popup');
  var popupImage = document.querySelector('#pizza50popup img');

  // Asculta evenimentul de clic pe imagine pentru a inchide pop-up-ul
  popup.addEventListener('click', function(e) {
    if (e.target === popup || e.target === popupImage) {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }
  });

  // Afiseaza pop-up-ul dupa o intarziere de 2 secunde
  setTimeout(function() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }, 1500);
});


// Imagini//
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-slide');
let currentSlide = 0;
let startX;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

slider.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});

slider.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  if (startX - endX > 50) {
    nextSlide();
  }
});

showSlide(currentSlide);

setInterval(nextSlide, 3000); // Schimbă automat imaginile la fiecare 3 secunde


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
