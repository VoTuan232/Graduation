import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './routes';

const admin = new Vue({
    el: '#admin',
    router: router,
    data: {
      updateProfile: 0,
      username: user.name,
      avatar : '/images/profile/'+user.avatar,
    },

    methods: {
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
      }
    }
});