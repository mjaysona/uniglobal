<template>
  <div>
    <textarea
      :class="{ 'error': error }"
      :disabled="disabled"
      :error="error"
      :name="name"
      :placeholder="label"
      :value="value"
      @input="updateInput($event.target.value)"
    />
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'UicTextArea',
    props: {
      error: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      }, 
      name: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: '',
      },
    },
    methods: {
      updateInput(e) {
        this.$emit('input', e)
      },
    },
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
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
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
    &:focus, &.error {
      outline: none;
      border-bottom: $primary-color 2px solid;
      padding-bottom: $xs - 1;
    }
    &:hover {
      cursor: text;
    }
  }

  .error {
    color: $primary-color;
  }
</style>
