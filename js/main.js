
function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width

			width:"100vw",
			
			// Height

			height:"100vh",

			// Elevation

			elevation: 0,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: false,

	});
}

function myFunction() {
  var flipbook = $("#flipbook");
  
  // Obtener el ancho y la altura actuales de la revista
  var currentWidth = flipbook.width();
  var currentHeight = flipbook.height();
  
  // Actualizar la revista con las nuevas dimensiones
  flipbook.turn("size", currentWidth, currentHeight);
};

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['/js/turn.js'],
	nope: ['/js/turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});

let i = document.getElementById("ini");

function start(){
    i.classList.add("next");
    setTimeout(function(){
        i.style.display = "none";
    },2000);
}

i.addEventListener("click",function(){start()});
