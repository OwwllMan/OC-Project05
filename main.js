
var citation = null;
var aleaA = null;

var citationPart1 = ["Citation1.1", "Citation1.2", "Citation1.3"];
var citationPart2 = ["Citation2.1", "Citation2.2", "Citation2.3"];
var citationPart3 = ["Citation3.1", "Citation3.2", "Citation3.3"];
var auteurs = ["Auteur1", "Auteur2", "Auteur3"];



$('document').ready(function(){


	$('#generer').click(function(){

			aleaC1 = Math.floor(Math.random() * citationPart1.length);
			aleaC2 = Math.floor(Math.random() * citationPart2.length);
			aleaC3 = Math.floor(Math.random() * citationPart3.length);

			aleaA = Math.floor(Math.random() * auteurs.length);

			var citation = citationPart1[aleaC1] + " " + citationPart2[aleaC2] + " " + citationPart3[aleaC3];
			$('.citation').html(citation);
			$('.auteur').html(auteurs[aleaA]);	
	});

	$('#tweeter').click(function(){
		window.open('https://twitter.com/intent/tweet?text=' + citations + " - " + auteurs +'&via=OC&hashtags=citation&url=https://google.com', 'twitter', 'height=300, width=550, scrollbars=0, menubar=0');

	});


});