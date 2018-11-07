import Vue from 'vue'
import Router from 'vue-router'

import { RouteNames } from './route.types';
import { enhance } from './extension';

import IndexPage from '../views/IndexPage.vue';
import ListPage from '../views/ListPage.vue';
import DetailPage from '../views/DetailPage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: RouteNames.INDEX,
      component: IndexPage,
    },
    {
      path: '/items',
      name: RouteNames.LIST,
      component: ListPage,
    },
    {
      path: '/items/:id',
      name: RouteNames.DETAIL,
      component: DetailPage,
    },
  ]
});

export default enhance(router);
