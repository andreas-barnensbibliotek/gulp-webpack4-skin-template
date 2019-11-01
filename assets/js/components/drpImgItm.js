const drpImgItm = () => {
	// function klickImgItem(lvl, typ, left, animationDuration) {
	// 	let animationEnd = 'oanimationend animationend webkitAnimationEnd';
	// 	let $imgitem= $('<a style="height:50px; width:50px; display:block;"></a>');

	// 		$imgitem.css({
	// 			left: left + '%'
	// 		})

	// 		$imgitem.html(
	// 			rnddropitem(typ, lvl)
	// 		)

	// 		$imgitem.bind(animationEnd, function() {
	// 			if ($(this).hasClass('hamburguer--down')) updateLife();
	// 			else updateScore();
	// 			$(this).remove();
	// 		})

	// 		$imgitem.on('click touchstart mousedown', function(e) {

	// 			$(this)
	// 				.removeClass('hamburguer--down')
	// 				.css({ 'animation-duration': '0.5s' })
	// 				.addClass('hamburguer--up');
	// 		})
	// 		.addClass('hamburguer hamburguer--down')
	// 		.css({ 'animation-duration': animationDuration + 's' })
	// 		.appendTo('.hamburguer-container');
	// }

	function rnddropitem(typ, lvl) {
		let rndnr;
		let retobj;

		if (typ == 'drake') {
			if (lvl <= 2) {
				retobj = itmSrcList.drake[0].img;
			}

			if (lvl > 2 && lvl <= 5) {
				if (rndimg(1) == 1) {
					retobj = itmSrcList.drake[0].img;
				} else {
					retobj = itmSrcList.drake[1].img;
				}
			}
			if (lvl > 5 && lvl <= 8) {
				retobj = itmSrcList.drake[rndimg(3)].img;
			} else {
				retobj = itmSrcList.drake[0].img;
			}
		} else {
			if (lvl <= 2) {
				retobj = itmSrcList.bibblomon[0].img;
			}
			if (lvl > 2 && lvl <= 5) {
				rndnr = rndimg(3);
				retobj = itmSrcList.bibblomon[rndnr].img;
			}
			if (lvl > 5 && lvl <= 8) {
				rndnr = rndimg(8);
				retobj = itmSrcList.bibblomon[rndnr].img;
			} else {
				retobj = itmSrcList.bibblomon[0].img;
			}
		}

		// switch (typ) {
		// 	case 'drake':
		// 		switch (lvl) {
		// 			case lvl <= 2:
		// 				retobj = itmSrcList.drake[0].img;
		// 				break;
		// 			case lvl > 2 && lvl <= 5:
		// 				if (rndimg(1) == 1) {
		// 					retobj = itmSrcList.drake[0].img;
		// 				} else {
		// 					retobj = itmSrcList.drake[1].img;
		// 				}
		// 				break;
		// 			case lvl > 5 && lvl <= 8:
		// 				rndnr = rndimg(3);
		// 				retobj = itmSrcList.drake[rndnr].img;
		// 				break;
		// 			default:
		// 				retobj = itmSrcList.drake[0].img;
		// 		}

		// 		break;
		// 	default:
		// 		switch (lvl) {
		// 			case lvl <= 2:
		// 				retobj = itmSrcList.bibblomon[0].img;
		// 				break;
		// 			case lvl > 2 && lvl <= 5:
		// 				rndnr = rndimg(3);
		// 				retobj = itmSrcList.bibblomon[rndnr].img;
		// 				break;
		// 			case lvl > 5 && lvl <= 8:
		// 				rndnr = rndimg(8);
		// 				retobj = itmSrcList.bibblomon[rndnr].img;
		// 				break;
		// 			default:
		// 				retobj = itmSrcList.bibblomon[0].img;
		// 		}
		// }
		return retobj;
	}

	function rndimg(antal) {
		if (antal <= 0) {
			antal = 1;
		}
		return Math.round(Math.random() * antal);
	}

	function loseLifeImghtml(val) {
		let retobj = '';
		val -= 1;
		if (val > 0) {
			retobj = itmSrcList.bibblomon[3].img;
		} else {
			retobj = itmSrcList.bibblomon[0].img; //'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blackfisken_Skriv_475w.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		}
		return retobj;
	}

	return {
		rnddropitem: rnddropitem,
		loseLifeImghtml: loseLifeImghtml,
		alfvalue: 'detta är ett simpelt värde från hello test!'
	};
};
export default drpImgItm;

const itmSrcList = {
	drake: [
		{
			img:
				'<img alt="En elak drake" src="/images/Drake8_150px.png" title="En elak drake" height="50" width="50">'
		},
		{
			img:
				'<img alt="En elak drake" src="/images/Drake1_150px.png" title="En elak drake" height="50" width="50">'
		},
		{
			img:
				'<img alt="En elak drake" src="/images/Drake2_150px.png" title="En elak drake" height="50" width="50">'
		},
		{
			img:
				'<img alt="En elak drake" src="/images/Drake3_150px.png" title="En elak drake" height="50" width="50">'
		},
		{
			img:
				'<img alt="En elak drake" src="/images/Drake4_150px.png" title="En elak drake" height="50" width="50">'
		}
	],
	bibblomon: [
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blackfisken_Skriv_475w.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Minidrakula_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Minikatt_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Monstermon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Mumiemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Nallemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Robomon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Skrackemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		},
		{
			img:
				'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Trekanten_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">'
		}
	]
};
