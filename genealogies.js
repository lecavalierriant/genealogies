états = {
	"🛡️": {affiché: true, sélécteur: "img", display: "inline"},
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
	if (bouton.innerText == "❌") {bouton.innerText = "✔️";} else {bouton.innerText = "❌";}
	divs = bouton.parentElement.parentElement.querySelectorAll("div");
	divs.forEach(
		function(div) {
			if (div.style.display == "none") {div.style.display = "block";} else {div.style.display = "none";}
		}
	);
}

canoniques = {

	"saint": "Saint",
	"sainte": "Sainte",

	"bienheureux": "Bienheureux",
	"geseenten": "Geseenten",

}

ecclesiastiques = {

	"pape": "Pape",

	"archevêque": "Archevêque",

	"évêque": "Évêque",

	"cardinal": "Cardinal",

	"abbé": "Abbé",

	"moine": "Moine",

	"prêtre": "Prêtre",

	"chanoine": "Chanoine",

	"religieux": "Religieux",

}

temporels = {

	"empereur": "Empereur",
	"императоръ": "Императоръ",
	"императрица": "Императрица",
	"царь": "Царь <span>всея Русі</span>",
	"sultan": "Sultan",

	"roi": "Roi",
	"reine": "Reine",
	"βασιλεων": "Βασιλέων",

	"fürst": "Fürst",

	"grand-duc": "Grand-Duc",
	"großherzog": "Großherzog",
	"großherzogin": "Großherzogin",
	"великии-князь": "Великий князь",
	"великая-княжна": "Великая княжна",

	"duc": "Duc",
	"duchesse": "Duchesse",
	"dug": "Dug",
	"duchez": "Duchez",
	"herzog": "Herzog",
	"herzogin": "Herzogin",

	"marquis": "Marquis",
	"marquise": "Marquise",

	"comte": "Comte",
	"comtesse": "Comtesse",

	"seigneur": "Seigneur",

	"présomptif": "Héritier présomptif",
	"mutmaßliche": "Mutmaßliche erbe",
	"царевич": "Царевич",

	"chef": "Chef <span>de famille</span>",
	"baillistr": "Baillistr",
		"madame-royale": "Madame Royale",
		"avoué-du-saint-sépulcre": "Avoué du Saint-Sépulcre",

	"consort": "[Consort]",

};

peuples = {
	"francs": "<span>des Francs</span>",
	"francais": "<span>des Français</span>",
	"saliens": "<span>des Saliens</span>",
};

terres = {
	"angleterre": "<span>d’Angleterre</span>",
	"aquitaine": "<span>d’Aquitaine</span>",
	"austrasie": "<span>d’Austrasie</span>",
	"breizh": "<span>Breizh</span>",
	"bretagne": "<span>de Bretagne</span>",
	"champagne": "<span>de Champagne</span>",
	"france": "<span>de France</span>",
	"jérusalem": "<span>de Jérusalem</span>",
	"loutrengen": "<span>vu Loutrengen</span>",
	"luxembourg": "<span>de Luxembourg</span>",
	"navarre": "<span>de Navarre</span>",
	"orléans": "<span>d’Orléans</span>",
	"paris": "<span>de Paris</span>",
	"parme": "<span>de Parme</span>",
	"всероссиискии": "<span>Всероссійскій</span>",
};

function titrer() {
	document.querySelectorAll('div[class]').forEach(
		personne => {
			titres = [];
			for ([classe, nom] of Object.entries(Object.assign(canoniques, ecclesiastiques, temporels, peuples, terres))) {
				if (personne.classList.contains(classe)) {titres.push(nom);}
			}
			if (titres.length > 0) {
				prefixe = titres.join(" ") + " ";
				personne.innerHTML = prefixe + personne.innerHTML;
			}
		}
	);
}

window.onload = titrer;
