/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';
import MainView from '@/views/Main.vue';
import Page1 from '@/views/Page1.vue';
// import Page2 from '@/views/Page2.vue';

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/',
      component: MainView,
      childrens: [
        {
          name: 'page1',
          path: '/page1',
          meta: {
            title: 'Page 1',
          },
          component: Page1,
        },
        {
          name: 'page1',
          path: '/page1',
          meta: {
            title: 'Page 1',
          },
          component: Page1,
        },
      ],
    },
  ],
});

routes.beforeEach((to, from, next) => {
  document.title = `Test - ${to.meta.title}`;
  next();
});

export default routes;
