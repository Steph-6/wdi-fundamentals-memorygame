var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var game = document.getElementById("game-board");

function createCards() {
	for (var i = 0; i < 4; i++) {
		var card = document.createElement("div");
		card.className = "card";
		game.appendChild(card);
		card.setAttribute("data-card",cards[i]);
		cardElement.addEventListener("click", isTwoCards);
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
	//remove images
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute("data-card"));
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = "<img src="King.png">";
	}
	else {
		this.innerHTML = "<img src="Queen.png">";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

