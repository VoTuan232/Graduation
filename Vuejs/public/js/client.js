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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/client/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/client/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Gate */ "./resources/js/Gate.js");
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
  data: function data() {
    return {
      isSearch: false,
      search: '',
      posts: [],
      titlePosts: [],
      userPermission: new _Gate__WEBPACK_IMPORTED_MODULE_0__["default"]({})
    };
  },
  watch: {// 'search': function (search) {
    //     this.isSearch = true;
    //     this.searchit();
    //     console.log(this.posts);
    //     // this.posts = ['Canada', 'USA', 'Mexico'];
    //     // console.log(this.posts);
    // },
  },
  methods: {
    getUserCurrent: function getUserCurrent() {
      var _this = this;

      axios.get('user/userPermission').then(function (response) {
        return _this.userPermission = response.data, _this.userPermission = new _Gate__WEBPACK_IMPORTED_MODULE_0__["default"](_this.userPermission);
      });
    },
    distributionGroupsEndpoint: function distributionGroupsEndpoint(input) {
      return '' + '/api/findPosts?search=' + input;
    },
    formattedDisplay: function formattedDisplay(result) {
      return "<a  target='_blank' href=" + "http://127.0.0.1:8000/p/" + result.slug + ">" + result.title + "</a>";
    },
    addDistributionGroup: function addDistributionGroup(result) {// console.log(result);
      // this.group = group
      // access the autocomplete component methods from the parent
      // this.$refs.autocomplete.clear()
    },
    searchit: function searchit() {
      var _this2 = this;

      axios.get('findPosts?search=' + this.search).then(function (response) {
        _this2.posts = response.data, _this2.isSearch = true; // for (var b in response.data) {
        // }
      }); // Fire.$emit('searching', this.search);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: "/", href: "#" } },
            [_vm._v("MonkeyDNews")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c("ul", { staticClass: "navbar-nav mr-auto" }, [
                _c(
                  "li",
                  { staticClass: "nav-item active" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: "/", href: "#" }
                      },
                      [
                        _vm._v("Posts "),
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("(current)")
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
                        attrs: { to: "/questions", href: "#" }
                      },
                      [_vm._v("Question")]
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
                        attrs: { to: "/authors", href: "#" }
                      },
                      [_vm._v("Authors")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-inline my-2 my-lg-0" },
                [
                  _c("autocomplete", {
                    attrs: {
                      placeholder: "Search...",
                      source: _vm.distributionGroupsEndpoint,
                      "results-display": _vm.formattedDisplay
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.$auth.check()
                ? _c("ul", { staticClass: "navbar-nav" }, [
                    _c("li", { staticClass: "nav-item dropdown" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu client",
                          attrs: { "aria-labelledby": "navbarDropdown" }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/publish/post" }
                            },
                            [
                              _c("i", { staticClass: "fas fa-pencil-alt" }),
                              _vm._v("Write post")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/question/ask" }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-question-circle"
                              }),
                              _vm._v("Ask question")
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown-divider" }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item dropdown" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu client",
                          attrs: { "aria-labelledby": "navbarDropdown" }
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/publish/post" }
                            },
                            [
                              _c("i", { staticClass: "fas fa-pencil-alt" }),
                              _vm._v("Write post")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/question/ask" }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-question-circle"
                              }),
                              _vm._v("Ask question")
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown-divider" }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Something else here")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item dropdown" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link dropdown-toggle",
                          attrs: {
                            href: "#",
                            id: "navbarDropdown",
                            role: "button",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _vm.$auth.user().avatar != null
                            ? _c("img", {
                                staticClass: "avatar-client",
                                attrs: {
                                  src:
                                    "/images/profile/" +
                                    _vm.$auth.user().avatar,
                                  alt: "User avatar"
                                }
                              })
                            : _c("img", {
                                staticClass: "avatar-client",
                                attrs: {
                                  src: "/images/profile/profile.png",
                                  alt: "User avatar"
                                }
                              })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu client",
                          attrs: { "aria-labelledby": "navbarDropdown" }
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: {
                                to:
                                  "" +
                                  "/u/" +
                                  _vm.$root.changeEmail(_vm.$auth.user().email)
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-pencil-alt" }),
                              _vm._v("My Content")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.$auth.logout()
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-sign-out-alt" }),
                              _vm._v("Logout")
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "dropdown-divider" }),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "dropdown-item",
                              attrs: { to: "/profile/setting", href: "#" }
                            },
                            [_vm._v(_vm._s(_vm.$auth.user().name))]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$auth.check()
                ? _c("ul", { staticClass: "navbar-nav" }, [
                    _c(
                      "li",
                      { staticClass: "nav-item active" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "login" }, href: "#" }
                          },
                          [
                            _vm._v("Login "),
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("(current)")
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
                            attrs: { to: { name: "register" }, href: "#" }
                          },
                          [_vm._v("Register")]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("router-view", {
              attrs: { userPermission: _vm.userPermission },
              on: { updatedUser: _vm.getUserCurrent }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vue-progress-bar"),
      _vm._v(" "),
      _c("footer", { staticClass: "page-footer font-small blue pt-4" }, [
        _c("div", { staticClass: "container-fluid text-center text-md-left" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix w-100 d-md-none pb-3" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 mb-md-0 mb-3" }, [
              _c("h5", { staticClass: "text-uppercase" }, [_vm._v("Resource")]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-unstyled" }, [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/", href: "#!" } }, [
                      _vm._v("Posts")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/questions", href: "#!" } },
                      [_vm._v("Questions")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/authors", href: "#!" } },
                      [_vm._v("Authors")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(5)
          ])
        ]),
        _vm._v(" "),
        _vm._m(6)
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle write",
        staticStyle: { "padding-top": "15px" },
        attrs: {
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", { staticClass: "fas fa-exclamation" }),
        _c("span", { staticClass: "badge badge-pill badge-success" }, [
          _vm._v("9")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle write",
        attrs: {
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "fas fa-pencil-alt" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "dropdown-item", attrs: { href: "/admin" } },
      [_c("i", { staticClass: "fas fa-pencil-alt" }), _vm._v("Website Manage")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 mt-md-0 mt-3" }, [
      _c("h5", { staticClass: "text-uppercase" }, [_vm._v("MonkeyDNews")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 mb-md-0 mb-3" }, [
      _c("h5", { staticClass: "text-uppercase" }, [_vm._v("Links")]),
      _vm._v(" "),
      _c("ul", { staticClass: "list-unstyled" }, [
        _c("li", [
          _c("a", { attrs: { href: "https://facebook.com" } }, [
            _vm._v("Facebook")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "https://github.com" } }, [_vm._v("Github")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-copyright text-center py-3" }, [
      _vm._v("© 2019 Copyright:\n            "),
      _c(
        "a",
        { attrs: { href: "https://mdbootstrap.com/education/bootstrap/" } },
        [_vm._v(" votuanbk232@gmail.com")]
      )
    ])
  }
]
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

/***/ "./resources/js/Gate.js":
/*!******************************!*\
  !*** ./resources/js/Gate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gate =
/*#__PURE__*/
function () {
  function Gate(user) {
    _classCallCheck(this, Gate);

    this.user = user;
  }

  _createClass(Gate, [{
    key: "hasPermission",
    value: function hasPermission(permission) {
      //check trong day neu user co role la super admin => return true
      for (var a in this.user) {
        if (this.user[a].name == 'Super Admin') {
          return true;
        } else {
          for (var b in this.user[a].permissions) {
            if (permission == this.user[a].permissions[b].name) {
              return true;
              break;
            }
          }
        }
      }

      return false;
    }
  }]);

  return Gate;
}();



/***/ }),

/***/ "./resources/js/client.js":
/*!********************************!*\
  !*** ./resources/js/client.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_client_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/client/App.vue */ "./resources/js/components/client/App.vue");
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// import router from './routes';
// Vue.component(
//     'user-popper',
//     require('./components/asset/UserPopper.vue').default
// );
// Vue.component(
//     'tag-of-new',
//     require('./components/asset/TagOfNew.vue').default
// );

var client = new Vue({
  el: '#client',
  router: Vue.router,
  components: {
    App: _components_client_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: {},
  methods: {
    subIsActive: function subIsActive(input) {
      var _this = this;

      var paths = Array.isArray(input) ? input : [input];
      return paths.some(function (path) {
        return _this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },
    changeEmail: function changeEmail(email) {
      return email.replace('@gmail.com', '');
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

/***/ "./resources/js/components/client/App.vue":
/*!************************************************!*\
  !*** ./resources/js/components/client/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=124c2fc8& */ "./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/client/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/client/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/client/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/client/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/client/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=124c2fc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/client/App.vue?vue&type=template&id=124c2fc8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_124c2fc8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./resources/js/client.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/Graduation/Vuejs/resources/js/client.js */"./resources/js/client.js");


/***/ })

/******/ });