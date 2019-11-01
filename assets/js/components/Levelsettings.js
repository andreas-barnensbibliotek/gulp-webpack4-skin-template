const levelsettings = () => {
	let level = 1;
	let maxlevel = 1;
	let lifelvl = 1;

	function setMaxLvl(lvl) {
		maxlevel = lvl - 1;
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
	function setlifelevel(lvl) {
		lifelvl = lvl;
	}
	function getlifelevel() {
		return lifelvl;
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
		setlifelevel: setlifelevel,
		getlifelevel: getlifelevel,
		alfvalue: 'detta är ett simpelt värde från hello test!'
	};
};

const levelgrader = {
	level: [
		{
			lvl: 1,
			numbtowin: 4,
			hastighet: 1,
			powerups: 0.1,
			baddrops: 0.88
		},
		{
			lvl: 2,
			numbtowin: 8,
			hastighet: 1,
			powerups: 0.08,
			baddrops: 0.88
		},
		{
			lvl: 3,
			numbtowin: 12,
			hastighet: 1,
			powerups: 0.08,
			baddrops: 0.88
		},
		{
			lvl: 4,
			numbtowin: 15,
			hastighet: 1,
			powerups: 0.06,
			baddrops: 0.78
		},
		{
			lvl: 5,
			numbtowin: 20,
			hastighet: 1,
			powerups: 0.06,
			baddrops: 0.6
		},
		{
			lvl: 6,
			numbtowin: 25,
			hastighet: 1,
			powerups: 0.065,
			baddrops: 0.59
		},
		{
			lvl: 7,
			numbtowin: 27,
			hastighet: 1,
			powerups: 0.064,
			baddrops: 0.54
		},
		{
			lvl: 8,
			numbtowin: 30,
			hastighet: 1,
			powerups: 0.054,
			baddrops: 0.56
		},
		{
			lvl: 9,
			numbtowin: 32,
			hastighet: 1,
			powerups: 0.044,
			baddrops: 0.54
		},
		{
			lvl: 10,
			numbtowin: 35,
			hastighet: 1,
			powerups: 0.03,
			baddrops: 0.5
		}
	]
};

export default levelsettings;
