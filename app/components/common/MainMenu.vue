<template>
  <transition appear :duration="{appear:1200, enter:1200, leave:800 }">
    <div class="fa-menu" :class="{ch}">
      <div class="inner">
        <div class="wrap">
          <h1 class="logo"><a :href="p('/')">
            <GroupLogo class="logo-item"/>
          </a></h1>

          <div class="close" :class="{active}" @click="onClose">
            <div class="close-l1"></div>
            <div class="close-l2"></div>
          </div>

          <div class="content">
            <div class="content-inner">

            <div class="first-block">
              <div class="menu-list">
                <a :href="p('/')" class="menu-item" :data-active="current === 'top'">
                  <div class="menu-item-name">TOP</div>
                  <div class="menu-item-name-sub">{{ ch ? 'トップページ':'トップページ' }}</div>
                </a>
                <a :href="p('/news')" class="menu-item" :data-active="current === 'news'">
                  <div class="menu-item-name">NEWS</div>
                  <div class="menu-item-name-sub">{{ ch ? 'ニュース':'ニュース' }}</div>
                </a>
                <a :href="p('/about')" class="menu-item" :data-active="current === 'about'">
                  <div class="menu-item-name">ABOUT</div>
                  <div class="menu-item-name-sub">{{ ch ? 'アバウト':'アバウト' }}</div>
                </a>
              </div>
            </div>
            <div class="seconde-block">
            <div class="product-list">
              <a :href="p('/screw-tightening-robot')" class="product-item" :data-active="current === 'p01'">
                <div class="product-item-no">01</div>
                <div class="product-item-name">SCREW TIGHTENING ROBOT</div>
                <div class="product-item-name-sub">{{ ch ? '自动螺丝机':'ネジ締めロボット' }}</div>
              </a>
              <a :href="p('/judgment-function-micrometer')" class="product-item" :data-active="current === 'p02'">
                <div class="product-item-no">02</div>
                <div class="product-item-name">JUDGMENT FUNCTION MICROMETER</div>
                <div class="product-item-name-sub">{{ ch ? '带有公差判别功能的千分尺':'公差判定機能付きマイクロメータ' }}</div>
              </a>
              <a :href="p('/gripper-with-shockac-cube')" class="product-item" :data-active="current === 'p03'">
                <div class="product-item-no">03</div>
                <div class="product-item-name">GRIPPER WITH SHOCKAC CUBE</div>
                <div class="product-item-name-sub">{{ ch ? '附带触觉传感器的夹钳':'ショッカクキューブ™付グリッパー' }}</div>
              </a>
              <a :href="p('/picking-indicator')" class="product-item" :data-active="current === 'p04'">
                <div class="product-item-no">04</div>
                <div class="product-item-name">PICKING INDICATOR</div>
                <div class="product-item-name-sub">{{ ch ? '仓位指示器':'ピッキング指示機' }}</div>
              </a>
              <a :href="p('/dnc-equipment-online')" class="product-item" :data-active="current === 'p05'">
                <div class="product-item-no">05</div>
                <div class="product-item-name">DNC EQUIPMENT ONLINE</div>
                <div class="product-item-name-sub">{{ ch ? 'DNC（装置的自动连线）':'DNC（装置オンライン）' }}</div>
              </a>
              <a :href="p('/rpa-robot-construction')" class="product-item" :data-active="current === 'p06'">
                <div class="product-item-no">06</div>
                <div class="product-item-name">RPA ROBOT CONSTRUCTION</div>
                <div class="product-item-name-sub">{{ ch ? 'RPA 软件机器人的构筑':'RPAロボット構築' }}</div>
              </a>
              <a :href="p('/satake-cloud-manager')" class="product-item" :data-active="current === 'p07'">
                <div class="product-item-no">07</div>
                <div class="product-item-name">SATAKE CLOUD MANAGER</div>
                <div class="product-item-name-sub">{{ ch ? 'SATAKE运作管理系统':'SATAKE稼働管理システム' }}</div>
              </a>
            </div>

            <a :href="p('/satake-metal-parts')" class="product-cat" :data-active="current === 'metal'" >
               <div class="product-cat-name">SATAKE METAL PARTS PROCESSING</div>
                <div class="product-cat-name-sub">{{ ch ? '佐竹の金属部品加工':'佐竹の金属部品加工' }}</div>
            </a>

          </div>
          <div class="third-block">
            <a :href="ch ? 'http://www.satake-s.co.jp/en/' : 'http://www.satake-s.co.jp/'" target="_blank" class="group-link">
              <div class="group-link-name">SATAKE GROUP</div>
                <div class="group-link-name-sub">{{ ch ? '佐竹グループコーポレートサイトへ':'佐竹グループコーポレートサイトへ' }}</div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { path } from '../../middleware/utils';
