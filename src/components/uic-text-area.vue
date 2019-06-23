<template>
  <textarea :placeholder="label"
    :rows="rows"/>
</template>

<script>
  export default {
    name: 'UicTextArea',
    props: ['label', 'rows']
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  textarea {
    @include p($p);
    border: none;
    border-bottom: $gray-lighter 1px solid;
    display: block;
    margin: 0 0 $xs 0;
    padding: $xs 0;
    resize: none;
    width: 100%;
    &[disabled] {
      &:hover {
        cursor: default;
      }
      &::placeholder {
        color: $gray;
        cursor: default;
      }
    }
    &:focus {
      outline: none;
      border-bottom: $primary-color 2px solid;
      padding-bottom: $xs - 1;
    }
    &:hover {
      cursor: text;
    }
  }
</style>
