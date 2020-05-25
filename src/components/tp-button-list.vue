<template>
  <div class="button-list">
    <div
      v-for="item in list"
      :key="item.id"
    >
      <router-link
        :to="{
          name: 'SpBrowseProducts',
          params: {
            category: formatToUrl(title),
            subCategory: item.productTitle,
          },
        }"
      >
        <uic-button
          :value="item.productTitle"
          ghost
          primary
          xs
        />
      </router-link>
    </div>
    <slot />
  </div>
</template>

<script>
  import formatToUrl from '../mixins/formatToUrl';

  export default {
    name: 'TpButtonList',
    mixins: [formatToUrl],
    props: {
      list: {
        type: Array,
        default: () => {},
      }, 
      title: {
        type: String,
        default: '',
      }, 
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';
  
  /* Component level css. */
  div {
    display: inline-block;
    margin: 0 $xs $xs 0;
  }

  @media only screen and (max-width: 48em) {
    div {
      display: block;
    }

    button {
      display: block;
      width: 100%;
    }
  }
</style>
