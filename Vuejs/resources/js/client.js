import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './routes';

const client = new Vue({
    el: '#client',
    router,
    components: {},
    data: {
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