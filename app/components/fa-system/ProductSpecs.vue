<template>
  <div class="product-specs" :class="{ch}">
    <div class="inner">
      <div class="box">
        <div class="caption">{{ch?'产品价格':'製品価格'}}</div>
        <div class="title"><slot name="title"/></div>
        <div class="no-price" v-if="$slots['no-price']"><slot name="no-price"/></div>
        <div class="price" v-if="$slots.price"><slot name="price"/><span class="unit">{{ch?'日元':'円'}}</span>~</div>
        <p class="sub"><slot name="sub"/></p>
        <p class="box-note" v-if="$slots.boxNote"><slot name="boxNote" /></p>
      </div>
      <template v-if="list">
        <h3 class="list-title">{{ch?'标准规格':'標準仕様'}}</h3>
        <div class="list">
          <div class="item" :class="cls" :key="l" v-for="[l,v,cls] in list">
            <div class="label" :class="{wide}" v-html="l" />
            <div class="value" v-html="v" />
          </div>
        </div>
        <div class="list-note" v-if="$slots.listNote"><slot name="listNote" /></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "wide", "ch"]
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/index';


.product-specs {
  @include pc {
    padding: 200px 0 150px;
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include pc-min {
    padding: 150px 0 100px;
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include sp {
    padding: 90px 30px;
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
}

.inner {
  @include pc {
    max-width: 1140px;
    margin: 50px auto;
    padding: 0 20px;
  }
  @include pc-min {
    max-width: 875px;
  }
}

.box {
  width: 100%;
  background: #fff;
  border: solid 1px #252525;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include pc {
    padding: 80px 0;
  }
  @include pc-min {
    padding: 50px 0;
  }
  @include sp {
    padding: 80px 0 60px;
  }
}

.caption {
  font-size: 12px;
  color: #888888;
  @include font-yugo;
}

.title {
  color: #252525;
  @include font-yugo;
  @include pc {
    font-size: 18px;
    margin: 40px 0 0;
  }
  @include pc-min {
    font-size: 16px;
    margin: 30px 0 0;
  }
  @include sp {
    font-size: 16px;
    margin: 34px 0 0;
    text-align: center;
  }
}
.no-price {
  @include font-yugo;
  font-size: 40px;
  margin: 25px 0 0;
}
.price {
  @include font-maison-medium;
  vertical-align: baseline;
  @include pc {
    font-size: 50px;
    margin: 30px 0 0;
  }
  @include pc-min {
    font-size: 42px;
    margin: 26px 0 0;
  }
  @include sp {
    font-size: 41px;
    margin: 25px 0 0;
  }
}
.unit {
  display: inline-block;
  @include font-yugo;
  position: relative;
  top: -3px;
  @include pc {
    margin: 0 8px;
    font-size: 22px;
  }
  @include pc-min {
    font-size: 19px;
  }
  @include sp {
    margin: 0 6px;
    font-size: 19px;
  }
}
.sub {
  @include font-yugo;
  font-weight: normal;
  text-align: center;
  @include pc {
    font-size: 15px;
    margin: 10px 0 0;
  }
  @include pc-min {
    font-size: 14px;
    margin: 25px 0 0;

  }
  @include sp {
    font-size: 14px;
    line-height: 2;
    margin: 20px 30px 0;
    text-align: center;
  }

}

.box-note {
  font-size: 12px;
  color: #888888;
  @include font-yugo;
  font-weight: normal;
  @include pc {
    margin: 40px 0 0;
  }
  @include pc-min {
    margin: 30px 0 0;
  }
  @include sp {
    margin: 35px 40px 0;
    text-align: center;
  }
}

.list-title {
  @include font-yugo;
  color: #888888;
  @include pc {
    margin: 100px 0 0;
    font-size:15px;
  }
  @include pc-min {
    margin: 75px 0 0;
    font-size:14px;
  }
  @include sp {
    margin: 60px 0 0;
    font-size:14px;
  }
}
.list {
  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }

  @include pc {
    margin: 20px 0 0;
  }
  @include pc-min {
    margin: 22px 0 0;
  }
  @include sp {
    margin: 22px 0 0;
    border-top: solid 1px #252525;
  }
}

.item {
  @include font-yugo;
  display: flex;
  line-height: 1.3;
  align-items: center;
  border-bottom: solid 1px #252525;
  height: 68px;

  @include pc {
    font-size:15px;
    width: 46.5%;
    margin: 0 0 0 7%;
    float: left;

    &.wide {
      width: 100%;
    }


    &:nth-child(1),
    &:nth-child(2){
      border-top: solid 1px #252525;
    }
    &:nth-child(2n+1){
      margin-left: 0;
      clear: both;
    }

  }
  @include pc-min {
    font-size:14px;
  }
  @include sp {
    font-size:14px;
    line-height: 1.5;

    &.wide {
      height: 110px;
    }
  }

}
.label {
  flex: 0 0 auto;
  @include pc {
    width: 106px;
  }
  @include pc-min {
    width: 106px;
  }
  @include sp {
    width: 85px;
  }

  &.wide {
    @include pc {
      width: 180px;
    }
    @include pc-min {
      width: 170px;
    }
    @include sp {
      width: 100px;
    }
  }
}
.value {
  flex: 1;
  min-width: 0;
  font-weight: normal;
  @include pc {
  }
  @include pc-min {
  }
  @include sp {
  }
}

.list-note {
  color: #888888;
  @include font-yugo;
  font-weight: normal;
  @include pc {
    font-size: 13px;
    margin: 30px 0 0;
  }
  @include pc-min {
    font-size: 12px;
    margin: 28px 0 0;
  }
  @include sp {
    font-size: 12px;
    margin: 28px 0 0;
  }
}

.product-specs.ch {
  .item,
  .caption,
  .title,
  .no-price,
  .unit,
  .sub,
  .box-note,
  .list-title,
  .list-note {
    @include font-ch;
  }
}

</style>
