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

// ajout du clic droit dans la console

const nextImgage = document.querySelector(".arrow_right");
nextImgage.addEventListener("click", () => {
	console.log("right click")
});

// ajout du clic gauche dans la console

const previousImage = document.querySelector(".arrow_left");
previousImage.addEventListener("click", () => {
	console.log("left click")
});


/*  étape 3 */

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
	if (i === counter) bulletPoint.classList.add("dot_selected")
}


/*  étape 4  */

// sélectionne toutes les div class .dot
const eachDot = document.querySelectorAll(".dot")

const text = document.querySelector("#banner p")
const img = document.querySelector(".banner-img")


// l'image, le texte + le dot_selected = à index du counter
function change() {
	// rajouter la class dot_selected sur la nouvelle page affichée
	eachDot[counter].classList.add("dot_selected");
	// changer l'image 
	img.src = "./assets/images/slideshow/" + slides[counter].image;
	// changer le texte
	text.innerHTML = slides[counter].tagLine;
}


nextImgage.addEventListener("click", () => {
	// supprimer  la class dot_selected de l'image affichée
	eachDot[counter].classList.remove("dot_selected");
	// passer à l'image suivante au clic
	counter++;
	// RAZ du compteur s'il dépasse le nombre d'image
	if (counter > eachDot.length - 1) { counter = 0; }
	change();
})


/*  étape 5  */

previousImage.addEventListener("click", () => {
	// supprimer  la class dot_selected de l'image affichée
	eachDot[counter].classList.remove("dot_selected");
	// passer à l'image suivante au clic
	counter--;
	// passer à la dernière image du compteur s'il arrive à -1
	if (counter < 0) { counter = eachDot.length - 1; }
	change();
})

change();