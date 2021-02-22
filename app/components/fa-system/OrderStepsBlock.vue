<template>
  <div class="order-steps" :class="{ch}">
    <in-view :target="target" @inview="active=true" />
    <div class="inner">
      <div class="texts">
        <p class="label">{{ch?'导入流程':'導入までの流れ'}}</p>
        <h3 class="title">{{ch?'经验丰富的职员现场指导，帮助顺利导入。':'経験豊富なスタッフがお伺いしますので、スムーズな導入が可能です。まずは、お気軽にお問い合わせください。'}}</h3>
        <p class="body">{{ch?'确实掌握现场情况后进行操作，更好对应「更紧凑些」等来自现场的要求。':'現場で現在の状況をしっかりと把握してからの作業になるので、「もう少しコンパクトに」や、その他の現場からのご要望にもしっかりと対応させていただきます。'}}</p>
      </div>
      <div class="list" :class="{active}">
        <div class="item item1">{{ch?'咨询':'お問い合わせ'}}</div>
        <div class="item-arrow"/>
        <div class="item item2">{{ch?'听取现状，把握情况':'ヒアリングと現状把握'}}</div>
        <div class="item-arrow"/>
        <div class="item item3">{{ch?'产品提案':'製品のご提案'}}</div>
        <div class="item-arrow"/>
        <div class="item item4">{{ch?'根据内容定制':'コンテンツに合わせたカスタマイズ'}}</div>
        <div class="item-arrow"/>
        <div class="item item5">{{ch?'始动后调整':'稼働後の調整'}}</div>
        <div class="item-arrow"/>
        <div class="item item6">{{ch?'运作・保养支持（收费）':'運用・メンテナンスサポート（有料）'}}</div>
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
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';

/* steps ------------------------------ */

.inner {
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  @include pc-min {
    max-width: 915px;
  }
}

.order-steps {
  background: #252525;
  @include pc {
    padding: 140px 0;
  }
  @include pc-min {
    padding: 150px 0;
  }
  @include sp {
    padding: 86px 30px 90px;
  }

  & .inner {
    @include pc {
      display: flex;
      max-width: 940px;
      justify-content: space-between;
      align-items: center;
    }
  }

  & .texts {
    color: #fff;
    @include font-yugo;
    @include pc {
      width: 47%;
      flex: 0 0 auto;
    }
    @include pc-min {
      width: 41.5%;
    }
  }

  & .label {
    font-size: 12px;
    color: #888;

  }

  & .title {
    letter-spacing: 0.04em;
    line-height: 2;
    @include pc {
      font-size: 18px;
      margin: 25px 0 0;
    }
    @include pc-min {
      font-size: 16px;
      margin: 20px 0 0;
    }
    @include sp {
      font-size: 16px;
      margin: 18px 0 0;
      line-height: 1.95;
    }

  }

  & .body {
    font-weight: normal;
    line-height: 2;
    @include pc {
      font-size: 15px;
      margin: 25px 0 0;
    }
    @include pc-min {
      font-size: 14px;
      margin: 20px 0 0;
    }
    @include sp {
      font-size: 14px;
      margin: 15px 0 0;
      letter-spacing: 0.02em;
    }

  }

  & .list {
    @include pc {
      width: 47%;
      flex: 0 0 auto;
    }
    @include pc-min {
      width: 53%;
    }
    @include sp {
      margin: 43px 0 0;
    }

    &.active {
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

  & .item {
    transform: translateY(15px);
    background: #fff;
    text-align: center;
    border-radius: 100px;
    color: #252525;
    opacity: 0;

    @include font-yugo;
    @include pc {
      font-size: 15px;
      padding: 12px 0;
    }
    @include sp {
      font-size: 14px;
      padding: 12px 0;
    }

    &:nth-of-type(1){

    }
  }

  & .item-arrow {
    opacity: 0;
    width: 7px;
    height: 6px;
    background: url("/imgs/fa-system/arrow-step.svg") no-repeat center/contain;

    @include pc{
      margin: 11px auto;
    }

    @include sp{
      margin: 12px auto 12px;
    }
  }
}

.order-steps.ch {
  & .texts,
  & .item {
    @include font-ch;
  }
}

</style>
