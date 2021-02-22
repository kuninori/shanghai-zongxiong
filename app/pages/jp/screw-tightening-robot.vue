<template>
  <fa-layout current="p01">
    <product-top
      product-no="01"
      poster-src="/imgs/fa-system/screw-tightening-robot/poster.jpg"
      video-src="/videos/01.mp4"
    >
      <template #title>SCREW<br>TIGHTENING<br>ROBOT</template>
      <template #ja-title>ネジ締めロボット</template>
      <template #desc>今まで手作業で行っていた<br>
        ネジ締め・ネジ外し作業を自動化します。
      </template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>ネジ締め・ネジ外しは、数が多くとても時間のかかる作業でした。</template>
      <template #desc> 複数のサイズと形に対応し、高い自由度を持たせたうえで
        自動化することで、24時間休まずに稼働し続けられるため、大幅に作業効率を向上させます。
      </template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/screw-tightening-robot/1.jpg"
          :image-height="416"
          :image-width="625"
          attentionPosition="left"
        >
          <template #label>省人化</template>
          <template #num>180</template>
          <template #unit>分/日</template>
          <template #body>複数種類のネジに対して<br class="pc-only">
            作業プログラムを切り替えて作業できるので、<br>
            ロボットを入れ替える必要がありません。
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
          <template #label>段取り替え</template>
          <template #num>5</template>
          <template #unit>分</template>
          <template #body>4種類のネジフィーダーとドライバーの<br>
            2本持ちが可能なので、同一ワークフローで<br class="pc-only">
            2種のトルクに対応できます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `対象のネジと治具プレートの準備`,
        `ネジ締め作業：手動で1つずつ締める`,
        `加工`,
        `治具プレートの準備`,
        `ネジ外し作業：手動で1つずつ外す`,
        `作業完了`,
      ]"
      :after="[
        `対象のネジをネジフィーダーへ投入<br>治具プレートをロボットの作業テーブルに固定`,
        [`作業プログラムの設定後、ネジ締め作業`, true],
        `加工`,
        `治具プレートの準備`,
        [`作業プログラムの設定後、ネジ外し作業：自動`,true],
        `作業完了`,
      ]">
      <template #note>※作業工程数自体は変わりませんが、<br class="sp-only" />作業単体のスピードが大きく異なります。</template>
      <template #boxCaption>佐竹の自動ネジ締めロボット導入で</template>
      <template #boxText>複数種類のネジ、2種類のトルクの対応が可能なので、大幅に作業効率を向上させ、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :list="[
      [`サイズ`,`W1,070×D650× H860（mm）<br class='sp-only'> ※突起部は含みません。`],
      [`重量`,`90kg`],
      [`消費電力`,`500W`],
      [`使用エア圧`,`0.5kPa（推奨値）`],
    ]">
      <template #title>ネジ締めロボット<br class="sp-only">トータルパッケージ</template>
      <template #price>5,000,000</template>
      <template #sub>設置費用、初期費用、サポート費用等は別途お見積もり致します。</template>
      <template #boxNote>※部分的な対応や、よりコンパクトに<br class="sp-only" />対応することも可能です。</template>
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
