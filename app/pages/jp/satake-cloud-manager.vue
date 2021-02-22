<template>
  <fa-layout current="p07">
    <product-top
      product-no="07"
      poster-src="/imgs/fa-system/satake-cloud-manager/poster.jpg"
      video-src="/videos/07.mp4"
    >
      <template #title>SATAKE<br>
        CLOUD<br>
        MANAGER</template>
      <template #ja-title>SATAKE稼働管理システム</template>
      <template #desc>自社工場での作業工数を一目で分かりやすく、<br>
      手軽に管理できるようになります。</template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>工程ごとに独立して作業を行なっていたため、前後の作業状態によって、<br>
        無駄な待ち時間や作業の偏りなどが多く起きていました。<br/>
        作業者ごとに工夫をしても、作業をまたぐ部分の無駄を減らすことができませんでした。</template>
      <template #desc>各工程ごとにさまざまな稼働状況を計測し可視化することで、工程ごとの作業のスムーズな連携や<br>
        問題の改善が可能になり、工場内で今まで以上の効果を発揮させます。工場全体でそれぞれの稼働状況を見て、<br>
        製品スケジュールなどを柔軟に調整することで、無駄を減らすことができます。<br>
        システムもクラウドシステムなので大掛かりなシステムを導入する必要はありません。</template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/satake-cloud-manager/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>加工工程の生産性</template>
          <template #num>10</template>
          <template #unit>％UP</template>
          <template #body>問題が発生すると、KPIに基づくアラートが<br class="pc-only">
            アンドン（モニタ）に表示され、<br class="pc-only">
            即座に改善作業に着手することができます。
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
          <template #label>生産工程のシステム構築費</template>
          <template #num>50</template>
          <template #unit>％削減</template>
          <template #body>クラウドサービスなので、システム管理者を<br class="pc-only">
            置く必要が有りません。簡易PCや廉価タブレットを<br class="pc-only">
            使用することで驚くほどコストが抑えられます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `ランカードにて製品の型番と寸法を確認`,
        `加工を実施`,
        `目視で加工寸法を確認し合否を判定`,
        `手書きにて寸法をランカードに転記`,
        `作業後にPCにランカードの内容をインプット`,
        `集計し日報をプリントアウト`,
      ]"
      :after="[
        [`QRコードを読み取り製品の<br class='sp-only'>型番と寸法を自動表示`, true],
        `加工を実施`,
        [`加工寸法をホストに送り合否を自動判定`, true],
        [`ホストが自動集計し日報を自動表示`, true],
        false,
        false,
      ]">
      <template #boxCaption>SATAKE稼働管理システム導入で</template>
      <template #boxText>数字で現在の稼働状況が可視化されるので、作業の様々な問題点を改善し、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :wide="true" :list="[
      [`見える化<br class='sp-only'>（生産性管理）`,`サイクルタイム、稼働率、時間当たりの出来高`],
      [`見える化<br class='sp-only'>（品質管理）`,`加工寸法`],
    ]">
      <template #title>SATAKE稼働管理システム <br is="sp-only" />トータルパッケージ（月額）</template>
      <template #price>38,000</template>
      <template #sub>装置の台数とアプリの本数で金額が異なります。</template>
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
