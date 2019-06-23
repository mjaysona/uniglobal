<template>
  <div id="app"
    :global="$route.name != 'SpHome'">
    <tp-menu v-if="$route.name != 'SpHome'"
      :global="$route.name != 'SpHome'"
      :links="pages"
      :cta="organizationDetails.offices">
    </tp-menu>
    <header v-if="$route.name != 'SpHome'">
      <tp-header :pages="pages"></tp-header>
    </header>
    <router-view
      :email="organizationDetails.email"
      :links="pages"
      :offices="organizationDetails.offices"
      :partners="partners"
      :social-media="socialMedia">
    </router-view>
    <tp-footer :copyright="copyright"
      :links="pages"
      :organization-details="organizationDetails"
      :partners="partners"
      :products="products"
      :social-media="socialMedia">
    </tp-footer>
  </div>
</template>

<script>
  import siteData from './static/site-data.json';

  export default {
    name: 'App',
    data () {
      return siteData
    }
  }
</script>

<style lang="scss">
  /* Import scss files. */
  @import '@/assets/css/main.scss';

  /* Component level css. */
  #app {
    min-height: 100vh;
    &[global] {
      padding-top: 84px;
    }
  }
</style>
