import Vue from 'vue'
import VueRouter from 'vue-router'

import SpClients from '@/components/sp-clients'
import SpHome from '@/components/sp-home'
import SpProducts from '@/components/sp-products'
import SpTalkToUs from '@/components/sp-talk-to-us'
import SpWhoWeAre from '@/components/sp-who-we-are'

import SpBrowseProducts from '@/components/sp-browse-products'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'SpHome',
      component: SpHome
    },
    {
      path: '/products',
      name: 'SpProducts',
      component: SpProducts,
      children: [
        {
          path: 'browse/:category',
          name: 'SpBrowseProducts',
          component: SpBrowseProducts
        }
      ]
    },
    {
      path: '/clients',
      name: 'SpClients',
      component: SpClients
    },
    {
      path: '/who-we-are',
      name: 'SpWhoWeAre',
      component: SpWhoWeAre
    },
    {
      path: '/talk-to-us',
      name: 'SpTalkToUs',
      component: SpTalkToUs
    }
  ],
  mode: 'history',

  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 };
  }
})
