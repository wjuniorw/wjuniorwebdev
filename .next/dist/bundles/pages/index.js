module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/dumb/Btn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Btn.js';




var Btn = function Btn(prop) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-2827028873',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: prop.goto, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2827028873',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        prop.children
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2827028873',
      css: 'a.jsx-2827028873:active{background:cyan;color:navy;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873:focus{background:cyan;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873:hover{background:cyan;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873{color:cyan;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5%;border:solid 1px;-webkit-text-decoration:none;text-decoration:none;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvQnRuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdRLEFBRzBCLEFBT0EsQUFNQSxBQU1KLFdBQ0UsS0FuQkYsQUFPQSxBQU1BLFdBWkEsQUFPSyxBQU1BLFdBWkEsS0FPRSxBQU1BLFdBWkEsT0FPcEIsQUFNQSxXQVpBLGFBZ0JhLFdBR00saUJBQ0ksa0RBQ1YsV0FDYiIsImZpbGUiOiJwYWdlcy9kdW1iL0J0bi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS93anVuaW9yL2NvZGUvc2l0ZS93anVuaW9yd2ViZGV2Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBCdG4gPSAocHJvcCkgPT4gKFxuICA8ZGl2PlxuICAgIDxMaW5rIGhyZWY9e3Byb3AuZ290b30+XG4gICAgICA8YT5cbiAgICAgICAgeyBwcm9wLmNoaWxkcmVuIH1cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtcbiAgICAgICAgYFxuICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDpjeWFuO1xuICAgICAgICAgIGNvbG9yOiBuYXZ5O1xuICAgICAgICAgIGNvbG9yOiBuYXZ5O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGN5YW47XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgICAgICB9XG4gICAgICAgIGE6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQ6Y3lhbjtcbiAgICAgICAgICBjb2xvcjogbmF2eTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjeWFuO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOmN5YW47XG4gICAgICAgICAgY29sb3I6IG5hdnk7XG4gICAgICAgICAgYmFja2dyb3VuZDogY3lhbjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGN5YW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAvLyBhbGlnbi1pdGVuczogY2VudGVyO1xuICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBCdG5cbiJdfQ== */\n/*@ sourceURL=pages/dumb/Btn.js */'
    })
  );
};
/* unused harmony default export */ var _unused_webpack_default_export = (Btn);

/***/ }),

/***/ "./pages/dumb/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Content.js";



