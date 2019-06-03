// VAR FR 

var citation = null;
var aleaA = null;
var citationPart1 = ["Le sentiment de", "Un seul être", "La nature fait les", "Dans la vengeance", "Exige beaucoup de toi-même"];
var citationPart2 = ["pas être aimé", " vous manque et ", "hommes semblables,", "et en amour", "et attends peu des autres"];
var citationPart3 = ["est la plus grande des pauvretés.", "tout est dépeuplé.", "la vie les rend différents.", "la femme est plus barbare que l'homme.", " Ainsi beaucoup d'ennuis te seront épargnés."];
var auteurs = ["Confucius", "Jean-Paul Sartre", "Gandhi", "Victor Hugo", "Albert Einstein", "Coluche", "Friedrich Nietzsche", "Oscar Wilde", "Lamartine", "Mère Teresa"];

//VAR UK

var quote = null;
var aleaAu = null;
var quotePart1 = ["His Majesty's", "England is", "London is", "The House of Lords", "In England I would rather be"];
var quotePart2 = ["dominions, on which", " my thoughts remain below", "a roost ", " is like a glass of champagne", "a man, a horse, a dog"];
var quotePart3 = ["the sun never sets", "a nation of voyeurs.", "for every bird.", "that has stood for 5 days.", ", in that order."];
var authors = ["David Lloyd George", "Edmund C. Bentley", "Dean Acheson", "Christopher North", "Charles Lamb", "Rupert Brooke", "Friedrich Nietzsche", "George Bernard Shaw", "Frank Field", "Benjamin Disraeli"];



var emojiButton = ["🤣", "😍","😎","😜","😅","🤠"];


