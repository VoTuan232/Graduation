import Vue from 'vue';

import VueRouter from 'vue-router';

import axios from 'axios';

import VueAxios from 'vue-axios';

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '10px'
})

import Post from './components/client/post/Post.vue';

Vue.use(VueRouter);

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8000/api';

const router = new VueRouter({

    routes: [{ 
        path: '/', 
        // beforeEnter: (to, from, next) => next('/newlist'),
        component: require('./components/client/post/Post.vue').default,
        children: [
            {
                path: '/',
                component: require('./components/client/post/NewList.vue').default,
            },
            {
                path: '/series',
                component: require('./components/client/post/Series.vue').default,
            },
            {
                path: '/following',
                component: require('./components/client/post/Following.vue').default,
            },
        ]
    }]

});

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {

   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),

   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),

   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),

});

const client = new Vue({
    el: '#client',
    router: router,
    components: {},
    data: {
        userLogged: userLogged,
    },
    methods: {
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
      }, 

        scrollToTop() {
            window.scrollTo(0,0);
        },

      changeEmail(email) {
          return email.replace('@gmail.com', '');
      },

      sanitizeText(text) {
        var slug = "";
              // Change to lower case
              var titleLower = text.toLowerCase();
              // Letter "e"
              slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
              // Letter "a"
              slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
              // Letter "o"
              slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
              // Letter "u"
              slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
              // Letter "i"
              slug = slug.replace(/i|ì/gi, 'i');
              // Letter "d"
              slug = slug.replace(/đ/gi, 'd');
              // Trim the last whitespace
              slug = slug.replace(/\s*$/g, '');
              // Change whitespace to "-"
              slug = slug.replace(/\s+/g, '-');
              // ,
              slug = slug.replace(/,/g, '');
              // ""
              slug = slug.replace(/"/g, '');
              // ""
              slug = slug.replace(/“|”/g, '');
              // ?
              slug = slug.replace(/[?=]/g, "");
              // ;
              slug = slug.replace(/;/g, "");

              return slug;
      }
  }
});