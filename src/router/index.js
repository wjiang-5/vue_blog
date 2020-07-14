import Vue from 'vue'
import Router from 'vue-router'
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BackgroundImage',
      component: BackgroundImage
    }
  ]
})
