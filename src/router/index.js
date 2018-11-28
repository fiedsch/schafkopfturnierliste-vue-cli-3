import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Settings from '@/components/Settings'
import Results from '@/components/Results'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'Main',
        component: Main
      },
      {
          path: '/settings',
          name: 'Settings',
          component: Settings
      },
      {
          path: '/results',
          name: 'Results',
          component: Results
      },
      {
          path: '/about',
          name: 'About',
          component: About
      }
  ]
})
