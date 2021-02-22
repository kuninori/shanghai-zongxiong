<template>
  <fa-layout :ch="true" current="about">
    <div class="page">

    <div class="inner">
      <section class="sec-top" :class="{active}">
        <div class="sec-top-images">
          <img class="sec-top-img" src="/imgs/about/ceo.png" alt="" />
          <p class="sec-top-caption">代表取締役社長　尾方 謙一</p>
        </div>
        <div class="sec-top-texts">
          <h2 class="sec-top-title">CEO<br/>MESSAGE</h2>
          <p class="sec-top-title-sub">代表メッセージ</p>
          <p class="sec-top-text">上海宗雄貿易有限公司は2010年11月に中国ビジネスの拠点として上海事務所を開設し、2018年11月から佐竹グループとしてこれまで以上に幅広く対応できるようになりました。<br/>
            <br/>
          次世代情報技術と新たな生産方式や産業形態で急成長する中国市場は、既に世界最大の産業ロボット市場となり、これまでの制御システムや関連部品の提供に加え、お客様の生産性向上につながるFA（Factory Automation）部品やFA装置への提供も拡大してまいります。<br/>
            <br/>
          また、お客様のあらゆるニーズにお応えできるよう、新たな製品・部品や新サービスにも取り組み、提供価値を進化させてまいりますので、今後とも皆様の格別のご愛顧を賜りますようよろしくお願い申し上げます。</p>
        </div>

      </section>
      <section class="sec">
        <h2 class="sec-title">LINEUP</h2>
        <p class="sec-title-sub">その他の取扱製品一覧</p>
        <div class="lineup-list">
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup1.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">制御盤</p>
          </div>
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup2.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">電子及び電気部品</p>
          </div>
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup3.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">板金・金属製品</p>
          </div>
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup4.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">金型・プラスチック製品</p>
          </div>
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup5.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">ボールペアリング</p>
          </div>
          <div class="lineup-item">
            <div class="lineup-item-image">
              <img src="/imgs/about/lineup6.png" alt="" class="lineup-item-img">
            </div>
            <p class="lineup-item-text">日用雑貨</p>
          </div>
        </div>
        <p class="lineup-others">工作機械及び周辺機器 / 自動車部品全般 / コンピュータハードウェア / 通信機器 / ソフトウェア / 電化製品及び付属製品 / 建築用装飾資材 / 事務用品 / 上記製品に関する販売、技術コンサルティング及び関連サポートサービス</p>
      </section>

      <section class="sec">
        <h2 class="sec-title">OVERVIEW</h2>
        <p class="sec-title-sub">会社概要</p>
        <div class="overview-list">
          <div class="overview-item">
            <div class="overview-label">名　称</div>
            <div class="overview-text">SHANGHAI ZONGXIONG COMMERCE Co.,LTD</div>
          </div>
          <div class="overview-item">
            <div class="overview-label">所在地</div>
            <div class="overview-text">上海市長寧区中山西路555号 <br class="sp-only"/>緑洲大厦1幢1楼17単元<br class="sp-only"/>（上海市長寧区中山西路555号 <br class="sp-only"/>緑洲ビル1117号）</div>
          </div>

          <div class="overview-item">
            <div class="overview-label">電　話</div>
            <div class="overview-text">86-21-3360-6637</div>
          </div>
          <div class="overview-item">
            <div class="overview-label">F A X</div>
            <div class="overview-text">86-21-3360-6639</div>
          </div>
          <div class="overview-item">
            <div class="overview-label">設立日</div>
            <div class="overview-text">2010年11月11日</div>
          </div>
          <div class="overview-item">
            <div class="overview-label">U R L</div>
            <div class="overview-text">http://www.shanghai-zongxiong.com</div>
          </div>
          <div class="overview-item">
            <div class="overview-label">代表<br class="sp-only"/>取締役</div>
            <div class="overview-text">尾方 謙一</div>
          </div>

          <div class="overview-item">
            <div class="overview-label">取引銀行</div>
            <div class="overview-text">三井住友銀行（中国）有限公司 / 招商銀行</div>
          </div>
        </div>
      </section>

      <section class="sec">
        <h2 class="sec-title sec-title-map">MAP</h2>
        <p class="sec-title-sub">アクセス</p>
        <div class="map-iframe">
          <iframe class="pc-only" width="604" height="525" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/s/yngHFb"></iframe>
          <iframe class="sp-only" width="375" height="385" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/s/MkgHFb"></iframe>
        </div>
        <a href="http://j.map.baidu.com/15/HVdJ" target="_blank" class="map-link">百度地図で見る</a>
      </section>
    </div>
    </div>
  </fa-layout>
