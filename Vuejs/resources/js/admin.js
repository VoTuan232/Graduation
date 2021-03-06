// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// import router from './routes';

// Vue.component(
//     'not-found',
//     require('./components/NotFound.vue').default
// );

// import Gate from "./Gate";
// Vue.prototype.$gate = new Gate(window.user)
import App from './components/admin/App.vue'

const admin = new Vue({
    el: '#admin',
    components: {App},
    router: Vue.router,
    data: {
      updateProfile: 0,
      // avatar : this.$auth.user().avatar == null ? '/images/profile/profile.png' : '/images/profile/'+user.avatar,
      // avatar : '/images/profile/'+this.$auth.user().avatar,
    },

    methods: {
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
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
      },
    },
});