(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/Levelsettings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const levelsettings = () => {\n  let level = 1;\n  let maxlevel = 1;\n  let lifelvl = 1;\n\n  function setMaxLvl(lvl) {\n    maxlevel = lvl - 1;\n  }\n\n  function setlvl(lvl) {\n    level += lvl;\n  }\n\n  function restartlvl() {\n    level = 1;\n  }\n\n  function getcurlvl() {\n    return level;\n  }\n\n  function setlifelevel(lvl) {\n    lifelvl = lvl;\n  }\n\n  function getlifelevel() {\n    return lifelvl;\n  }\n\n  function canlevelup() {\n    if (level <= maxlevel) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  function svarighetsgrad(inclvl) {\n    let ret = levelgrader.level[inclvl - 1];\n    return ret;\n  }\n\n  return {\n    setmaxlvl: setMaxLvl,\n    setlvl: setlvl,\n    currentlvl: getcurlvl,\n    canlevelup: canlevelup,\n    restartlvl: restartlvl,\n    svarighet: svarighetsgrad,\n    setlifelevel: setlifelevel,\n    getlifelevel: getlifelevel,\n    alfvalue: 'detta är ett simpelt värde från hello test!'\n  };\n};\n\nconst levelgrader = {\n  level: [{\n    lvl: 1,\n    numbtowin: 4,\n    hastighet: 1,\n    powerups: 0.1,\n    baddrops: 0.88\n  }, {\n    lvl: 2,\n    numbtowin: 8,\n    hastighet: 1,\n    powerups: 0.08,\n    baddrops: 0.88\n  }, {\n    lvl: 3,\n    numbtowin: 12,\n    hastighet: 1,\n    powerups: 0.08,\n    baddrops: 0.88\n  }, {\n    lvl: 4,\n    numbtowin: 15,\n    hastighet: 1,\n    powerups: 0.06,\n    baddrops: 0.78\n  }, {\n    lvl: 5,\n    numbtowin: 20,\n    hastighet: 1,\n    powerups: 0.06,\n    baddrops: 0.6\n  }, {\n    lvl: 6,\n    numbtowin: 25,\n    hastighet: 1,\n    powerups: 0.065,\n    baddrops: 0.59\n  }, {\n    lvl: 7,\n    numbtowin: 27,\n    hastighet: 1,\n    powerups: 0.064,\n    baddrops: 0.54\n  }, {\n    lvl: 8,\n    numbtowin: 30,\n    hastighet: 1,\n    powerups: 0.054,\n    baddrops: 0.56\n  }, {\n    lvl: 9,\n    numbtowin: 32,\n    hastighet: 1,\n    powerups: 0.044,\n    baddrops: 0.54\n  }, {\n    lvl: 10,\n    numbtowin: 35,\n    hastighet: 1,\n    powerups: 0.03,\n    baddrops: 0.5\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"a\"] = (levelsettings);\n\n//# sourceURL=webpack:///./assets/js/components/Levelsettings.js?");
    },
    "./assets/js/components/drpImgItm.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('const drpImgItm = () => {\n  // function klickImgItem(lvl, typ, left, animationDuration) {\n  // \tlet animationEnd = \'oanimationend animationend webkitAnimationEnd\';\n  // \tlet $imgitem= $(\'<a style="height:50px; width:50px; display:block;"></a>\');\n  // \t\t$imgitem.css({\n  // \t\t\tleft: left + \'%\'\n  // \t\t})\n  // \t\t$imgitem.html(\n  // \t\t\trnddropitem(typ, lvl)\n  // \t\t)\n  // \t\t$imgitem.bind(animationEnd, function() {\n  // \t\t\tif ($(this).hasClass(\'hamburguer--down\')) updateLife();\n  // \t\t\telse updateScore();\n  // \t\t\t$(this).remove();\n  // \t\t})\n  // \t\t$imgitem.on(\'click touchstart mousedown\', function(e) {\n  // \t\t\t$(this)\n  // \t\t\t\t.removeClass(\'hamburguer--down\')\n  // \t\t\t\t.css({ \'animation-duration\': \'0.5s\' })\n  // \t\t\t\t.addClass(\'hamburguer--up\');\n  // \t\t})\n  // \t\t.addClass(\'hamburguer hamburguer--down\')\n  // \t\t.css({ \'animation-duration\': animationDuration + \'s\' })\n  // \t\t.appendTo(\'.hamburguer-container\');\n  // }\n  function rnddropitem(typ, lvl) {\n    let rndnr;\n    let retobj;\n\n    if (typ == \'drake\') {\n      if (lvl <= 2) {\n        retobj = itmSrcList.drake[0].img;\n      }\n\n      if (lvl > 2 && lvl <= 5) {\n        if (rndimg(1) == 1) {\n          retobj = itmSrcList.drake[0].img;\n        } else {\n          retobj = itmSrcList.drake[1].img;\n        }\n      }\n\n      if (lvl > 5 && lvl <= 8) {\n        retobj = itmSrcList.drake[rndimg(3)].img;\n      } else {\n        retobj = itmSrcList.drake[0].img;\n      }\n    } else {\n      if (lvl <= 2) {\n        retobj = itmSrcList.bibblomon[0].img;\n      }\n\n      if (lvl > 2 && lvl <= 5) {\n        rndnr = rndimg(3);\n        retobj = itmSrcList.bibblomon[rndnr].img;\n      }\n\n      if (lvl > 5 && lvl <= 8) {\n        rndnr = rndimg(8);\n        retobj = itmSrcList.bibblomon[rndnr].img;\n      } else {\n        retobj = itmSrcList.bibblomon[0].img;\n      }\n    } // switch (typ) {\n    // \tcase \'drake\':\n    // \t\tswitch (lvl) {\n    // \t\t\tcase lvl <= 2:\n    // \t\t\t\tretobj = itmSrcList.drake[0].img;\n    // \t\t\t\tbreak;\n    // \t\t\tcase lvl > 2 && lvl <= 5:\n    // \t\t\t\tif (rndimg(1) == 1) {\n    // \t\t\t\t\tretobj = itmSrcList.drake[0].img;\n    // \t\t\t\t} else {\n    // \t\t\t\t\tretobj = itmSrcList.drake[1].img;\n    // \t\t\t\t}\n    // \t\t\t\tbreak;\n    // \t\t\tcase lvl > 5 && lvl <= 8:\n    // \t\t\t\trndnr = rndimg(3);\n    // \t\t\t\tretobj = itmSrcList.drake[rndnr].img;\n    // \t\t\t\tbreak;\n    // \t\t\tdefault:\n    // \t\t\t\tretobj = itmSrcList.drake[0].img;\n    // \t\t}\n    // \t\tbreak;\n    // \tdefault:\n    // \t\tswitch (lvl) {\n    // \t\t\tcase lvl <= 2:\n    // \t\t\t\tretobj = itmSrcList.bibblomon[0].img;\n    // \t\t\t\tbreak;\n    // \t\t\tcase lvl > 2 && lvl <= 5:\n    // \t\t\t\trndnr = rndimg(3);\n    // \t\t\t\tretobj = itmSrcList.bibblomon[rndnr].img;\n    // \t\t\t\tbreak;\n    // \t\t\tcase lvl > 5 && lvl <= 8:\n    // \t\t\t\trndnr = rndimg(8);\n    // \t\t\t\tretobj = itmSrcList.bibblomon[rndnr].img;\n    // \t\t\t\tbreak;\n    // \t\t\tdefault:\n    // \t\t\t\tretobj = itmSrcList.bibblomon[0].img;\n    // \t\t}\n    // }\n\n\n    return retobj;\n  }\n\n  function rndimg(antal) {\n    if (antal <= 0) {\n      antal = 1;\n    }\n\n    return Math.round(Math.random() * antal);\n  }\n\n  function loseLifeImghtml(val) {\n    let retobj = \'\';\n    val -= 1;\n\n    if (val > 0) {\n      retobj = itmSrcList.bibblomon[3].img;\n    } else {\n      retobj = itmSrcList.bibblomon[0].img; //\'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blackfisken_Skriv_475w.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n    }\n\n    return retobj;\n  }\n\n  return {\n    rnddropitem: rnddropitem,\n    loseLifeImghtml: loseLifeImghtml,\n    alfvalue: \'detta är ett simpelt värde från hello test!\'\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (drpImgItm);\nconst itmSrcList = {\n  drake: [{\n    img: \'<img alt="En elak drake" src="/images/Drake8_150px.png" title="En elak drake" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En elak drake" src="/images/Drake1_150px.png" title="En elak drake" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En elak drake" src="/images/Drake2_150px.png" title="En elak drake" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En elak drake" src="/images/Drake3_150px.png" title="En elak drake" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En elak drake" src="/images/Drake4_150px.png" title="En elak drake" height="50" width="50">\'\n  }],\n  bibblomon: [{\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Blackfisken_Skriv_475w.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Minidrakula_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Minikatt_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Monstermon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Mumiemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Nallemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Robomon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Skrackemon_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }, {\n    img: \'<img alt="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" src="/images/Trekanten_bg_150px.png" title="En lila bläckfisk som håller ett skrivblock och pennor i sina armar" height="50" width="50">\'\n  }]\n};\n\n//# sourceURL=webpack:///./assets/js/components/drpImgItm.js?');
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _spel_bibblomonspel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spel/bibblomonspel */ "./assets/js/spel/bibblomonspel.js");\n\n$(function () {\n  let gamesetting = {\n    draklevel: \'10\',\n    biblomonlevel: \'7\'\n  };\n  let bibSpelObj = Object(_spel_bibblomonspel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n  bibSpelObj.gameinit(gamesetting);\n}); //setMaxLvl = hur många level man måste slutföra dvs hur stark är draken i level\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/spel/bibblomonspel.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_drpImgItm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/drpImgItm */ \"./assets/js/components/drpImgItm.js\");\n/* harmony import */ var _components_Levelsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Levelsettings */ \"./assets/js/components/Levelsettings.js\");\n\n\n\nconst bibblomonspel = function bibblomonspel() {\n  let mainscore;\n\n  let _numbtowin;\n\n  let startStop = false;\n  let $Score;\n  let lvlObj = Object(_components_Levelsettings__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])();\n  let drpImgObj = Object(_components_drpImgItm__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n\n  function DOMHandler() {\n    $Score = $('.score');\n  }\n\n  function rain() {\n    let animationEnd = 'oanimationend animationend webkitAnimationEnd';\n    let left = getRandomBetween(82, 1);\n    let animationDuration = animationcmd(); //getRandomBetween(2.0, 1.5);\n\n    let rainInterval = getRainInterval();\n    let rnditm = getRandom();\n    let objlvl = lvlObj.svarighet(lvlObj.currentlvl());\n\n    if (startStop) {\n      if (rnditm <= 0.5) {\n        if (rnditm <= objlvl.powerups) {\n          // hur ofta +1 life skall droppas\n          klickPowerup(animationEnd, left, animationDuration);\n        } else {\n          jagaDrake(animationEnd, left, animationDuration);\n        }\n      } else {\n        let xtrachance = 1;\n\n        if (rnditm >= objlvl.baddrops) {\n          // hur ofta -2 item skall droppas\n          xtrachance = getRandomInteger(2); // här kan sättas om man vill ha -2 default eller mer\n        }\n\n        dontKlickFallingItem(animationEnd, left, animationDuration, xtrachance);\n      }\n\n      setTimeout(rain, rainInterval);\n    }\n  }\n\n  function animationcmd() {\n    let scoreFactor = parseInt($Score.text()) / 100;\n    let rndfactor = getRandomBetween(2.0, 1.5) - scoreFactor;\n    return rndfactor;\n  }\n\n  function getRainInterval() {\n    let scoreFactor = parseInt($Score.text()) * Math.floor(Math.random() * 150);\n    let rainInterval = Math.floor(Math.random() * 1750 + 500) - scoreFactor; // console.log('rainInterval', rainInterval);\n\n    return rainInterval;\n  }\n\n  function updateScore() {\n    let score = parseInt($Score.text());\n    score++;\n    mainscore = score;\n    $Score.text(score);\n\n    if (mainscore >= _numbtowin) {\n      updateLife(1);\n    }\n  }\n\n  function updatedownScore(Intloselife) {\n    let score = parseInt($Score.text());\n    mainscore = score;\n    $Score.text(score);\n    updateLife(Intloselife);\n  }\n\n  function updateLife(lifes) {\n    for (let i = 0; i < lifes; i++) {\n      $('.life:first').remove();\n    }\n\n    if (mainscore >= _numbtowin) {\n      return levelup();\n    } else {\n      if ($('.life').length == 0) {\n        lvlObj.restartlvl();\n        _numbtowin = lvlObj.svarighet(1).numbtowin;\n        $('.game-over-wrapper').show();\n        startStop = false;\n        return;\n      }\n    }\n\n    $('#maincontainer').addClass('blink');\n    setTimeout(function () {\n      $('#maincontainer').removeClass('blink');\n    }, 100);\n  }\n\n  function updateaddLife() {\n    let life = '<div class=\"life\"></div>\\n';\n    $('.score-life-container').append(life);\n    $('#maincontainer').addClass('blinkgreen');\n    setTimeout(function () {\n      $('#maincontainer').removeClass('blinkgreen');\n    }, 100);\n  }\n\n  function levelup() {\n    if (startStop) {\n      if (lvlObj.canlevelup()) {\n        $('.life').remove();\n        $('.showlvl').html(lvlObj.currentlvl);\n        lvlObj.setlvl(1); // uppdatera level med 1\n\n        $('.lvlmal').html(lvlObj.svarighet(lvlObj.currentlvl()).numbtowin);\n        $('.game-lvlup-wrapper').show();\n        startStop = false;\n      } else {\n        $('.life').remove();\n        $('.game-win-wrapper').show();\n        lvlObj.restartlvl();\n        _numbtowin = lvlObj.svarighet(1).numbtowin;\n        startStop = false;\n      }\n    }\n\n    return;\n  }\n\n  function init(levsetting) {\n    DOMHandler();\n    lvlObj.setmaxlvl(levsetting.draklevel);\n    lvlObj.setlifelevel(levsetting.biblomonlevel);\n    lifehandler(lvlObj.getlifelevel());\n    _numbtowin = lvlObj.svarighet(1).numbtowin;\n    console.log();\n\n    if (startStop) {\n      setTimeout(rain, 1000);\n    }\n  }\n\n  $('.game-over__restart').click(function () {\n    mainscore = 0;\n    console.log(lvlObj.currentlvl());\n    _numbtowin = lvlObj.svarighet(lvlObj.currentlvl()).numbtowin;\n    restart();\n  });\n  $('.game-over__start').click(function () {\n    startStop = true;\n    hidemsg();\n    setTimeout(rain, 1000);\n  });\n\n  function restart() {\n    startStop = true;\n    hidemsg();\n    $Score.text('0'); // let life = '<div class=\"life\"></div>\\n';\n    // $('.score-life-container').append(life + life + life + life + life);\n\n    lifehandler(lvlObj.getlifelevel());\n    $('.hamburguer').remove();\n    setTimeout(rain, 1000);\n  }\n\n  function lifehandler(bibblemonlevel) {\n    let life = '<div class=\"life\"></div>\\n';\n\n    for (let i = 0; i < bibblemonlevel; i++) {\n      $('.score-life-container').append(life);\n    }\n  }\n\n  function getRandomBetween(min, max) {\n    let animationscore = Math.random() * (max - min) + min;\n    return animationscore; //- scoreFactor;\n  }\n\n  function getRandom() {\n    return Math.random();\n  }\n\n  function getRandomInteger(max) {\n    return Math.floor(Math.random() * max + 1); // random 1 - max\n  }\n\n  function jagaDrake(animationEnd, left, animationDuration) {\n    $('<a style=\"height:50px; width:50px; display:block;\"></a>').css({\n      left: left + '%'\n    }).html('<img alt=\"En elak drake\" src=\"/images/Drake8_150px.png\" title=\"En elak drake\" height=\"50\" width=\"50\">').bind(animationEnd, function () {\n      if ($(this).hasClass('hamburguer--down')) updateLife(1);else updateScore();\n      $(this).remove();\n    }).on('click touchstart mousedown', function (e) {\n      let upAnimationDuration = '0.5s';\n      $(this).removeClass('hamburguer--down').css({\n        'animation-duration': upAnimationDuration\n      }).addClass('hamburguer--up');\n    }).addClass('hamburguer hamburguer--down').css({\n      'animation-duration': animationDuration + 's'\n    }).appendTo('.hamburguer-container');\n  }\n\n  function dontKlickFallingItem(animationEnd, left, animationDuration, Intloselife) {\n    $('<a style=\"height:50px; width:50px; display:block;\"></a>').css({\n      left: left + '%'\n    }).html(drpImgObj.loseLifeImghtml(Intloselife)).bind(animationEnd, function () {\n      $(this).remove();\n    }).on('click touchstart mousedown', function (e) {\n      updatedownScore(Intloselife);\n      $(this).remove();\n    }).addClass('hamburguer hamburguer--down').css({\n      'animation-duration': animationDuration + 's'\n    }).appendTo('.hamburguer-container');\n  }\n\n  function klickPowerup(animationEnd, left, animationDuration) {\n    $('<a style=\"height:50px; width:50px; display:block;\"></a>').css({\n      left: left + '%'\n    }).html('<img alt=\"En lila bläckfisk som håller ett skrivblock och pennor i sina armar\" src=\"/images/Blurp_bg_150px.png\" title=\"En lila bläckfisk som håller ett skrivblock och pennor i sina armar\" height=\"50\" width=\"50\">').bind(animationEnd, function () {\n      $(this).remove();\n    }).on('click touchstart mousedown', function (e) {\n      let upAnimationDuration = '0.5s';\n      updateaddLife();\n      $(this).removeClass('hamburguer--down').css({\n        'animation-duration': upAnimationDuration\n      }).addClass('hamburguer--up');\n    }).addClass('hamburguer hamburguer--down').css({\n      'animation-duration': animationDuration + 's'\n    }).appendTo('.hamburguer-container');\n  }\n\n  function hidemsg() {\n    $('.game-over-wrapper').hide();\n    $('.game-win-wrapper').hide();\n    $('.game-lvlup-wrapper').hide();\n    $('.game-start-wrapper').hide();\n  }\n\n  return {\n    gameinit: init\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (bibblomonspel);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/spel/bibblomonspel.js?");
    }
});