const Trello = require("./main");
require('dotenv').config()
if(!process.env.TOKEN && !process.env.KEY){
	throw new Error('No hay configuración con Api Key y con Token')
  }
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva4332 ${new Date()}`;
console.log("Ejecutando!");



trello.addCard(cardTitle, "LaunchX Card Description", "627e982e1c305905ab7c7682",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	}
);

