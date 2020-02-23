<template>
  <div class="button-list">
    <uic-button
      v-for="item in list"
      :key="item.id"
      :value="item.productTitle"
      ghost
      no-hover
      primary
      xs
    />
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'TpButtonList',
    props: {
      list: {
        type: Array,
        default: () => {},
      }, 
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  button {
    margin: 0 $xs $xs 0;
  }

  @media only screen and (max-width: 48em) {
    button {
      display: block;
      width: 100%;
    }
  }
</style>
