<template>
  <div class="product-before-after" :class="{ch}">
    <in-view :target="target" @inview="inView" />
    <SectionTitle white :ch="ch">
      <template #title>WORKING PROCESS</template>
      <template #label>{{ch?'作业流程' : '作業工程'}}</template>
    </SectionTitle>
    <div class="inner" ref="inner">
      <div class="list-area">
        <div class="list-area-inner" :class="{moved}">
          <div class="before">
            <div class="list" :class="{active}">
              <div class="item-header">
                <div class="item-black">{{ch?'以往的作业流程' : '従来の作業工程'}}</div>
                <div class="item-button-right" @click="toRight"/>
              </div>
              <template v-for="(v,i) in before">
                <div v-if="i!==0" class="item-arrow"/>
                <template v-if="Array.isArray(v)">
                  <div class="item pickup" :class="`item${i+1}`" v-html="v"></div>
                </template>
                <template v-else>
                  <div class="item" :class="`item${i+1}`" v-html="v"></div>
                </template>
              </template>
            </div>
          </div>
          <div class="after">
            <div class="list" :class="{active}">
              <div class="item-header">
                <div class="item-button-left" @click="toLeft()" />
                <div class="item-black">{{ch?'导入后的作业流程':'導入後の作業工程'}}</div>
              </div>
              <template v-for="(v,i) in after">
                <template v-if="v===false">
                  <div class="item-empty" :class="`item${i+1}`" />
                </template>
                <template v-else-if="Array.isArray(v)">
                  <div v-if="i!==0" class="item-arrow"/>
                  <div class="item pickup" :class="`item${i+1}`" v-html="v[0]"></div>
                </template>
                <template v-else>
                  <div v-if="i!==0" class="item-arrow"/>
                  <div class="item" :class="`item${i+1}`" v-html="v"></div>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="note" v-if="$slots.note">
        <slot name="note"/>
      </div>
      <div class="box">
        <div class="texts">
          <h3 class="caption">
            <slot name="boxCaption"/>
          </h3>
          <p class="text">
            <slot name="boxText"/>
          </p>
        </div>
        <div class="image">
          <img src="/imgs/fa-system/process.jpg" width="270" height="170" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle";
import InView from "../common/InView";

