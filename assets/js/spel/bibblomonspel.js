import drpImgItm from '../components/drpImgItm';
import levelsettings from '../components/Levelsettings';

const bibblomonspel = function() {
	let mainscore;
	let _numbtowin;
	let startStop = false;
	let $Score;

	let lvlObj = levelsettings();
	let drpImgObj = drpImgItm();

	function DOMHandler() {
		$Score = $('.score');
	}

	function rain() {
		let animationEnd = 'oanimationend animationend webkitAnimationEnd';
		let left = getRandomBetween(82, 1);
		let animationDuration = animationcmd(); //getRandomBetween(2.0, 1.5);
		let rainInterval = getRainInterval();
		let rnditm = getRandom();

		let objlvl = lvlObj.svarighet(lvlObj.currentlvl());

		if (startStop) {
			if (rnditm <= 0.5) {
				if (rnditm <= objlvl.powerups) {
					// hur ofta +1 life skall droppas
					klickPowerup(animationEnd, left, animationDuration);
				} else {
					jagaDrake(animationEnd, left, animationDuration);
				}
			} else {
				let xtrachance = 1;
				if (rnditm >= objlvl.baddrops) {
					// hur ofta -2 item skall droppas
					xtrachance = getRandomInteger(2); // här kan sättas om man vill ha -2 default eller mer
				}
				dontKlickFallingItem(animationEnd, left, animationDuration, xtrachance);
			}
			setTimeout(rain, rainInterval);
		}
	}

	function animationcmd() {
		let scoreFactor = parseInt($Score.text()) / 100;
		let rndfactor = getRandomBetween(2.0, 1.5) - scoreFactor;
		return rndfactor;
	}

	function getRainInterval() {
		let scoreFactor = parseInt($Score.text()) * Math.floor(Math.random() * 150);
		let rainInterval = Math.floor(Math.random() * 1750 + 500) - scoreFactor;
		// console.log('rainInterval', rainInterval);
		return rainInterval;
	}

	function updateScore() {
		let score = parseInt($Score.text());
		score++;
		mainscore = score;
		$Score.text(score);
		if (mainscore >= _numbtowin) {
			updateLife(1);
		}
	}

	function updatedownScore(Intloselife) {
		let score = parseInt($Score.text());

		mainscore = score;
		$Score.text(score);

		updateLife(Intloselife);
	}

	function updateLife(lifes) {
		for (let i = 0; i < lifes; i++) {
			$('.life:first').remove();
		}

		if (mainscore >= _numbtowin) {
			return levelup();
		} else {
			if ($('.life').length == 0) {
				lvlObj.restartlvl();
				_numbtowin = lvlObj.svarighet(1).numbtowin;
				$('.game-over-wrapper').show();
				startStop = false;
				return;
			}
		}
		$('#maincontainer').addClass('blink');
		setTimeout(function() {
			$('#maincontainer').removeClass('blink');
		}, 100);
	}

	function updateaddLife() {
		let life = '<div class="life"></div>\n';
		$('.score-life-container').append(life);
		$('#maincontainer').addClass('blinkgreen');
		setTimeout(function() {
			$('#maincontainer').removeClass('blinkgreen');
		}, 100);
	}

	function levelup() {
		if (startStop) {
			if (lvlObj.canlevelup()) {
				$('.life').remove();
				$('.showlvl').html(lvlObj.currentlvl);

				lvlObj.setlvl(1); // uppdatera level med 1
				$('.lvlmal').html(lvlObj.svarighet(lvlObj.currentlvl()).numbtowin);

				$('.game-lvlup-wrapper').show();
				startStop = false;
			} else {
				$('.life').remove();
				$('.game-win-wrapper').show();

				lvlObj.restartlvl();
				_numbtowin = lvlObj.svarighet(1).numbtowin;

				startStop = false;
			}
		}

		return;
	}

	function init(levsetting) {
		DOMHandler();
		lvlObj.setmaxlvl(levsetting.draklevel);
		lvlObj.setlifelevel(levsetting.biblomonlevel);

		lifehandler(lvlObj.getlifelevel());
		_numbtowin = lvlObj.svarighet(1).numbtowin;
		console.log();
		if (startStop) {
			setTimeout(rain, 1000);
		}
	}

	$('.game-over__restart').click(function() {
		mainscore = 0;
		console.log(lvlObj.currentlvl());
		_numbtowin = lvlObj.svarighet(lvlObj.currentlvl()).numbtowin;
		restart();
	});

	$('.game-over__start').click(function() {
		startStop = true;
		hidemsg();
		setTimeout(rain, 1000);
	});
	function restart() {
		startStop = true;
		hidemsg();

		$Score.text('0');
		// let life = '<div class="life"></div>\n';
		// $('.score-life-container').append(life + life + life + life + life);
		lifehandler(lvlObj.getlifelevel());
		$('.hamburguer').remove();
		setTimeout(rain, 1000);
	}

	function lifehandler(bibblemonlevel) {
		let life = '<div class="life"></div>\n';
		for (let i = 0; i < bibblemonlevel; i++) {
			$('.score-life-container').append(life);
		}
	}

	function getRandomBetween(min, max) {
		let animationscore = Math.random() * (max - min) + min;
		return animationscore; //- scoreFactor;
	}
	function getRandom() {
		return Math.random();
	}
	function getRandomInteger(max) {
		return Math.floor(Math.random() * max + 1); // random 1 - max
	}

	function jagaDrake(animationEnd, left, animationDuration) {
		$('<a style="height:50px; width:50px; display:block;"></a>')
			.css({
				left: left + '%'
			})
			.html(
				'<img alt="En elak drake" src="/images/Drake8_150px.png" title="En elak drake" height="50" width="50">'
			)
			.bind(animationEnd, function() {
				if ($(this).hasClass('hamburguer--down')) updateLife(1);
				else updateScore();
				$(this).remove();
			})
			.on('click touchstart mousedown', function(e) {
				let upAnimationDuration = '0.5s';
				$(this)
					.removeClass('hamburguer--down')
					.css({ 'animation-duration': upAnimationDuration })
					.addClass('hamburguer--up');
			})
			.addClass('hamburguer hamburguer--down')
			.css({ 'animation-duration': animationDuration + 's' })
			.appendTo('.hamburguer-container');
	}

	function dontKlickFallingItem(
		animationEnd,
		left,
		animationDuration,
		Intloselife
	) {
		$('<a style="height:50px; width:50px; display:block;"></a>')
			.css({
				left: left + '%'
			})
			.html(drpImgObj.loseLifeImghtml(Intloselife))
			.bind(animationEnd, function() {
				$(this).remove();
			})
			.on('click touchstart mousedown', function(e) {
				updatedownScore(Intloselife);
				$(this).remove();
			})
			.addClass('hamburguer hamburguer--down')
			.css({ 'animation-duration': animationDuration + 's' })
			.appendTo('.hamburguer-container');
	}

	function klickPowerup(animationEnd, left, animationDuration) {
		$('<a style="height:50px; width:50px; display:block;"></a>')
			.css({
				left: left + '%'
			})
			.html(
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blurp_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
			)
			.bind(animationEnd, function() {
				$(this).remove();
			})
			.on('click touchstart mousedown', function(e) {
				let upAnimationDuration = '0.5s';
				updateaddLife();
				$(this)
					.removeClass('hamburguer--down')
					.css({ 'animation-duration': upAnimationDuration })
					.addClass('hamburguer--up');
			})
			.addClass('hamburguer hamburguer--down')
			.css({ 'animation-duration': animationDuration + 's' })
			.appendTo('.hamburguer-container');
	}

	function hidemsg() {
		$('.game-over-wrapper').hide();
		$('.game-win-wrapper').hide();
		$('.game-lvlup-wrapper').hide();
		$('.game-start-wrapper').hide();
	}

	return {
		gameinit: init
	};
};

export default bibblomonspel;
