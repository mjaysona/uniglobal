<template>
  <div id="whoWeAre">
    <div id="howWeWork" class="smoke">
      <div class="container">
        <h1>How We Work</h1>
        <div class="row center-xs">
          <p class="col-xs-8">
            Uniglobal takes pride in operating safely, responsibly and
            sustainably. Our strategically-located warehouses in Metro Manila
            and Davao City, matched with our efficient and streamlined
            procedures, ensure that orders are processed as quickly and
            accurately as possible. We have access to a wide range of inventory
            and we are the only supplier in the country who has the most readily
            available stocks. Our staff is equipped with technical and
            mechanical expertise that earns them a formidable credibility and
            worldwide network within the international construction, mining,
            and exploration industry. Together, these enable Uniglobal to grow
            and create enduring value for its clients and shareholders.
          </p>
        </div>
        <div class="summary">
          <div class="lines row">
            <div class="col-xs-6">
              <hr>
            </div>
            <div class="col-xs-6">
              <hr>
            </div>
          </div>
          <div class="steps row">
            <div class="col-xs-4" v-for="step in howWeWork.steps" :key="step.title">
              <img :src="require('@/assets/images/' + step.image)" :alt="step.image">
              <h4>{{ step.title }}</h4>
            </div>
          </div>
        </div>
        <div class="row center-xs">
          <p class="col-xs-8">
            Committed to continuing the traditions that our customers have come
            to expect, Uniglobal also caters to international clients all over
            the globe through our international affiliate, Uniglobal Industrial
            Trading LTD in Hong Kong and China. To further extend our services,
            Uniglobal has recently expanded its operations to Australia. 
          </p>
        </div>
      </div>
    </div>
    <div id="ourScope">
      <div class="container">
        <h1>Our Scope</h1>
        <div class="row center-xs">
          <p class="col-xs-8">
            Uniglobal's extensive product line includes the following:
          </p>
        </div>
        <ul class="inline row">
          <li v-for="scope in scopes" :key="scope"
            class="col-xs-4">
            {{ scope }}
          </li>
        </ul>
        <div class="row center-xs">
          <p class="col-xs-8">
            Over the years, Uniglobal Industrial Trading Inc. has become the
            industry’s preferred supplier for its responsiveness, flexibility,
            dependability, and fast turnaround times.
          </p>
        </div>
      </div>
    </div>
    <div id="missionVision">
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <div class="mv-image">
            <img src="@/assets/images/scope-01@2x.png" alt="mission"/>
          </div>
          <div class="container">
            <h1>Our Mission</h1>
            <p>{{ mission }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-xs-12">
          <div class="mv-image">
            <img src="@/assets/images/scope-02@2x.png" alt="vision"/>
          </div>
          <div class="container">
            <h1>Vision</h1>
            <p>{{ vision }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="people">
      <div class="container">
        <h1>Leaders</h1>
        <div class="leaders row around-xs">
          <div class="col-sm-5 col-xs-12" v-for="leader in staffs.leaders" :key="leader.id">
            <div class="staff-img">
              <img :src="require('@/assets/images/' + leader.image)"
                :alt="leader.name"/>
            </div>
            <h4>{{ leader.name }}</h4>
            <p><small>{{ leader.position }}</small></p>
            <p>{{ leader.description }}</p>
          </div>
        </div>
        <h1>Staffs</h1>
        <div class="staffs row center-xs">
          <p class="col-xs-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="row between-xs">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-md-3 col-sm-4 col-xs-6" v-for="staff in staffs.employees"
                :key="staff.id">
                <div class="staff-img">
                  <img :src="require('@/assets/images/' + staff.image)"
                    :alt="staff.name"/>
                </div>
                <h4>{{ staff.name }}</h4>
                <p><small>{{ staff.position }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import whoWeAre from '../static/who-we-are.json';

  export default {
    name: 'SpWhoWeAre',
    data () {
      return whoWeAre
    }
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  #howWeWork {
    text-align: center;
    p {
      display: inline-block;
    }
  }

  #howWeWork,
  #ourScope,
  #people {
    h1 {
      text-align: center;
    }
    h1, p {
      margin-bottom: $lg;
    }
    ul li {
      @include h4($h4);
      text-align: center;
      text-transform: uppercase;
      margin: $xxs 0;
    }
  }

  #missionVision {
    .mv-image img {
      width: 100%;
    }
    .row [class^="col-"] {
      padding: 0;
      &:nth-child(odd) {
        background: $gray-lightest;
      }
      &:nth-child(even) {
        background: darken($gray-lightest, 8%);
      }
    }
  }

  #ourScope {
    ul {
      margin-bottom: $lg;
    }
  }
  
  .lines {
    margin-top: $sm * 6;
    position: absolute;
    width: 100%;
    [class^="col-"] {
      &:first-child {
        hr {
          width: 25%;
          margin-left: 56%;
        }
      }
      &:last-child {
        hr {
          width: 25%;
          margin-right: 56%;
        }
      }
    }
  }

  #people {
    text-align: center;
    h1, .staffs p {
      margin-bottom: $md * 2;
    }
    h4 {
      margin-bottom: 0;
    }
    .leaders {
      margin-bottom: $lg;
    }
    .staff-img {
      border-radius: 50%;
      display: inline-block;
      line-height: 0;
      margin-bottom: $xs;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }

  .summary {
    margin: $lg 0;
    position: relative;
    hr {
      border-color: $gray-darker;
      max-width: none;
    }
    .steps {
      img {
        margin-bottom: $sm;
        max-width: 198px;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 48em) {
    #people {
      .leaders {
        margin: 0;
        > [class^="col-"], h1 {
          margin-bottom: $lg;
        }
      } 

      p {
        margin-bottom: $xs;
      }
    }
  }
</style>
