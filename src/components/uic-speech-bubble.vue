<template>
  <div class="speech-bubble row">
    <div class="avatar col-xs-2">
      <div class="avatar-img">
        <slot class="test" name="avatar"></slot>
      </div>
    </div>
    <div class="bubble col-sm-10 col-xs-8">
      <slot name="message"></slot>
      <slot name="author"></slot>
      <slot name="position"></slot>
      <slot name="organization"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UicSpeechBubble'
  }
</script>

<style scoped lang="scss">
  /* Import scss files. */
  @import '@/assets/css/_variables.scss';

  /* Component level css. */
  

  .speech-bubble {
    flex-wrap: nowrap;
    .avatar {
      flex: 0 0 64px;
      margin: $md ($xs * 7) 0 0;
      .avatar-img {
        background: white;
        border: $gray-lighter 1px solid;
        border-radius: 50%;
        display: flex;
        height: 64px;
        padding: 0;
        justify-content: center;
        align-items: center;
        width: 64px;
        img {
          border-radius: 50%;
          height: 56px;
          object-fit: cover;
          overflow: hidden;
          width: 56px;
        }
      }
    }
    .bubble {
      background: white;
      border: $gray-lighter 1px solid;
      border-radius: 4px;
      padding: $lg $xlg;
      position: relative;
      h5 {
        margin: 0 0 $xxs 0;
        & + p {
          margin-bottom: 0!important;
        }
      }
      &:after, &:before {
        right: 100%;
        top: $xs * 6;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }
      &:after {
        border-right-color: #ffffff;
        border-width: 12px;
        margin-top: -12px;
      }
      &:before {
        border-right-color: $gray-lighter;
        border-width: 13px;
        margin-top: -13px;
      }
    }
    &.reverse {
      .avatar {
        margin: $md 0 0 ($xs * 7);
      }
      .bubble {
        &:after, &:before {
          left: 100%;
          top: $xs * 6;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
        &:after {
          border-left-color: #ffffff;
          border-width: 12px;
          margin-top: -12px;
        }
        &:before {
          border-left-color: $gray-lighter;
          border-width: 13px;
          margin-top: -13px;
        }
      }
    }
  }

  .speech-bubble {
    margin-bottom: $lg * 2;
  }

  @media only screen and (max-width: 62em) {
    .speech-bubble {
      margin-bottom: $lg;
      .avatar {
        flex: 0 0 96px;
        margin-right: 0;
        max-width: none;
      }
      &.reverse {
        .avatar {
          flex: 0 0 96px;
          margin-left: 0;
          .avatar-img {
            margin-right: 0;
            margin-left: auto;
          }
        }
      }
    }
  }
</style>
