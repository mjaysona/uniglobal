<template>
  <div class="list-block container">
    <div class="row">
      <div
        v-for="item in items"
        class="col-lg-4 col-md-6 col-xs-12"
      >
        <figure :no-image="noImage">
          <figcaption><strong>{{ item.name }}</strong></figcaption>
          <div class="tags">
            <span
              v-for="tag in item.tags"
            >
              <strong>{{ tag }}</strong>
            </span>
          </div>
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
  
  figure {
    border: $gray-lighter 1px solid;
    border-radius: $xs / 4;
    box-sizing: border-box;
    cursor: default;
    height: 100%;
    line-height: $p * 1.64;
    padding: $xs $sm;
  }

  .container {
    padding: 0;
    width: 100%;
    .row [class^="col-"] {
      padding-bottom: 1rem;
    }
  }

  .tags {
    font-size: $tag;
    line-height: normal;
    text-transform: uppercase;
    > span {
      border: $primary-color 1px solid;
      border-radius: $sm;
      color: $primary-color;
      display: inline-block;
      letter-spacing: 1px;
      margin: $xxs $xxs 0 0;
      padding: $xxs $xs 3px;
    }
  }

  @media only screen and (max-width: 48em) {
    figure {
      border: none;
      padding: 0;
    }
  }
</style>
