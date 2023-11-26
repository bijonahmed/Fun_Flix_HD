import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e683dec = () => interopDefault(import('..\\pages\\apps.vue' /* webpackChunkName: "pages/apps" */))
const _00ccf6f2 = () => interopDefault(import('..\\pages\\create-identity.vue' /* webpackChunkName: "pages/create-identity" */))
const _55fc7881 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _07c2f9d1 = () => interopDefault(import('..\\pages\\phrase.vue' /* webpackChunkName: "pages/phrase" */))
const _26c21cef = () => interopDefault(import('..\\pages\\privacy-alert.vue' /* webpackChunkName: "pages/privacy-alert" */))
const _5f6bdb1f = () => interopDefault(import('..\\pages\\recover-identity.vue' /* webpackChunkName: "pages/recover-identity" */))
const _76745592 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _5de235e7 = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _30e5181e = () => interopDefault(import('..\\pages\\category\\download.vue' /* webpackChunkName: "pages/category/download" */))
const _8779cf38 = () => interopDefault(import('..\\pages\\course\\coursedetails.vue' /* webpackChunkName: "pages/course/coursedetails" */))
const _c123770a = () => interopDefault(import('..\\pages\\course\\download.vue' /* webpackChunkName: "pages/course/download" */))
const _93f125fa = () => interopDefault(import('..\\pages\\games\\games-list.vue' /* webpackChunkName: "pages/games/games-list" */))
const _57eee257 = () => interopDefault(import('..\\pages\\videos\\videodetails.vue' /* webpackChunkName: "pages/videos/videodetails" */))
const _23e18d0f = () => interopDefault(import('..\\pages\\videos\\watch.vue' /* webpackChunkName: "pages/videos/watch" */))
const _e756552c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/apps",
    component: _5e683dec,
    name: "apps"
  }, {
    path: "/create-identity",
    component: _00ccf6f2,
    name: "create-identity"
  }, {
    path: "/login",
    component: _55fc7881,
    name: "login"
  }, {
    path: "/phrase",
    component: _07c2f9d1,
    name: "phrase"
  }, {
    path: "/privacy-alert",
    component: _26c21cef,
    name: "privacy-alert"
  }, {
    path: "/recover-identity",
    component: _5f6bdb1f,
    name: "recover-identity"
  }, {
    path: "/update-password",
    component: _76745592,
    name: "update-password"
  }, {
    path: "/category/category-list",
    component: _5de235e7,
    name: "category-category-list"
  }, {
    path: "/category/download",
    component: _30e5181e,
    name: "category-download"
  }, {
    path: "/course/coursedetails",
    component: _8779cf38,
    name: "course-coursedetails"
  }, {
    path: "/course/download",
    component: _c123770a,
    name: "course-download"
  }, {
    path: "/games/games-list",
    component: _93f125fa,
    name: "games-games-list"
  }, {
    path: "/videos/videodetails",
    component: _57eee257,
    name: "videos-videodetails"
  }, {
    path: "/videos/watch",
    component: _23e18d0f,
    name: "videos-watch"
  }, {
    path: "/",
    component: _e756552c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
