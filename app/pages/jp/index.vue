<template>
  <fa-layout current="top">
    <div class="main-visual" :class="{active}">
      <div class="inner">
        <div class="image"/>
        <div class="texts">
          <h1 class="title">
            <span class="main"><div class="line-1">SATAKE </div><div class="line-2">COMPACT</div></span>
            <span class="sub line-3">FA SYSTEM</span>
          </h1>
          <p class="body">挑戦を続ける佐竹の次なる一歩。<br>
            協働・省人化に特化した<br class="sp-only"/>コンパクトな佐竹のFA製品シリーズ。</p>
          <p class="note">※画像はイメージです。</p>
        </div>
      </div>
      <div class="scrolldown">
        <p class="scrolldown-text">Scroll Down</p>
        <div class="scrolldown-blight"></div>
      </div>
      <div class="lines"></div>
    </div>
    <div class="intro">
      <div class="inner intro_main">
        <div class="intro_image">
          <img src="/imgs/fa-system/intro.jpg" width="625" height="416"/>
        </div>
        <div class="intro_texts">
          <p class="label"></p>
          <h2 class="title">中小企業による協働・省人化に特化した<br>
            中小企業のためのFAシステム。</h2>
          <p class="body">
            大規模で全自動なFAシステムではなく、協働、省人化に特化したFAシステムを開発しました。各工程に最適な機能に絞り、低コストを重視した作りにすることで、規模の小さい中小企業に導入しやすいFAシステムです。</p>
        </div>
      </div>
    </div>
    <MessageBlack class="vision">
      <template #label>佐竹の挑戦</template>
      <template #title>製品開発はより激しい競争を求められるようになりました。<br>
        私たちは「多品種・小ロット・短納期」を次に進めるためにFAを独自開発することを決めました。
      </template>
      <template #desc>なぜ私たち中小企業がFAシステムを開発したのか、<br>
        それは一般的なFAシステムは規模が大きく、導入コストに見合わなかったからです。<br>
        私たちの長年のノウハウでポイントを抑えた最適な製品開発をすることで<br>
        低コストで無駄のないコンパクトなFAシステムを実現しました。
      </template>
    </MessageBlack>

    <div class="features" ref="feature" :class="{active:featureActive}">
      <in-view :target="featureTarget" @inview="inviewFeature" />
      <div class="inner features_main">
        <div class="feature">
          <img src="/imgs/fa-system/feature1.svg" alt="" class="icon">
          <p class="no">01</p>
          <h3 class="title">協働・省人化に注力することで<br>
            低コストを実現。</h3>
          <p class="body">
            完全無人化が可能なFAロボットは作業範囲はせまく高額です。私たちは人をサポートする協働・省人化ロボットに注力します。シンプルかつ効果的な作業のみに絞り、複雑な作業は人が対応することで、低コストを実現しています。</p>
        </div>
        <div class="feature">
          <img src="/imgs/fa-system/feature2.svg" alt="" class="icon">
          <p class="no">02</p>
          <h3 class="title">発注から納品までを考慮した<br>
            FAシステム。</h3>
          <p class="body">
            佐竹の特徴である「多品種・小ロット・短納期」を実現するために開発されたシステムです。工程ごとのFAロボットだけでなく、RPA・工程の見える化などを行い、工場全体で問題を考えることで、より効果的な改善を行います。</p>
        </div>
        <div class="feature">
          <img src="/imgs/fa-system/feature3.svg" alt="" class="icon">
          <p class="no">03</p>
          <h3 class="title">山形の自社工場での<br>
            テスト・運用・改善フロー。</h3>
          <p class="body">全てのFAシステムは佐竹の自社工場を実践環境として運用されています。改善を繰り返し、より低コストで無駄のないシステムへと改善を行ない、高い成果を出した製品のみを販売します。</p>
        </div>
      </div>
    </div>
    <div class="products">
      <h2 class="title">SATAKE COMPACT <span class="sub">FA SYSTEM</span><span class="desc">佐竹のFA製品シリーズ</span></h2>
      <div class="list">
        <TopProduct
          href="/jp/screw-tightening-robot"
          image-src="/imgs/fa-system/1.jpg"
          :image-right="true">
          <template #no>01</template>
          <template #en-name>SCREW<br>TIGHTENING<br>ROBOT</template>
          <template #title>ネジ締めロボット</template>
          <template #body>今まで手作業で行っていた<br>
            ネジ締め・ネジ外し作業を自動化します。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/judgment-function-micrometer"
          image-src="/imgs/fa-system/2.jpg">
          <template #no>02</template>
          <template #en-name>JUDGMENT<br>
            FUNCTION<br>
            MICROMETER
          </template>
          <template #title>公差判定機能付きマイクロメータ</template>
          <template #body>QRコードの型番を読み込むと、加工寸法や<br>
            公差の情報をコンピュータへ読込み、<br>
            マイクロメータの測定値を自動判定します。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/gripper-with-shockac-cube"
          :image-right="true"
          image-src="/imgs/fa-system/3.jpg">
          <template #no>03</template>
          <template #en-name>GRIPPER<br class="sp-only"> WITH<br>
            Shokac Cube
          </template>
          <template #title>ショッカクキューブ付グリッパー</template>
          <template #body>協働ロボットのグリッパーの把持部に<br>
            ショッカクキューブがついた優れものです。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/picking-indicator"
          image-src="/imgs/fa-system/4.jpg">
          <template #no>04</template>
          <template #en-name>PICKING<br>
            INDICATOR
          </template>
          <template #title>ピッキング指示機</template>
          <template #body>QRコードの型番を読み込むと、原材料棚の<br>
            LEDが点灯し、置き場所を指示します。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/dnc-equipment-online"
          :image-right="true"
          image-src="/imgs/fa-system/5.jpg">
          <template #no>05</template>
          <template #en-name>DIRECT<br>
            NUMERICAL<br>
            CONTROL
          </template>
          <template #title>DNC（装置オンライン）</template>
          <template #body>QRコードの型番を読み込むと加工データを<br>
            NC加工機にネットワークを通して設定できます。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/rpa-robot-construction"
          image-src="/imgs/fa-system/6.jpg">
          <template #no>06</template>
          <template #en-name>ROBOTIC<br>
            PROCESS<br>
            AUTOMATION
          </template>
          <template #title>RPA ロボット構築</template>
          <template #body>人によるPC作業の業務効率化を目的とし、<br>
            ソフトウェアロボットによって<br>
            業務の自動化・効率化を実現する。
          </template>
        </TopProduct>

        <TopProduct
          href="/jp/satake-cloud-manager"
          :image-right="true"
          image-src="/imgs/fa-system/7.jpg">
          <template #no>07</template>
          <template #en-name>SATAKE<br>
            CLOUD<br>
            MANAGER
          </template>
          <template #title>SATAKE稼働管理システム</template>
          <template #body>自社工場での作業工数を一目で分かりやすく、<br>
            手軽に管理できるようになります。
          </template>
        </TopProduct>
      </div>
    </div>
  </fa-layout>
