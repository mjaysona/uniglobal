<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
          <div class="row">
            <div class="col-sm-12 col-xs-6 logo">
              <img src="../assets/images/logo.svg" alt="uniglobal">
            </div>
            <div class="col-sm-12 col-xs-6">
              <ul class="links">
                <li v-for="link in links" :key="link.name">
                  <router-link :to="link.url" exact>
                    <strong>{{ link.name }}</strong>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
          <h4>Contacts</h4>
          <p class="labeled-icon">
            <unicon name="envelope" fill="white"></unicon>
            <a v-bind:href="'mailto:' + organizationDetails.email">
              {{ organizationDetails.email }}
            </a>
          </p>
          <div v-for="office in organizationDetails.offices" :key="office.id">
            <h5>
              {{ office.location }}
              ({{ office.officeType }})
            </h5>
            <p class="labeled-icon">
              <unicon name="map-marker" fill="white"></unicon>
              <span>{{ office.address }}</span>
            </p>
            <p class="labeled-icon">
              <unicon name="phone" fill="white"></unicon>
              <span>{{ office.mobileNumber }}</span>
            </p>
          </div>
          <br>
          <h4>Follow us</h4>
          <div class="follow">
            <a class="labeled-icon center"
              href="" 
              target="_blank"
              v-for="icon in socialMedia" :key="icon.id">
              <unicon
                :name="icon.icon" fill="white">
              </unicon>
              <span>{{ icon.name }}</span>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-lg-offset-1 col-md-offset-1
          col-xs-6">
          <h4>Products</h4>
          <ul>
            <li v-for="product in products" :key="product.id">
              <router-link to="">{{ product.name }}</router-link>
            </li>
          </ul>
          <br>
          <h4>Partners</h4>
          <div class="partners">
            <img
              v-for="partner in partners"
              :key="partner.id"
              :src="require('@/assets/images/' + partner.logo.reversed)"
              :alt="partner.name">
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
    props: [
      'copyright',
      'links', 
      'organizationDetails', 
      'partners', 
      'products', 
      'socialMedia',
    ]
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
    background: $gray-darkest;
    color: white;
    padding-top: $md;
  }

  h4:first-child {
    margin-top: 0;
  }

  .logo img {
    max-width: 164px;
    width: 100%;
  }

  p {
    margin-bottom: $xs;
  }

  .partners {
    img {
      margin: 0 $md 0 0;
      max-width: 140px;
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
    .logo img {
      width: 80%;
    }

    ul.links {
      margin-bottom: $xlg;
      padding: 0;
    }
  }
</style>
