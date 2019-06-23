<template>
  <div class="form">
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="cta">
      <slot name="cta"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpForm'
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .fields {
    margin-bottom: $lg;
  }

  .form {
    margin-bottom: $xs;
  }
</style>
