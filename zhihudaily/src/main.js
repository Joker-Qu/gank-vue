import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import welfare from './components/welfare/welfare.vue';
import recommend from './components/recommend/recommend.vue';
import mine from './components/mine/mine.vue';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/welfare': {
    component: welfare
  },
  '/recommend': {
    component: recommend
  },
  '/mine': {
    component: mine
  }
});
router.start(app, '#app');
router.go('/welfare');
