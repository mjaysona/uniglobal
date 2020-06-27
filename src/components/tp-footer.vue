<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="row">
            <div class="col-xs-12 logo">
              <img
                src="../assets/images/logo.svg"
                alt="uniglobal"
              >
            </div>
            <div class="col-xs-12">
              <ul class="links">
                <li
                  v-for="link in links"
                  :key="link.name"
                >
                  <router-link
                    :to="link.url"
                    exact
                  >
                    <strong>{{ link.name }}</strong>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <h4>Contacts</h4>
          <p>
            <a 
              :href="'mailto:' + organizationDetails.email"
              class="labeled-icon center"
            >
              <unicon
                fill="white"
                name="envelope"
              />
              <span>{{ organizationDetails.email }}</span>
            </a>
          </p>
          <div
            v-for="office in organizationDetails.offices"
            :key="office.id"
          >
            <h5>
              {{ office.officeType }}
            </h5>
            <p>
              <a
                :href="office.link"
                class="labeled-icon" 
                target="_blank"
              >
                <unicon
                  fill="white"
                  name="map-marker"
                />
                <span>{{ office.address }}</span>
              </a>
            </p>
            <p class="labeled-icon">
              <a
                :href="'tel:' + office.mobileNumber.replace(/\(0\)|\s+/g,'')"
                class="labeled-icon center"
              >
                <unicon
                  fill="white"
                  name="phone"
                />
                <span>{{ office.mobileNumber }}</span>
              </a>
            </p>
          </div>
          <br>
          <h4>Follow us</h4>
          <div class="follow">
            <a
              v-for="social in socialMedia"
              :key="social.id"
              :href="social.url"
              class="labeled-icon center"
              target="_blank"
            >
              <unicon
                :name="social.icon"
                fill="white"
              />
              <span>{{ social.name }}</span>
            </a>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-3 col-sm-4 col-lg-offset-2 col-md-offset-2 col-xs-12"
        >
          <h4>Partners</h4>
          <div class="partners">
            <div class="exclusive">
              <img
                v-for="(partner, index) in partners"
                v-if="index <= 2"
                :key="partner.id"
                :src="require('@/assets/images/' + partner.logo.reversed)"
                :alt="partner.name"
              >
            </div>
            <div class="basic">
              <img
                v-for="(partner, index) in partners"
                v-if="index >= 3"
                :key="partner.id"
                :src="require('@/assets/images/' + partner.logo.reversed)"
                :alt="partner.name"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>{{ copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpFooter',
    props: {
      copyright: {
        type: String,
        default: '',
      },
      links: {
        type: Array,
        default: () => [],
      }, 
      organizationDetails: {
        type: Object,
        default: () => {},
      }, 
      partners: {
        type: Array,
        default: () => [],
      }, 
      products: {
        type: Array,
        default: () => [],
      }, 
      socialMedia: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .copyright {
    color: $gray-dark;
    padding-top: $xlg * 3;
    text-align: center;
  }
  
  #footer {
    background: $gray-darker;
    color: white;
    padding-top: $md;
  }

  h4:first-child {
    margin-top: 0;
  }

  .logo {
    padding-right: $xlg * 1.25;
    img {
      max-width: $logo-lg;
      width: 100%;
    }
  }

  p {
    margin-bottom: $xs;
  }

  .partners {
    img {
      display: block;
      margin: 0;
      max-width: $logo-md;
    }

    .exclusive img:first-of-type {
      margin-bottom: 0;
    }

    .exclusive img:not(:first-of-type) {
      display: inline-block;
      margin: 0 0 $md ;
      max-width: $logo-md / 2 - $xs / 2;
    }

    .exclusive img:last-child {
      margin-left: $xs;
    }
  }

  .follow {
    a {
      margin-right: $xs;
    }
  }

  ul {
    &.links {
      padding-top: $xlg;
      li {
        a {
          color: $primary-color;
          font-size: $h4;
          text-decoration: none;
          text-transform: uppercase;
          &:hover {
            color: darken($primary-color, 4%);
          }
        }
      }
    }
    li {
      padding-bottom: $sm;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: darken(white, 8%);
        }
      }
    }
  }

  /* Responsive styles. */
  @media only screen and (max-width: 62em) {
    .copyright {
      padding-top: $xlg * 3;
    }
  }

  @media only screen and (max-width: 48em) {
    .logo {
      margin-bottom: $xlg;
    }

    #footer .container > .row > div {
      margin-bottom: $lg * 2;
    }

    ul.links {
      padding: 0;
    }
  }
</style>
