var citation = null;
var aleaA = null;

var citationPart1 = ["Le sentiment de", "Un seul être", "La nature fait les", "Dans la vengeance", "Exige beaucoup de toi-même"];
var citationPart2 = ["pas être aimé", " vous manque et ", "hommes semblables,", "et en amour", "et attends peu des autres"];
var citationPart3 = ["est la plus grande des pauvretés.", "tout est dépeuplé.", "la vie les rend différents.", "la femme est plus barbare que l'homme.", " Ainsi beaucoup d'ennuis te seront épargnés."];
var auteurs = ["Confucius", "Jean-Paul Sartre", "Gandhi", "Victor Hugo", "Albert Einstein", "Coluche", "Friedrich Nietzsche", "Oscar Wilde", "Lamartine", "Mère Teresa"];
var emojiButton = ["🤣", "😍","😎","😜","😅","🤠"];


$('document').ready(function(){

	var input = document.querySelectorAll('input');

	$('#generer').click(function(){

			userChose = input[0].value;
			if ((userChose >= 1)  || (userChose <= 5)){

				aleaBtn = Math.floor(Math.random() * emojiButton.length);
				emojiBtn = emojiButton[aleaBtn];
				document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
				document.getElementById("generer").innerHTML = "Generate another? " + emojiBtn;

				console.log("L'utilisateur a choisit de générer " + userChose + " citation(s)");

				if (userChose == 1){
						var arrayCita = [];
						var arrayAut = [];
						var i = 0;
						while(i!=1){
					       aleaC1 = Math.floor(Math.random() * citationPart1.length);
					       aleaC2 = Math.floor(Math.random() * citationPart2.length);
					       aleaC3 = Math.floor(Math.random() * citationPart3.length);
					       aleaA = Math.floor(Math.random() * auteurs.length);
					       var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
					       var auteur = auteurs[aleaA];

					       arrayCita.push(citation)
					       arrayAut.push(auteur)
					       i++
						}

						$('.container_citation1').removeClass("hide");
						$('.container_citation2').addClass("hide");
						$('.container_citation3').addClass("hide");
						$('.container_citation4').addClass("hide");
						$('.container_citation5').addClass("hide");

						$('.citation1').html(arrayCita[0]);
						$('.auteur1').html(arrayAut[0]);


				}else{}

				if (userChose == 2){
						var arrayCita = [];
						var arrayAut = [];
						var i = 0;
						while(i!=2){
					       aleaC1 = Math.floor(Math.random() * citationPart1.length);
					       aleaC2 = Math.floor(Math.random() * citationPart2.length);
					       aleaC3 = Math.floor(Math.random() * citationPart3.length);
					       aleaA = Math.floor(Math.random() * auteurs.length);
					       var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
					       var auteur = auteurs[aleaA];

					       arrayCita.push(citation)
					       arrayAut.push(auteur)
					       i++
						}
						$('.container_citation1').removeClass("hide");
						$('.container_citation2').removeClass("hide");
						$('.container_citation3').addClass("hide");
						$('.container_citation4').addClass("hide");
						$('.container_citation5').addClass("hide");

						$('.citation1').html(arrayCita[0]);
						$('.citation2').html(arrayCita[1]);
						$('.auteur1').html(arrayAut[0]);
						$('.auteur2').html(arrayAut[1]);
				}else{}

				if (userChose == 3){
						var arrayCita = [];
						var arrayAut = [];
						var i = 0;
						while(i!=3){
					       aleaC1 = Math.floor(Math.random() * citationPart1.length);
					       aleaC2 = Math.floor(Math.random() * citationPart2.length);
					       aleaC3 = Math.floor(Math.random() * citationPart3.length);
					       aleaA = Math.floor(Math.random() * auteurs.length);
					       var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
					       var auteur = auteurs[aleaA];

					       arrayCita.push(citation)
					       arrayAut.push(auteur)
					       i++
						}

						$('.container_citation1').removeClass("hide");
						$('.container_citation2').removeClass("hide");
						$('.container_citation3').removeClass("hide");
						$('.container_citation4').addClass("hide");
						$('.container_citation5').addClass("hide");


						$('.citation1').html(arrayCita[0]);
						$('.citation2').html(arrayCita[1]);
						$('.citation3').html(arrayCita[2]);
						$('.auteur1').html(arrayAut[0]);
						$('.auteur2').html(arrayAut[1]);
						$('.auteur3').html(arrayAut[2]);

				}else{}

				if (userChose == 4){
						var arrayCita = [];
						var arrayAut = [];
						var i = 0;
						while(i!=4){
					       aleaC1 = Math.floor(Math.random() * citationPart1.length);
					       aleaC2 = Math.floor(Math.random() * citationPart2.length);
					       aleaC3 = Math.floor(Math.random() * citationPart3.length);
					       aleaA = Math.floor(Math.random() * auteurs.length);
					       var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
					       var auteur = auteurs[aleaA];

					       arrayCita.push(citation)
					       arrayAut.push(auteur)
					       i++
						}
						$('.container_citation1').removeClass("hide");
						$('.container_citation2').removeClass("hide");
						$('.container_citation3').removeClass("hide");
						$('.container_citation4').removeClass("hide");
						$('.container_citation5').addClass("hide");

						$('.citation1').html(arrayCita[0]);
						$('.citation2').html(arrayCita[1]);
						$('.citation3').html(arrayCita[2]);
						$('.citation4').html(arrayCita[3]);
						$('.auteur1').html(arrayAut[0]);
						$('.auteur2').html(arrayAut[1]);
						$('.auteur3').html(arrayAut[2]);
						$('.auteur4').html(arrayAut[3]);

				}else{}

				if (userChose == 5){
						var arrayCita = [];
						var arrayAut = [];
						var i = 0;
						while(i!=5){
					       aleaC1 = Math.floor(Math.random() * citationPart1.length);
					       aleaC2 = Math.floor(Math.random() * citationPart2.length);
					       aleaC3 = Math.floor(Math.random() * citationPart3.length);
					       aleaA = Math.floor(Math.random() * auteurs.length);
					       var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
					       var auteur = auteurs[aleaA];

					       arrayCita.push(citation)
					       arrayAut.push(auteur)
					       i++
						}

						$('.container_citation1').removeClass("hide");
						$('.container_citation2').removeClass("hide");
						$('.container_citation3').removeClass("hide");
						$('.container_citation4').removeClass("hide");
						$('.container_citation5').removeClass("hide");

						
						$('.citation1').html(arrayCita[0]);
						$('.citation2').html(arrayCita[1]);
						$('.citation3').html(arrayCita[2]);
						$('.citation4').html(arrayCita[3]);
						$('.citation5').html(arrayCita[4]);
						$('.auteur1').html(arrayAut[0]);
						$('.auteur2').html(arrayAut[1]);
						$('.auteur3').html(arrayAut[2]);
						$('.auteur4').html(arrayAut[3]);
						$('.auteur5').html(arrayAut[4]);
							//Ouais je sais c'est pas super propre ^^
				} else {

				}



			} else if (userChose <= 0) {
				alert("Merci de choisir un nombre entre 1 et 5");
				console.log("L'utilisateur a choisit un  nombre négaif");
			} else {
				alert("Merci de choisir un nombre entre 1 et 5");
				console.log("L'utilisateur a choisit un mauvais nombre");
			}
			
	});

	$('.frflag').click(function(){
		$(".UK").addClass("hide");
		$(".FR").removeClass("hide");
	});

	$('.ukflag').click(function(){
		$(".FR").addClass("hide");
		$(".UK").removeClass("hide");
	});


});