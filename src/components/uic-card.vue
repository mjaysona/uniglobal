<template>
  <div class="card">
    <slot name="image"></slot>
    <slot name="title"></slot>
    <slot name="message"></slot>
  </div>
</template>

<script>
  export default {
    name: 'UicCard'
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .card {
    background: white;
    border: $gray-lighter 1px solid;
    border-top: $primary-color 4px solid;
    border-radius: 4px;
    padding: $md $lg;
    img {
      max-width: 140px;
    }
  }
</style>
