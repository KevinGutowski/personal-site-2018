var imgWidth;
var card1, card2, card3, card4, card5;
var cardOrder = [];
var dContainer1, dContainer2, dContainer3, dContainer4, dContainer5;
var descriptionTranslate = 16;


$(document).ready(function() {
	card1 = $('#carousel-img-1');
	card2 = $('#carousel-img-2');
	card3 = $('#carousel-img-3');
	card4 = $('#carousel-img-4');
	card5 = $('#carousel-img-5');
	cardOrder = [card1,card2,card3,card4,card5];
	
	dContainer1 = $('#carousel-description-container-1');
	dContainer2 = $('#carousel-description-container-2');
	dContainer3 = $('#carousel-description-container-3');
	dContainer4 = $('#carousel-description-container-4');
	dContainer5 = $('#carousel-description-container-5');
	
    update();
	
	card1.click(function() {
		if ((getCurrentState() == "state1") || (getCurrentState() == "state4")) {
			state5();
		}
	});
	
	card1.hover(function() {
		// state1 = 3,4,5,1,2
		// state4 = 5,1,2,3,4
		if (getCurrentState() == "state4") {
			updateProps($(this), 1.05, -1.15, 1, 1);
		} else if (getCurrentState() == "state1") {
			updateProps($(this), 1.05, 1.15, 1, 1);
		}
	}, function() {
		if (getCurrentState() == "state4") {
			updateProps($(this), 1, -1.25, 1, 1);
		} else if (getCurrentState() == "state1") {
			updateProps($(this), 1, 1.25, 1, 1);
		}
	});
	
	card2.click(function() {
		if ((getCurrentState() == "state3") || (getCurrentState() == "state5")) {
			state4();
		}
	});
	
	card2.hover(function() {
		// state3 = 1,2,3,4,5
		// state5 = 4,5,1,2,3
		if (getCurrentState() == "state3") {
			updateProps($(this), 1.05, -1.15,1,1);
		} else if (getCurrentState() == "state5") {
			updateProps($(this), 1.05, 1.15,1,1,)
		}
	}, function() {
		if (getCurrentState() == "state3") {
			updateProps($(this), 1, -1.25, 1, 1);
		} else if (getCurrentState() == "state5") {
			updateProps($(this), 1, 1.25, 1, 1);
		}
	});
	
	card3.click(function() {
		if ((getCurrentState() == "state2") || (getCurrentState() == "state4")) {
			state3();
		}
	});
	
	card3.hover(function() {
		// state2 = 2,3,4,5,1
		// state4 = 5,1,2,3,4
		if (getCurrentState() == "state2") {
			updateProps($(this), 1.05, -1.15,1,1);
		} else if (getCurrentState() == "state4") {
			updateProps($(this), 1.05, 1.15,1,1,)
		}
	}, function() {
		if (getCurrentState() == "state2") {
			updateProps($(this), 1, -1.25, 1, 1);
		} else if (getCurrentState() == "state4") {
			updateProps($(this), 1, 1.25, 1, 1);
		}
	});
	
	card4.click(function() {
		if ((getCurrentState() == "state1") || (getCurrentState() == "state3")) {
			state2();
		}
	});
	
	card4.hover(function() {
		// state1 = 3,4,5,1,2
		// state3 = 1,2,3,4,5
		if (getCurrentState() == "state1") {
			updateProps($(this), 1.05, -1.15,1,1);
		} else if (getCurrentState() == "state3") {
			updateProps($(this), 1.05, 1.15,1,1,)
		}
	}, function() {
		if (getCurrentState() == "state1") {
			updateProps($(this), 1, -1.25, 1, 1);
		} else if (getCurrentState() == "state3") {
			updateProps($(this), 1, 1.25, 1, 1);
		}
	});
	
	card5.click(function() {
		if ((getCurrentState() == "state2") || (getCurrentState() == "state5")) {
			state1();
		}
	});
	
	card5.hover(function() {
		// state5 = 4,5,1,2,3
		// state2 = 2,3,4,5,1
		if (getCurrentState() == "state5") {
			updateProps($(this), 1.05, -1.15,1,1);
		} else if (getCurrentState() == "state2") {
			updateProps($(this), 1.05, 1.15,1,1,)
		}
	}, function() {
		if (getCurrentState() == "state5") {
			updateProps($(this), 1, -1.25, 1, 1);
		} else if (getCurrentState() == "state2") {
			updateProps($(this), 1, 1.25, 1, 1);
		}
	});
});

$( window ).resize(function() {
 	update();
});

function update() {
	imgWidth = $('#carousel-img-placeholder').width();
	updateWithCurrentState();
}

