<template>
  <div
    class="tab"
    :left="left"
    :top="top"
  >
    <div class="menu">
      <h1
        v-for="item in tabs"
        :key="item.id"
        :class="{ 'active': item.toLowerCase() === active }"
        class="extra"
        @click="selectTab(item)"
      >
        {{ item }}
      </h1>
    </div>
    <div class="tab-panel">
      <slot :name="active" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpTabs',
    props: {
      tabs: {
        type: Array,
        default: () => [],
      }, 
      left: {
        type: Boolean,
        default: false,
      }, 
      selectedTab: {
        type: Boolean,
        default: false,
      }, 
      top: {
        type: Boolean,
        default: false,
      }, 
    },
    data () {
      return {
        active: '',
      }
    },
    created () {
      this.active = this.selectedTab;
    },
    methods: {
      selectTab: function(item) {
        this.active = item.toLowerCase();
      },
    },
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  h1 {
    display: inline-block;
    color: $gray-lighter;
    &:hover {
      color: $gray;
      cursor: pointer;
    }
    &.active {
      color: initial;
      &:hover {
        cursor: text;
      }
    }
  }

  h4 {
    margin: 0 0 $xs 0;
  }

  .tab[left] {
    display: flex;
    .menu {
      flex: 0 0 224px;
    }
    .tab-panel {
      border-left: $gray-lighter 1px solid;
      padding-left: $lg * 2;
      *:first-child {
        margin-top: 0;
      }
    }
  }

  /* Responsive styles. */
  @media only screen and (max-width: 62em) {
    h1 {
      margin-bottom: $lg;
      &.extra {
        display: block;
        margin: 0;
      }
    }
    .tab[left] {
      display: flex;
      .tab-panel {
        padding-bottom: $lg;
      }
    }
  }

  @media only screen and (max-width: 48em) {
    .tab[left] {
      .menu {
        flex-basis: 140px;
      }
      .tab-panel {
        padding-left: $xlg;
      }
    }
  }
</style>
