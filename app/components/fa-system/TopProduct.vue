<template>
  <div  class="product" :data-layout="imageRight?'image-right':'image-left'" :class="{active, ch}">
    <in-view :target="target" @inview="inView"/>
    <div class="image">
      <div class="image-main" :style="{ backgroundImage: `url(${imageSrc})` }"/>
    </div>
    <div class="product-main">
      <div class="product-inner">
        <div class="texts">
          <div class="no">
            <slot name="no"/>
          </div>
          <div class="texts-inner">
            <p class="en-name">
              <slot name="en-name"/>
            </p>
            <h3 class="title">
              <slot name="title"/>
            </h3>
            <p class="body">
              <slot name="body"/>
            </p>
            <a :href="href" class="button" :class="{active}" ref="button">{{ ch ? '详细请参阅' : '詳しくはこちら' }}</a>
          </div>
        </div>
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
    href: String,
    imageSrc: String,
    imageRight: Boolean,
  },
  data() {
    return {
      target: undefined,
      active: false,
    }
  },
  mounted() {
    this.target = this.$el;
  },
  methods: {
    inView() {
      setTimeout(() => {
        this.active = true;
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.product {
  position: relative;

  @include pc {
    margin: 200px 0 0;
    height: 700px;
    padding: 225px 0 0;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }
  @include pc-min {
    height: 620px;
    padding: 145px 0 0;
    margin: 72px 0 0;
  }

  &.active {
    & .en-name {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms linear, 400ms 0ms $ease-out-cubic;
    }

    & .title {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms linear, 400ms 80ms $ease-out-cubic;
    }

    & .body {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms linear, 400ms 160ms $ease-out-cubic;
    }

    & .button {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms linear, 400ms 240ms $ease-out-cubic;
      &:after {
        transition: 400ms 800ms $ease-in-out-cubic;
        transform: scaleX(1);
      }
    }
  }

  &:first-child {
    margin-top: 0;
  }

  & .product-main {
    flex: 1;
  }

  & .product-inner {
    @include pc {
      height: 100%;
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
    }
    @include pc-min {
      max-width: 915px;
    }
  }


  & .image {
    background: #252525;
    display: flex;
    box-sizing: border-box;
    justify-content: stretch;
    align-items: stretch;
    @include pc {
      width: 53%;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      padding: 90px 80px;
    }

    @include pc-min {
      width: 61%;
      height: 500px;
      padding: 78px 70px;
    }
    @include sp {
      padding: 30px;
    }
  }

  & .image-main {
    flex: 1;
    background: no-repeat center / cover;
    height: 100%;
    @include sp {
      padding: 57% 0 0;
    }
  }

  & .texts {
    position: relative;
    @include pc {
      width: 640px;
      height: 100%;
      background: #fff;
    }
    @include pc-min {
      width: 475px;
      height: 475px;
    }
    @include sp {
      padding: 30px 30px 87px;
    }

  }

  & .texts-inner {
    @include pc {
      padding: 15% 12.5% 0 0;
    }
    @include pc-min {
      padding-right: 75px 75px 0 0;
    }
  }

  & .no {
    position: absolute;
    @include font-maison-medium;
    line-height: 1;
    @include pc {
      top: calc(15% + 5px);
      right: 12.5%;
      font-size: 125px;
    }
    @include pc-min {
      top: 74px;
      font-size: 100px;
    }
    @include sp {
      font-size: 70px;
      top: 30px;
      right: 30px;
    }

  }

  & .en-name {
    opacity: 0;
    transform: translateY(20px);
    @include font-maison-medium;
    color: #252525;
    @include pc {
      font-size: 40px;
      line-height: 1.125;
    }
    @include pc-min {
      font-size: 35px;
    }
    @include sp {
      line-height: 1;
      font-size: 35px;
    }

  }

  & .title {

    opacity: 0;
    transform: translateY(20px);
    @include font-yugo;
    line-height: 2;
    color: #252525;
    @include pc {
      font-size: 22px;
      margin: 18px 0 0;
    }
    @include pc-min {
      font-size: 18px;
      margin: 20px 0 0;
    }
    @include sp {
      font-size: 16px;
      margin: 16px 0 0;
    }

  }

  & .body {

    opacity: 0;
    transform: translateY(20px);
    @include font-yugo;
    font-weight: normal;
    line-height: 2;
    color: #252525;
    @include pc {
      margin: 18px 0 0;
      font-size: 18px;
    }
    @include pc-min {
      font-size: 16px;
      margin: 20px 0 0;
    }
    @include sp {
      margin: 15px 0 0;
      font-size: 14px;
    }

  }

  & .button {
    opacity: 0;
    transform: translateY(20px);
    @include font-yugo;
    position: relative;
    display: inline-block;
    color: #252525;
    padding: 0 0 5px;
    @include pc {
      margin: 30px 0 0;
      font-size: 20px;
    }
    @include pc-min {
      font-size: 18px;
    }
    @include sp {
      margin: 55px 0 0;
      font-size: 18px;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: 0;
      background: #252525;
      transform-origin: left;
      transform: scaleX(0);
    }

  }

  @include pc {
    &[data-layout='image-right'] {
      & .image {
        left: auto;
        right: 0;
        @include pc-min {
          padding-right: 0;
        }
      }


      & .texts {
        margin: 0 auto 0 0;
      }

    }

    &[data-layout='image-left'] {
      & .image {
        left: 0;
        right: auto;
        @include pc-min {
          padding-left: 0;
        }
      }

      & .texts {
        margin: 0 0 0 auto;
      }

      & .texts-inner {
        padding: 15% 0 0 12.5%;
        @include pc-min {
          padding: 74px 0 0 74px;
        }
      }

      & .no {
        right: 0;
      }
    }
  }
}

.product.ch {
  & .title,
  & .body,
  & .button {
    @include font-ch;
  }
}
</style>
