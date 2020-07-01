import Vue from 'vue'
import VueRouter from 'vue-router'

import SpCareers from '@/components/sp-careers'
import SpClients from '@/components/sp-clients'
import SpContactUs from '@/components/sp-contact-us'
import SpHome from '@/components/sp-home'
import SpProducts from '@/components/sp-products'
import SpWhoWeAre from '@/components/sp-who-we-are'

import SpBrowseProducts from '@/components/sp-browse-products'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'SpHome',
      component: SpHome,
    },
    {
      path: '/products',
      name: 'SpProducts',
      component: SpProducts,
      children: [
        {
          path: 'browse/:category',
          name: 'SpBrowseProducts',
          component: SpBrowseProducts,
        },
      ],
    },
    {
      path: '/clients',
      name: 'SpClients',
      component: SpClients,
    },
    {
      path: '/who-we-are',
      name: 'SpWhoWeAre',
      component: SpWhoWeAre,
    },
    {
      path: '/contact-us',
      name: 'SpContactUs',
      component: SpContactUs,
    },
    {
      path: '/careers',
      name: 'SpCareers',
      component: SpCareers,
    },
  ],
  mode: 'hash',

  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0 };
  },
})
