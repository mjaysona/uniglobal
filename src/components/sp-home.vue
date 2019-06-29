<template>
  <div id="home">
    <header>
      <div class="cover">
        <div class="container">
          <div class="row vertical">
            <tp-menu class="col-xs-12"
              :links="links"
              :cta="offices">
            </tp-menu>
            <div class="intro col-lg-12 row middle-xs">
              <div class="col-md-9 col-sm-11 col-xs-12">
                <h1 class="extra">{{ headerTitle }}</h1>
                <div class="row">
                  <div class="col-xs-9">
                    <p>{{ headerDesc }}</p>
                    <router-link :to="{ name: 'SpWhoWeAre'}">
                      <uic-button
                        url="/who-we-are"
                        ghost
                        primary
                        :value="headerCta">
                      </uic-button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="categories">
      <div class="container">
        <div v-for="category in categories" :key="category.id"
          class="row">
          <div class="col-md-6 col-sm-5">
            <img :src="require('@/assets/images/' + category.image)" 
              :alt="category.title">
          </div>
          <div class="col-md-6 col-sm-7">
            <h1>{{ category.title }}</h1>
            <p>{{ category.description }}</p>
            <tp-button-list :list="category.products">
              <router-link :to="{ name: 'SpBrowseProducts', params: { category: 
                formatToUrl(category.title)} }">
                <uic-button primary xs value="See more"></uic-button>
              </router-link>
            </tp-button-list>
          </div>
        </div>
      </div>
    </div>
    <div id="services" class="smoke">
      <div class="row scroll-wrapper">
        <div v-for="service in services" :key="service.id"
          class="card col-md-3">
          <div class="card-body">
            <img :src="require('@/assets/images/' + service.image)" 
              :alt="service.title">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <span class="scroll-indicator right"></span>
        <span class="scroll-indicator left"></span>
      </div>
    </div>
    <div id="exclusiveBrands">
      <div class="container">
        <div class="row center-xs">
          <div class="col-md-12">
            <h1>{{ sections[2].title }}</h1>
          </div>
          <div class="col-md-8 col-sm-12">
            <p>{{ exclusiveBrands.description }}</p>
          </div>
        </div>
        <div class="row">
          <div v-for="brand in exclusiveBrands.brands" :key="brand.id"
            class="col-md-6 col-sm-6">
            <h2>{{ brand.brandName }}</h2>
            <img :src="require('@/assets/images/' + brand.image)" 
              :alt="brand.brandName">
            <h4>{{ brand.brandProduct }}</h4>
            <p>{{ brand.brandDescription }}</p>
            <router-link :to="{ name: 'SpBrowseProducts', params: { category: 
              'exploration'} }">
              <uic-button primary value="See more"></uic-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="partners" class="smoke">
      <div class="container">
        <h1>{{ sections[3].title }}</h1>
        <div class="row between-xs">
          <uic-card v-for="partner in partners" :key="partner.id"
            class="col-md-4 col-sm-12">
            <img :src="require('@/assets/images/' + partner.logo)" 
              alt="partner.name" slot="image"/>
            <h5 slot="title">{{ partner.name }}</h5>
            <p slot="title">{{ partner.description }}</p>
          </uic-card>
        </div>
      </div>
    </div>
    <div id="clientReviews">
      <div class="container">
        <h1>{{ sections[4].title }}</h1>
        <div class="review-list">
          <uic-speech-bubble v-for="(clientReview, index) in clientReviews"
            :class="{ 'reverse' : index % 2 !== 0 }"
            :key="clientReview.id">
            <img slot="avatar" :src="require('@/assets/images/' + 
              generateAvatar(clientReview.clientImage))"
              :alt="clientReview.clientName"/>
            <p slot="message">
              {{ clientReview.clientMessage }}
            </p>
            <h5 slot="author">
              {{ clientReview.clientName }}
              {{ clientReview.clientPosition }}
            </h5>
            <p slot="organization">
              {{ clientReview.clientCompany }}
            </p>
          </uic-speech-bubble>
        </div>
      </div>
    </div>
    <hr/>
    <div id="contactUs">
      <div class="container">
        <h1>{{ sections[5].title }}</h1>
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <tp-tabs
              selected-tab="davao"
              :tabs="generateTabs(offices)"
              left>
              <div v-for="office in offices" :key="office.id"
                :slot="office.location.toLowerCase()">
                <div class="row">
                  <div class="col-md-7 col-sm-12">
                    <h4>Address</h4>
                    <p>{{ office.address }}</p>
                    <h4>Contact Number</h4>
                    <p>{{ office.mobileNumber }}</p>
                  </div>
                </div>
              </div>
            </tp-tabs>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="box msg-form light">
              <h4>Send message</h4>
              <tp-form>
                <div slot="fields">
                  <uic-input disabled label="Name" type="text"></uic-input>
                  <uic-input disabled label="Email Address"></uic-input>
                  <uic-text-area disabled label="Message" rows="4"></uic-text-area>
                </div>
                <div class="row end-xs"
                  slot="cta">
                  <uic-button primary
                    disabled
                    with-icon-right
                    value="Send">
                    <unicon class="icon-right"
                      fill="white"
                      name="message"
                      slot="icon-right"></unicon>
                  </uic-button>
                </div>
              </tp-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import home from '../static/home.json';
  import formatToUrl from '../mixins/formatToUrl';

  export default {
    name: 'SpHome',
    props: ['links','offices','partners'],
    data () {
      return home
    },
    methods: {
      generateTabs (item) {
        const generatedItems = item.map(function(item) {
          return item.location;
        });
        return generatedItems;
      },
      generateAvatar (imgSrc) {
        if (imgSrc) {
          return imgSrc;
        }
        return 'avatar-default-01.svg';
      }
    },
    mixins: [formatToUrl],
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '~@/assets/css/_variables.scss';

  /* Component level css. */
  #clientReviews,
  #contactUs,
  #exclusiveBrands,
  #partners,
  #services {
    padding: ($md * 2) 0;
    h1 {
      text-align: center;
    }
    h1, p {
      margin-bottom: $lg;
    }
  }

  #categories {
    .container {
      .row {
        margin-bottom: $xs * 5;
        &:nth-child(odd) {
          > div:first-of-type {
            padding-right: $sm * 2;
          }
          > div:last-of-type {
            padding: 0 0 ($lg * 5) $sm * 2;
          }
        }
        &:nth-child(even) {
          -webkit-box-direction: reverse;
          -webkit-box-orient: horizontal;
          -moz-flex-direction: row-reverse;
          -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
          > div:first-of-type {
            padding-left: $sm * 2;
          }
          > div:last-of-type {
            padding-right: $sm * 2;
          }
        }
        > div {
          img {
            border-radius: $xxs;
            margin-top: -$xs * 15;
          }
        }
      }
    }
    img { 
      width: 100%;
    }
  }

  #clientReviews {
    background: url('~@/assets/images/world-map-01.svg') no-repeat center 240px /
      88%;
  }

  #contactUs {
    padding-bottom: $xlg * 3;
    h1 {
      margin-bottom: $xlg * 2;
    }
    .msg-form {
      min-height: 350px;
      width: 100%;
    }
  }

  #exclusiveBrands {
    text-align: center;
    img {
      max-width: 100%;
    }
  }

  header {
    background: url('../assets/images/header-img-02.png') no-repeat center /
      cover;
    color: white;
    height: 100vh;
    max-height: 725px;
    p {
      margin-bottom: $xlg;
    }
    .cover {
      background: url('../assets/images/globe-01.svg') no-repeat right
        -40px bottom -40px / 888px;
      height: 100%;
      .container {
        height: 100%;
      }
    }
  }

  .intro {
    flex: .76;
  }

  #partners {
    .container {
      > .row {
        padding: $md 0 ($md * 2) 0;
        > .col-md-4 {
          max-width: 30%;
        }
      }
    }
  }

  .review-list {
    padding-top: $md * 2;
  }

  .scroll-wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    .card {
      flex: 0 0 auto;
      margin: 0 $md;
      &:first-of-type {
        padding-left: $md * 3;
      }
      &:last-of-type {
        max-width: calc(25% + 64px);
        padding-right: $xs * 8;
      }
    }
    .scroll-indicator {
      height: 100%;
      top: 0;
      width: 160px;
      position: absolute;
      display: block;
      &.right {
        background: linear-gradient(90deg, rgba(241,241,241,0.0018382352941176405) 35%, rgba(241,241,241,1) 100%);
        right: 0;
      }
      &.left {
        background: linear-gradient(90deg, rgba(241,241,241,1) 0%, rgba(241,241,241,0.0018382352941176405) 65%);
        left: 0;
      }
    }
  }
  
  #services {
    text-align: center;
    padding: ($lg * 2) 0;
    position: relative;
    img {
      margin-bottom: $lg * 2;
      max-height: 134px;
    }
  }

  /* Responsive styles. */
  @media only screen and (max-width: 62em) {
    #categories .container .row {
      margin: $md 0;
      &:nth-child(odd) {
        > div {
          &:last-of-type {
            padding: 0;
          }
        }
      }
      > div {
        &:first-of-type {
          padding: 0;
        }
        &:last-of-type {
          padding: 0;
        }
        img {
          margin: 0;
        }
      }
    } 

    #clientReviews,
    #contactUs,
    #exclusiveBrands,
    #partners,
    #services {
      padding: 0;
      p {
        margin-bottom: $xs;
      }
    }

    #contactUs {
      .msg-form {
        margin-bottom: ($lg * 2);
      }
    }

    #exclusiveBrands {
      .container {
        p {
          margin-bottom: $lg;
        }
        button {
          margin-bottom: $xlg;
        }
      }
    }

    #partners {
      .container > .row {
        .card {
          max-width: none;
          margin-bottom: $lg;
        }
      }
    }

    .review-list {
      padding: 0;
    }

    #services {
      padding: $md 0;
      img {
        margin-bottom: $xs;
      }
      p {
        margin-bottom: $lg;
      }
    }

    .intro {
      margin: $xlg 0;
    }
  }

  @media only screen and (max-width: 48em) {
    #categories .container > .row {
      margin-top: 0;
      div:first-child {
        display: none;
      }
    }

    header {
      height: 100vh;
      max-height: none;
      .cover {
        background-position: 0 270px;
      }
    }
  }
</style>
