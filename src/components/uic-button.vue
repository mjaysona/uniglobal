<template>
  <button
    :disabled="disabled"
    :ghost="ghost"
    :is-loading="isLoading"
    :no-hover="noHover"
    :primary="primary"
    :read-only="isLoading"
    :with-icon-right="withIconRight"
    :xs="xs"
    @click="callback($event)"
  >
    <p v-if="!isLoading">
      <strong><span>{{ value }}</span></strong>
      <slot name="icon-right" />
    </p>
    <div
      v-if="isLoading"
      class="loader"
    />
  </button>
</template>

<script>
  export default {
    name: 'UicButton',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      ghost: {
        type: Boolean,
        default: false,
      },
      noHover: {
        type: Boolean,
        default: false,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: '',
      },
      withIconRight: {
        type: Boolean,
        default: false,
      },
      xs: {
        type: Boolean,
        default: false,
      }, 
    },
    methods: {
      callback: function(e) {
        this.$emit('click', e);
      },
    },
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
    min-width: 80px;
    outline: none;
    padding: $xs $lg;
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
    &[no-hover] {
      &:hover {
        cursor: text;
      }
    }
    &[primary]:not([disabled]):not([ghost]) {
      background: $primary-color;
      &:hover {
        background: darken($primary-color, 4%);
      }
    }
    &[read-only] {
      pointer-events: none;
    }
    &[with-icon-right] p svg {
      margin-left: $xs;
    }
    &[xs] {
      height: 32px;
      padding: $xxs $sm;
      &[ghost] {
        height: auto;
        padding: $xs $sm;
      }
    }
    p {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0;
      line-height: 1;
    }
  }

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }
  
  .loader {
    margin: 0 auto;
    font-size: 12px;
    position: relative;
    text-indent: -9999em;
    border-top: 4px solid rgba(255, 255, 255, 0.2);
    border-right: 4px solid rgba(255, 255, 255, 0.2);
    border-bottom: 4px solid rgba(255, 255, 255, 0.2);
    border-left: 4px solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
