import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _001f514e = () => interopDefault(import('..\\pages\\apps.vue' /* webpackChunkName: "pages/apps" */))
const _111710bd = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _a0092dd6 = () => interopDefault(import('..\\pages\\phrase.vue' /* webpackChunkName: "pages/phrase" */))
const _ec628daa = () => interopDefault(import('..\\pages\\privacy-alert.vue' /* webpackChunkName: "pages/privacy-alert" */))
const _5035f53a = () => interopDefault(import('..\\pages\\recover-identity.vue' /* webpackChunkName: "pages/recover-identity" */))
const _d1c75b1a = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _b71491ba = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _6fbcc162 = () => interopDefault(import('..\\pages\\category\\download.vue' /* webpackChunkName: "pages/category/download" */))
const _72048ec0 = () => interopDefault(import('..\\pages\\course\\coursedetails.vue' /* webpackChunkName: "pages/course/coursedetails" */))
const _17e76ebf = () => interopDefault(import('..\\pages\\course\\download.vue' /* webpackChunkName: "pages/course/download" */))
const _4cb38b3f = () => interopDefault(import('..\\pages\\games\\games-list.vue' /* webpackChunkName: "pages/games/games-list" */))
const _3f814a9b = () => interopDefault(import('..\\pages\\videos\\videodetails.vue' /* webpackChunkName: "pages/videos/videodetails" */))
const _f223ad6a = () => interopDefault(import('..\\pages\\videos\\watch.vue' /* webpackChunkName: "pages/videos/watch" */))
const _476f6da6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _001f514e,
    name: "apps"
  }, {
    path: "/login",
    component: _111710bd,
    name: "login"
  }, {
    path: "/phrase",
    component: _a0092dd6,
    name: "phrase"
  }, {
    path: "/privacy-alert",
    component: _ec628daa,
    name: "privacy-alert"
  }, {
    path: "/recover-identity",
    component: _5035f53a,
    name: "recover-identity"
  }, {
    path: "/update-password",
    component: _d1c75b1a,
    name: "update-password"
  }, {
    path: "/category/category-list",
    component: _b71491ba,
    name: "category-category-list"
  }, {
    path: "/category/download",
    component: _6fbcc162,
    name: "category-download"
  }, {
    path: "/course/coursedetails",
    component: _72048ec0,
    name: "course-coursedetails"
  }, {
    path: "/course/download",
    component: _17e76ebf,
    name: "course-download"
  }, {
    path: "/games/games-list",
    component: _4cb38b3f,
    name: "games-games-list"
  }, {
    path: "/videos/videodetails",
    component: _3f814a9b,
    name: "videos-videodetails"
  }, {
    path: "/videos/watch",
    component: _f223ad6a,
    name: "videos-watch"
  }, {
    path: "/",
    component: _476f6da6,
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
