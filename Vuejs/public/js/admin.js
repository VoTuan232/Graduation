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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asset_UserPanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/UserPanel.vue */ "./resources/js/components/asset/UserPanel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserPanel: _asset_UserPanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// var user = this.$auth.user();
// console.log(user);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: ''
    };
  },
  methods: {
    getUserCurrent: function getUserCurrent() {
      var _this = this;

      axios.get('auth/user').then(function (response) {
        return _this.user = response.data.data;
      });
    }
  },
  created: function created() {
    var _this2 = this;

    Fire.$on('afterUpdateProfile', function () {
      _this2.getUserCurrent();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "aside",
      { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
      [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sidebar" },
          [
            _c("user-panel"),
            _vm._v(" "),
            _c("nav", { staticClass: "mt-2" }, [
              _c(
                "ul",
                {
                  staticClass: "nav nav-pills nav-sidebar flex-column",
                  attrs: {
                    "data-widget": "treeview",
                    role: "menu",
                    "data-accordion": "false"
                  }
                },
                [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/admin" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon fas fa-tachometer-alt red"
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Dashboard\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/developer" }
                        },
                        [
                          _c("i", { staticClass: "nav-icon fas fa-cogs" }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Developer\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/profile/setting" }
                        },
                        [
                          _c("i", {
                            staticClass: "nav-icon fas fa-user orange"
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Profile\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/m/users" } },
                        [
                          _c("i", { staticClass: "fas fa-users nav-icon" }),
                          _vm._v(" "),
                          _c("p", [_vm._v("Users")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/m/posts" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon fas fa-newspaper blue"
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Posts\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/m/questions" }
                        },
                        [
                          _c("i", {
                            staticClass: "nav-icon fas fa-newspaper blue"
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Questions\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/m/tags" } },
                        [
                          _c("i", {
                            staticClass: "nav-icon fas fa-tags orange"
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Tags\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/m/categories" }
                        },
                        [
                          _c("i", { staticClass: "nav-icon fas fa-user blue" }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Categories\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/m/roles" } },
                        [
                          _c("i", { staticClass: "nav-icon fas fa-user blue" }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Roles\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "/m/comments" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-comments" }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                    Comments\n                                "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "/" },
                        on: {
                          click: function($event) {
                            _vm.$auth.logout()
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "nav-icon fa fa-power-off yellow"
                        }),
                        _vm._v("Logout")
                      ]
                    )
                  ])
                ]
              )
            ])
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content-wrapper" }, [
      _c("div", { staticClass: "content" }, [
        _c(
          "div",
          { staticClass: "container-fluid" },
          [_c("router-view"), _vm._v(" "), _c("vue-progress-bar")],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass:
          "main-header navbar navbar-expand bg-white navbar-light border-bottom"
      },
      [
        _c("ul", { staticClass: "navbar-nav" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-widget": "pushmenu", href: "#" }
              },
              [_c("i", { staticClass: "fa fa-bars" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
            _c(
              "a",
              { staticClass: "nav-link", attrs: { href: "index3.html" } },
              [_vm._v("Home")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item d-none d-sm-inline-block" }, [
            _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
              _vm._v("Contact")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-group input-group-sm" }, [
          _c("input", {
            staticClass: "form-control form-control-navbar",
            attrs: {
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c("button", { staticClass: "btn btn-navbar" }, [
              _c("i", { staticClass: "fa fa-search" })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "navbar-nav ml-auto" }, [
          _c("li", { staticClass: "nav-item dropdown" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [
                _c("i", { staticClass: "fa fa-comments-o" }),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-danger navbar-badge" }, [
                  _vm._v("3")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-lg dropdown-menu-right"
              },
              [
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 mr-3 img-circle",
                        attrs: {
                          src: "dist/img/user1-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                                        Brad Diesel\n                                        "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-danger" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("Call me whenever you can...")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "fa fa-clock-o mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 img-circle mr-3",
                        attrs: {
                          src: "dist/img/user8-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                                        John Pierce\n                                        "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-muted" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("I got your message bro")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "fa fa-clock-o mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 img-circle mr-3",
                        attrs: {
                          src: "dist/img/user3-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                                        Nora Silvester\n                                        "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-warning" },
                            [_c("i", { staticClass: "fa fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("The subject goes here")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "fa fa-clock-o mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item dropdown-footer",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See All Messages")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item dropdown" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [
                _c("i", { staticClass: "fa fa-bell-o" }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "badge badge-warning navbar-badge" },
                  [_vm._v("15")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-lg dropdown-menu-right"
              },
              [
                _c("span", { staticClass: "dropdown-header" }, [
                  _vm._v("15 Notifications")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fa fa-envelope mr-2" }),
                    _vm._v(" 4 new messages\n                        "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("3 mins")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fa fa-users mr-2" }),
                    _vm._v(" 8 friend requests\n                        "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("12 hours")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fa fa-file mr-2" }),
                    _vm._v(" 3 new reports\n                        "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("2 days")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item dropdown-footer",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See All Notifications")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "data-widget": "control-sidebar",
                  "data-slide": "true",
                  href: "#"
                }
              },
              [_c("i", { staticClass: "fa fa-th-large" })]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "brand-link", attrs: { href: "/" } }, [
      _c("img", {
        staticClass: "brand-image img-circle elevation-3",
        staticStyle: { opacity: ".8" },
        attrs: { src: "/images/logo.png", alt: "" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "brand-text font-weight-light" }, [
        _vm._v("Home")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "aside",
      { staticClass: "control-sidebar control-sidebar-dark" },
      [
        _c("div", { staticClass: "p-3" }, [
          _c("h5", [_vm._v("Title")]),
          _vm._v(" "),
          _c("p", [_vm._v("Sidebar content")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-footer" }, [
      _c("div", { staticClass: "float-right d-none d-sm-inline" }, [
        _vm._v("\n                You can do it if you want!\n            ")
      ]),
      _vm._v(" "),
      _c("strong", [
        _vm._v("Copyright © 2019 "),
        _c("a", { attrs: { href: "https://adminlte.io" } }, [
          _vm._v("Vo Anh Tuan")
        ])
      ]),
      _vm._v(" created by.\n        ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
    _vm.user == ""
      ? _c("div", { staticClass: "image" }, [
          _vm.$auth.user().avatar == null
            ? _c("img", {
                staticClass: "img-circle elevation-2 myselft",
                attrs: { src: "/images/profile/profile.png", alt: "User Image" }
              })
            : _c("img", {
                staticClass: "img-circle elevation-2 myselft",
                attrs: {
                  src: "/images/profile/" + _vm.$auth.user().avatar,
                  alt: "User Image"
                }
              })
        ])
      : _c("div", { staticClass: "image" }, [
          _vm.user.avatar == null
            ? _c("img", {
                staticClass: "img-circle elevation-2 myselft",
                attrs: { src: "/images/profile/profile.png", alt: "User Image" }
              })
            : _c("img", {
                staticClass: "img-circle elevation-2 myselft",
                attrs: {
                  src: "/images/profile/" + _vm.user.avatar,
                  alt: "User Image"
                }
              })
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "info" }, [
      _vm.user == ""
        ? _c("a", {
            staticClass: "d-block",
            attrs: { href: "#" },
            domProps: { innerHTML: _vm._s(_vm.$auth.user().name) }
          })
        : _c("a", {
            staticClass: "d-block",
            attrs: { href: "#" },
            domProps: { innerHTML: _vm._s(_vm.user.name) }
          })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/App.vue */ "./resources/js/components/admin/App.vue");
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// import router from './routes';
// Vue.component(
//     'not-found',
//     require('./components/NotFound.vue').default
// );
// import Gate from "./Gate";
// Vue.prototype.$gate = new Gate(window.user)

var admin = new Vue({
  el: '#admin',
  components: {
    App: _components_admin_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  router: Vue.router,
  data: {
    updateProfile: 0 // avatar : this.$auth.user().avatar == null ? '/images/profile/profile.png' : '/images/profile/'+user.avatar,
    // avatar : '/images/profile/'+this.$auth.user().avatar,

  },
  methods: {
    subIsActive: function subIsActive(input) {
      var _this = this;

      var paths = Array.isArray(input) ? input : [input];
      return paths.some(function (path) {
        return _this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    sanitizeText: function sanitizeText(text) {
      var slug = ""; // Change to lower case

      var titleLower = text.toLowerCase(); // Letter "e"

      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e'); // Letter "a"

      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a'); // Letter "o"

      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o'); // Letter "u"

      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u'); // Letter "i"

      slug = slug.replace(/i|ì/gi, 'i'); // Letter "d"

      slug = slug.replace(/đ/gi, 'd'); // Trim the last whitespace

      slug = slug.replace(/\s*$/g, ''); // Change whitespace to "-"

      slug = slug.replace(/\s+/g, '-'); // ,

      slug = slug.replace(/,/g, ''); // ""

      slug = slug.replace(/"/g, ''); // ""

      slug = slug.replace(/“|”/g, ''); // ?

      slug = slug.replace(/[?=]/g, ""); // ;

      slug = slug.replace(/;/g, "");
      return slug;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/App.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/admin/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1b6bd5f4& */ "./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1b6bd5f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/App.vue?vue&type=template&id=1b6bd5f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b6bd5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/asset/UserPanel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/asset/UserPanel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPanel.vue?vue&type=template&id=562a2fff& */ "./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff&");
/* harmony import */ var _UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/asset/UserPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asset/UserPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPanel.vue?vue&type=template&id=562a2fff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/asset/UserPanel.vue?vue&type=template&id=562a2fff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPanel_vue_vue_type_template_id_562a2fff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/Graduation/Vuejs/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });