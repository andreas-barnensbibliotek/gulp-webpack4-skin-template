import bibblomonspel from './spel/bibblomonspel';

$(function() {
	let gamesetting = {
		draklevel: '7',
		biblomonlevel: '1'
	};

	let bibSpelObj = bibblomonspel();
	bibSpelObj.init(gamesetting);
});
