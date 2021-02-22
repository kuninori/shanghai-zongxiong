<template>
  <fa-layout current="p07" :ch="true">
    <product-top
      :ch="true"
      product-no="07"
      poster-src="/imgs/fa-system/satake-cloud-manager/poster.jpg"
      video-src="/videos/07.mp4"
    >
      <template #title>SATAKE<br>
        CLOUD<br>
        MANAGER</template>
      <template #ja-title>SATAKE运作管理系统</template>
      <template #desc>自有工厂的作业工程一目瞭然，<br/>
可轻松管理。</template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>各工程有独立的作业内容，根据作业状态的前后不同，<br/>
会发生不必要的等待时间或偏重作业等情况。<br/>
各作业者即便努力改善，无法除去不必要的部分。</template>
      <template #desc>根据各工程的作业情况测定将及可视化，可将各作业顺滑的连接<br/>
及改善问题点，在工厂内发挥出不曾有的效果。观测工厂的全体的各工程的作业状况，<br/>
随时调整产品时间表，减少不必要的部分。<br/>
系统为在线云，无需另导入大规模的系统。</template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/satake-cloud-manager/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>加工工程的生产效率</template>
          <template #num>10</template>
          <template #unit>％UP</template>
          <template #body>问题发生时，根据KPI信息显示器亮起报警提示，<br/>
可立即着手进行改善。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/satake-cloud-manager/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>构筑生产工程的系统费用</template>
          <template #unitBefore>削減</template>
          <template #num>50</template>
          <template #unit>％</template>
          <template #body>因为是在线云服务，无需系统管理者。<br/>
使用PC或廉价的平板可显示出惊人的费用效果。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `确认加工品的型号及尺寸`,
        `进行加工`,
        `目视加工尺寸确认判定是否合格`,
        `手写记录尺寸转发`,
        `作业后将作业内容输入PC`,
        `搜集将日报打印`,
      ]"
      :after="[
        [`读取QR编码的产品型号和尺寸，自动显示`, true],
        `进行加工`,
        [`将加工尺寸传输主机进行合格与否的判定`, true],
        [`主机自动搜集并将日报显示`, true],
        false,
        false,
      ]">
      <template #boxCaption>由于导入SATAKE运作管理系统</template>
      <template #boxText>以数字形式将现在的作业状况可视化，改善作业中的各种问题点。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :wide="true" :list="[
      [`可视化<br class='sp-only'>（生产管理）`,`利用时间吗，作业率，时间产量`],
      [`可视化<br class='sp-only'>（品质管理）`,`加工尺寸`],
    ]">
      <template #title>SATAKE运作系统 套装（月）</template>
      <template #price>38,000</template>
      <template #sub>根据装置台数及软件的数量金额不同。</template>
      <template #boxNote>※可根据需求进行部分的个别对应。</template>
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
