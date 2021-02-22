<template>
  <fa-layout current="top" :ch="true">
    <div class="main-visual" :class="{active}">
      <div class="inner">
        <div class="image"/>
        <div class="texts">
          <h1 class="title">
            <span class="main"><div class="line-1">SATAKE </div><div class="line-2">COMPACT</div></span>
            <span class="sub line-3">FA SYSTEM</span>
          </h1>
          <p class="body">
            持续挑战是佐竹的新步伐。<br/>
专注于协调合作・节约劳力的紧凑型佐竹FA产品系列。</p>
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
          <h2 class="title">基于中小企业的需求，专注于中小企业的协调合作・节约劳力而开发的FA系统。</h2>
          <p class="body">
            非大型全自动的FA系统，为协调合作・节约劳力而开发的FA系统。
专注适合各工程的合理机能，注重于低成本，便于小规模的中小企业导入的FA系统。</p>
        </div>
      </div>
    </div>
    <MessageBlack class="vision" :ch="true">
      <template #label>佐竹的挑战</template>
      <template #title>
        产品开发面临更激烈的竞争环境。<br/>
我们为追求「多品种・小批量・短交期」而确定独自开发FA系统。
      </template>
      <template #desc>
        为何如我们这样的中小企业需要开发FA系统，<br/>
是因为一般的FA系统规模大，成本高而阻碍了导入。<br/>
我们根据长年的经验，选择所需重点开发最适合的产品，而实现低成本无多余的紧凑型FA系统。
      </template>
    </MessageBlack>

    <div class="features" ref="feature" :class="{active:featureActive}">
      <in-view :target="featureTarget" @inview="inviewFeature" />
      <div class="inner features_main">
        <div class="feature">
          <img src="/imgs/fa-system/feature1.svg" alt="" class="icon">
          <p class="no">01</p>
          <h3 class="title">注重协调合作・节约劳力而实现了低成本。</h3>
          <p class="body">
            完全无人FA自动化的作业范围狭窄，且昂贵。
因而我们注重于支持有人的协调合作・节约劳力的自动化。
选择简洁且有效的作业，
复杂作业由有人的对应，实现了低成本。</p>
        </div>
        <div class="feature">
          <img src="/imgs/fa-system/feature2.svg" alt="" class="icon">
          <p class="no">02</p>
          <h3 class="title">考虑下单至交货流程的<br/>FA系统。</h3>

          <p class="body">佐竹的特点是，为实现「多品种・小批量・短交期」
而开发的FA系统。
不仅是作为各工程的FA自动化，更进行RPA・工程的可视化等努力，
以工厂全体来视点问题，进行更有效的改善。</p>
       </div>
        <div class="feature">
          <img src="/imgs/fa-system/feature3.svg" alt="" class="icon">
          <p class="no">03</p>
          <h3 class="title">在山形县的自有工厂
进行测试・运用・改善的流程。</h3>
          <p class="body">
            所有FA系统将佐竹的自有工厂作为实践环境而运用。
不断进行改善，以实现低成本无多余的系统改善，
仅提供销售成果卓越的产品。</p>
        </div>
      </div>
    </div>
    <div class="products">
      <h2 class="title">SATAKE COMPACT <span class="sub">FA SYSTEM</span><span class="desc">佐竹的FA产品系列</span></h2>
      <div class="list">
        <TopProduct
          :ch="true"
          href="/screw-tightening-robot"
          image-src="/imgs/fa-system/1.jpg"
          :image-right="true">
          <template #no>01</template>
          <template #en-name>SCREW<br>TIGHTENING<br>ROBOT</template>
          <template #title>自动螺丝机</template>
          <template #body>将至今为止手动作业的<br/>
拧螺丝，松螺丝的作业实现了自动化。
          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/judgment-function-micrometer"
          image-src="/imgs/fa-system/2.jpg">
          <template #no>02</template>
          <template #en-name>JUDGMENT<br>
            FUNCTION<br>
            MICROMETER
          </template>
          <template #title>带有公差判别功能的千分尺</template>
          <template #body>读取QR编码的型号，将加工尺寸或<br/>
公差信息等读入电脑，<br/>
根据千分尺的测定值进行自动判别。
          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/gripper-with-shockac-cube"
          :image-right="true"
          image-src="/imgs/fa-system/3.jpg">
          <template #no>03</template>
          <template #en-name>GRIPPER<br class="sp-only"> WITH<br>
            Shokac Cube
          </template>
          <template #title>附带触觉传感器的夹钳</template>
          <template #body>协调合作机器人的夹钳握持部分，<br/>
附带触觉传感器。

          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/picking-indicator"
          image-src="/imgs/fa-system/4.jpg">
          <template #no>04</template>
          <template #en-name>PICKING<br>
            INDICATOR
          </template>
          <template #title>仓位指示器</template>
          <template #body>读取QR编码的型号，<br/>材料架的LED亮灯指示其对应位置。
          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/dnc-equipment-online"
          :image-right="true"
          image-src="/imgs/fa-system/5.jpg">
          <template #no>05</template>
          <template #en-name>DIRECT<br>
            NUMERICAL<br>
            CONTROL
          </template>
          <template #title>DNC（装置的自动连线）</template>
          <template #body>读取QR编码的型号后，<br/>
          加工数据可通过网络传输至NC加工机进行设定。
          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/rpa-robot-construction"
          image-src="/imgs/fa-system/6.jpg">
          <template #no>06</template>
          <template #en-name>ROBOTIC<br>
            PROCESS<br>
            AUTOMATION
          </template>
          <template #title>RPA 软件机器人的构筑</template>
          <template #body>提高人工操作PC的业务效率为目的，<br/>
由软件机器人来实现业务的自动化・高效化。
          </template>
        </TopProduct>

        <TopProduct
          :ch="true"
          href="/satake-cloud-manager"
          :image-right="true"
          image-src="/imgs/fa-system/7.jpg">
          <template #no>07</template>
          <template #en-name>SATAKE<br>
            CLOUD<br>
            MANAGER
          </template>
          <template #title>SATAKE运作管理系统</template>
          <template #body>自有工厂的运作工程一目瞭然，<br/>
可轻松管理。

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
      title: 'SATAKE COMPACT FA SYSTEM | Shanghai Zongxiong'
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
    @include font-ch;
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
    @include font-ch;
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
  @include font-ch;
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
    @include font-ch;
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
    @include font-ch;
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
      @include font-ch;
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
