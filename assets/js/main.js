import bibblomonspel from './spel/bibblomonspel';

$(function() {
	let gamesetting = {
		draklevel: '10',
		biblomonlevel: '7'
	};

	let bibSpelObj = bibblomonspel();
	bibSpelObj.gameinit(gamesetting);
});
//setMaxLvl = hur många level man måste slutföra dvs hur stark är draken i level