var Content = function Content(prop) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-266316150" + " " + "android-content mdl-layout__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", { name: "top", className: "jsx-266316150",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", { id: "top", className: "jsx-266316150",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "section",
      { id: "me", className: "jsx-266316150" + " " + "android-me-section mdl-typography--text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "header",
        {
          className: "jsx-266316150" + " " + "android-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h2",
          {
            className: "jsx-266316150" + " " + "android-font android-slogan",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          "Full-Stack Developer"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "jsx-266316150" + " " + "android-sub-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        { id: "down", href: "#", onClick: function onClick() {
            return goTo('#talks');
          }, className: "jsx-266316150",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "button",
          { "data-upgraded": ",MaterialButton,MaterialRipple", className: "jsx-266316150" + " " + "android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "i",
            {
              className: "jsx-266316150" + " " + "material-icons",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            "expand_more"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "span",
            {
              className: "jsx-266316150" + " " + "mdl-button__ripple-container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
              className: "jsx-266316150" + " " + "mdl-ripple",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { id: "self", className: "jsx-266316150",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { id: "pict", src: "/static/wjuniorw.png", className: "jsx-266316150",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "p",
        { id: "info", className: "jsx-266316150" + " " + "android-sub-slogan",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "i",
          {
            className: "jsx-266316150",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          "Mobile Developer "
        ),
        " na",
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://www.uxmob.com/", target: "_blank", className: "jsx-266316150" + " " + "android-link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          " UXMob"
        ),
        "."
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "section",
      {
        className: "jsx-266316150" + " " + "android-opensource-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "android-opensource-section-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "h3",
          {
            className: "jsx-266316150" + " " + "mdl-typography--display-1-color-contrast",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          "Open source"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "p",
          {
            className: "jsx-266316150",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          "Veja os projetos open source que mantenho no GitHub"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "./projetos", "data-upgraded": ",MaterialButton", className: "jsx-266316150" + " " + "android-link dark mdl-button mdl-js-button mdl-typography--text-uppercase",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          "veja os projetos"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "./assets/img/opensource.jpg", className: "jsx-266316150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "section",
      { id: "talks", className: "jsx-266316150" + " " + "android-talks-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", { name: "talks", className: "jsx-266316150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "assets/img/talks.jpg", className: "jsx-266316150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "android-talks-band",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-266316150" + " " + "android-talks-band-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h3",
            {
              className: "jsx-266316150" + " " + "mdl-typography--display-2 mdl-typography--font-thin",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            "Minhas palestras"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              className: "jsx-266316150" + " " + "mdl-typography--headline mdl-typography--font-thin",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            "Veja os slides e conte\xFAdo das minhas \xFAltimas palestras em eventos e universidades pelo Brasil"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              className: "jsx-266316150",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "./talks", className: "jsx-266316150" + " " + "mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              "Veja as palestras ",
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "i",
                {
                  className: "jsx-266316150" + " " + "material-icons",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                "chevron_right"
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "section",
      {
        className: "jsx-266316150" + " " + "android-blog-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "h3",
        {
          className: "jsx-266316150" + " " + "android-section-title mdl-typography--display-1-color-contrast",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        "\xDAltimos Posts"
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "android-card-container mdl-grid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "article",
          {
            className: "jsx-266316150" + " " + "mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--3dp",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "header",
            {
              className: "jsx-266316150" + " " + "mdl-card__media",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "/assets/img/blog/docker.png", className: "jsx-266316150",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-266316150" + " " + "mdl-card__time",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "time",
              { dateTime: "2015-10-05 10:30", className: "jsx-266316150",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              "5/10/2015"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-266316150" + " " + "mdl-card__title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "./blog/introducao-ao-docker", className: "jsx-266316150",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h4",
                {
                  className: "jsx-266316150" + " " + "mdl-card__title-text",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                "Introdu\xE7\xE3o ao Docker"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-266316150" + " " + "mdl-card__supporting-text",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "p",
              {
                className: "jsx-266316150" + " " + "mdl-typography--font-light mdl-typography--subhead",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              "Introdu\xE7\xE3o ao desenvolviemento de micro-servi\xE7os utilizando Docker"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "footer",
              {
                className: "jsx-266316150",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "span",
                {
                  className: "jsx-266316150" + " " + "categories",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  }
                },
                "docker, desenvolvimento"
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "div",
            {
              className: "jsx-266316150" + " " + "mdl-card__actions",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "a",
              { href: "./blog/introducao-ao-docker", "data-upgraded": ",MaterialButton", className: "jsx-266316150" + " " + "android-link dark mdl-button mdl-js-button mdl-typography--text-uppercase",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              "Leia o post ",
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "i",
                {
                  className: "jsx-266316150" + " " + "material-icons",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                "chevron_right"
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "footer",
      {
        className: "jsx-266316150" + " " + "android-footer mdl-mega-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "mdl-mega-footer--top-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "jsx-266316150" + " " + "mdl-mega-footer--left-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-266316150" + " " + "mdl-mega-footer--right-section",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { href: "#", onClick: function onClick() {
                return goTo('#top');
              }, className: "jsx-266316150" + " " + "mdl-typography--font-light",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            "Ir para o topo ",
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              "i",
              {
                className: "jsx-266316150" + " " + "material-icons",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              "expand_less"
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "mdl-mega-footer--middle-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "p",
          {
            className: "jsx-266316150" + " " + "mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          "Copyright \xA9 2018 - Wilson Junior - ",
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { href: "mailto:wjuniorwebdev@gmail.com", className: "jsx-266316150",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            "wjuniorwebdev@gmail.com"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-266316150" + " " + "mdl-mega-footer--bottom-section",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://wjuniorw.com/", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          },
          " Home "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://wjuniorw.com/blog", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          " Blog "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://wjuniorw.com/projetos", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          " Projetos "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://wjuniorw.com/portfolio", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          " Portfolio "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://github.com/wjuniorw", target: "_blank", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          "GitHub "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "http://www.linkedin.com/in/wjuniorw", target: "_blank", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          },
          " LinkedIn "
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "a",
          { href: "https://twitter.com/@vitorleal", target: "_blank", className: "jsx-266316150" + " " + "android-link mdl-typography--font-light",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          },
          " Twitter "
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "266316150",
      css: "section.jsx-266316150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}header.jsx-266316150{width:100% !important;padding-bottom:10px;}#down.jsx-266316150>button.jsx-266316150{position:absolute;top:95%;left:55%;}@media (max-width:900px){#down.jsx-266316150>button.jsx-266316150{top:30%;left:60%;position:absolute;}}#self.jsx-266316150{width:200px;height:200px;border-radius:50%;background-color:#2c3e50;border:none;}#info.jsx-266316150{font-size:205%;}footer.jsx-266316150{background:#2c3e50;}p.jsx-266316150>a.jsx-266316150{color:#62ffda;}#pict.jsx-266316150{width:90%;height:90%;margin:5%;border-radius:50%;}#me.jsx-266316150{height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR08sQUFHd0IsQUFNUyxBQUlKLEFBUVIsQUFNRSxBQU9HLEFBR0ksQUFHSCxBQUdOLEFBTUUsUUEzQkQsRUFzQkEsRUFoQkUsQUFzQmYsRUFURSxDQU5GLEVBWnNCLENBUlosQ0F1QlYsRUFPWSxDQW5DVSxHQW1CRixDQWJULEtBOEJTLElBN0JwQixBQU9FLE9BYkYsQ0FtQjJCLE1BaUIzQixtQkFoQmMsTUEzQlUsTUE0QnhCLHdFQTNCbUIsNkZBQ1IsV0FDYiIsImZpbGUiOiJwYWdlcy9kdW1iL0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvd2p1bmlvci9jb2RlL3NpdGUvd2p1bmlvcndlYmRldiIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ29udGVudCA9IChwcm9wKT0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbmRyb2lkLWNvbnRlbnQgbWRsLWxheW91dF9fY29udGVudFwiPlxuICAgIDxhIG5hbWU9XCJ0b3BcIj48L2E+XG4gICAgPGEgaWQ9XCJ0b3BcIj48L2E+XG4gICAgPHNlY3Rpb24gaWQ9XCJtZVwiIGNsYXNzTmFtZT1cImFuZHJvaWQtbWUtc2VjdGlvbiBtZGwtdHlwb2dyYXBoeS0tdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYW5kcm9pZC1oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFuZHJvaWQtZm9udCBhbmRyb2lkLXNsb2dhblwiPkZ1bGwtU3RhY2sgRGV2ZWxvcGVyPC9oMj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiYW5kcm9pZC1zdWItc2xvZ2FuXCI+PC9wPlxuXG4gICAgICA8YSBpZD1cImRvd25cIiBocmVmPVwiI1wiIG9uQ2xpY2s9eyAoKT0+IGdvVG8oJyN0YWxrcycpIH0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYW5kcm9pZC1mYWIgbWRsLWJ1dHRvbiBtZGwtYnV0dG9uLS1jb2xvcmVkIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tZmFiIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbEJ1dHRvbixNYXRlcmlhbFJpcHBsZVwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9tb3JlPC9pPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZGwtYnV0dG9uX19yaXBwbGUtY29udGFpbmVyXCI+PHNwYW4gY2xhc3NOYW1lPVwibWRsLXJpcHBsZVwiPjwvc3Bhbj48L3NwYW4+PC9idXR0b24+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGlkPVwic2VsZlwiPlxuICAgICAgICA8aW1nIGlkPVwicGljdFwiIHNyYz1cIi9zdGF0aWMvd2p1bmlvcncucG5nXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgaWQ9XCJpbmZvXCIgY2xhc3NOYW1lPVwiYW5kcm9pZC1zdWItc2xvZ2FuXCI+XG4gICAgICAgIDxpPk1vYmlsZSBEZXZlbG9wZXIgPC9pPiBuYVxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmRyb2lkLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cudXhtb2IuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPiBVWE1vYjwvYT4uXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFuZHJvaWQtb3BlbnNvdXJjZS1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuZHJvaWQtb3BlbnNvdXJjZS1zZWN0aW9uLXRleHRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1kaXNwbGF5LTEtY29sb3ItY29udHJhc3RcIj5PcGVuIHNvdXJjZTwvaDM+XG4gICAgICAgIDxwPlZlamEgb3MgcHJvamV0b3Mgb3BlbiBzb3VyY2UgcXVlIG1hbnRlbmhvIG5vIEdpdEh1YjwvcD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIGRhcmsgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZVwiIGhyZWY9XCIuL3Byb2pldG9zXCIgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbEJ1dHRvblwiPnZlamEgb3MgcHJvamV0b3M8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL29wZW5zb3VyY2UuanBnXCIgLz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gaWQ9XCJ0YWxrc1wiIGNsYXNzTmFtZT1cImFuZHJvaWQtdGFsa3Mtc2VjdGlvblwiPlxuICAgICAgPGEgbmFtZT1cInRhbGtzXCI+PC9hPlxuICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL3RhbGtzLmpwZ1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuZHJvaWQtdGFsa3MtYmFuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuZHJvaWQtdGFsa3MtYmFuZC10ZXh0XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1kaXNwbGF5LTIgbWRsLXR5cG9ncmFwaHktLWZvbnQtdGhpblwiPk1pbmhhcyBwYWxlc3RyYXM8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1oZWFkbGluZSBtZGwtdHlwb2dyYXBoeS0tZm9udC10aGluXCI+VmVqYSBvcyBzbGlkZXMgZSBjb250ZcO6ZG8gZGFzIG1pbmhhcyDDumx0aW1hcyBwYWxlc3RyYXMgZW0gZXZlbnRvcyBlIHVuaXZlcnNpZGFkZXMgcGVsbyBCcmFzaWw8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0tZm9udC1yZWd1bGFyIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZSBhbmRyb2lkLWFsdC1saW5rXCIgaHJlZj1cIi4vdGFsa3NcIj5cbiAgICAgICAgICAgICAgVmVqYSBhcyBwYWxlc3RyYXMgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX3JpZ2h0PC9pPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYW5kcm9pZC1ibG9nLXNlY3Rpb25cIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJhbmRyb2lkLXNlY3Rpb24tdGl0bGUgbWRsLXR5cG9ncmFwaHktLWRpc3BsYXktMS1jb2xvci1jb250cmFzdFwiPsOabHRpbW9zIFBvc3RzPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5kcm9pZC1jYXJkLWNvbnRhaW5lciBtZGwtZ3JpZFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZGwtY2VsbCBtZGwtY2VsbC0tNS1jb2wgbWRsLWNlbGwtLTEyLWNvbC10YWJsZXQgbWRsLWNlbGwtLTEyLWNvbC1waG9uZSBtZGwtY2FyZCBtZGwtc2hhZG93LS0zZHBcIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1kbC1jYXJkX19tZWRpYVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9ibG9nL2RvY2tlci5wbmdcIiAvPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpbWVcIj5cbiAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPVwiMjAxNS0xMC0wNSAxMDozMFwiPjUvMTAvMjAxNTwvdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi4vYmxvZy9pbnRyb2R1Y2FvLWFvLWRvY2tlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWRsLWNhcmRfX3RpdGxlLXRleHRcIj5JbnRyb2R1w6fDo28gYW8gRG9ja2VyPC9oND5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0IG1kbC10eXBvZ3JhcGh5LS1zdWJoZWFkXCI+SW50cm9kdcOnw6NvIGFvIGRlc2Vudm9sdmllbWVudG8gZGUgbWljcm8tc2VydmnDp29zIHV0aWxpemFuZG8gRG9ja2VyPC9wPlxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiPmRvY2tlciwgZGVzZW52b2x2aW1lbnRvPC9zcGFuPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIGRhcmsgbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZVwiIGhyZWY9XCIuL2Jsb2cvaW50cm9kdWNhby1hby1kb2NrZXJcIiBkYXRhLXVwZ3JhZGVkPVwiLE1hdGVyaWFsQnV0dG9uXCI+TGVpYSBvIHBvc3QgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGV2cm9uX3JpZ2h0PC9pPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYW5kcm9pZC1mb290ZXIgbWRsLW1lZ2EtZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1tZWdhLWZvb3Rlci0tdG9wLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbWVnYS1mb290ZXItLWxlZnQtc2VjdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1tZWdhLWZvb3Rlci0tcmlnaHQtc2VjdGlvblwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCk9PiBnb1RvKCcjdG9wJykgfT5cbiAgICAgICAgICAgIElyIHBhcmEgbyB0b3BvIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXhwYW5kX2xlc3M8L2k+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbWVnYS1mb290ZXItLW1pZGRsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWRsLXR5cG9ncmFwaHktLWZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgIENvcHlyaWdodCDCqSAyMDE4IC0gV2lsc29uIEp1bmlvciAtIDxhIGhyZWY9XCJtYWlsdG86d2p1bmlvcndlYmRldkBnbWFpbC5jb21cIj53anVuaW9yd2ViZGV2QGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLW1lZ2EtZm9vdGVyLS1ib3R0b20tc2VjdGlvblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmRyb2lkLWxpbmsgbWRsLXR5cG9ncmFwaHktLWZvbnQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly93anVuaW9ydy5jb20vXCI+IEhvbWUgPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmRyb2lkLWxpbmsgbWRsLXR5cG9ncmFwaHktLWZvbnQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly93anVuaW9ydy5jb20vYmxvZ1wiPiBCbG9nIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vd2p1bmlvcncuY29tL3Byb2pldG9zXCI+IFByb2pldG9zIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vd2p1bmlvcncuY29tL3BvcnRmb2xpb1wiPiBQb3J0Zm9saW8gPC9hPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmRyb2lkLWxpbmsgbWRsLXR5cG9ncmFwaHktLWZvbnQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dqdW5pb3J3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHA6Ly93d3cubGlua2VkaW4uY29tL2luL3dqdW5pb3J3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+IExpbmtlZEluIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vQHZpdG9ybGVhbFwiIHRhcmdldD1cIl9ibGFua1wiPiBUd2l0dGVyIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2Rvd24gPiBidXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAvLyB0b3A6IDI1JTtcbiAgICAgICAgICB0b3A6IDk1JTtcbiAgICAgICAgICBsZWZ0OiA1NSU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgI2Rvd24gPiBidXR0b24ge1xuICAgICAgICAgICAgLy8gdG9wOiAtNSU7XG4gICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI3NlbGYge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjaW5mbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDUlO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgICAgICAgfVxuICAgICAgICBwID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogIzYyZmZkYTtcbiAgICAgICAgICB9XG4gICAgICAgICNwaWN0IHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogNSU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICAgICNtZSB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG48L2Rpdj5cbilcbmNvbnN0IGdvVG8gPSBmdW5jdGlvbiAodG8pIHtcbiAgLy8gd2luZG93LnNjcm9sbFRvKDAsMSlcbiAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG8pLnNjcm9sbEludG9WaWV3KHtcbiAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcblxuXG4vLyBjb25zdCBDb250ZW50ID0gKHByb3ApPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxoMj4geyBwcm9wLnRpdGxlIH0gPC9oMj5cbi8vICAgICA8aDQ+IHsgcHJvcC5jb250ZW50IH0gPC9oND5cbi8vICAgICA8c3R5bGUganN4PlxuLy8gICAgIHtgXG4vLyAgICAgICBjb2xvcjogY3lhbjtcbi8vICAgICAgIGJhY2tncm91bmQ6IG5hdnk7XG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vL1xuLy8gICAgICAgaDIge1xuLy8gICAgICAgICAvLyBwYWRkaW5nOiAxNSU7XG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbi8vICAgICAgICAgLy8gYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBkYXNoZWQ7XG4vLyAgICAgICB9XG4vLyAgICAgICBoNCB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDEwJTtcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuLy8gICAgICAgICAvLyBib3JkZXItYmxvY2stc3RhcnQtc3R5bGU6IGRhc2hlZDtcbi8vICAgICAgIH1cbi8vICAgICBgfVxuLy8gICAgIDwvc3R5bGU+XG4vLyAgIDwvZGl2PlxuLy8gKVxuLy8gZXhwb3J0IGRlZmF1bHQgQ29udGVudFxuIl19 */\n/*@ sourceURL=pages/dumb/Content.js */"
    })
  );
};
var goTo = function goTo(to) {
  // window.scrollTo(0,1)
  window.document.querySelector(to).scrollIntoView({
    behavior: 'smooth'
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Content);

// const Content = (prop)=> (
//   <div>
//     <h2> { prop.title } </h2>
//     <h4> { prop.content } </h4>
//     <style jsx>
//     {`
//       color: cyan;
//       background: navy;
//       display: flex;
//       justify-content: center;
//       margin-top: 10px;
//       flex-direction: column;
//       align-items: center;
//
//       h2 {
//         // padding: 15%;
//         border-bottom: solid 1px;
//         // border-block-start-style: dashed;
//       }
//       h4 {
//         padding: 10%;
//         border-bottom: solid 1px;
//         // border-block-start-style: dashed;
//       }
//     `}
//     </style>
//   </div>
// )
// export default Content

/***/ }),

/***/ "./pages/dumb/Drawer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Drawer.js";


var Drawer = function Drawer(prop) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "android-drawer mdl-layout__drawer", __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      { className: "mdl-navigation", __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://wjuniorw.github.io/", __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        "Home"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://wjuniorw.com/blog", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        "Blog"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://wjuniorw.com/projetos", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        "Projetos"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://wjuniorw.com/portfolio", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        "Portfolio"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://github.com/wjuniorw", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        "GitHub"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "http://www.linkedin.com/in/wjuniorw", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        "LinkedIn"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "mdl-navigation__link", href: "https://twitter.com/@wfs_junior", target: "_blank", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        "Twitter"
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

// const Drawer = (prop) => (
//   <div className="mdl-layout__drawer">
//     <span className="mdl-layout-title">{ prop.title }</span>
//     <nav className="mdl-navigation">
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//     </nav>
//   </div>
// )
//
// export default Drawer

/***/ }),

/***/ "./pages/dumb/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Head.js";


var HtmlHead = function HtmlHead(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "initial-scale=1, width=device-width, maximum-scale=1", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "target-densitydpi=device-dpi, width=device-width, user-scalable=no, maximum-scale=1, minimum-scale=1", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "wjuniorwebdev, Wjunior, wilson junior, web developer", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "theme-color", content: "#48CBAB", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "apple-mobile-web-app-capable", content: "yes", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "mobile-web-app-capable", content: "yes", __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge", __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "/_next/static/style.css", __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "/static/material.js", __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "title",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      title
    ),
    children,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })
  );
};
/* harmony default export */ __webpack_exports__["a"] = (HtmlHead);

/***/ }),

/***/ "./pages/dumb/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Header.js";



var Header = function Header(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    { id: "header", className: "jsx-963477486" + " " + "android-header mdl-layout__header mdl-layout__header--waterfall",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-963477486" + " " + "mdl-layout__drawer-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "i",
        {
          className: "jsx-963477486" + " " + "material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        "menu"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-963477486" + " " + "mdl-layout__header-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "h1",
        {
          className: "jsx-963477486" + " " + "android-font android-title mdl-layout-title mdl-typography--text-uppercase",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        title
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-963477486" + " " + "android-header-spacer mdl-layout-spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-963477486" + " " + "android-navigation-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "nav",
          {
            className: "jsx-963477486" + " " + "android-navigation mdl-navigation",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { href: "/", className: "jsx-963477486" + " " + "mdl-navigation__link mdl-typography--text-uppercase active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            "Home"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { href: "/projetos", className: "jsx-963477486" + " " + "mdl-navigation__link mdl-typography--text-uppercase",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            "Projetos"
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "a",
            { href: "https://wjunior.com/portfolio", className: "jsx-963477486" + " " + "mdl-navigation__link mdl-typography--text-uppercase",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            "Portfolio"
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "963477486",
      css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTyIsImZpbGUiOiJwYWdlcy9kdW1iL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS93anVuaW9yL2NvZGUvc2l0ZS93anVuaW9yd2ViZGV2Iiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBIZWFkZXIgPSAoe3RpdGxlfSk9PiAoXG4gIDxkaXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJhbmRyb2lkLWhlYWRlciBtZGwtbGF5b3V0X19oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyLS13YXRlcmZhbGxcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1sYXlvdXRfX2RyYXdlci1idXR0b25cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYW5kcm9pZC1mb250IGFuZHJvaWQtdGl0bGUgbWRsLWxheW91dC10aXRsZSBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2VcIj57IHRpdGxlIH08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmRyb2lkLWhlYWRlci1zcGFjZXIgbWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5kcm9pZC1uYXZpZ2F0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImFuZHJvaWQtbmF2aWdhdGlvbiBtZGwtbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1kbC1uYXZpZ2F0aW9uX19saW5rIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZSBhY3RpdmVcIiBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWRsLW5hdmlnYXRpb25fX2xpbmsgbWRsLXR5cG9ncmFwaHktLXRleHQtdXBwZXJjYXNlXCIgaHJlZj1cIi9wcm9qZXRvc1wiPlByb2pldG9zPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1kbC1uYXZpZ2F0aW9uX19saW5rIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZVwiIGhyZWY9XCJodHRwczovL3dqdW5pb3IuY29tL3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgI2hlYWRlciAge1xuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuLy8gY29uc3QgSGVhZGVyID0gKHByb3ApPT4gKFxuLy8gICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1kbC1sYXlvdXRfX2hlYWRlclwiPlxuLy8gICAgIDxkaXYgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwibWRsLWxheW91dF9fZHJhd2VyLWJ1dHRvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj48L2k+PC9kaXY+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+XG4vLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0LXRpdGxlXCI+eyBwcm9wLnRpdGxlIH08L3NwYW4+XG4vLyAgICAgICA8YnIgLz5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dC1zcGFjZXJcIj48L2Rpdj5cbi8vICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWRsLW5hdmlnYXRpb24gbWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHlcIj5cbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIC8vIHByb3AubWVudUl0ZW5zID0gWydIb21lJywgJ1BvcnRpZm9saW8nLCAnQWJvdXQnXVxuLy8gICAgICAgICAgIFsnSG9tZScsICdQcm9qZXRvcycsICdQb3J0aWZvbGlvJywgJ0Fib3V0J10ubWFwKChpdGVtLCBpKT0+ICg8YSBjbGFzc05hbWVOYW1lPVwibWRsLW5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiXCIga2V5PXtpfT57aXRlbX08L2E+KSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgPC9uYXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgIDwvaGVhZGVyPlxuLy8gKVxuIl19 */\n/*@ sourceURL=pages/dumb/Header.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);
// const Header = (prop)=> (
//   <header className="mdl-layout__header">
//     <div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button"><i class="material-icons"></i></div>
//     <div className="mdl-layout__header-row">
//       <span className="mdl-layout-title">{ prop.title }</span>
//       <br />
//       <div className="mdl-layout-spacer"></div>
//       <nav className="mdl-navigation mdl-layout--large-screen-only">
//         {
//           // prop.menuItens = ['Home', 'Portifolio', 'About']
//           ['Home', 'Projetos', 'Portifolio', 'About'].map((item, i)=> (<a classNameName="mdl-navigation__link" href="" key={i}>{item}</a>))
//         }
//       </nav>
//     </div>
//   </header>
// )

/***/ }),

/***/ "./pages/dumb/Main-new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Head__ = __webpack_require__("./pages/dumb/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./pages/dumb/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Drawer__ = __webpack_require__("./pages/dumb/Drawer.js");
var _jsxFileName = '/home/wjunior/code/site/wjuniorwebdev/pages/dumb/Main-new.js';





var Main = function Main(_ref) {
  var title = _ref.title,
      headTitle = _ref.headTitle,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__Head__["a" /* default */],
      { title: headTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { title: title, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Drawer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    children,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mdl-layout__obfuscator', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Main);

//
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// import Header from './Header'
// import Drawer from './Drawer'
//
// const Main = (prop)=> (
// <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
//   <Header title="Wjunior"/>
//   <div className="mdl-layout__drawer">
//     <span className="mdl-layout-title">Title</span>
//     <nav className="mdl-navigation">
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//     </nav>
//   </div>
//   <main className="mdl-layout__content">
//     <div className="page-content">{ children }</div>
//   </main>
// </div>
//
// )

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dumb_Head__ = __webpack_require__("./pages/dumb/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dumb_Btn__ = __webpack_require__("./pages/dumb/Btn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dumb_Main_new__ = __webpack_require__("./pages/dumb/Main-new.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dumb_Header__ = __webpack_require__("./pages/dumb/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dumb_Content__ = __webpack_require__("./pages/dumb/Content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_main_css__ = __webpack_require__("./pages/static/main.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_material_min_css__ = __webpack_require__("./pages/static/material.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_material_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_material_min_css__);
var _jsxFileName = '/home/wjunior/code/site/wjuniorwebdev/pages/index.js';



// import Link from 'next/link'






// import './static/index.styl'


var View = function View(prop) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'mdl-layout__container', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__dumb_Head__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1, width=device-width, maximum-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    prop.children
  );
};
var Section = function Section(prop) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__dumb_Main_new__["a" /* default */],
    { headTitle: 'WJunior WebDev', title: 'Wilson Junior', __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__dumb_Content__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    View,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Section, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    })
  );
});

/***/ }),

/***/ "./pages/static/main.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/static/material.min.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map