
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/*Vue Socket*/
// import VueSocketio from 'vue-socket.io'
// Vue.use(VueSocketio, 'http://localhost:8890')

import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.use(VueSocketio, io('http://localhost:8890'));

// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(8000);
// import VueSocketio from 'vue-socket.io'

// var client = require('socket.io-client')
// var socketServer = 'http://localhost:6999'
// var options = {
//   autoConnect: false
// }
// Vue.use(VueSocketio, client(socketServer, options))
// import VueSocketIO from 'vue-socket.io'
// import socketio from 'socket.io-client'
// Vue.use(VueSocketIO, socketio(':6999'))
// Vue.use(VueSocketIO, ':6999');
// const options = { path: '/my-app/' }; //Options object to pass into SocketIO
 
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://metinseylan.com:1992',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/p/" } //Optional options
// }))



/*typeahead*/
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

/*vue-autocomplete*/
import Autocomplete from 'vuejs-auto-complete'
Vue.component('autocomplete', Autocomplete)

/*vue-read-more*/
import ReadMore from 'vue-read-more';
Vue.use(ReadMore);

/*scrollTo*/
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

/*Gate*/
// import Gate from "./Gate";
// Vue.prototype.$gate = Gate;
// // Vue.use(Gate);

/*Vue ProgressBar*/
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'blue',
  height: '20px'
})

/*Ckeditor*/
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

/*VForm*/
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
// Validate
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError) 

/*Filter*/
import './filter.js';

/*Use vue-sweetalert2 */
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

/*Use Component local for hook*/
window.Fire = new Vue();

/*Use pagination*/
Vue.component('pagination', require('laravel-vue-pagination'));

/* use multiple select */
import Multiselect from 'vue-multiselect'
/*register globally*/
Vue.component('multiselect', Multiselect);

/*Vuejs paginator*/
// import Paginate from 'vuejs-paginate'
// Vue.component('paginate', Paginate)

/*Popper*/
Vue.component('popper', require('vue-popperjs'));

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './routes';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8000/api';

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {

   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),

   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),

   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),

});

Vue.component(
    'user-popper',
    require('./components/asset/UserPopper.vue').default
);
Vue.component(
    'user-popper-not-load',
    require('./components/asset/UserPoperNotLoad.vue').default
);
Vue.component(
    'tag-of-new',
    require('./components/asset/TagOfNew.vue').default
);
// Vue.component(
//     'user-panel',
//     require('./components/asset/UserPanel.vue').default
// );
Vue.component(
    'not-found',
    require('./components/NotFound.vue').default
);
Vue.component(
    'no-permission',
    require('./components/NoPermission.vue').default
);
Vue.component(
    'box-user-single',
    require('./components/asset/BoxUserSingle.vue').default
);
Vue.component(
    'redirect-login',
    require('./components/asset/RedirectLogin.vue').default
);
// const client = new Vue({
//     el: '#client',
//     router: router,
//     components: {},
//     data: {
//         // userLogged: userLogged,
//     },

//     methods: {
//       subIsActive(input) {
//         const paths = Array.isArray(input) ? input : [input]
//         return paths.some(path => {
//           return this.$route.path.indexOf(path) === 0 // current path starts with this path string
//         })
//       }, 

//         scrollToTop() {
//             window.scrollTo(0,0);
//         },

//       changeEmail(email) {
//           return email.replace('@gmail.com', '');
//       },

//       sanitizeText(text) {
//         var slug = "";
//               // Change to lower case
//               var titleLower = text.toLowerCase();
//               // Letter "e"
//               slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
//               // Letter "a"
//               slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
//               // Letter "o"
//               slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
//               // Letter "u"
//               slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
//               // Letter "i"
//               slug = slug.replace(/i|ì/gi, 'i');
//               // Letter "d"
//               slug = slug.replace(/đ/gi, 'd');
//               // Trim the last whitespace
//               slug = slug.replace(/\s*$/g, '');
//               // Change whitespace to "-"
//               slug = slug.replace(/\s+/g, '-');
//               // ,
//               slug = slug.replace(/,/g, '');
//               // ""
//               slug = slug.replace(/"/g, '');
//               // ""
//               slug = slug.replace(/“|”/g, '');
//               // ?
//               slug = slug.replace(/[?=]/g, "");
//               // ;
//               slug = slug.replace(/;/g, "");

//               return slug;
//       },
//     }
// });

// const admin = new Vue({
//     el: '#admin',
//     router: router,
//     data: {
//       updateProfile: 0,
//       username: user.name,
//       avatar : user.avatar == null ? '/images/profile/profile.png' : '/images/profile/'+user.avatar,
//     },

//     methods: {
//       subIsActive(input) {
//         const paths = Array.isArray(input) ? input : [input]
//         return paths.some(path => {
//           return this.$route.path.indexOf(path) === 0 // current path starts with this path string
//         })
//       },

//       sanitizeText(text) {
//         var slug = "";
//               // Change to lower case
//               var titleLower = text.toLowerCase();
//               // Letter "e"
//               slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
//               // Letter "a"
//               slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
//               // Letter "o"
//               slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
//               // Letter "u"
//               slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
//               // Letter "i"
//               slug = slug.replace(/i|ì/gi, 'i');
//               // Letter "d"
//               slug = slug.replace(/đ/gi, 'd');
//               // Trim the last whitespace
//               slug = slug.replace(/\s*$/g, '');
//               // Change whitespace to "-"
//               slug = slug.replace(/\s+/g, '-');
//               // ,
//               slug = slug.replace(/,/g, '');
//               // ""
//               slug = slug.replace(/"/g, '');
//               // ""
//               slug = slug.replace(/“|”/g, '');
//               // ?
//               slug = slug.replace(/[?=]/g, "");
//               // ;
//               slug = slug.replace(/;/g, "");

//               return slug;
//       },
//     }
// });
