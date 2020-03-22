<template>
  <div class="list-block container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="item in items" :key="item.name">
        <figure :no-image="noImage">
          <figcaption>{{ item.name }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpList',
    props: ['items', 'no-image']
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  $list-block-spacing: $md;

  .container {
    padding: 0;
    width: 100%;
    .row [class^="col-"] {
      padding-bottom: 1rem;
    }
  }
  
  figure {
    border: $gray-lighter 1px solid;
    border-radius: $xs / 4;
    box-sizing: border-box;
    cursor: default;
    height: 100%;
    line-height: $p * 1.64;
    padding: $sm;
  }

  @media only screen and (max-width: 48em) {
    figure {
      border: none;
      padding: 0;
    }
  }
</style>
