<template>
  <button
    :disabled="disabled"
    :ghost="ghost"
    :no-hover="noHover"
    :primary="primary"
    :with-icon-right="withIconRight"
    :xs="xs">
    <strong>
      <span>{{ value }}</span>
      <slot name="icon-right"></slot>
    </strong>
  </button>
</template>

<script>
  export default {
    name: 'UicButton',
    props: [
      'disabled',
      'value', 
      'ghost', 
      'primary', 
      'xs', 
      'no-hover', 
      'with-icon-right']
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  button {
    border: none;
    border-radius: 999px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: white;
    font-size: 1rem;
    height: 46px;
    line-height: 1;
    outline: none;
    padding: $md $lg;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
    }
    &[disabled] {
      background: $gray-lightest;
      color: $gray;
      cursor: default;
      svg {
        fill: $gray;
      }
    }
    &[ghost] {
      background: none;
      border-width: 2px;
      padding: ($md - 2px) ($lg - 2px);
      &[primary] {
        border-color: $primary-color;
        border-style: solid;
        color: $primary-color;
        &:hover {
          background: $primary-color;
          color: white;
        }
      }
    }
    &[primary]:not([disabled]):not([ghost]) {
      background: $primary-color;
      &:hover {
        background: darken($primary-color, 4%);
      }
    }
  }

  button {
    &[xs] {
      height: 32px;
      padding: $xxs $sm;
      &[ghost] {
        height: auto;
        padding: $xs $sm;
      }
    }
  }

  button {
    &[no-hover] {
      &:hover {
        cursor: text;
      }
    }
  }

  button[with-icon-right] {
    padding-right: $xs * 7;
    position: relative;
    .icon-right {
      position: absolute;
      right: $lg;
      top: calc(50% - #{$sm});
    }
  }
</style>
