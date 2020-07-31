<template>
  <form class="gform">
    <div class="form">
      <h4>Send us a message</h4>
      <div class="fields">
        <uic-input
          v-model.trim="$v.name.$model"
          label="Name"
          name="name"
          type="text"
          :error="nameErrors"
        />
        <uic-input
          v-model.trim="$v.email.$model"
          label="Email Address"
          name="email"
          :error="emailErrors"
        />
        <uic-text-area
          v-model.trim="$v.message.$model"
          label="Message"
          name="message"
          :error="messageErrors"
        />
      </div>
      <div
        v-if="isSubmitted"
        class="submission-message"
      >
        <p v-if="isSubmissionSuccess">
          Thank you for sending us a message! We'll get back to you as soon as
          possible.
        </p>
        <p v-if="!isSubmissionSuccess">
          Message wasn't sent. Please try again.
        </p>
      </div>
      <div class="cta">
        <uic-button
          :is-loading="isSubmitting"
          primary
          with-icon-right
          value="Send"
          @click="submit"
        >
          <unicon
            slot="icon-right"
            class="icon-right"
            fill="white"
            name="message"
          />
        </uic-button>
      </div>
    </div>
  </form>
</template>

<script>
  import axios from 'axios';
  import { required, email } from 'vuelidate/lib/validators';

  const formUrl = "https://script.google.com/macros/s/AKfycbxzmygGPFTLMnCG-dPDo5Ws8OuT9qRqbUitYMcj/exec";
  const formHeaders = { 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  export default {
    name: 'TpContactForm',
    data() {
      return {
        email: '',
        isSubmitting: false,
        isSubmitted: false,
        isSubmissionSuccess: false,
        message: '',
        name: '',
      }
    },
    computed: {
      emailErrors() {
        if (this.$v.email.$dirty && !this.$v.email.email) {
          return 'Enter a valid email.'
        }

        if (this.$v.email.$dirty && !this.$v.email.required) {
          return 'Email field is required.'
        }

        return '';
      },
      messageErrors() {
        if (this.$v.message.$dirty && !this.$v.message.required) {
          return 'Message field is required.'
        }

        return '';
      },
      nameErrors() {
        if (this.$v.name.$dirty && !this.$v.name.required) {
          return 'Name field is required.'
        }

        return '';
      },
    },
    validations: {
      email: {
        required,
        email,
      },
      message: {
        required,
      },
      name: {
        required,
      },
    },
    methods: {
      submit: function(e) {
        e.preventDefault();
        
        if (this.$v.$invalid) {
          this.$v.$touch();
        } else {
          this.isSubmitting = true;
          
          const formData = new FormData();
          
          formData.append('name', this.name);
          formData.append('email', this.email);
          formData.append('message', this.message);

          axios
            .post(formUrl, formData, formHeaders)
            .then(response => {
              this.isSubmissionSuccess = true;
              this.isSubmitted = true;
              this.isSubmitting = false;
            })
            .catch(() => {
              this.isSubmissionSuccess = false;
              this.isSubmitted = true;
              this.isSubmitting = false
            })
            .finally(() => {
              this.isSubmitting = false
            });
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .cta {
    text-align: right;
    button {
      min-width: 140px;
    }
  }

  .fields {
    margin-bottom: $md * 2;
  }

  .form {
    margin-bottom: $xs;
  }

  .submission-message {
    line-height: normal;
    margin-bottom: $xlg;
  }
</style>
