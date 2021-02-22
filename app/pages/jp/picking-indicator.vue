<template>
  <fa-layout current="p04">
    <product-top
      product-no="04"
      poster-src="/imgs/fa-system/picking-indicator/poster.jpg"
      video-src="/videos/04.mp4"
    >
      <template #title>PICKING<br>
        INDICATOR</template>
      <template #ja-title>ピッキング指示機</template>
      <template #desc>形式QRコードを読み込むと、原材料棚の<br class="pc-wide-only">
        LEDが点灯し、置き場所を指示します。
      </template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>倉庫から製品を探すのは一苦労です。注文一覧を見ながら倉庫を駆け回り、<br>
        種類・サイズ・形などを瞬時に判断しながら、選んでいかなければいけません。</template>
      <template #desc>ピッキング指示機なら注文書にあるQRコードを読み取るだけで、<br>
        棚をピカッと光らせ一瞬で場所を見つけることができます。<br>
        製品を棚に置く時、注文時、在庫確認など多くのシチュエーションで使えます。</template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/picking-indicator/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center" >
          <template #label>材料選択間違い発生</template>
          <template #num>0</template>
          <template #unit>件</template>
          <template #body>製品の形式QRコードを読み込むだけで<br>
            原材料棚のLEDが点灯します。
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
          <template #label>置き場を探す時間</template>
          <template #num>50</template>
          <template #unit>％削減</template>
          <template #body>煩雑な原材料棚での部品を<br>
            探し出す手間や間違いを低減できます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `製品の型式を読む`,
        `製品の材料を判定`,
        `原材料棚へ移動`,
        `多種多様な材料から探し出す`,
        `作業場へ戻る`,
        `製作開始`
      ]"
      :after="[
                [`製品の型式QRコードをスキャン`,true],
        [`原材料棚のLEDが点灯`,true],
        `原材料棚へ移動`,
        `作業場へ戻る`,
        `製作開始`,
        false,

      ]">
      <template #boxCaption>ピッキング指示機導入で</template>
      <template #boxText>製品の形式QRコードを読み込んで探し出すので、探し出す手間や間違いがなく、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :list="[
      [`電源`,`AC100V`, 'wide'],
    ]">
      <template #title>ピッキング指示機<br class="sp-only">ベーシックパッケージ</template>
      <template #price>400,000</template>
      <template #sub>LEDの灯数や仕様により、<br clss="sp-only">お見積もり致します。</template>
      <template #boxNote>※部分的な対応や、よりコンパクトに対応することも可能です。</template>
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