$('document').ready(function(){

	var input = document.querySelectorAll('input');

	$('#generer').click(function(){

			userChose = input[0].value;

			if (userChose < 1){
				alert("Merci de choisir un nombre entre 1 et 5");
			}else{}

			if (userChose > 5){
				alert("Merci de choisir un nombre entre 1 et 5");
			}else{}

			if ((userChose >= 1)  || (userChose <= 5)){

				aleaBtn = Math.floor(Math.random() * emojiButton.length);
				emojiBtn = emojiButton[aleaBtn];

				if (userChose == 1){

						document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
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

						document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
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

						document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
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

						document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
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

						document.getElementById("generer").innerHTML = "En générer d'autre ? " + emojiBtn;
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
				} else {}
	


			} else {
				alert("Merci de choisir un nombre entre 1 et 5");
				console.log("L'utilisateur a choisit un mauvais nombre");
			}

	});

			$('#generate').click(function(){
				
				userChose = input[1].value;

				if (userChose < 1){
					alert("Merci de choisir un nombre entre 1 et 5");
				}else{}
	
				if (userChose > 5){
					alert("Merci de choisir un nombre entre 1 et 5");
				}else{}

				if ((userChose >= 1)  || (userChose <= 5)){
	
					aleaBtn = Math.floor(Math.random() * emojiButton.length);
					emojiBtn = emojiButton[aleaBtn];
	
					console.log("L'utilisateur a choisit de générer " + userChose + " citation(s)");
	
					if (userChose == 1){

							document.getElementById("generate").innerHTML = "Generate another ? " + emojiBtn;
							var arrayQuote = [];
							var arrayAuthor = [];
							var i = 0;

							while(i!=1){

							   aleaQ1 = Math.floor(Math.random() * quotePart1.length);
							   aleaQ2 = Math.floor(Math.random() * quotePart2.length);
							   aleaQ3 = Math.floor(Math.random() * quotePart3.length);
							   aleaAu = Math.floor(Math.random() * authors.length);
							   var quote = quotePart1[aleaQ1] + " " + quotePart2[aleaQ2] + " " + quotePart3[aleaQ3];
							   var author = authors[aleaAu];
	
							   arrayQuote.push(quote)
							   arrayAuthor.push(author)
							   i++
							}
	
							$('.container_quote1').removeClass("hide");
							$('.container_quote2').addClass("hide");
							$('.container_quote3').addClass("hide");
							$('.container_quote4').addClass("hide");
							$('.container_quote5').addClass("hide");
	
							$('.quote1').html(arrayQuote[0]);
							$('.author1').html(arrayAuthor[0]);
	
	
					}else{}
	
					if (userChose == 2){

							document.getElementById("generate").innerHTML = "Generate another ? " + emojiBtn;
							var arrayQuote = [];
							var arrayAuthor = [];
							var i = 0;
							
							while(i!=2){

							   aleaQ1 = Math.floor(Math.random() * quotePart1.length);
							   aleaQ2 = Math.floor(Math.random() * quotePart2.length);
							   aleaQ3 = Math.floor(Math.random() * quotePart3.length);
							   aleaAu = Math.floor(Math.random() * authors.length);
							   var quote = quotePart1[aleaQ1] + " " + quotePart2[aleaQ2] + " " + quotePart3[aleaQ3];
							   var author = authors[aleaAu];
	
							   arrayQuote.push(quote)
							   arrayAuthor.push(author)
							   i++
							}

							$('.container_quote1').removeClass("hide");
							$('.container_quote2').removeClass("hide");
							$('.container_quote3').addClass("hide");
							$('.container_quote4').addClass("hide");
							$('.container_quote5').addClass("hide");

							$('.quote1').html(arrayQuote[0]);
							$('.quote2').html(arrayQuote[1]);
							$('.author1').html(arrayAuthor[0]);
							$('.author2').html(arrayAuthor[1]);

					}else{}
	
					if (userChose == 3){

							document.getElementById("generate").innerHTML = "Generate another ? " + emojiBtn;
							var arrayQuote = [];
							var arrayAuthor = [];
							var i = 0;
							
							while(i!=3){

							   aleaQ1 = Math.floor(Math.random() * quotePart1.length);
							   aleaQ2 = Math.floor(Math.random() * quotePart2.length);
							   aleaQ3 = Math.floor(Math.random() * quotePart3.length);
							   aleaAu = Math.floor(Math.random() * authors.length);
							   var quote = quotePart1[aleaQ1] + " " + quotePart2[aleaQ2] + " " + quotePart3[aleaQ3];
							   var author = authors[aleaAu];
	
							   arrayQuote.push(quote)
							   arrayAuthor.push(author)
							   i++
							}
	
							$('.container_quote1').removeClass("hide");
							$('.container_quote2').removeClass("hide");
							$('.container_quote3').removeClass("hide");
							$('.container_quote4').addClass("hide");
							$('.container_quote5').addClass("hide");
	
	
							$('.quote1').html(arrayQuote[0]);
							$('.quote2').html(arrayQuote[1]);
							$('.quote3').html(arrayQuote[2]);
							$('.author1').html(arrayAuthor[0]);
							$('.author2').html(arrayAuthor[1]);
							$('.author3').html(arrayAuthor[2]);

	
					}else{}
	
					if (userChose == 4){

						document.getElementById("generate").innerHTML = "Generate another ? " + emojiBtn;
						var arrayQuote = [];
						var arrayAuthor = [];
						var i = 0;
						
						while(i!=4){

						   aleaQ1 = Math.floor(Math.random() * quotePart1.length);
						   aleaQ2 = Math.floor(Math.random() * quotePart2.length);
						   aleaQ3 = Math.floor(Math.random() * quotePart3.length);
						   aleaAu = Math.floor(Math.random() * authors.length);
						   var quote = quotePart1[aleaQ1] + " " + quotePart2[aleaQ2] + " " + quotePart3[aleaQ3];
						   var author = authors[aleaAu];

						   arrayQuote.push(quote)
						   arrayAuthor.push(author)
						   i++
						}

							$('.container_quote1').removeClass("hide");
							$('.container_quote2').removeClass("hide");
							$('.container_quote3').removeClass("hide");
							$('.container_quote4').removeClass("hide");
							$('.container_quote5').addClass("hide");
	
							$('.quote1').html(arrayQuote[0]);
							$('.quote2').html(arrayQuote[1]);
							$('.quote3').html(arrayQuote[2]);
							$('.quote4').html(arrayQuote[3]);
							$('.author1').html(arrayAuthor[0]);
							$('.author2').html(arrayAuthor[1]);
							$('.author3').html(arrayAuthor[2]);
							$('.author4').html(arrayAuthor[3]);

	
					}else{}
	
					if (userChose == 5){

						document.getElementById("generate").innerHTML = "Generate another ? " + emojiBtn;
						var arrayQuote = [];
						var arrayAuthor = [];
						var i = 0;
						
						while(i!=5){

						   aleaQ1 = Math.floor(Math.random() * quotePart1.length);
						   aleaQ2 = Math.floor(Math.random() * quotePart2.length);
						   aleaQ3 = Math.floor(Math.random() * quotePart3.length);
						   aleaAu = Math.floor(Math.random() * authors.length);
						   var quote = quotePart1[aleaQ1] + " " + quotePart2[aleaQ2] + " " + quotePart3[aleaQ3];
						   var author = authors[aleaAu];

						   arrayQuote.push(quote)
						   arrayAuthor.push(author)
						   i++
						}
	
							$('.container_quote1').removeClass("hide");
							$('.container_quote2').removeClass("hide");
							$('.container_quote3').removeClass("hide");
							$('.container_quote4').removeClass("hide");
							$('.container_quote5').removeClass("hide");
	
							
							$('.quote1').html(arrayQuote[0]);
							$('.quote2').html(arrayQuote[1]);
							$('.quote3').html(arrayQuote[2]);
							$('.quote4').html(arrayQuote[3]);
							$('.quote5').html(arrayQuote[4]);
							$('.author1').html(arrayAuthor[0]);
							$('.author2').html(arrayAuthor[1]);
							$('.author3').html(arrayAuthor[2]);
							$('.author4').html(arrayAuthor[3]);
							$('.author5').html(arrayAuthor[4]);

					} else {
	
					}
	
	
	
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