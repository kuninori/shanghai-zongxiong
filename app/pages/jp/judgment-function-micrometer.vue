<template>
  <fa-layout>
    <product-top
      product-no="02"
      poster-src="/imgs/fa-system/judgment-function-micrometer/poster.jpg"
      video-src="/videos/02.mp4"
    >
      <template #title>JUDGMENT<br>
        FUNCTION<br>
        MICROMETER</template>
      <template #ja-title>公差判定機能付きマイクロメータ</template>
      <template #desc>QRコードの型番を読み込むと、加工寸法や<br>
        公差の情報をコンピュータへ読込み、<br>
        マイクロメータの測定値を自動判断判定します。</template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>製品が注文通りに加工されているかマイクロメータでサイズを測り、測定値を紙に手書きで記入し、加工した製品の<br>
      管理を行っていましたが、書き忘れ・書き間違えなどが発生し、管理が不十分でした。</template>
      <template #desc>
        加工する製品情報をQRコードで読み取り、加工寸法と公差の情報をコンピューターへ読込み、マイクロメータで測定した値に対して、<br>
        コンピューターが公差内かを判定します。作業者によるミスを排除し、記入する手間を省くことで作業効率を向上させます。<br>
        また、自動でシステムにより管理されるので、出荷前に寸法の検証作業も効率よく行えます。
      </template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/judgment-function-micrometer/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>不良製品流出件数</template>
          <template #num>0</template>
          <template #unit>件/月</template>
          <template #body>加工寸法を読み違えによる不良品発生の<br>
            損失を大幅に低減することができます。
          </template>
        </ProductFeatureItem>

        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/judgment-function-micrometer/2.jpg"
          :image-height="416"
          :image-width="625">
          <template #label>加工時間</template>
          <template #num>10</template>
          <template #unit>％UP</template>
          <template #body>製造現場で寸法測定し自動保存することで<br>
            寸法値を記入する手間を省くことができます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `手配指示用紙に従い、材料を準備`,
        `加工`,
        `寸法測定：手動で寸法を確認`,
        `加工`,
        `加工完了`,
        `寸法測定、<strong>寸法を用紙に記入</strong>`,
        `作業完了`,
      ]"
      :after="[
        `手配指示用紙に従い、材料を準備`,
        `加工`,
        [`寸法測定：自動`, true],
        `加工`,
        `加工完了`,
        [`寸法測定：自動`,true],
        `作業完了`,
      ]">
      <template #note>※作業工程数自体は変わりませんが、記入時間がなくなるので人的ミスがなくなります。</template>
      <template #boxCaption>公差判定機能付きマイクロメータ導入で</template>
      <template #boxText>加工する製品情報をQRコードで読み取り、作業者によるミスを排除し、記入する手間を省くことで納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :list="[
      [`サイズ`,`W230×D75×H160（mm）　※突起部は含みません。`],
      [`重量`,`2kg`],
      [`消費電力`,`15W`],
    ]">
      <template #title>公差判定機能付きマイクロメータ</template>
      <template #price>80,000</template>
      <template #sub>自動の管理システムは別途お見積もり致します。</template>
      <template #boxNote>※マイクロメータ、USBケーブルはご準備ください。</template>
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
