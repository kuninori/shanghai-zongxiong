<template>
  <fa-layout current="p03">
    <product-top
      product-no="03"
      poster-src="/imgs/fa-system/gripper-with-shockac-cube/poster.jpg"
      video-src="/videos/03.mp4"
    >
      <template #title>GRIPPER WITH<br>
        Shokac Cube™</template>
      <template #ja-title>ショッカクキューブ™付グリッパー</template>
      <template #desc>協働ロボットのグリッパーの把持部に<br>
        ショッカクキューブ™がついた優れものです。
      </template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>製品の色・形・サイズなどが適切かどうかを判断するのは、熟練の技が必要でした。</template>
      <template #desc>AIを使用することで、適切な色・形・サイズなどを学習させて、<br>
        熟練者にしかできない判断を自動化ができます。<br>
        物体判定を行うことで柔らかいものでも確実に掴むことができます。
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
          <template #label>傷付けなど不具合発生</template>
          <template #num>50</template>
          <template #unit>％削減</template>
          <template #body>傷つきやすい果実などの最適な把持部を<br>
            AIで認識し、商品を傷つけずにグリップできます。</template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/gripper-with-shockac-cube/2.jpg"
          :image-height="416"
          :image-width="625">
          <template #label>落下などのトラブル発生</template>
          <template #num>50</template>
          <template #unit>％削減</template>
          <template #body>ロボットアームと果実などの相対位置を<br>
            画像処理で認識し、目的地に運ぶことができます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `果実などの商品がランダムに配置`,
        `作業者が適切な商品を掴む`,
        `作業者が商品を並べる`,
        `商品を複数個並べ、全体が適正になるまで配置`,
      ]"
      :after="[
        `果実などの商品がランダムに配置`,
        [`画像処理で適正な商品を判断`,true],
        [`AIにより順次、商品を適正に配置`,true],
        false
      ]">
      <template #boxCaption>ショッカクキューブ™付グリッパー導入で</template>
      <template #boxText>傷付けや落下などで製品の欠損が格段に減少するので、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :list="[
      [`有効検知<br class='sp-only'>サイズ`,`15×21mm`],
      [`定格変位`,`5mm`],
      [`取付個数`,`最大2個`],
      [`対応環境`,`Windows 10　（その他の環境はご相談ください）`],
    ]">
      <template #title>ショッカクキューブ™付グリッパー <br class="sp-only"/>カスタム設計</template>
      <template #price>500,000</template>
      <template #sub>仕様やサイズにより、<br class="sp-only"/>お見積もり致します。</template>
      <template #boxNote>※お客様がご用意されたグリッパーへショッカクキューブ™を取り付けます。取り付かない場合もあります。</template>
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
