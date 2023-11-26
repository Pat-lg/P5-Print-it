const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

// ajout du click droit dans la console

const nextImgage = document.querySelector(".arrow_right");
nextImgage.addEventListener("click", () => {
	console.log("right click")
});


// ajout du click gauche dans la console

const previousImage = document.querySelector(".arrow_left");
previousImage.addEventListener("click", () => {
	console.log("left click")
});


// cibler la div avec la classe dots
const point = document.querySelector(".dots")
// initialiser le compteur
let counter = 0;

//boucle de la longeur du carrousel 
for (let i = 0; i < slides.length; i++) { 
// créer une div par image
	const bulletPoint = document.createElement("div");
// ajout de la class "dot" sur les divs
	bulletPoint.classList.add("dot");
// ajout des divs bulletpoint ds la div class dots
	point.appendChild(bulletPoint);
	// la class dot devient dot_selected si i vaut counter
if (i === counter) bulletPoint.classList.add("dot_selected")}
	
	