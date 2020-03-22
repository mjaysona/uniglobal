<template>
  <div
    class="header row middle-xs"
    :style="headerImage"
  >
    <div class="container row center-xs middle-xs">
      <div class="col-sm-8 col-xs-12">
        <h1>{{ currentRoute }}</h1>
        <p>
          {{ pageDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpHeader',
    props: ['pages'],
    data () {
      return {
        currentRoute: '',
        pageDetails: {},
      }
    },
    computed: {
      headerImage () {
        return 'background-image: url(' + require('@/assets/images/' + 
          this.pageDetails.image) + ')'
      },
      pageDescription () {
        return this.pageDetails.description;
      },
    },
    watch: {
      $route (to, from) {
        this.updatePageDetails();
      },
    },
    created () {
      this.updatePageDetails();
    },
    methods: {
      updatePageDetails () {
        switch(this.$route.name) {
          case 'SpBrowseProducts':
            this.currentRoute = 'Our Products';
            break;
          case 'SpCareers':
            this.currentRoute = 'Careers';
            break;
          case 'SpClients':
            this.currentRoute = 'Our Clients';
            break;
          case 'SpContactUs':
            this.currentRoute = 'Contact Us';
            break;
          case 'SpProducts':
            this.currentRoute = 'Our Products';
            break;
          case 'SpWhoWeAre':
            this.currentRoute = 'Who We Are';
            break;
          default:
            break;
        }
        this.pageDetails = this.pages.find(obj => {
          return obj.name === this.currentRoute;
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .header {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    margin: 0;
    min-height: 240px;
    text-align: center;
    p {
      text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.64), 0px 2px 8px rgba(0, 0, 0, .4);
    }
  }
</style>
