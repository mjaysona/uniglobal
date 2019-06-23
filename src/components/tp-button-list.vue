<template>
  <div class="button-list">
    <uic-button v-for="item in list" :key="item.id"
      ghost
      primary
      no-hover
      :value="item.productTitle"
      xs>
    </uic-button><slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TpButtonList',
    props: ['list']
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  button {
    margin: 0 $xs $xs 0;
  }
</style>