</template>

<script>
import {headMetas} from "@/middleware/utils";
import FaLayout from "@/components/layout/FaLayout";
import TopProduct from "@/components/fa-system/TopProduct";
import MessageBlack from "@/components/fa-system/MessageBlack";
import ContactBlock from "@/components/fa-system/ContactBlock";
import OrderStepsBlock from "@/components/fa-system/OrderStepsBlock";
import {scrollTo} from "@/middleware/utils";
import InView from "@/components/common/InView";

export default {
  components: {
    InView,
    FaLayout,
    OrderStepsBlock,
    TopProduct,
    MessageBlack,
    ContactBlock,
  },
  head() {
    return headMetas({
      title: 'SATAKE COMPACT FA SYSTEM | 協働・省人化に特化したコンパクトな佐竹のFA製品'
    }, false)
  },
  data() {
    return {
      active: false,

      featureActive: false,
      featureTarget: undefined,
    }
  },
  mounted() {
    setTimeout(() => {
      this.active = true;
    }, 500);

    this.featureTarget = this.$refs.feature;
  },
  methods: {
    inviewFeature(){
      setTimeout(() => {
        this.featureActive = true;
      },300);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/index.scss";

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

.lines {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  @include pc  {
    background: url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }

  @include sp {
    background: url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }
}

/* main visual ------------------------------- */

.main-visual {
  background: #fff;
  overflow-x: hidden;
  position: relative;

  & .inner {
    @include pc {
      padding: 0 20px;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      display: flex;
      position: relative;
    }

    @include sp {
      padding: 80px 0 60px;
    }
  }

  & .texts {
    position: relative;
    @include sp {
      margin: -30px 0 0;
      padding: 0 28px;
    }

  }

  & .title {
    @include font-maison-medium;

    & .main {
      line-height: 1;
      display: block;
    }

    & .sub {
      display: block;
      line-height: 1;
      color: #0066CC;
    }

    & .line-1 {
      opacity: 0;
      transform: translateY(20px);
    }

    & .line-2 {
      opacity: 0;
      transform: translateY(20px);
    }

    & .line-3 {
      opacity: 0;
      transform: translateY(20px);
    }

    @include pc  {
      font-size: 115px;
      & .sub {
        font-size: 75px;
      }
    }
    @include pc-min {
      font-size: 85px;
      & .sub {
        font-size: 56px;
      }
    }
    @include sp {
      font-size: 60px;
      & .sub {
        font-size: 40px;
      }
    }
  }

  & .body {
    opacity: 0;
    transform: translateY(20px);
    @include font-yugo;
    line-height: 2;

    @include pc  {
      font-size: 18px;
      margin: 35px 0 0;
      padding: 0 0 0 4px;
    }
    @include pc-min {
      font-size: 16px;
      margin: 25px 0 0;
      padding: 0 0 0 2px;
    }
    @include sp {
      font-size: 16px;
      margin: 15px 0 0;
      padding: 0 0 0 2px;
    }
  }

  & .note {
    opacity: 0;
    @include font-yugo;
    font-size: 12px;
    color: #888888;
    font-weight: normal;
    @include pc  {
      margin: 35px 0 0;
    }
    @include sp {
      margin: 20px 0 0;
    }
  }

  & .image {
    opacity: 0;
    background: url("/imgs/fa-system/mv.png") no-repeat center / contain;
    transform: translateX(-20px);
    @include pc  {
      position: absolute;
      right: -80px;
      top: calc(50% - 390px);
      width: 738px;
      height: 738px;
    }
    @include pc-min {
      right: -55px;
      top: calc(50% - 262px);
      width: 525px;
      height: 525px;
    }
    @include sp {
      width: 100%;
      height: 420px;
      background: url("/imgs/fa-system/mv.png") no-repeat center / 420px 420px;
      margin: -15px 0;
    }
  }

  & .scrolldown {
    opacity: 0;
    position: absolute;
    bottom: 40px;
    left: calc(50% - 50px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    z-index: 3;

    @include pc  {
      display: flex;
    }

    @include sp {
      display: none;

    }

    &:before {
      content: "";
      display: block;
      width: 31px;
      height: 52px;
      background: url("/imgs/common/scroll-down.png") no-repeat center / contain;

      @include pc-min {
        width: 23px;
        height: 40px;
      }
    }
  }

  & .scrolldown-text {
    font-size: 12px;
    color: #252525;
    margin: 10px 0 0;
    letter-spacing: 0.03em;
    @include font-maison-medium;
    @include pc-min {
      font-size: 10px;
      margin: 8px 0 0;
    }
  }

  & .scrolldown-blight {
    width: 31px;
    height: 52px;
    position: absolute;
    left: 35px;
    top: 0;
    overflow: hidden;
    border-radius: 15px;
    background: no-repeat linear-gradient(20deg, transparent 25%, rgba(255, 255, 255, 0.2) 65%, transparent 90%);
    background-size: 31px 100px;
    background-position: 0 -100px;
  }

  &.active {
    & .image {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 500ms 0ms ease-in-out, 1000ms 0ms $ease-out-cubic;
    }

    & .title .line-1 {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 500ms ease-in-out, 600ms 500ms $ease-out-quart;
    }

    & .title .line-2 {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 600ms ease-in-out, 600ms 580ms $ease-out-quart;
    }

    & .title .line-3 {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 700ms ease-in-out, 600ms 660ms $ease-out-quart;
    }

    & .body {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 400ms 1000ms ease-in-out, 600ms 750ms $ease-out-quart;
    }

    & .contactus,
    & .scrolldown {
      opacity: 1;
      transition: opacity 400ms 1500ms ease-out;
    }

  }
}

@keyframes blight {
  0% {
    background-position: 0 100px;
  }
  100% {
    background-position: 0 -100px;
  }
}

/* intro -------------------------------- */

.intro {
  @include pc  {
    padding: 200px 0;
  }
  @include pc-min {
    padding: 150px 0;
  }

  @include sp {
    padding: 90px 0 85px;
  }
}


.intro_main {
  @include pc  {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}

.intro_image {
  & img {
    display: block;
    width: 100%;
    height: auto;
  }

  @include pc  {
    width: 56%;
    flex: 0 0 auto;
  }

  @include sp {
    padding: 0 30px;
  }
}

.intro_texts {
  @include font-yugo;
  @include pc  {
    margin: 0 4.5% 0 0;
  }

  @include sp {
    padding: 55px 28px 0;
  }

  & .label {
    font-size: 12px;
    color: #888888;
  }

  & .title {
    line-height: 2;

    @include pc  {
      font-size: 18px;
      margin: 30px 0 0;
    }
    @include pc-min {
      font-size: 16px;
      margin: 22px 0 0;
    }

    @include sp {
      font-size: 16px;
      margin: 20px 0 0;
    }
  }

  & .body {
    font-weight: normal;
    line-height: 2;
    @include pc  {
      font-size: 15px;
      margin: 23px 0 0;
    }
    @include pc-min {
      font-size: 14px;
      margin: 20px 0 0;
    }

    @include sp {
      font-size: 14px;
      margin: 14px 0 0;
    }
  }
}

/* features -------------------------------- */

.features {
  @include pc  {
    padding: 170px 0;
  }
  @include pc-min {
    padding: 150px 0;
  }
  @include sp {
    padding: 90px 30px 85px;
  }

  &.active {
    & .feature:nth-child(1) .icon {
      opacity: 1;
      transform: scale(1);
      transition: 700ms $ease-out-quart;
    }
    & .feature:nth-child(2) .icon {
      opacity: 1;
      transform: scale(1);
      transition: 700ms 300ms $ease-out-quart;
    }
    & .feature:nth-child(3) .icon {
      opacity: 1;
      transform: scale(1);
      transition: 700ms 600ms $ease-out-quart;
    }
  }
}

.features_main {
  @include pc  {
    display: flex;
    justify-content: space-between;
  }
  @include sp {
  }
}

.feature {
  @include pc  {
    flex: 0 0 auto;
    width: 28%;
  }
  @include pc-min {
    width: 29%;
  }
  @include sp {
    margin: 84px 0 0;
    &:first-child {
      margin-top: 0;
    }
  }

  & img {
    opacity: 0;
    transform: scale(0.8);
    @include pc-min {
      width: 64px;
      height: 64px;
    }
    @include sp {
      width: 95px;
      height: 95px;
    }
  }

  & .no {
    color: #888888;
    @include font-maison-medium;
    @include pc  {
      font-size: 25px;
      margin: 38px 0 0;
    }
    @include pc-min {
      font-size: 22px;
      margin: 25px 0 0;
    }
    @include sp {
      font-size: 25px;
      margin: 22px 0 0;
    }
  }

  & .title {
    @include font-yugo;
    line-height: 2;
    color: #252525;
    @include pc  {
      margin: 25px 0 0;
      font-size: 18px;
      letter-spacing: 0.04em;
    }
    @include pc-min {
      font-size: 16px;
      margin: 20px 0 0;
    }
    @include sp {
      margin: 17px 0 0;
      font-size: 16px;
    }
  }

  & .body {
    @include font-yugo;
    font-weight: normal;
    line-height: 2;
    color: #252525;
    @include pc  {
      font-size: 15px;
      margin: 25px 0 0;
    }
    @include pc-min {
      font-size: 14px;
      margin: 20px 0 0;
    }
    @include sp {
      font-size: 14px;
      margin: 13px 0 0;
    }
  }
}

/* products ---------------------------- */

.products {
  @include pc  {
    padding: 200px 0;
    background: #fff url("/imgs/fa-system/bg-line.png") calc(50% - 108px) 0 / 216px auto;
  }
  @include pc-min {
    padding: 150px 0;
  }
  @include sp {
    padding: 74px 0 0;
    background: #fff url("/imgs/sp/fa-system/bg-line.png") calc(50% - 31px) 0 / 62px auto;
  }

  & > .title {
    @include font-maison-medium;
    color: #252525;
    @include pc  {
      font-size: 60px;
      text-align: center;
    }
    @include pc-min {
      font-size: 50px;
    }
    @include sp {
      font-size: 50px;
      padding: 0 30px;
    }

    & .sub {
      @include pc  {
      }
      @include sp {
        font-size: 35px;
        display: block;
        margin-top: 5px;
      }
    }

    & .desc {
      @include font-yugo;
      color: #888888;
      display: block;
      font-size: 12px;
      @include pc  {
        margin: 3px 0 0;
      }
      @include sp {
        margin: 8px 0 0;
      }
    }
  }

  & > .list {
    @include pc  {
      margin: 100px 0 0;
    }
    @include pc-min {
      margin: 70px 0 0;
    }
    @include sp {
      margin: 56px 0 0;
    }
  }
}


</style>