function state1() {
	updateProps(card3, .75, -1.4, 0, 0);
	updateProps(card4, 1, -1.25, 1, 1);
	updateProps(card5, 1, 0, 1, 2);
	updateProps(card1, 1, 1.25, 1, 1);
	updateProps(card2, .3, 1.4, 0, 0);
	cardOrder = [card3,card4,card5,card1,card2];
	
	updateDescriptionProps(dContainer1,0,1);
	updateDescriptionProps(dContainer2,0,1);
	updateDescriptionProps(dContainer3,0,1);
	updateDescriptionProps(dContainer4,0,1);
	updateDescriptionProps(dContainer5,1,2);
}

function state2() {
	updateProps(card2, .3, -1.4, 0, 0);
	updateProps(card3, 1, -1.25, 1, 1);
	updateProps(card4, 1, 0, 1, 2);
	updateProps(card5, 1, 1.25, 1, 1);
	updateProps(card1, .3, 1.4, 0, 0);
	cardOrder = [card2,card3,card4,card5,card1];
	
	updateDescriptionProps(dContainer1,0,1);
	updateDescriptionProps(dContainer2,0,1);
	updateDescriptionProps(dContainer3,0,1);
	updateDescriptionProps(dContainer4,1,2);
	updateDescriptionProps(dContainer5,0,1);
}

function state3() {
	updateProps(card1, .3, -1.4, 0, 0);
	updateProps(card2, 1, -1.25, 1, 1);
	updateProps(card3, 1, 0, 1, 2);
	updateProps(card4, 1, 1.25, 1, 1);
	updateProps(card5, .3, 1.4, 0, 0);
	cardOrder = [card1,card2,card3,card4,card5];
	
	updateDescriptionProps(dContainer1,0,1);
	updateDescriptionProps(dContainer2,0,1);
	updateDescriptionProps(dContainer3,1,2);
	updateDescriptionProps(dContainer4,0,1);
	updateDescriptionProps(dContainer5,0,1);
}

function state4() {
	updateProps(card5, .3, -1.4, 0, 0);
	updateProps(card1, 1, -1.25, 1, 1);
	updateProps(card2, 1, 0, 1, 2);
	updateProps(card3, 1, 1.25, 1, 1);
	updateProps(card4, .3, 1.4, 0, 0);
	cardOrder = [card5,card1,card2,card3,card4];
	
	updateDescriptionProps(dContainer1,0,1);
	updateDescriptionProps(dContainer2,1,2);
	updateDescriptionProps(dContainer3,0,1);
	updateDescriptionProps(dContainer4,0,1);
	updateDescriptionProps(dContainer5,0,1);
}

function state5() {
	updateProps(card4, .3, -1.4, 0, 0);
	updateProps(card5, 1, -1.25, 1, 1);
	updateProps(card1, 1, 0, 1, 2);
	updateProps(card2, 1, 1.25, 1, 1);
	updateProps(card3, .3, 1.4, 0, 0);
	cardOrder = [card4,card5,card1,card2,card3];
	
	updateDescriptionProps(dContainer1,1,2);
	updateDescriptionProps(dContainer2,0,1);
	updateDescriptionProps(dContainer3,0,1);
	updateDescriptionProps(dContainer4,0,1);
	updateDescriptionProps(dContainer5,0,1);
}

function updateProps(card, scale, position, opacity, zindex) {
	var scaledPosition;
	if (position > 0) {
		scaledPosition = position * imgWidth/2 + imgWidth*scale/2;
	} else if (position < 0) {
		scaledPosition = (position * imgWidth/2) - imgWidth*scale/2;
	} else {
		scaledPosition = 0;
	}
	card.css({
		transform: "translateX(" + scaledPosition + "px) " + "scale(" + scale + ")",
		opacity: "" + opacity,
		zIndex: "" + zindex
	});
}

function updateDescriptionProps(container,opacity,zindex) {
	container.find('.carousel-description-title').css({
		opacity: "" + opacity,
		zIndex: "" + zindex
	});
	
	setTimeout(function() {
		container.find('.carousel-description-caption').css({
			opacity: "" + opacity,
			zIndex: "" + zindex
		})
	}, 0);
}

function updateWithCurrentState() {
	if (cardOrder[0] == card1) {
		state3();
	} else if (cardOrder[0] == card2) {
		state2();
	} else if (cardOrder[0] == card3) {
		state1();
	} else if (cardOrder[0] == card4) {
		state5();
	} else {
		state4();
	}
}

function getCurrentState() {
	if (cardOrder[0] == card1) {
		return "state3"
	} else if (cardOrder[0] == card2) {
		return "state2"
	} else if (cardOrder[0] == card3) {
		return "state1"
	} else if (cardOrder[0] == card4) {
		return "state5"
	} else {
		return "state4"
	}
}