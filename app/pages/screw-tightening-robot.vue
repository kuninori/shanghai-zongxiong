<template>
  <fa-layout :ch="true" current="p01">
    <product-top
      :ch="true"
      product-no="01"
      poster-src="/imgs/fa-system/screw-tightening-robot/poster.jpg"
      video-src="/videos/01.mp4"
    >
      <template #title>SCREW<br>TIGHTENING<br>ROBOT</template>
      <template #ja-title>自动螺丝机</template>
      <template #desc>将至今为止手动作业的<br/>
拧螺丝，松螺丝的作业实现了自动化。
      </template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>拧螺丝，松螺丝是数量多，花费时间的作业。</template>
      <template #desc>对应多种的尺寸和形状，除高度的自由度以外，<br/>
由于自动化可进行24小时不间断的作业，大幅提高作业效率。
      </template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/screw-tightening-robot/1.jpg"
          :image-height="416"
          :image-width="625"
          attentionPosition="left"
        >
          <template #label>节约劳力</template>
          <template #num>180</template>
          <template #unit>180分/天</template>
          <template #body>对于复数种类的螺丝，仅需切换作业程序，<br/>
无需更换机器。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/screw-tightening-robot/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>更改设定</template>
          <template #num>5</template>
          <template #unit>分种</template>
          <template #body>4种螺丝供给器和螺丝工具中可选择2个，<br/>在同一工作流程
中对应2种扭力。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `准备所需的螺丝及治具盘`,
        `拧紧螺丝：手动1个1个拧紧`,
        `加工`,
        `准备治具盘`,
        `拧松螺丝：手动1个1个拧松`,
        `作业完成`,
      ]"
      :after="[
        `准备所需的螺丝放入供给器，<br/>将治具盘固定于作业台`,
        [`设定作业程序后，拧紧螺丝`, true],
        `加工`,
        `准备好治具盘`,
        [`设定作业程序，开始拧松螺丝：自动`,true],
        `作业完成`,
      ]">
      <template #note>※作业流程本身无变化，但单个作业时的速度会有大不同。</template>
      <template #boxCaption>导入佐竹自动螺丝机，</template>
      <template #boxText>可对应2种不同扭力，大幅提高了作业效率，可迅捷对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :list="[
      [`标准规格`,`W1,070×D650× H860（mm） ※不含突起部`],
      [`重量`,`90kg`],
      [`额定功率`,`500W`],
      [`使用空压`,`0.5kPa（推荐值）`],
    ]">
      <template #title>自动螺丝机套装</template>
      <template #price>5,000,000</template>
      <template #sub>设置费用，初期导入费用，服务费等需另行报价。</template>
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
