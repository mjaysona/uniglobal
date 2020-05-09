<template>
  <div id="home">
    <header>
      <div class="cover">
        <div class="container">
          <div class="row vertical">
            <tp-menu
              :links="links"
              :cta="offices"
              class="col-xs-12"
            />
            <div class="intro col-lg-12 row middle-xs">
              <div class="col-md-9 col-sm-11 col-xs-12">
                <h1 class="extra">
                  {{ headerTitle }}
                </h1>
                <div class="row">
                  <div class="col-xs-9">
                    <p>{{ headerDesc }}</p>
                    <router-link :to="{ name: 'SpWhoWeAre'}">
                      <uic-button
                        url="/who-we-are"
                        ghost
                        primary
                        :value="headerCta"
                      />
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
        <div
          v-for="category in categories"
          :key="category.id"
          class="row"
        >
          <div class="col-md-6 col-sm-5">
            <img 
              :alt="category.title"
              :src="require('@/assets/images/' + category.image)" 
            >
          </div>
          <div class="col-md-6 col-sm-7">
            <h1>{{ category.title }}</h1>
            <p>{{ category.description }}</p>
            <tp-button-list :list="category.products">
              <router-link
                :to="{
                  name: 'SpBrowseProducts',
                  params: {
                    category: formatToUrl(category.title),
                  },
                }"
              >
                <uic-button
                  primary
                  value="See more"
                  xs
                />
              </router-link>
            </tp-button-list>
          </div>
        </div>
      </div>
    </div>
    <div
      id="services"
      class="smoke"
    >
      <div class="container">
        <div class="row center-xs">
          <div class="col-md-12">
            <h1>
              Core Values
            </h1>
          </div>
          <div class="col-md-8 col-sm-12">
            <p>
              Uniglobal Industrial Trading, Inc. continues to celebrate its
              decade-long legacy by further operating under the standards of
              quality, commitment and value—making it the trusted brand by the
              trusted names in the industry.
            </p>
            <p>
              Adapting to the competitive global landscape of the mining & 
              exploration industry, we at Uniglobal Industrial Trading, Inc. 
              maintain these values as the core of our operations.
            </p>
          </div>
        </div>
        <div class="row">
          <div
            v-for="service in services"
            :key="service.id"
            class="col-md-4"
          >
            <div class="card-body">
              <img 
                :alt="service.title"
                :src="require('@/assets/images/' + service.image)" 
              >
              <h2>{{ service.title }}</h2>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
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
          <div
            v-for="brand in exclusiveBrands.brands"
            :key="brand.id"
            class="col-md-6 col-sm-6"
          >
            <h2>{{ brand.brandName }}</h2>
            <img
              :alt="brand.brandName"
              :src="require('@/assets/images/' + brand.image)" 
            >
            <h4>{{ brand.brandProduct }}</h4>
            <p>{{ brand.brandDescription }}</p>
            <router-link
              :to="{
                name: 'SpBrowseProducts',
                params: {
                  category: 'exploration',
                },
              }"
            >
              <uic-button
                primary
                value="See more"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      id="partners" 
      class="smoke"
    >
      <div class="container">
        <h1>{{ sections[3].title }}</h1>
        <carousel
          pagination-color="#dddddd"
          :autoplay="true"
          :loop="true"
          :min-swipe-distance="40"
          :pagination-padding="4"
          :pagination-size="8"
          :per-page="1"
          :per-page-custom="[
            [1368, 4],
            [992, 3],
            [768, 2],
          ]"
          :space-padding="16"
          :speed="600"
        >
          <slide
            v-for="partner in partners"
            :key="partner.id"
            class="scroll-box"
          >
            <uic-card>
              <img
                slot="image"
                :src="require('@/assets/images/' + partner.logo.original)" 
                alt="partner.name"
              >
              <h5 slot="title">
                {{ partner.name }}
              </h5>
              <p slot="title">
                {{ partner.description }}
              </p>
            </uic-card>
          </slide>
        </carousel>
      </div>
    </div>
    <div id="clientReviews">
      <div class="container">
        <h1>{{ sections[4].title }}</h1>
        <div class="review-list">
          <uic-speech-bubble
            v-for="(clientReview, index) in clientReviews"
            :key="clientReview.id"
            :class="{ 'reverse' : index % 2 !== 0 }"
          >
            <img
              slot="avatar"
              :src="require('@/assets/images/'
                + generateAvatar(clientReview.clientImage))"
              :alt="clientReview.clientName"
            >
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
    <hr>
    <div id="contactUs">
      <div class="container">
        <h1>{{ sections[5].title }}</h1>
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <tp-tabs
              selected-tab="davao"
              :tabs="generateTabs(offices)"
              left
            >
              <div
                v-for="office in offices"
                :key="office.id"
                :slot="office.location.toLowerCase()"
              >
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
                  <uic-input
                    disabled
                    label="Name"
                    type="text"
                  />
                  <uic-input
                    disabled
                    label="Email Address"
                  />
                  <uic-text-area
                    disabled
                    rows="4"
                    label="Message"
                  />
                </div>
                <div 
                  slot="cta"
                  class="row end-xs"
                >
                  <uic-button
                    primary
                    disabled
                    value="Send"
                    with-icon-right
                  >
                    <unicon 
                      slot="icon-right"
                      class="icon-right"
                      fill="white"
                      name="message"
                    />
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
  import { Carousel, Slide } from 'vue-carousel';
  import home from '../static/home.json';
  import formatToUrl from '../mixins/formatToUrl';

  export default {
    name: 'SpHome',
    components: {
      Carousel,
      Slide,
    },
    mixins: [formatToUrl],
    props: {
      links: {
        type: Array,
        default: () => [],
      }, 
      offices: {
        type: Array,
        default: () => {},
      }, 
      partners: {
        type: Array,
        default: () => [],
      },
    },
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
      },
    },
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
    padding: $md 0;
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
            padding: 0 0 $lg * 5 $sm * 2;
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
    position: relative;
    .container {
      margin: 0;
      max-width: none;
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      > .row {
        padding: $md 0 $md * 2 0;
        > .col-md-4 {
          max-width: 30%;
        }
      }
    }
  }

  .review-list {
    padding-top: $md * 2;
  }
  
  #services {
    text-align: center;
    position: relative;
    img {
      margin-bottom: $lg;
      max-height: 134px;
    }
    .row:last-of-type {
      margin-top: $lg;
    }
  }

  .VueCarousel .card {
    height: calc(100% - #{$xs * 5});
    margin: 0 $md;
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
    #services {
      padding: 0;
      p {
        margin-bottom: $xs;
      }
    }

    #contactUs {
      .msg-form {
        margin-bottom: $lg * 2;
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
    #categories {
      .container > .row {
        margin-top: 0;
        div:first-child {
          display: none;
        }
        &:last-child > div:last-of-type {
          padding-right: 0;
        }
      }
    
      button {
        display: block;
        width: 100%;
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
