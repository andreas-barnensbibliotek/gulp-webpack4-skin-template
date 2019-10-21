import bibblomonspel from './spel/bibblomonspel';

$(function() {
	let gamesetting = {
		draklevel: '7',
		biblomonlevel: '3'
	};

	let bibSpelObj = bibblomonspel();
	bibSpelObj.gameinit(gamesetting);
});
//setMaxLvl = hur många level man måste slutföra dvs hur stark är draken i level
