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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/client.js":
/*!********************************!*\
  !*** ./resources/js/client.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  components: {},
  data: {// userLogged: userLogged,
  },
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

/***/ 2:
/*!**************************************!*\
  !*** multi ./resources/js/client.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/Graduation/Vuejs/resources/js/client.js */"./resources/js/client.js");


/***/ })

/******/ });