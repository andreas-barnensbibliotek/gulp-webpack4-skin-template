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
    "./assets/js/main.js": function(module, exports, __webpack_require__) {
        eval("/* WEBPACK VAR INJECTION */(function($) {$(function () {\n  const bibblomonspel = function bibblomonspel() {\n    let mainscore;\n    let _numbtowin = 20;\n    let startStop = false;\n    let $Score;\n\n    function DOMHandler() {\n      $Score = $('.score');\n    }\n\n    function rain() {\n      let animationEnd = 'oanimationend animationend webkitAnimationEnd';\n      let left = getRandomBetween(82, 1);\n      let animationDuration = animationcmd(); //getRandomBetween(2.0, 1.5);\n\n      let rainInterval = getRainInterval();\n      let rnditm = getRandom();\n\n      if (rnditm <= 0.5) {\n        klickbibblomon(animationEnd, left, animationDuration);\n      } else {\n        klickdrake(animationEnd, left, animationDuration);\n      }\n\n      if (startStop) {\n        setTimeout(rain, rainInterval);\n      }\n    }\n\n    function animationcmd() {\n      let scoreFactor = parseInt($Score.text()) / 100;\n      let rndfactor = getRandomBetween(2.0, 1.5) - scoreFactor;\n      return rndfactor;\n    }\n\n    function getRainInterval() {\n      let scoreFactor = parseInt($Score.text()) * Math.floor(Math.random() * 150);\n      let rainInterval = Math.floor(Math.random() * 1750 + 500) - scoreFactor; // console.log('rainInterval', rainInterval);\n\n      return rainInterval;\n    }\n\n    function updateScore() {\n      let score = parseInt($Score.text());\n      score++;\n      mainscore = score;\n      $Score.text(score);\n\n      if (mainscore >= _numbtowin) {\n        updateLife();\n      }\n    }\n\n    function updatedownScore() {\n      let score = parseInt($Score.text());\n      mainscore = score;\n      $Score.text(score);\n      updateLife();\n    }\n\n    function updateLife() {\n      $('.life:first').remove();\n\n      if (mainscore >= _numbtowin) {\n        $('.life').remove();\n        $('.game-win-wrapper').show();\n        startStop = false;\n        return;\n      } else {\n        if ($('.life').length == 0) {\n          $('.game-over-wrapper').show();\n          startStop = false;\n          return;\n        }\n      }\n\n      $('body').addClass('blink');\n      setTimeout(function () {\n        $('body').removeClass('blink');\n      }, 100);\n    }\n\n    function init() {\n      DOMHandler();\n\n      if (startStop) {\n        setTimeout(rain, 1000);\n      }\n    }\n\n    $('.game-over__restart').click(function () {\n      mainscore = 0;\n      restart();\n    });\n    $('.game-over__start').click(function () {\n      startStop = true;\n      hidemsg();\n      setTimeout(rain, 1000);\n    });\n\n    function restart() {\n      startStop = true;\n      hidemsg();\n      $Score.text('0');\n      let life = '<div class=\"life\"></div>\\n';\n      $('.score-life-container').append(life + life + life + life + life);\n      $('.hamburguer').remove();\n      setTimeout(rain, 1000);\n    }\n\n    function getRandomBetween(min, max) {\n      let animationscore = Math.random() * (max - min) + min;\n      return animationscore; //- scoreFactor;\n    }\n\n    function getRandom() {\n      return Math.random();\n    }\n\n    function klickbibblomon(animationEnd, left, animationDuration) {\n      $('<a style=\"height:50px; width:50px; display:block;\"></a>').css({\n        left: left + '%'\n      }).html('<img alt=\"En elak drake\" src=\"/images/Drake8_150px.png\" title=\"En elak drake\" height=\"50\" width=\"50\">').bind(animationEnd, function () {\n        if ($(this).hasClass('hamburguer--down')) updateLife();else updateScore();\n        $(this).remove();\n      }).on('click touchstart mousedown', function (e) {\n        let upAnimationDuration = '0.5s';\n        $(this).removeClass('hamburguer--down').css({\n          'animation-duration': upAnimationDuration\n        }).addClass('hamburguer--up');\n      }).addClass('hamburguer hamburguer--down').css({\n        'animation-duration': animationDuration + 's'\n      }).appendTo('.hamburguer-container');\n    }\n\n    function klickdrake(animationEnd, left, animationDuration) {\n      $('<a style=\"height:50px; width:50px; display:block;\"></a>').css({\n        left: left + '%'\n      }).html('<img alt=\"En lila bläckfisk som håller ett skrivblock och pennor i sina armar\" src=\"/images/Blackfisken_Skriv_475w.png\" title=\"En lila bläckfisk som håller ett skrivblock och pennor i sina armar\" height=\"50\" width=\"50\">').bind(animationEnd, function () {\n        $(this).remove();\n      }).on('click touchstart mousedown', function (e) {\n        updatedownScore();\n        $(this).remove();\n      }).addClass('hamburguer hamburguer--down').css({\n        'animation-duration': animationDuration + 's'\n      }).appendTo('.hamburguer-container');\n    }\n\n    function hidemsg() {\n      $('.game-over-wrapper').hide();\n      $('.game-win-wrapper').hide();\n      $('.game-start-wrapper').hide();\n    }\n\n    return {\n      gameinit: init()\n    };\n  };\n\n  let gamesetting = {};\n  let bibSpelObj = bibblomonspel();\n  bibSpelObj.init;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});