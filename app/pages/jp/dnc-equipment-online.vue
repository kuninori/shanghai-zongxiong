<template>
  <fa-layout current="p05">
    <product-top
      product-no="05"
      poster-src="/imgs/fa-system/dnc-equipment-online/poster.jpg"
      video-src="/videos/05.mp4"
    >
      <template #title>DIRECT<br>NUMERICAL<br>CONTROL</template>
      <template #ja-title>DNC（装置オンライン）</template>
      <template #desc>QRコードの型番を読み込むと加工データを<br class="pc-wide-only">
        NC加工機にネットワークを通して設定できます。
      </template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>NC加工機での加工ミスは、加工データの設定ミスが原因で発生しがちです。<br>
        設定ミスの原因は、加工する製品とデータの選択の間違えや、<br>
        データを編集する際の数値入力ミスなどの作業ミスであることが多いです。
      </template>
      <template #desc>作業ミスをなくすため、全ての加工データをネットワークで管理し、<br>
        加工する製品ごとにQRコードを読み取るだけで、NC加工機に適切な設定がされます。<br>
        NC加工機にデータを設定する手間や、製品ごとにデータを選ぶ手間をなくします。
      </template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/dnc-equipment-online/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>不良品発生率/月</template>
          <template #num>10</template>
          <template #unit>％削減</template>
          <template #body>作業者の製品加工データ編集ミスでおこる<br>
            不良品発生を低減させます。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/dnc-equipment-online/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center">
          <template #label>作業時間/月</template>
          <template #num>1</template>
          <template #unit>人削減<span> （見込）</span></template>
          <template #body>作業者が加工データをPCから<br>
            NC加工機に移す手間をなくします。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `製品番号から手作業でプログラムを選択`,
        `ランカードから装置に<br class='sp-only'>手入力でパラメータを設定`,
        `画面にて目視で修正内容を確認`,
        `作業開始`,
      ]"
      :after="[
      [`QRコードを読みプログラムと<br class='sp-only'>パラメータを自動転送`,false],
      `作業開始`,
      false,
      false,
      ]">
      <template #boxCaption>DNC（装置オンライン）導入で</template>
      <template #boxText>QRコードを読み込んでデータを編集するので間違いがなく、また、加工データの転送もネットワークでできるので、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs>
      <template #title>DNC（装置オンライン） <br class="sp-only" />トータルパッケージ</template>
      <template #no-price>開発中</template>
      <template #sub>FANUC製NC装置に対する、TCP/IP通信によるプログラムとパラメータの転送が可能です。</template>
      <template #boxNote>※部分的な対応や、よりコンパクトに対応することも可能です。</template>
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
