<template>
  <div id="clients">
    <div class="container">
      <div class="row center-xs">
        <div class="col-sm-8 col-xs-12">
          <p>
            Our long-term partnership with our clients is based on unwavering
            commitment, support, enthusiasm, and innovation.
          </p>
          <p>Uniglobal has been doing business with the following: </p>
        </div>
      </div>
      <div class="client-list row">
        <div v-for="client in clients" :key="client.id"
          class="col-sm-3 col-xs-6 light">
          <div class="box light">
            <figure>
              <div :class="{ 'default' : !client.clientLogo,
                'client-img' : true  }">
                <img :src="client.clientLogo ?
                  require('@/assets/images/' + client.clientLogo) :
                  require('@/assets/images/gear-icon-01.svg')" 
                  alt="client.clientName" />
              </div>
              <figcaption>
                <p>{{ client.clientName }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div id="whyPartnerWithUs">
      <div class="container">
        <div class="row center-xs">
          <div class="col-sm-8 col-xs-12">
            <h1>Why Partner With Us</h1>
            <p>
              Uniglobal Industrial Trading Inc. stands by only one promise: to
              deliver quality around the globe. Uniglobal’s products, practices,
              and procedures were developed through its extensive global experience
              in mining, drilling, exploration, and construction.
            </p>
          </div>
        </div>
        <div class="list row between-xs">
          <div class="col-sm-6" v-for="item in whyPartnerWithUs" :key="item.id">
            <div class="list-img">
              <img :src="require('@/assets/images/' + item.icon)" 
              :alt="item.title">
            </div>
            <div class="list-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import clients from '../static/clients.json';

  export default {
    name: 'SpClients',
    data () {
      return clients
    }
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .client-list {
    margin: 0 (-$xxs * 3);
    > [class^="col-"] {
      padding: $xxs * 3;
      .box {
        height: 100%;
        text-align: center;
        .client-img {
          height: 96px;
          margin-bottom: $xs * 2;
          text-align: center;
          & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          &.default {
            opacity: 0.16;
          }
        }
        p {
          margin: 0;
        }
      }
    }
  }

  #whyPartnerWithUs {
    text-align: center;
    .container {
      padding-top: 0;
    }
    .list {
      > div {
        margin-bottom: $lg;
        .list-img img {
          height: 96px;
        }
      }
    }
    .row {
      margin-bottom: $md;
    }
  }
</style>
