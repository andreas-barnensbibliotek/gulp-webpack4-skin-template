import drpImgItm from './components/drpImgItm';
import levelsettings from './components/Levelsettings';

$(function() {
	const bibblomonspel = function() {
		let mainscore;
		let _numbtowin;
		let startStop = false;
		let $Score;

		let lvlObj = levelsettings();
		let drpImgObj = drpImgItm();

		function init() {}

		function DOMHandler() {
			$Score = $('.score');
		}

		function rain() {
			let animationEnd = 'oanimationend animationend webkitAnimationEnd';
			let left = getRandomBetween(82, 1);
			let animationDuration = animationcmd(); //getRandomBetween(2.0, 1.5);
			let rainInterval = getRainInterval();
			let rnditm = getRandom();

			if (startStop) {
				// if (rnditm <= 0.5) {
				// 	klickImgItem(
				// 		lvlObj.currentlvl(),
				// 		'drake',
				// 		animationEnd,
				// 		left,
				// 		animationDuration
				// 	);
				// } else {
				// 	klickImgItem(
				// 		lvlObj.currentlvl(),
				// 		'bibblomon',
				// 		animationEnd,
				// 		left,
				// 		animationDuration
				// 	);
				// }

				// switch (rnditm) {
				// 	case rnditm <= 0.5:
				// 		klickbibblomon(animationEnd, left, animationDuration);
				// 	default:
				// 		klickdrake(animationEnd, left, animationDuration);
				// }

				if (rnditm <= 0.5) {
					klickbibblomon(animationEnd, left, animationDuration);
				} else {
					klickdrake(animationEnd, left, animationDuration);
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
			let scoreFactor =
				parseInt($Score.text()) * Math.floor(Math.random() * 150);
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
				updateLife();
			}
		}

		function updatedownScore() {
			let score = parseInt($Score.text());

			mainscore = score;
			$Score.text(score);

			updateLife();
		}

		function updateLife() {
			$('.life:first').remove();
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
			$('body').addClass('blink');
			setTimeout(function() {
				$('body').removeClass('blink');
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

		// function updateLife() {
		// 	$('.life:first').remove();
		// 	if (mainscore >= _numbtowin) {
		// 		$('.life').remove();
		// 		$('.game-win-wrapper').show();
		// 		startStop = false;
		// 		return;
		// 	} else {
		// 		if ($('.life').length == 0) {
		// 			$('.game-over-wrapper').show();
		// 			startStop = false;
		// 			return;
		// 		}
		// 	}
		// 	$('body').addClass('blink');
		// 	setTimeout(function() {
		// 		$('body').removeClass('blink');
		// 	}, 100);
		// }

		function init() {
			DOMHandler();
			lvlObj.setmaxlvl(4);
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
			let life = '<div class="life"></div>\n';
			$('.score-life-container').append(life + life + life + life + life);
			$('.hamburguer').remove();
			setTimeout(rain, 1000);
		}

		function getRandomBetween(min, max) {
			let animationscore = Math.random() * (max - min) + min;
			return animationscore; //- scoreFactor;
		}
		function getRandom() {
			return Math.random();
		}

		function klickbibblomon(animationEnd, left, animationDuration) {
			$('<a style="height:50px; width:50px; display:block;"></a>')
				.css({
					left: left + '%'
				})
				.html(
					'<img alt="En elak drake" src="/images/Drake8_150px.png" title="En elak drake" height="50" width="50">'
				)
				.bind(animationEnd, function() {
					if ($(this).hasClass('hamburguer--down')) updateLife();
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

		function klickdrake(animationEnd, left, animationDuration) {
			$('<a style="height:50px; width:50px; display:block;"></a>')
				.css({
					left: left + '%'
				})
				.html(
					'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blackfisken_Skriv_475w.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
				)
				.bind(animationEnd, function() {
					$(this).remove();
				})
				.on('click touchstart mousedown', function(e) {
					updatedownScore();
					$(this).remove();
				})
				.addClass('hamburguer hamburguer--down')
				.css({ 'animation-duration': animationDuration + 's' })
				.appendTo('.hamburguer-container');
		}

		function klickImgItem(lvl, typ, animationEnd, left, animationDuration) {
			//let animationEnd = 'oanimationend animationend webkitAnimationEnd';
			let $imgitem = $(
				'<a style="height:50px; width:50px; display:block;"></a>'
			);

			$imgitem.css({
				left: left + '%'
			});

			$imgitem.html(drpImgObj.rnddropitem(typ, lvl));

			if ((typ = 'drake')) {
				$imgitem
					.bind(animationEnd, function() {
						if ($(this).hasClass('hamburguer--down')) updateLife();
						else updateScore();
						$(this).remove();
					})
					.on('click touchstart mousedown', function(e) {
						$(this)
							.removeClass('hamburguer--down')
							.css({ 'animation-duration': '0.5s' })
							.addClass('hamburguer--up');
					});
			} else {
				$imgitem
					.bind(animationEnd, function() {
						$(this).remove();
					})
					.on('click touchstart mousedown', function(e) {
						updatedownScore();
						$(this).remove();
					});
			}

			$imgitem
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
			gameinit: init()
		};
	};

	let gamesetting = {
		draklevel: '7',
		biblomonlevel: '1'
	};

	let bibSpelObj = bibblomonspel();
	bibSpelObj.init;
});
