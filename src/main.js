/**
 * Created by duoyi on 2016/9/14.
 */
const Vue = require('vue');
//使用路由

import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter()

import myrouter from './router.js'
myrouter(router);



import app from './views/app'
router.start(app,'#app');
