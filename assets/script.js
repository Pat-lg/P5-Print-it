const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ajout du click droit dans la console

const nextImgage = document.querySelector(".arrow_right");
nextImgage.addEventListener("click", () =>{
	console.log("right click")
});


// ajout du click gauche dans la console

const previousImage = document.querySelector(".arrow_left");
previousImage.addEventListener("click", () =>{
	console.log("left click")
});
