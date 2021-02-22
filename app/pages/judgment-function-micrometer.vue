<template>
  <fa-layout current="p02" :ch="true">
    <product-top
      :ch="true"
      product-no="02"
      poster-src="/imgs/fa-system/judgment-function-micrometer/poster.jpg"
      video-src="/videos/02.mp4"
    >
      <template #title>JUDGMENT<br>
        FUNCTION<br>
        MICROMETER</template>
      <template #ja-title>带有公差判别功能的千分尺</template>
      <template #desc>读取QR编码的型号，将加工尺寸或<br/>
公差信息等读入电脑，<br/>
根据千分尺的测定值进行自动判别。</template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>确认生产品是否按照订货要求，使用千分尺进行测量。测量值手写于记录用纸，对生产品<br/>
进行管理。但记录遗漏・记录错误等可能发生，无法充分的管理。</template>
      <template #desc>读取QR编码对应的加工品的信息，将加工尺寸及公差的信息读入电脑，根据千分尺的测定值，
由电脑判定是否在公差范围内。排除了作业者的疏漏，节约了记录的时间，提高了作业效率。
此外，由系统自动进行管理，可高效的在出货前进行验证作业。
      </template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/judgment-function-micrometer/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>不良品的流出数</template>
          <template #num>0</template>
          <template #unit>件/月</template>
          <template #body>大幅降低了由于确认加工尺寸失误<br/>
而造成的不良品的发生。
          </template>
        </ProductFeatureItem>

        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/judgment-function-micrometer/2.jpg"
          :image-height="416"
          :image-width="625">
          <template #label>加工时间</template>
          <template #num>10</template>
          <template #unit>％UP</template>
          <template #body>由于生产现场的尺寸测量的自动保存，<br/>
节约了记录尺寸的步骤。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        '以往的作业流程',
        `加工`,
        `测量尺寸：手动确认尺寸`,
        `加工`,
        `完成加工`,
        `测量尺寸， 将测量值记录用纸`,
        `作业完成`,
      ]"
      :after="[
        `按照指示书安排材料`,
        `加工`,
        [`测量尺寸：自动`, true],
        `加工`,
        `完成加工`,
        [`测量尺寸：自动`,true],
        `作业完成`,
      ]">

      <template #note>※作业流程本身无变化，但单个作业时的速度会有大不同。</template>
      <template #boxCaption>由于导入了带有公差判别功能的千分尺，</template>
      <template #boxText>读取QR编码对应的加工品的信息，排除了作业者的遗漏，节约了记录尺寸的步骤。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :list="[
      [`尺寸`,`W230×D75×H160（mm）　※不含突起部`],
      [`重量`,`2kg`],
      [`额定功率`,`15W`],
    ]">
      <template #title>带有公差判别功能的千分尺</template>
      <template #price>80,000</template>
      <template #sub>自动管理系统需另行报价。</template>
      <template #boxNote>※千分尺，USB连接线请自行准备。</template>
      <template #listNote>※上述数值仅供参考。</template>
    </ProductSpecs>

  </fa-layout>
</template>

<script>

import ProductTop from "@/components/fa-system/ProductTop";
import ProductBeforeAfter from "@/components/fa-system/ProductBeforeAfter";
import ProductSpecs from "@/components/fa-system/ProductSpecs";
import ProductFeatures from "@/components/fa-system/ProductFeatures";
import MessageBlack from "@/components/fa-system/MessageBlack"
import FaLayout from "@/components/layout/FaLayout";
import SectionTitle from "@/components/fa-system/SectionTitle";
import ProductFeatureItem from "@/components/fa-system/ProductFeatureItem";
import {headMetas} from "@/middleware/utils";
export default {
  components: {
    ProductFeatureItem,
    FaLayout,
    ProductTop,
    ProductSpecs,
    ProductBeforeAfter,
    ProductFeatures,
    MessageBlack,
    SectionTitle,
  },
  head() {
    return headMetas({
      title: 'SATAKE COMPACT FA SYSTEM | 協働・省人化に特化したコンパクトな佐竹のFA製品'
    }, false)
  },
}
</script>

<style src="~/assets/css/product.scss" lang="scss" scoped/>
