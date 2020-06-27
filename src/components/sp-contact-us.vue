<template>
  <div id="contactUs">
    <div class="container">
      <div class="row between-xs">
        <div class="col-md-6 col-xs-12">
          <h4>Send us a message</h4>
          <div class="box light">
            <tp-form>
              <div slot="fields">
                <uic-input
                  disabled
                  label="Name"
                  type="text"
                />
                <uic-input
                  disabled
                  label="Email Address"
                />
                <uic-text-area
                  disabled
                  label="Message"
                  rows="4"
                />
              </div>
              <div
                slot="cta"
                class="row end-xs"
              >
                <uic-button
                  primary
                  disabled
                  with-icon-right
                  value="Send"
                >
                  <unicon
                    slot="icon-right"
                    class="icon-right"
                    fill="white"
                    name="message"
                  />
                </uic-button>
              </div>
            </tp-form>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <h4>Contact us</h4>
          <p class="labeled-icon">
            <unicon
              fill="white"
              name="envelope"
            />
            <a :href="'mailto:' + email">
              {{ email }}
            </a>
          </p>
          <div
            v-for="office in offices"
            :key="office.id"
          >
            <h5>
              {{ office.officeType }}
            </h5>
            <p>
              <a
                :href="office.link"
                class="labeled-icon" 
                target="_blank"
              >
                <unicon
                  fill="white"
                  name="map-marker"
                />
                <span>{{ office.address }}</span>
              </a>
            </p>
            <p>
              <a
                :href="'tel:' + office.mobileNumber.replace(/\(0\)|\s+/g,'')"
                class="labeled-icon center"
              >
                <unicon
                  fill="white"
                  name="phone"
                />
                <span>{{ office.mobileNumber }}</span>
              </a>
            </p>
          </div>
          <br>
          <h4>Follow us</h4>
          <div class="follow">
            <a
              v-for="social in socialMedia"
              :key="social.id"
              :href="social.url"
              class="labeled-icon center"
              target="_blank"
            >
              <unicon
                :name="social.icon"
                fill="white"
              />
              <span>{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpContactUs',
    props: {
      email: {
        type: String,
        default: () => [],
      }, 
      offices: {
        type: Array,
        default: () => {},
      }, 
      socialMedia: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .box {
    margin-bottom: $xlg;
  }

  #contactUs {
    padding-bottom: $xlg;
  }

  .labeled-icon svg {
    fill: $gray-darker;
  }
</style>
