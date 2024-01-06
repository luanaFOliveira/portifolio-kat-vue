import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photo from '@/components/Photo'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/photo/:id',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})