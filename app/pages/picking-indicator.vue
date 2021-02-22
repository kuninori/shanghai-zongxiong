<template>
  <fa-layout :ch="true" current="p04">
    <product-top
      product-no="04"
      poster-src="/imgs/fa-system/picking-indicator/poster.jpg"
      video-src="/videos/04.mp4"
    >
      <template #title>PICKING<br>
        INDICATOR</template>
      <template #ja-title>仓位指示器</template>
      <template #desc>读取QR编码的型号，材料架的<br/>
LED亮灯指示其对应位置。
      </template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>从仓库中找寻所需物件很费时。确认订单内容在仓库中来回，<br/>
从种类・尺寸・形状等选择，确认。</template>
      <template #desc>如使用仓位指示器，仅需读取QR编码的型号，<br/>
材料架的LED亮灯可瞬间确认到所在位置。<br/>
对于找寻货架中的产品，可在下单时，确认库存时等多种情况下迅速的使用。</template>
    </MessageBlack>

    <ProductFeatures :ch="true">
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/picking-indicator/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center" >
          <template #label>材料误选</template>
          <template #num>0</template>
          <template #unit>件</template>
          <template #body>仅读取QR编码的型号，<br/>
材料架的LED亮灯指示其对应位置。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/picking-indicator/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>的查找时间</template>
          <template #unitBefore>减少了</template>
          <template #num>50</template>
          <template #unit>％</template>
          <template #body>大幅减少了从繁琐的材料架中找寻产品的<br/>
时间或错选。

          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `读取产品的型号`,
        `判定产品所需材料`,
        `移动至材料架`,
        `从多种材料中查找选出`,
        `返回加工位置`,
        `开始加工`
      ]"
      :after="[
                [`读取产品QR编码的信息`,true],
        [`材料架点灯`,true],
        `移动至材料架`,
        `返回加工位置`,
        `开始加工`,
        false,

      ]">
      <template #boxCaption>由于导入了仓位指示器</template>
      <template #boxText>仅需读取产品QR编码的信息即可查找出，减少了查找的时间和失误。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :list="[
      [`電源`,`AC100V`, 'wide'],
    ]">
      <template #title>仓位指示器基本套装</template>
      <template #price>400,000</template>
      <template #sub>根据LED数量或规格。另行报价。</template>
      <template #boxNote>※可部分对应需求。</template>
      <template #listNote>※上記の数値は参考値です。</template>
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
