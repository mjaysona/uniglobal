<template>
  <div class="tab"
    :left="left"
    :top="top">
    <div class="menu">
      <h1 class="extra"
        v-bind:class="{ active: item.toLowerCase() === active }"
        v-for="item in tabs" :key="item.id"
        v-on:click="selectTab(item)">
        {{ item }}
      </h1>
    </div>
    <div class="tab-panel">
      <slot :name="active"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TpTabs',
    props: ['tabs','top','left','selected-tab'],
    data () {
      return {
        active: ''
      }
    },
    methods: {
      selectTab: function(item) {
        this.active = item.toLowerCase();
      }
    },
    created () {
      this.active = this.selectedTab;
    }
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
      .menu {
        flex: 0 0 160px;
      }
      .tab-panel {
        padding-bottom: $lg;
      }
    }
  }
</style>
