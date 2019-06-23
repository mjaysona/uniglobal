<template>
  <div id="talkToUs">
    <div class="container">
      <div class="row between-xs">
        <div class="col-md-6 col-xs-12">
          <h4>Send us a message</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="box light">
            <tp-form>
              <div slot="fields">
                <uic-input disabled label="Name" type="text"></uic-input>
                <uic-input disabled label="Email Address"></uic-input>
                <uic-text-area disabled label="Message" rows="4"></uic-text-area>
              </div>
              <div class="row end-xs"
                slot="cta">
                <uic-button primary
                  disabled
                  with-icon-right
                  value="Send">
                  <unicon class="icon-right"
                    fill="white"
                    name="message"
                    slot="icon-right">
                  </unicon>
                </uic-button>
              </div>
            </tp-form>
          </div>
        </div>
        <div class="col-md-5 col-xs-12">
          <h4>Contact us</h4>
          <p class="labeled-icon">
            <unicon name="envelope" fill="white"></unicon>
            <a v-bind:href="'mailto:' + email">
              {{ email }}
            </a>
          </p>
          <div v-for="office in offices" :key="office.id">
            <h5>
              {{ office.location }}
              ({{ office.officeType }})
            </h5>
            <p class="labeled-icon">
              <unicon name="map-marker" fill="white"></unicon>
              <span>{{ office.address }}</span>
            </p>
            <p class="labeled-icon">
              <unicon name="phone" fill="white"></unicon>
              <span>{{ office.mobileNumber }}</span>
            </p>
          </div>
          <br>
          <h4>Follow us</h4>
          <div class="follow">
            <a href="" 
              target="_blank"
              v-for="icon in socialMedia" :key="icon.id">
              <unicon
                :name="icon.icon" fill="white">
              </unicon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpTalkToUs',
    props: ['email', 'offices','socialMedia']
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  .box {
    margin-bottom: $xlg;
  }

  .follow {
    a {
      display: inline-block;
      margin-right: $xs;
      svg {
        fill: $gray-darkest;
      }
    }
  }

  #talkToUs {
    padding-bottom: $xlg;
  }

  .labeled-icon svg {
    fill: $gray-darkest;
  }
</style>
