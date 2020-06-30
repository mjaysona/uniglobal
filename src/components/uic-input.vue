<template>
  <div>
    <input
      :class="{ 'error': error }"
      :disabled="disabled"
      :error="error"
      :name="name"
      :placeholder="label"
      :type="type"
      :value="value"
      @input="updateInput($event.target.value)"
    >
    <p
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';

  export default {
    name: 'UicInput',
    props: {
      error: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      }, 
      value: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
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
  input {
    @include p($p);
    border: none;
    border-bottom: $gray-lighter 1px solid;
    display: block;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    margin: 0 0 $xs 0;
    padding: $xs 0;
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
