états = {
	"⛊": {affiché: true, sélécteur: "img", display: "inline"},
	"📆": {affiché: true, sélécteur: "span", display: "inline"},
	"🌿": {affiché: false, sélécteur: ".éteinte", display: "block"},
};

function basculer(clé) {
	config = états[clé.innerText];
	éléments = document.querySelectorAll(config.sélécteur);
	for (élément of éléments) {élément.style.display = config.affiché ? "none" : config.display;}
	config.affiché = !config.affiché;
}

function masquer(bouton) {
	divs = bouton.parentElement.parentElement.querySelectorAll("div");
	divs.forEach(
		function(div) {
			// if (div.style.opacity == "0") {div.style.opacity = "1";} else {div.style.opacity = "0";}
			if (div.style.display == "none") {div.style.display = "block";} else {div.style.display = "none";}
		}
	);
}

canoniques = {

	"saint": "Saint ",
	"sainte": "Sainte ",

	"bienheureux": "Bienheureux ",
	"geseenten": "Geseenten ",

}

ecclesiastiques = {

	"archevêque": "Archevêque ",

	"évêque": "Évêque ",

	"cardinal": "Cardinal ",

	"abbé": "Abbé ",

	"moine": "Moine ",

	"prêtre": "Prêtre ",

	"chanoine": "Chanoine ",

	"religieux": "Religieux ",

}

temporels = {

	"empereur": "Empereur ",
	"царь": "Царь ",
	"sultan": "Sultan ",

	"roi": "Roi",
	"reine": "Reine ",

	"roi.saliens": "Roi des Saliens ",
	"roi.orléans": "Roi d’Orléans ",
	"roi.paris": "Roi de Paris ",
	"roi.austrasie": "Roi d’Austrasie ",
	"roi.aquitaine": "Roi d’Aquitaine ",

	"fürst": "Fürst ",

	"großherzog": "Großherzog ",
	"großherzogin": "Großherzogin ",
	"великая-княжна": "Великая княжна ",

	"duc": "Duc ",
	"dug": "Dug ",
	"herzog": "Herzog ",
	"duchesse": "Duchesse ",
	"dugez": "Dugez ",
	"herzogin": "Herzogin ",

	"marquis": "Marquis ",
	"marquise": "Marquise ",

	"comte": "Comte ",
	"comtesse": "Comtesse ",

	"présomptif": "Héritier présomptif ",
	"mutmaßliche": "Mutmaßliche erbe ",
	"царевич": "Царевич ",

	"chef": "Chef ",
	"exclus": "Exclus ",
	"baillistr": "Baillistr ",
	"madame-royale": "Madame Royale",
	"avoué-du-saint-sépulcre": "Avoué du Saint-Sépulcre",

};

function titrer() {
	document.querySelectorAll('div[class]').forEach(
		personne => {
			titres = [];
			if (personne.classList.contains("roi") && personne.classList.contains("austrasie")) {
				titres.push("Roi d’Austrasie");
			} else if (personne.classList.contains("roi") && personne.classList.contains("neustrie")) {
				titres.push("Roi de Neustrie");
			} else if (personne.classList.contains("roi") && personne.classList.contains("paris") && personne.classList.contains("orléans")) {
				titres.push("Roi de Paris puis d’Orléans");
			} else if (personne.classList.contains("roi") && personne.classList.contains("consort")) {
				titres.push("Roi consort");
			} else if (personne.classList.contains("duc") && personne.classList.contains("roi")) {
				titres.push("Duc puis Roi");
			} else {
				for ([classe, nom] of Object.entries(Object.assign(canoniques, ecclesiastiques, temporels))) {
					if (personne.classList.contains(classe)) {titres.push(nom);}
				}
			}
			if (titres.length > 0) {
				prefixe = titres.join(" ") + " ";
				personne.innerHTML = prefixe + personne.innerHTML;
			}
		}
	);
}

window.onload = titrer;