import GroupLogo from "../svg/GroupLogo";

export default {
  components: {GroupLogo},
  props: {
    ch: Boolean,
    current: String,
  },
  data(){
    return {
      active: false,
    }
  },
  mounted() {
    setTimeout(()=>{
      this.active = true;
    }, 100);
  },
  methods: {
    p(name){
      return path(name, !this.ch);
    },
    onClose(){
      this.active = false;
      setTimeout(()=>{
        this.$emit('close');
      }, 200);

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.fa-menu {
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #242526;
  color: #fff;
  z-index: 10;
  overflow-y: auto;

  &.v-enter {
    height: 0;
  }

  &.v-enter-active.v-enter-to {
    & .content {
      opacity: 1;
    }
  }

  &.v-enter-active {
    transition: 550ms 200ms;
    overflow: hidden;

    & .content {
      opacity: 0;
      transition: 450ms 400ms;
      transform-origin: top;
    }
  }

  &.v-leave-active.v-leave-to {
    height: 0;

    & .content {
      opacity: 0;
    }
  }

  &.v-leave-active {
    transition: 500ms;
    overflow: hidden;

    & .content {
      opacity: 1;
      transition: 450ms;
    }
  }
}

.logo {
  position: absolute;

  display: block;
  @include pc {
    width: 216px;
    height: 40px;
    font-size: 0;
    min-width: 97px;
    top: 80px;
    left: 20px;
  }

  @include sp {
    width: 146px;
    height: 27px;
    left: 30px;
    top: 32px;
  }


  & a {
    display: block;
    height: 100%;
    transition: 150ms;

    &:hover {
      opacity: 0.7;
    }

    & svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

}

.inner {
  @include pc {
    position: relative;
    max-width: 1140px;
    padding: 0 20px;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
}
.wrap {
  @include pc {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}

.content {
    @include pc {
      padding: 175px 0px 80px 0px;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    @include pc-min {

    }
    @include sp {
      padding: 115px 30px 60px;
    }
}

.content-inner {
  position: relative;
  @include pc {
    display: flex;
  }

  @include sp {
  }
}

// first block ------------
.first-block {
  @include pc {
    width: 348px;
    padding: 0 0 0 8px;
  }
  @include pc-min {

  }
  @include sp {

  }
}

.menu-item {
  display: block;
  &:first-child {
    margin-top: 0;
  }

  &[data-active="true"] {
    opacity: 0.25;
  }

  @include pc {
    margin: 38px 0 0;
    letter-spacing: 0.05em;
transition: opacity 200ms;
    &:hover {
      opacity: 0.25;
    }
  }
  @include pc-min {
  }
  @include sp {
    margin: 23px 0 0;
  }

  &-name {
    @include font-maison-medium;
    @include pc {
      font-size: 35px;
    }
    @include pc-min {

    }
    @include sp {
      font-size: 28px;

    }
  }

  &-name-sub {
    @include font-yugo;
    color:#888;
    @include pc {
      font-size: 13px;
    }
    @include pc-min {

    }
    @include sp {
      font-size: 12px;
      margin: -1px 0 0;
    }
  }
}
// second block -------------

.product-list {
  @include pc {
    &:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
    }
  }

  @include sp {
    margin: 25px auto 0;
  }
}

.product-item {
  display: block;
  box-sizing: border-box;
  position: relative;

  &:first-child {
    margin: 5px 0 0;
  }

  &[data-active="true"] {
    opacity: 0.25;
  }

  @include pc {
    margin: 19px 0 0 0;
    padding: 0 0 0 32px;
    transition: opacity 150ms;

    &:hover {
      opacity: 0.25;
    }
  }

  @include pc-min {
    padding: 0 0 0 28px;
  }

  @include sp {
    padding: 0 0 0 29px;
    margin: 17px 0 0;

  }

  &-no {
    @include font-maison-medium;
    color: #888888;
    position: absolute;
    left: 0;

    @include pc {
      font-size: 13px;
      top: 2px;
    }

    @include pc-min {
      font-size: 12px;
      top: 9px;
    }

    @include sp {
      font-size: 12px;
      top: 4px;
    }
  }

  &-name {
    @include font-maison-medium;

    @include pc {
      font-size: 21px;
      letter-spacing: 0.02em;
    }

    @include pc-min {
      font-size: 18px;
    }

    @include sp {
      font-size: 20px;
      letter-spacing: 0.02em;
    }
  }

  &-name-sub {
    @include font-yugo;
    letter-spacing: 0.04em;
    color: #888888;

    @include pc {
      font-size: 10px;
      margin: 1px 0 0;
    }

    @include pc-min {
      font-size: 12px;
      margin: 3px 0 0;
    }

    @include sp {
      font-size: 10px;
      margin: 2px 0 0;
    }
  }
}

.product-cat {
  display: block;

  &[data-active="true"] {
    opacity: 0.25;
  }
  @include pc {
    margin: 41px 0 0;
transition: opacity 200ms;
    &:hover {
      opacity: 0.25;
    }
    }
    @include pc-min {

    }
    @include sp {
    margin: 26px 0 0;
    }

  &-name {
    @include font-maison-medium;
    letter-spacing: 0.02em;
    @include pc {
      font-size: 26px;
    }
    @include pc-min {

    }
    @include sp {
      font-size: 25px;

    }
  }

  &-name-sub {
    @include font-yugo;
    color:#888;
    @include pc {
    font-size: 10px;
    }
    @include pc-min {

    }
    @include sp {
    font-size: 10px;
    margin: 2px 0 0;
    }
  }
}

// third-block -----------

.third-block {
  @include pc {
    position: absolute;
    left: 8px;
    bottom: 1px;
  }
    @include pc-min {

    }
    @include sp {

    }
}

.group-link {
  display: block;

  &[data-active="true"] {
    opacity: 0.25;
  }

  @include pc {
      transition: opacity 200ms;
      display: block;

      &:hover {
        opacity: 0.25;
      }
    }
    @include pc-min {

    }
    @include sp {
      margin: 27px 0 0;

    }
  &-name {
    @include font-maison-medium;
    letter-spacing: 0.02em;
    @include pc {
      font-size: 26px;
    }
    @include pc-min {

    }
    @include sp {
      font-size: 25px;
    }
  }

  &-name-sub {
    @include font-yugo;
    color:#888;
    @include pc {
      font-size: 10px;
    }
    @include pc-min {

    }
    @include sp {
      font-size: 10px;
    }
  }
}



// close --------------

.close {
 position: absolute;
  cursor: pointer;
  z-index: 10;


  @include pc {
    width: 38px;
    height: 38px;

    top: 82px;
    right: 18px;
    transition: opacity 200ms;
    &:hover {
      opacity: 0.7;
    }
  }

  @include pc-min {
  }

  @include sp {
    width: 30px;
    height: 30px;
    top: 31px;
    right: 27px;
  }

  &.active {
    & .close-l1 {
      transform: rotate(135deg);
      opacity: 1;
      transition: all 400ms 250ms $ease-in-out-cubic, opacity 150ms 200ms;
    }
    & .close-l2 {
      transform: rotate(45deg);
      opacity: 1;
      transition: all 400ms 250ms $ease-in-out-cubic, opacity 150ms 200ms;
    }
  }

  & .close-l1 {
    transition: all 400ms 250ms $ease-in-out-cubic, opacity 150ms 500ms;
    position: absolute;
    opacity: 0;
    left: 0;
    top: calc(50% - 2px);
    height: 3px;
    width: 100%;
    background: #fff;
  }

  & .close-l2 {
    transition: all 400ms 250ms $ease-in-out-cubic, opacity 150ms 500ms;
    position: absolute;
    opacity: 0;
    left: 0;
    top: calc(50% - 2px);
    height: 3px;
    width: 100%;
    background: #fff;
  }
}


// for ch
.fa-menu.ch {
  .menu-item-name-sub,
  .product-item-name-sub,
  .product-cat-name-sub,
  .group-link-name-sub {
    @include font-ch;
  }
}

</style>
