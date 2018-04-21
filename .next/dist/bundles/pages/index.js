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
var _jsxFileName = '/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Btn.js';




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
      css: 'a.jsx-2827028873:active{background:cyan;color:navy;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873:focus{background:cyan;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873:hover{background:cyan;color:navy;background:cyan;border-color:cyan;}a.jsx-2827028873{color:cyan;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5%;border:solid 1px;-webkit-text-decoration:none;text-decoration:none;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvQnRuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdRLEFBRzBCLEFBT0EsQUFNQSxBQU1KLFdBQ0UsS0FuQkYsQUFPQSxBQU1BLFdBWkEsQUFPSyxBQU1BLFdBWkEsS0FPRSxBQU1BLFdBWkEsT0FPcEIsQUFNQSxXQVpBLGFBZ0JhLFdBR00saUJBQ0ksa0RBQ1YsV0FDYiIsImZpbGUiOiJwYWdlcy9kdW1iL0J0bi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL3dqdW5pb3Ivd2p1bmlvcndlYmRldiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgQnRuID0gKHByb3ApID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtwcm9wLmdvdG99PlxuICAgICAgPGE+XG4gICAgICAgIHsgcHJvcC5jaGlsZHJlbiB9XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7XG4gICAgICAgIGBcbiAgICAgICAgYTphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6Y3lhbjtcbiAgICAgICAgICBjb2xvcjogbmF2eTtcbiAgICAgICAgICBjb2xvcjogbmF2eTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjeWFuO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICAgICAgfVxuICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOmN5YW47XG4gICAgICAgICAgY29sb3I6IG5hdnk7XG4gICAgICAgICAgYmFja2dyb3VuZDogY3lhbjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDpjeWFuO1xuICAgICAgICAgIGNvbG9yOiBuYXZ5O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGN5YW47XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBjeWFuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgLy8gYWxpZ24taXRlbnM6IGNlbnRlcjtcbiAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuZXhwb3J0IGRlZmF1bHQgQnRuXG4iXX0= */\n/*@ sourceURL=pages/dumb/Btn.js */'
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
var _jsxFileName = "/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Content.js";



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
      css: "section.jsx-266316150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}header.jsx-266316150{width:100% !important;padding-bottom:10px;}#down.jsx-266316150>button.jsx-266316150{position:absolute;top:95%;left:55%;}@media (max-width:900px){#down.jsx-266316150>button.jsx-266316150{top:30%;left:60%;position:absolute;}}#self.jsx-266316150{width:200px;height:200px;border-radius:50%;background-color:#2c3e50;border:none;}#info.jsx-266316150{font-size:205%;}footer.jsx-266316150{background:#2c3e50;}p.jsx-266316150>a.jsx-266316150{color:#62ffda;}#pict.jsx-266316150{width:90%;height:90%;margin:5%;border-radius:50%;}#me.jsx-266316150{height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR08sQUFHd0IsQUFNUyxBQUlKLEFBUVIsQUFNRSxBQU9HLEFBR0ksQUFHSCxBQUdOLEFBTUUsUUEzQkQsRUFzQkEsRUFoQkUsQUFzQmYsRUFURSxDQU5GLEVBWnNCLENBUlosQ0F1QlYsRUFPWSxDQW5DVSxHQW1CRixDQWJULEtBOEJTLElBN0JwQixBQU9FLE9BYkYsQ0FtQjJCLE1BaUIzQixtQkFoQmMsTUEzQlUsTUE0QnhCLHdFQTNCbUIsNkZBQ1IsV0FDYiIsImZpbGUiOiJwYWdlcy9kdW1iL0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS93anVuaW9yL3dqdW5pb3J3ZWJkZXYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IENvbnRlbnQgPSAocHJvcCk9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYW5kcm9pZC1jb250ZW50IG1kbC1sYXlvdXRfX2NvbnRlbnRcIj5cbiAgICA8YSBuYW1lPVwidG9wXCI+PC9hPlxuICAgIDxhIGlkPVwidG9wXCI+PC9hPlxuICAgIDxzZWN0aW9uIGlkPVwibWVcIiBjbGFzc05hbWU9XCJhbmRyb2lkLW1lLXNlY3Rpb24gbWRsLXR5cG9ncmFwaHktLXRleHQtY2VudGVyXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFuZHJvaWQtaGVhZGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJhbmRyb2lkLWZvbnQgYW5kcm9pZC1zbG9nYW5cIj5GdWxsLVN0YWNrIERldmVsb3BlcjwvaDI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImFuZHJvaWQtc3ViLXNsb2dhblwiPjwvcD5cblxuICAgICAgPGEgaWQ9XCJkb3duXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgKCk9PiBnb1RvKCcjdGFsa3MnKSB9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFuZHJvaWQtZmFiIG1kbC1idXR0b24gbWRsLWJ1dHRvbi0tY29sb3JlZCBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWZhYiBtZGwtanMtcmlwcGxlLWVmZmVjdFwiIGRhdGEtdXBncmFkZWQ9XCIsTWF0ZXJpYWxCdXR0b24sTWF0ZXJpYWxSaXBwbGVcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5leHBhbmRfbW9yZTwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRsLWJ1dHRvbl9fcmlwcGxlLWNvbnRhaW5lclwiPjxzcGFuIGNsYXNzTmFtZT1cIm1kbC1yaXBwbGVcIj48L3NwYW4+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBpZD1cInNlbGZcIj5cbiAgICAgICAgPGltZyBpZD1cInBpY3RcIiBzcmM9XCIvc3RhdGljL3dqdW5pb3J3LnBuZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGlkPVwiaW5mb1wiIGNsYXNzTmFtZT1cImFuZHJvaWQtc3ViLXNsb2dhblwiPlxuICAgICAgICA8aT5Nb2JpbGUgRGV2ZWxvcGVyIDwvaT4gbmFcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LnV4bW9iLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gVVhNb2I8L2E+LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhbmRyb2lkLW9wZW5zb3VyY2Utc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmRyb2lkLW9wZW5zb3VyY2Utc2VjdGlvbi10ZXh0XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0tZGlzcGxheS0xLWNvbG9yLWNvbnRyYXN0XCI+T3BlbiBzb3VyY2U8L2gzPlxuICAgICAgICA8cD5WZWphIG9zIHByb2pldG9zIG9wZW4gc291cmNlIHF1ZSBtYW50ZW5obyBubyBHaXRIdWI8L3A+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBkYXJrIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2VcIiBocmVmPVwiLi9wcm9qZXRvc1wiIGRhdGEtdXBncmFkZWQ9XCIsTWF0ZXJpYWxCdXR0b25cIj52ZWphIG9zIHByb2pldG9zPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9vcGVuc291cmNlLmpwZ1wiIC8+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGlkPVwidGFsa3NcIiBjbGFzc05hbWU9XCJhbmRyb2lkLXRhbGtzLXNlY3Rpb25cIj5cbiAgICAgIDxhIG5hbWU9XCJ0YWxrc1wiPjwvYT5cbiAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy90YWxrcy5qcGdcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmRyb2lkLXRhbGtzLWJhbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmRyb2lkLXRhbGtzLWJhbmQtdGV4dFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0tZGlzcGxheS0yIG1kbC10eXBvZ3JhcGh5LS1mb250LXRoaW5cIj5NaW5oYXMgcGFsZXN0cmFzPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0taGVhZGxpbmUgbWRsLXR5cG9ncmFwaHktLWZvbnQtdGhpblwiPlZlamEgb3Mgc2xpZGVzIGUgY29udGXDumRvIGRhcyBtaW5oYXMgw7psdGltYXMgcGFsZXN0cmFzIGVtIGV2ZW50b3MgZSB1bml2ZXJzaWRhZGVzIHBlbG8gQnJhc2lsPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWRsLXR5cG9ncmFwaHktLWZvbnQtcmVndWxhciBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2UgYW5kcm9pZC1hbHQtbGlua1wiIGhyZWY9XCIuL3RhbGtzXCI+XG4gICAgICAgICAgICAgIFZlamEgYXMgcGFsZXN0cmFzIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hldnJvbl9yaWdodDwvaT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFuZHJvaWQtYmxvZy1zZWN0aW9uXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiYW5kcm9pZC1zZWN0aW9uLXRpdGxlIG1kbC10eXBvZ3JhcGh5LS1kaXNwbGF5LTEtY29sb3ItY29udHJhc3RcIj7Dmmx0aW1vcyBQb3N0czwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuZHJvaWQtY2FyZC1jb250YWluZXIgbWRsLWdyaWRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWRsLWNlbGwgbWRsLWNlbGwtLTUtY29sIG1kbC1jZWxsLS0xMi1jb2wtdGFibGV0IG1kbC1jZWxsLS0xMi1jb2wtcGhvbmUgbWRsLWNhcmQgbWRsLXNoYWRvdy0tM2RwXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtZGwtY2FyZF9fbWVkaWFcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvYmxvZy9kb2NrZXIucG5nXCIgLz5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aW1lXCI+XG4gICAgICAgICAgICA8dGltZSBkYXRlVGltZT1cIjIwMTUtMTAtMDUgMTA6MzBcIj41LzEwLzIwMTU8L3RpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuL2Jsb2cvaW50cm9kdWNhby1hby1kb2NrZXJcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1kbC1jYXJkX190aXRsZS10ZXh0XCI+SW50cm9kdcOnw6NvIGFvIERvY2tlcjwvaDQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodCBtZGwtdHlwb2dyYXBoeS0tc3ViaGVhZFwiPkludHJvZHXDp8OjbyBhbyBkZXNlbnZvbHZpZW1lbnRvIGRlIG1pY3JvLXNlcnZpw6dvcyB1dGlsaXphbmRvIERvY2tlcjwvcD5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3JpZXNcIj5kb2NrZXIsIGRlc2Vudm9sdmltZW50bzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBkYXJrIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2VcIiBocmVmPVwiLi9ibG9nL2ludHJvZHVjYW8tYW8tZG9ja2VyXCIgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbEJ1dHRvblwiPkxlaWEgbyBwb3N0IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hldnJvbl9yaWdodDwvaT48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImFuZHJvaWQtZm9vdGVyIG1kbC1tZWdhLWZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbWVnYS1mb290ZXItLXRvcC1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLW1lZ2EtZm9vdGVyLS1sZWZ0LXNlY3Rpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbWVnYS1mb290ZXItLXJpZ2h0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodFwiIGhyZWY9XCIjXCIgb25DbGljaz17ICgpPT4gZ29UbygnI3RvcCcpIH0+XG4gICAgICAgICAgICBJciBwYXJhIG8gdG9wbyA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9sZXNzPC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLW1lZ2EtZm9vdGVyLS1taWRkbGUtc2VjdGlvblwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCI+XG4gICAgICAgICAgICBDb3B5cmlnaHQgwqkgMjAxOCAtIFdpbHNvbiBKdW5pb3IgLSA8YSBocmVmPVwibWFpbHRvOndqdW5pb3J3ZWJkZXZAZ21haWwuY29tXCI+d2p1bmlvcndlYmRldkBnbWFpbC5jb208L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1tZWdhLWZvb3Rlci0tYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vd2p1bmlvcncuY29tL1wiPiBIb21lIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vd2p1bmlvcncuY29tL2Jsb2dcIj4gQmxvZyA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodFwiIGhyZWY9XCJodHRwczovL3dqdW5pb3J3LmNvbS9wcm9qZXRvc1wiPiBQcm9qZXRvcyA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodFwiIGhyZWY9XCJodHRwczovL3dqdW5pb3J3LmNvbS9wb3J0Zm9saW9cIj4gUG9ydGZvbGlvIDwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5kcm9pZC1saW5rIG1kbC10eXBvZ3JhcGh5LS1mb250LWxpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93anVuaW9yd1wiIHRhcmdldD1cIl9ibGFua1wiPkdpdEh1YiA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodFwiIGhyZWY9XCJodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93anVuaW9yd1wiIHRhcmdldD1cIl9ibGFua1wiPiBMaW5rZWRJbiA8L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImFuZHJvaWQtbGluayBtZGwtdHlwb2dyYXBoeS0tZm9udC1saWdodFwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0B2aXRvcmxlYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj4gVHdpdHRlciA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICNkb3duID4gYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgLy8gdG9wOiAyNSU7XG4gICAgICAgICAgdG9wOiA5NSU7XG4gICAgICAgICAgbGVmdDogNTUlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICNkb3duID4gYnV0dG9uIHtcbiAgICAgICAgICAgIC8vIHRvcDogLTUlO1xuICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICBsZWZ0OiA2MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNzZWxmIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgI2luZm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjA1JTtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gICAgICAgIH1cbiAgICAgICAgcCA+IGEge1xuICAgICAgICAgICAgY29sb3I6ICM2MmZmZGE7XG4gICAgICAgICAgfVxuICAgICAgICAjcGljdCB7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDUlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAjbWUge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuPC9kaXY+XG4pXG5jb25zdCBnb1RvID0gZnVuY3Rpb24gKHRvKSB7XG4gIC8vIHdpbmRvdy5zY3JvbGxUbygwLDEpXG4gIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pXG59XG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG5cblxuLy8gY29uc3QgQ29udGVudCA9IChwcm9wKT0+IChcbi8vICAgPGRpdj5cbi8vICAgICA8aDI+IHsgcHJvcC50aXRsZSB9IDwvaDI+XG4vLyAgICAgPGg0PiB7IHByb3AuY29udGVudCB9IDwvaDQ+XG4vLyAgICAgPHN0eWxlIGpzeD5cbi8vICAgICB7YFxuLy8gICAgICAgY29sb3I6IGN5YW47XG4vLyAgICAgICBiYWNrZ3JvdW5kOiBuYXZ5O1xuLy8gICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy9cbi8vICAgICAgIGgyIHtcbi8vICAgICAgICAgLy8gcGFkZGluZzogMTUlO1xuLy8gICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4vLyAgICAgICAgIC8vIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogZGFzaGVkO1xuLy8gICAgICAgfVxuLy8gICAgICAgaDQge1xuLy8gICAgICAgICBwYWRkaW5nOiAxMCU7XG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbi8vICAgICAgICAgLy8gYm9yZGVyLWJsb2NrLXN0YXJ0LXN0eWxlOiBkYXNoZWQ7XG4vLyAgICAgICB9XG4vLyAgICAgYH1cbi8vICAgICA8L3N0eWxlPlxuLy8gICA8L2Rpdj5cbi8vIClcbi8vIGV4cG9ydCBkZWZhdWx0IENvbnRlbnRcbiJdfQ== */\n/*@ sourceURL=pages/dumb/Content.js */"
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
var _jsxFileName = "/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Drawer.js";


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
var _jsxFileName = "/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Head.js";


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
var _jsxFileName = "/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Header.js";



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
      css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R1bWIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTyIsImZpbGUiOiJwYWdlcy9kdW1iL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvd29ya3NwYWNlL3dqdW5pb3Ivd2p1bmlvcndlYmRldiIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgSGVhZGVyID0gKHt0aXRsZX0pPT4gKFxuICA8ZGl2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiYW5kcm9pZC1oZWFkZXIgbWRsLWxheW91dF9faGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlci0td2F0ZXJmYWxsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19kcmF3ZXItYnV0dG9uXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dF9faGVhZGVyLXJvd1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImFuZHJvaWQtZm9udCBhbmRyb2lkLXRpdGxlIG1kbC1sYXlvdXQtdGl0bGUgbWRsLXR5cG9ncmFwaHktLXRleHQtdXBwZXJjYXNlXCI+eyB0aXRsZSB9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5kcm9pZC1oZWFkZXItc3BhY2VyIG1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuZHJvaWQtbmF2aWdhdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJhbmRyb2lkLW5hdmlnYXRpb24gbWRsLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZGwtbmF2aWdhdGlvbl9fbGluayBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2UgYWN0aXZlXCIgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1kbC1uYXZpZ2F0aW9uX19saW5rIG1kbC10eXBvZ3JhcGh5LS10ZXh0LXVwcGVyY2FzZVwiIGhyZWY9XCIvcHJvamV0b3NcIj5Qcm9qZXRvczwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZGwtbmF2aWdhdGlvbl9fbGluayBtZGwtdHlwb2dyYXBoeS0tdGV4dC11cHBlcmNhc2VcIiBocmVmPVwiaHR0cHM6Ly93anVuaW9yLmNvbS9wb3J0Zm9saW9cIj5Qb3J0Zm9saW88L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgICNoZWFkZXIgIHtcbiAgICAgICAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbi8vIGNvbnN0IEhlYWRlciA9IChwcm9wKT0+IChcbi8vICAgPGhlYWRlciBjbGFzc05hbWU9XCJtZGwtbGF5b3V0X19oZWFkZXJcIj5cbi8vICAgICA8ZGl2IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cIm1kbC1sYXlvdXRfX2RyYXdlci1idXR0b25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+PC9pPjwvZGl2PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLWxheW91dF9faGVhZGVyLXJvd1wiPlxuLy8gICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRsLWxheW91dC10aXRsZVwiPnsgcHJvcC50aXRsZSB9PC9zcGFuPlxuLy8gICAgICAgPGJyIC8+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC1sYXlvdXQtc3BhY2VyXCI+PC9kaXY+XG4vLyAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1kbC1uYXZpZ2F0aW9uIG1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5XCI+XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAvLyBwcm9wLm1lbnVJdGVucyA9IFsnSG9tZScsICdQb3J0aWZvbGlvJywgJ0Fib3V0J11cbi8vICAgICAgICAgICBbJ0hvbWUnLCAnUHJvamV0b3MnLCAnUG9ydGlmb2xpbycsICdBYm91dCddLm1hcCgoaXRlbSwgaSk9PiAoPGEgY2xhc3NOYW1lTmFtZT1cIm1kbC1uYXZpZ2F0aW9uX19saW5rXCIgaHJlZj1cIlwiIGtleT17aX0+e2l0ZW19PC9hPikpXG4vLyAgICAgICAgIH1cbi8vICAgICAgIDwvbmF2PlxuLy8gICAgIDwvZGl2PlxuLy8gICA8L2hlYWRlcj5cbi8vIClcbiJdfQ== */\n/*@ sourceURL=pages/dumb/Header.js */"
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
var _jsxFileName = '/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/dumb/Main-new.js';





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
var _jsxFileName = '/home/ubuntu/workspace/wjunior/wjuniorwebdev/pages/index.js';



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