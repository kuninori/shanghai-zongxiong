<template>
  <fa-layout :ch="true" current="p03">
    <product-top
      :ch="true"
      product-no="03"
      poster-src="/imgs/fa-system/gripper-with-shockac-cube/poster.jpg"
      video-src="/videos/03.mp4"
    >
      <template #title>GRIPPER WITH<br>
        Shokac Cube™</template>
      <template #ja-title>附带触觉传感器的夹钳</template>
      <template #desc>协调合作机器人的夹钳握持部分，<br/>
附带触觉传感器。
      </template>
    </product-top>

    <MessageBlack :ch="true">
      <template #label>产品概要</template>
      <template #title>判别生产品的颜色・形状・尺寸等是否合适，需要熟练的技能。</template>
      <template #desc>使用AI机能，学习判断合适的颜色・形状・尺寸等，将仅限于熟练作业者的判断进行自动化。<br/>
在可判定物体的情况下安定夹钳柔软物体。
      </template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/gripper-with-shockac-cube/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>伤痕等不良情况的发生</template>
          <template #num>50</template>
          <template #unitBefore>减少了</template>
          <template #unit>％</template>
          <template #body>对于容易发生伤痕的果实等用AI机能识别判定夹钳部，
可不弄伤产品对其夹起。</template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/gripper-with-shockac-cube/2.jpg"
          :image-height="416"
          :image-width="625">
          <template #label>落下等情况的发生</template>
          <template #unitBefore>减少了</template>
          <template #num>50</template>
          <template #unit>％</template>
          <template #body>对机械手和果实的相对位置<br/>
用画像处理进行认识判定，搬运至所需目的地。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter :ch="true"
      :before="[
        `将果实等产品随意放置`,
        `作业者选定合适的商品夹钳`,
        `作业者将商品摆放`,
        `将商品复数个并列，并将全部调整放置于合适位置`,
      ]"
      :after="[
        `将果实等产品随意放置`,
        [`用画像处理进行合适商品的判定`,true],
        [`AI机能按顺序将商品正确放置`,true],
        false
      ]">
      <template #boxCaption>由于导入了附带触觉传感器的夹钳</template>
      <template #boxText>大幅减少了商品的伤痕或落下等不良情况的发生。可迅捷的对应出货。</template>
    </ProductBeforeAfter>

    <ProductSpecs :ch="true" :list="[
      [`有效探知尺寸`,`15×21mm`],
      [`定格变位`,`5mm`],
      [`可安装数`,`最大2个`],
      [`对应`,`Windows 10　（如其他请咨询）`],
    ]">
      <template #title>附带触觉传感器的夹钳的定制设计</template>
      <template #price>500,000</template>
      <template #sub>因规格或尺寸不同，需另行报价。</template>
      <template #boxNote>※如需对所持有的夹钳加装触觉传感器时，有无法安装的可能。</template>
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
