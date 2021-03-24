import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: '主页'
    }
  },
  {
    name: 'chessboardelement',
    component: () => import('./view/chessboardelement'),
    meta: {
      title: '棋盘1'
    }
  },
  {
    name: 'chessground',
    component: () => import('./view/chessground'),
    meta: {
      title: '棋盘2'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
