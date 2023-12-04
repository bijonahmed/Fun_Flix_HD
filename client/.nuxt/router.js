import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ba733b1 = () => interopDefault(import('..\\pages\\apps.vue' /* webpackChunkName: "pages/apps" */))
const _568b7aba = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _19143eb8 = () => interopDefault(import('..\\pages\\phrase.vue' /* webpackChunkName: "pages/phrase" */))
const _972853b0 = () => interopDefault(import('..\\pages\\privacy-alert.vue' /* webpackChunkName: "pages/privacy-alert" */))
const _4d552974 = () => interopDefault(import('..\\pages\\recover-identity.vue' /* webpackChunkName: "pages/recover-identity" */))
const _e233b7a0 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _18647be0 = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _52a98af6 = () => interopDefault(import('..\\pages\\category\\download.vue' /* webpackChunkName: "pages/category/download" */))
const _0860889d = () => interopDefault(import('..\\pages\\course\\coursedetails.vue' /* webpackChunkName: "pages/course/coursedetails" */))
const _1957d4a2 = () => interopDefault(import('..\\pages\\course\\download.vue' /* webpackChunkName: "pages/course/download" */))
const _794fe1bc = () => interopDefault(import('..\\pages\\games\\games-list.vue' /* webpackChunkName: "pages/games/games-list" */))
const _b693f204 = () => interopDefault(import('..\\pages\\videos\\videodetails.vue' /* webpackChunkName: "pages/videos/videodetails" */))
const _9ce97370 = () => interopDefault(import('..\\pages\\videos\\watch.vue' /* webpackChunkName: "pages/videos/watch" */))
const _e63850ba = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2ba733b1,
    name: "apps"
  }, {
    path: "/login",
    component: _568b7aba,
    name: "login"
  }, {
    path: "/phrase",
    component: _19143eb8,
    name: "phrase"
  }, {
    path: "/privacy-alert",
    component: _972853b0,
    name: "privacy-alert"
  }, {
    path: "/recover-identity",
    component: _4d552974,
    name: "recover-identity"
  }, {
    path: "/update-password",
    component: _e233b7a0,
    name: "update-password"
  }, {
    path: "/category/category-list",
    component: _18647be0,
    name: "category-category-list"
  }, {
    path: "/category/download",
    component: _52a98af6,
    name: "category-download"
  }, {
    path: "/course/coursedetails",
    component: _0860889d,
    name: "course-coursedetails"
  }, {
    path: "/course/download",
    component: _1957d4a2,
    name: "course-download"
  }, {
    path: "/games/games-list",
    component: _794fe1bc,
    name: "games-games-list"
  }, {
    path: "/videos/videodetails",
    component: _b693f204,
    name: "videos-videodetails"
  }, {
    path: "/videos/watch",
    component: _9ce97370,
    name: "videos-watch"
  }, {
    path: "/",
    component: _e63850ba,
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
