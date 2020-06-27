<!--ERROR IS ON IMG SRC FOR STAFFS-->
<template>
  <div id="whoWeAre">
    <div
      id="howWeWork"
      class="smoke"
    >
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
            <div
              v-for="step in howWeWork.steps"
              :key="step.title"
              class="col-xs-4"
            >
              <img
                :alt="step.image"
                :src="require('@/assets/images/' + step.image)"
              >
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
          <li 
            v-for="scope in scopes"
            :key="scope"
            class="col-sm-4 col-xs-12"
          >
            {{ scope }}
          </li>
        </ul>
      </div>
    </div>
    <div id="missionVision">
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <div class="mv-image">
            <div class="quote">
              “Over the years, Uniglobal Industrial Trading Inc. has become the
              industry’s preferred supplier for its responsiveness, flexibility,
              dependability, and fast turnaround times. ”
            </div>
            <img
              alt="mission"
              src="@/assets/images/scope-01@2x.png"
            >
          </div>
          <div class="container">
            <h1>Our Mission</h1>
            <p>{{ mission }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-xs-12">
          <div class="mv-image">
            <img
              alt="vision"
              src="@/assets/images/scope-02@2x.png"
            >
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
        <h1>Our Leaders</h1>
        <div class="leaders row around-xs">
          <div 
            v-for="(leader, index) in staffs.leaders"
            :key="leader.id"
            v-if="index < 1"
            class="col-sm-12"
          >
            <div class="staff-img">
              <img
                :alt="leader.name"
                :src="require('@/assets/images/' + leader.image)"
              >
            </div>
            <h4>{{ leader.name }}</h4>
            <p><small>{{ leader.position }}</small></p>
            <p class="col-sm-10 col-xs-12">{{ leader.description }}</p>
          </div>
          <div 
            v-for="(leader, index) in staffs.leaders"
            :key="leader.id"
            v-if="index > 0"
            class="col-sm-5 col-xs-12"
          >
            <div class="staff-img">
              <img
                :alt="leader.name"
                :src="require('@/assets/images/' + leader.image)"
              >
            </div>
            <h4>{{ leader.name }}</h4>
            <p><small>{{ leader.position }}</small></p>
            <p>{{ leader.description }}</p>
          </div>
        </div>
        <h1>The Team</h1>
        <div class="row between-xs">
          <div class="col-xs-12">
            <div class="row">
              <div
                v-for="staff in staffs.employees"
                :key="staff.id"
                class="col-md-3 col-sm-4 col-xs-6"
              >
                <div class="staff-img">
                  <img
                    :alt="staff.name"
                    :src="require('@/assets/images/' + staff.image)"
                  >
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
    },
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
    .mv-image {
      flex-direction: column;
      display: flex;
      position: relative;
      img {
        width: 100%;
      }
      .quote {
        @include h2($h2);
        background: rgba(0,0,0,0.64);
        bottom: 0;
        box-sizing: border-box;
        color: white;
        display: block;
        left: 0;
        margin: 0;
        padding: $lg $xlg;
        position: absolute;
        text-align: center;
        width: 200%;
        z-index: 1;
      }
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
    small {
      @include sm($small);
    }
    .leaders {
      margin-bottom: $lg;
      > div:first-of-type {
        display: block;
        p:last-of-type {
          margin: 0 auto $xlg;
        }
      }
      p {
        white-space: pre-wrap;
      }
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
    .leaders {
      margin-bottom: $lg;
      > div:first-of-type {
        display: block;
        p:last-of-type {
          margin: 0 auto $xlg;
        }
      }
      p {
        white-space: pre-wrap;
      }
    }

    #people {
      .leaders {
        margin: 0;
        > [class^="col-"], h1 {
          margin-bottom: $lg;
        }
        > div:first-of-type > p:last-of-type {
          margin-bottom: $sm;
        }
        p {
          margin-bottom: $xs;
        }
      } 

      .staff-img {
        max-width: 64%;
      }
    }

    #missionVision .mv-image .quote {
      background: $gray-lightest;
      color: $gray-darker;
      font-weight: initial;
      position: initial;
      width: 100%;
    }
  }
</style>