</template>

<script>
import {headMetas} from "@/middleware/utils";
export default {
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.active = true;
    }, 500);
  },
  head() {
    return headMetas({
      title: 'About | SATAKE COMPACT FA SYSTEM | 協働・省人化に特化したコンパクトな佐竹のFA製品'
    }, false)
  },
}
</script>


<style lang="scss" scoped>
@import '~/assets/css/index';

.page {
  @include pc {
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include sp {
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
}

.inner {
  color: $c-black;
  @include pc {
    max-width: 1140px;
    margin: 0 auto;
    padding: 220px 20px 200px;
  }
  @include pc-min {
    max-width: 915px;
    padding: 160px 20px 150px;
  }
  @include sp {
    padding: 118px 0 90px;
  }

}

.sec-top {
  @include pc {
    display: flex;
    flex-direction: row-reverse;
  }
  @include sp {
    padding: 0 30px;
  }

  &-images {
    opacity: 0;

    @include pc {
      width: 400px;
      margin: 0 0 0 8.1%;
      flex: 0 0 auto;
    transform: translateX(-20px);
    }
    @include pc-min {
      width:326px;
      margin: 0 0 0 4%;
      margin: 0 0 0 73px;
    }
    @include sp {
    }
  }

  &-img {
    width: 100%;
    display: block;
    height: auto;
  }

  &-caption {
    @include font-ch;
    color:#888888;
   @include pc {
      font-size: 15px;
      margin: 26px 0 0;
    }
    @include pc-min {
      font-size: 14px;
      margin: 18px 0 0;

    }
    @include sp {
      font-size: 14px;
      margin: 16px 0 0;
      text-align: right;
    }
  }

  &-texts {
    flex: 1;
    @include pc {
      padding: 42px 0 0;
    }
    @include pc-min {
      padding: 21px 0 0;
    }
    @include sp {
      padding: 18px 0 0;
    }
  }
  &-title {
     opacity: 0;
    transform: translateY(20px);
    @include font-maison-medium;
    @include pc {
      font-size: 60px;
      margin: 0 0 0 -5px;
      letter-spacing: 0.02em;
    }
    @include pc-min {
      margin: 0 0 0 -3px;
      font-size: 55px;
    }
    @include sp {
      font-size: 50px;
    }
  }

  &-title-sub {
      opacity: 0;
    transform: translateY(20px);
   @include font-ch;
    letter-spacing: 0.05em;
    @include pc {
      font-size: 22px;
    }
    @include pc-min {
      font-size: 20px;
      margin: 12px 0 0;
    }
    @include sp {
      font-size: 18px;
      margin: 15px 0 0;
    }
  }

  &-text {
       opacity: 0;
    transform: translateY(20px);
  @include font-ch;
    font-weight: normal;
    @include pc {
      font-size: 18px;
      margin: 24px 0 0;
      line-height: 2;
      letter-spacing: 0.02em;
    }
    @include pc-min {
      font-size: 16px;
      margin: 17px 0 0;
    }
    @include sp {
      font-size: 16px;
      margin: 18px 0 0;
      line-height: 1.84;
      letter-spacing: 0.05em;
    }
  }

  &.active {
    .sec-top {
      &-images {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 500ms 0ms ease-in-out, 1000ms 0ms $ease-out-cubic;
      }

      &-title {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 400ms 0ms ease-in-out, 600ms 600ms $ease-out-quart;
      }

      &-title-sub {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 400ms 0ms ease-in-out, 600ms 700ms $ease-out-quart;

      }

      &-text {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 400ms 0ms ease-in-out, 600ms 780ms $ease-out-quart;
      }
    }
  }
}

.sec-title {
  @include font-maison-medium;

  @include pc {
    font-size: 40px;
    margin: 140px 0px 0;
    letter-spacing: 0.02em;
  }
  @include pc-min {
    margin: 107px 0 0;
  }
  @include sp {
    font-size: 35px;
    margin: 64px 30px 0;
  }
  &-sub {
    @include font-ch;
    @include pc {
      font-size: 18px;
      margin: 5px 0 0;
      letter-spacing: 0.05em;
    }
    @include sp {
      font-size: 16px;
      margin: -2px 30px 0;
    }
  }
}


// lineup
.lineup {
  &-list {
    @include pc {
      margin: 35px 0 0;
      &:after {
        display: block;
        content: "";
        height: 0;
        clear: both;
      }
    }
    @include pc-min {
      margin: 37px 0 0;
    }
    @include sp {
      margin: 29px 30px 0;
    }
  }
  &-item {
    display: flex;
    border: solid 1px #888888;
    align-items: center;
    @include pc {
      margin: 20px 0 0 20px;
      float: left;
      width: calc(50% - 10px);
      padding: 14px;
      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0;
      }
      &:nth-child(2n+1) {
        margin-left: 0;
      }
    }
    @include sp {
      padding: 9px 10px;
      margin: 15px 0 0;
      &:nth-child(1){
        margin-top: 0;
      }
    }
  }
  &-item-image {
    flex: 0 0 auto;
    min-width: 0;

    @include pc {
      width:120px;
    }
    @include sp {
      width:80px;
    }
  }
  &-item-img {
    display: block;
    width: 100%;
    height: auto;
  }
  &-item-text {
    @include font-ch;
    @include pc {
      font-size: 18px;
      margin: 0 0 0 30px;
    }
    @include sp {
      font-size: 13px;
      margin: 0 0 0 20px;
    }
  }

  &-others {
    @include font-ch;
    font-weight: normal;
    @include pc {
      font-size: 18px;
      margin: 31px 0 -2px;
      line-height: 2;
    }
    @include pc-min {
      margin: 31px 0 0;
    }
    @include sp {
      font-size: 16px;
      margin: 23px 30px 0;
      padding: 0 0 45px;
      line-height: 1.88;
    }
  }

}
// overview -------------------------

.overview {
  &-list {
    border-top: solid 1px $c-black;
    @include pc {
    margin: 35px 0 0;
    }
    @include sp {
    margin: 26px 30px 0;
    }
  }

  &-item {
    display: flex;
    @include font-ch;
    border-bottom: solid 1px $c-black;
    line-height: 1.33;
    align-items: center;
    @include pc {
      padding: 27px 0;
      font-size: 18px;
    }
    @include sp {
      min-height: 68px;
      display: flex;
      align-items: center;
      padding: 16px 0 14px;
      font-size: 14px;
    }
  }
  &-label {
    flex: 0 0 auto;
    @include pc {
      width: 150px;
    }
    @include pc-min {
      width: 188px;
    }
    @include sp {
      width: 75px;
    }
  }
  &-text {
    font-weight: normal;
    flex: 1;
    line-height: 1.42;
  }
}

// map

.sec-title-map {
  @include pc {
    margin: 147px 0 0;
  }
  @include pc-min {
      margin: 116px 0 0;
    }
  @include sp {
    margin: 84px 30px 0;
  }
}

.map-iframe {
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  @include pc {
    margin: 36px auto 0;
    padding: 40px 0;
  }
  @include pc-min {
    padding: 33px 0;
  }
  @include sp {
    margin: 30px auto 0;
  }
}

.map-link {
  background: $c-black;
  color: $c-white;
  font-size: 14px;
  @include font-ch;
  display: block;
  text-align: center;
  border-radius: 40px;
  @include pc {
    width: 320px;
    margin: 37px auto 0;
    padding: 17px 0;
  }
  @include pc-min {
    width: 300px;
    margin: 38px auto 0;
    padding: 15px 0;
  }
  @include sp {
    width: 250px;
    margin: 26px auto 0;
    padding: 12px 0;
  }
}


</style>
