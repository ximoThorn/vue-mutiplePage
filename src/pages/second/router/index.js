import Vue from 'vue'
import Router from 'vue-router'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Second',
      component: Second
    }
  ]
})