export default {
  components: {InView, SectionTitle},
  props: ["before", "after","ch"],
  data(){
    return {
      moved:false,
      target: undefined,
      active: false,
    }
  },
  mounted() {
    this.target = this.$refs.inner;
  },
  methods: {
    toRight(){
      this.moved = true;
    },
    toLeft(){
      this.moved = false;
    },
    inView(){
      setTimeout(()=>{
        this.active = true;
      }, 300)

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

.product-before-after {
  background: #252525;
  @include pc {
    padding: 150px 0;
  }
  @include sp {
    padding: 80px 0 90px;
  }
}

.inner {
  @include pc {
    max-width: 940px;
    margin: 50px auto 0;
    padding: 0 20px;
  }
  @include pc-min {
    max-width: 914px;
    padding: 0 20px;
  }

  @include sp {
    width: 100%;
    overflow-x: hidden;
  }
}

.list-area {
  @include pc {
  }
  @include sp {
    width: 100%;
    overflow-x: hidden;
  }
}

.list-area-inner {
  @include pc {
    display: flex;
  }
  @include sp {
    display: flex;
    width: 200%;
    transition: transform 400ms ease-in-out;
    &.moved {
      transform: translateX(-50%);
    }
  }
}

.before {
  @include pc {
    flex: 1;
  }
  @include sp {
    width: 50%;
    padding: 30px;
  }
}

.after {
  @include pc {
    flex: 1;
    margin: 0 0 0 50px;
  }
  @include sp {
    width: 50%;
    padding: 30px;
  }
}

.list {
  @include pc {
    flex: 0 0 auto;
  }
  @include pc-min {
  }
  @include sp {
  }

  &.active {
    & .item-empty,
    & .item {
      opacity: 1;
      transform: translateY(0px);
      transition: 400ms ease-in-out;
    }
    & .item1{ transition-delay: 0ms; }
    & .item2{ transition-delay: 80ms; }
    & .item3{ transition-delay: 160ms; }
    & .item4{ transition-delay: 240ms; }
    & .item5{ transition-delay: 320ms; }
    & .item6{ transition-delay: 400ms; }
    & .item7{ transition-delay: 480ms; }
    & .item8{ transition-delay: 560ms; }

    & .item-arrow {
      transition: 200ms 600ms;
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.item-header {
  height: 60px;
  display: flex;
  margin: 0 0 30px;
}

.item-button-left {
  width: 60px;
  height: 60px;
  background: url("/imgs/fa-system/arrow-left.svg");
  margin: 0 12px 0 0;
  flex: 0 0 auto;
  min-width: 0;
  @include pc {
    display: none;
  }

  @include sp {
    display: block;
  }
}

.item-button-right {
  width: 60px;
  height: 60px;
  background: url("/imgs/fa-system/arrow-right.svg");
  margin: 0 0 0 12px;
  flex: 0 0 auto;
  min-width: 0;
  @include pc {
    display: none;
  }

  @include sp {
    display: block;
  }
}

.item-black {
  flex: 1;
  height: 60px;
  border: solid 2px #fff;
  text-align: center;
  border-radius: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.33;
  @include font-yugo;
  @include pc {
    font-size: 15px;
  }
  @include sp {
    font-size: 15px;
  }
}

.item-black + .item {
  margin: 30px 0 0;
}

.item {
  opacity: 0;
  transform: translateY(15px);
  height: 60px;
  background: #fff;
  text-align: center;
  border-radius: 100px;
  color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.33;
  @include font-yugo;
  @include pc {
    font-size: 15px;
  }
  @include sp {
    font-size: 15px;
  }

  &.pickup {
    background: #0066CC;
    color: #fff;
  }

}

.item-empty {
  opacity: 0;
  transform: translateY(15px);
  height: 60px;
  border-radius: 100px;
  margin: 28px 0 0;
  background: #303030 url("/imgs/fa-system/step-empty.svg") no-repeat center / cover;
}

.item-arrow {
  opacity: 0;
  width: 7px;
  height: 6px;
  background: url("/imgs/fa-system/arrow-step.svg") no-repeat center/contain;

  @include pc {
    margin: 11px auto;
  }

  @include sp {
    margin: 12px auto 12px;
  }
}

.note {
  color: #FFFFFF;
  @include font-yugo;
  font-weight: normal;
  @include pc {
    font-size: 15px;
    margin: 30px 0 0;
  }
  @include pc-min {
    font-size: 14px;
    margin: 25px 0 0;
  }
  @include sp {
    font-size: 12px;
    margin: 0 28px;
    line-height: 1.5;
  }
}

.box {
  border: solid 1px #fff;
  @include pc {
    display: flex;
    margin: 50px 0 0;
    padding: 40px;
  }
  @include pc-min {
    margin: 45px 0 0;
    padding: 50px;
  }
  @include sp {
    margin: 40px 30px 0;
    padding: 28px 30px;
  }
}

.texts {
  flex: 1;
  min-width: 0;
  @include pc {
    padding: 15px 0;
  }

}

.image {
  flex: 0 0 auto;
  @include pc {
    margin: 0 0 0 80px;
    width: 270px;
  }
  @include pc-min {
    margin: 0 0 0 50px;
  }
  @include sp {
    margin: 20px 0 0;
    width: 100%;
    & > img {
      width: 100%;
      height: auto;
    }
  }
}

.caption {
  color: #888888;
  @include font-yugo;
  @include pc {
    font-size: 15px;
  }
  @include pc-min {
    font-size: 14px;
  }
  @include sp {
    font-size: 12px;
  }
}

.text {
  color: #FFFFFF;
  line-height: 2;
  letter-spacing: 0.03em;
  @include font-yugo;
  @include pc {
    font-size: 18px;
    margin: 15px 0 0;
  }
  @include pc-min {
    font-size: 16px;
    margin: 25px 0 0;
  }
  @include sp {
    font-size: 16px;
    margin: 25px 0 0;
  }
}

.product-before-after.ch {
  .item-black,
  .item,
  .note,
  .caption,
  .text{
    @include font-ch;
  }
}

</style>
