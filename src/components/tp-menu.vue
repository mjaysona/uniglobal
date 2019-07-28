<template>
  <div id="menu" :global="global">
    <div class="container">
      <div class="row">
        <div class="logo col-md-3 col-sm-6 col-xs-12">
          <div class="menu-toggle" name="open" @click="toggleMenu">
            <unicon
              width="36"
              height="36"
              fill="white"
              name="bars">
            </unicon>
          </div>
          <router-link to="/" exact>
            <img src="../assets/images/logo.svg" alt="uniglobal">
          </router-link>
        </div>
        <div class="links col-md-7 row middle-xs" :visible="isMenuVisible">
          <ul class="row center-xs col-sm-12">
            <li v-if="isMenuVisible">
              <div class="menu-toggle" name="close" @click="toggleMenu">
                <unicon 
                  width="36"
                  height="36"
                  fill="white"
                  name="multiply">
                </unicon>
              </div>
            </li>
            <li v-if="isMenuVisible">
              <router-link to="/" exact>
                Home
              </router-link>
            </li>
            <li class="col-xs" v-for="link in links" :key="link.name">
              <router-link :to="link.url" exact>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="cta col-md-2 col-xs-6 row middle-xs end-xs">
          <span><strong>{{ cta[0].mobileNumber }}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpMenu',
    props: ['links', 'cta', 'hidden', 'global'],
    data () {
      return {
        currentRoute: '',
        isMenuVisible: false,
      }
    },
    methods: {
      toggleMenu (e) {
        this.isMenuVisible = e.currentTarget.getAttribute('name') == 'open' ? 
          true : false;
      }
    },
    watch: {
      $route (to, from) {
        this.isMenuVisible = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .cta {
    font-size: $h2;
    margin-left: auto;
  }

  #menu {
    z-index: 99;
    .container {
      margin: 0;
      max-width: none;
      padding: 0;
    }
    &[global] {
      background: $gray-darkest;
      color: white;
      height: 84px;
      position: fixed;
      top: 0;
      width: 100%;
      -webkit-box-shadow:0px 2px 4px 0px rgba(0,0,0,0.32),
        0px 1px 1px 0px rgba(0,0,0,0.24);
      -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.32),
        0px 1px 1px 0px rgba(0,0,0,0.24);
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.32),
        0px 1px 1px 0px rgba(0,0,0,0.24);
      .container {
        margin: 0 auto;
        padding: $md ($md * 2);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 1280px;
      }
      .logo {
        flex: 0 0 144px;
        max-width: none;
        img {
          max-width: 120px;
        }
      }
    }
    .links {
      ul {
        width: 100%;
        li {
          a {
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            &:hover {
              color: $primary-color;
            }
            &.router-link-active {
              color: $primary-color;
            }
          }
        }
      }
    }
    .logo {
      align-items: center;
      display: flex;
      flex: 0 0 246px;
      .menu-toggle {
        height: $sm * 3;
        margin-right: $md;
        width: $sm * 3;
        &:hover { 
          cursor: pointer;
        }
      }
    }
    .menu-toggle {
      display: none;
    }
  }

  @media only screen and (max-width: 62em) {
    #menu {
      .menu-toggle {
        display: block;
      }
      .links {
        display: none;
        ul {
          display: block;
          margin: 0;
          li {
            display: block;
            font-size: $h1;
            text-align: left;
            padding: 0;
            width: 100%;
            a {
              text-transform: capitalize;
              padding: ($xlg / 2) $xlg;
              display: block;
            }
            .menu-toggle {
              padding: $lg $xlg;
              text-align: right;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
        &[visible] {
          background: $gray-darkest;
          display: block;
          height: 100vh;
          left: 0;
          margin: 0;
          position: fixed;
          top: 0;
          width: 100vw;
        }
      }
      &[global] .container {
        padding: 16px 0;
      }
    }
  }

  @media only screen and (max-width: 48em) {
    #menu .cta {
      display: none;
    }

    #menu .logo img {
      max-width: 120px;
    }
  }
</style>
