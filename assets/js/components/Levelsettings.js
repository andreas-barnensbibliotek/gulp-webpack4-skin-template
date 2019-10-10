const levelsettings = () => {
	let level = 1;
	let maxlevel = 1;

	function setMaxLvl(lvl) {
		maxlevel += lvl;
	}

	function setlvl(lvl) {
		level += lvl;
	}
	function restartlvl() {
		level = 1;
	}
	function getcurlvl() {
		return level;
	}
	function canlevelup() {
		if (level <= maxlevel) {
			return true;
		} else {
			return false;
		}
	}
	function svarighetsgrad(inclvl) {
		let ret = levelgrader.level[inclvl - 1];
		return ret;
	}

	return {
		setmaxlvl: setMaxLvl,
		setlvl: setlvl,
		currentlvl: getcurlvl,
		canlevelup: canlevelup,
		restartlvl: restartlvl,
		svarighet: svarighetsgrad,
		alfvalue: 'detta är ett simpelt värde från hello test!'
	};
};

const levelgrader = {
	level: [
		{
			lvl: 1,
			numbtowin: 4,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 2,
			numbtowin: 8,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 3,
			numbtowin: 12,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 4,
			numbtowin: 15,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 5,
			numbtowin: 20,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 6,
			numbtowin: 25,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 7,
			numbtowin: 27,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 8,
			numbtowin: 30,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 9,
			numbtowin: 32,
			hastighet: 1,
			powerups: 0
		},
		{
			lvl: 10,
			numbtowin: 35,
			hastighet: 1,
			powerups: 0
		}
	]
};

export default levelsettings;
