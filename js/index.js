/* ---- custom scripts ---- */ 
/* Mobile Menu */
var to_toggle   = 0 ;
var min_screeen = 1265 ;

function toggle () {
		if (screen.width <= min_screeen) {
				if (to_toggle == 0) {
						document.getElementById("menu").style.display = "block";
						to_toggle = 1 ;
				}
				else {
						document.getElementById("menu").style.display = "none";
						to_toggle = 0 ;
				}
		}
		else {
				document.getElementById("menu").style.display = "block";
		}
}
function hide () {
		toggle();
}

/* Modale */
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms)) ;
}

function warn_user(obj) {
		var modal   = document.getElementById("modal") ;
		var contact = document.getElementById("contact-form") ;

		obj.disabled = true ;
		obj.value = 'Sending ...' ;

		modal.style.display  = "block" ;
		contact.style.display = "none" ;
		sleep(2000) ;
		obj.form.submit() ;
}

/* Dynamic text */
var title_id   = 0 ;

var clear  = 1 ;
var i = 0 ;

function typeWriter() {
	var titles = ["Web developer", "Tech enthusiast", "Video maker", "Tea addict"] ;
	var hold   = 3000 ;
	var speed  = 50 ;

	if (clear == 1) {
		clear = 0 ;
		title_id++ ;
		if (title_id == titles.length) {
			title_id = 0 ;
		}
		document.getElementById("intro_title").innerHTML = "" ;
	}
	if (i < titles[title_id].length) {
		document.getElementById("intro_title").innerHTML += titles[title_id].charAt(i) ;
		i++ ;
		setTimeout(typeWriter, speed) ;
	}
	else {
		i = 0 ;
		clear = 1 ;
		setTimeout(typeWriter, hold) ;
	}
}

/* from W3School */
function openLanguage(evt, languageName) {
		var i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		document.getElementById(languageName).style.display = "block";
		evt.currentTarget.className += " active";
} /* from W3School */


/*
from http://www.design-fluide.com/17-11-2013/un-defilement-anime-smooth-scroll-en-jquery-sans-plugin/
*/
/* ---- smooth scroll ---- */
$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un Ã©lÃ©ment
				var page = $(this).attr('href'); // Page cible
				var speed = 750; // DurÃ©e de l'animation (en ms)
				var title_inset = 50 ;
				$('html, body').animate( { scrollTop: $(page).offset().top - title_inset }, speed ); // Go
				return false;
		});
});

/* ---- particles.js ---- */
/*
	Copyright (c) 2017 by Vincent Garreau (https://codepen.io/VincentGarreau/pen/pnlso)
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
	software and associated documentation files (the "Software"), to deal in the Software 
	without restriction, including without limitation the rights to use, copy, modify, merge, 
	publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons t
	o whom the Software is furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all 
	copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
	INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
	PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
	FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "edge",
			"stroke": {
				"width": 1,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 1,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.5,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1.5,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"repulse": {
				"distance": 150,
				"duration": 0.3
			},
		}
	},
	"retina_detect": true
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}