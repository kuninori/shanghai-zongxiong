<template>
  <div class="message-black" :class="{active, ch}" >
    <in-view :target="target" @inview="inView" />
    <div class="inner">
      <div class="content">
        <p class="label">
          <slot name="label"/>
        </p>
        <h2 class="title">
          <slot name="title"/>
        </h2>
        <p class="body">
          <slot name="desc"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InView from "../common/InView";
export default {
  components: {InView},
  props: {
    ch: Boolean,
  },
  data(){
    return {
      active: false,
      target: undefined,
    }
  },
  mounted() {
    this.target = this.$el;
  },

  methods: {
    inView(){
      setTimeout(()=>{
        this.active = true;
      }, 300);
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

/* vision -------------------------------- */

.inner {
}

.content{
  @include pc {
    max-width: 1140px;
    margin: auto;
    padding: 0 20px;
  }
  @include pc-min {
    max-width: 915px;
  }
}


.message-black {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @include font-yugo;
  @include pc {
    text-align: center;
    height: 600px;
    background: url("/imgs/fa-system/message-bg-top.png") no-repeat center top / auto 229px, url("/imgs/fa-system/message-bg-bottom.png") no-repeat center bottom / auto 229px;
    background-color: #242526;
  }
  @include pc-min {
    height: 450px;
  }
  @include sp {
    padding: 88px 30px 85px;
    background: url("/imgs/sp/fa-system/message-bg-top.png") no-repeat center top / auto 229px, url("/imgs/sp/fa-system/message-bg-bottom.png") no-repeat center bottom / auto 166px;
    background-color: #242526;
  }

  &.active {
    & .label {
      opacity: 1;
      transform: translateY(0);
      transition: 600ms $ease-out-cubic;
    }

    & .title {

      opacity: 1;
      transform: translateY(0);
      transition: 600ms 80ms $ease-out-cubic;
    }

    & .body {

      opacity: 1;
      transform: translateY(0);
      transition: 600ms 160ms $ease-out-cubic;
    }
  }


  & .label {
    opacity: 0;
    transform: translateY(20px);
    font-size: 12px;
    color: #888888;
  }

  & .title {
    opacity: 0;
    transform: translateY(20px);
    color: #fff;
    line-height: 2;
    @include pc {
      margin: 30px 0 0;
      font-size: 18px;
      letter-spacing: 0.08em;
    }
    @include pc-min {
      font-size: 16px;
      margin: 25px 0 0;
    }
    @include sp {
      margin: 18px 0 0;
      font-size: 16px;
      & br {
        display: none;
      }
    }
  }

  & .body {
    opacity: 0;
    transform: translateY(20px);
    color: #fff;
    line-height: 2;
    font-weight: normal;
    @include pc {
      font-size: 15px;
      margin: 27px 0 0;
      letter-spacing: 0.04em;
    }
    @include pc-min {
      font-size: 14px;
      margin: 25px 0 0;
    }
    @include sp {
      font-size: 14px;
      margin: 18px 0 0;
      & br {
        display: none;
      }
    }
  }
}

.message-black.ch {
  @include font-ch;
}

</style>
