<template>
  <fa-layout current="p06">
    <product-top
      product-no="06"
      poster-src="/imgs/fa-system/rpa-robot-construction/poster.jpg"
      video-src="/videos/06.mp4"
    >
      <template #video></template>
      <template #title>ROBOTIC<br>
        PROCESS<br>
        AUTOMATION</template>
      <template #ja-title>RPA ロボット構築</template>
      <template #desc>人によるPC作業の業務効率化を目的とし、<br>
        ソフトウェアロボットによって<br>
        業務の自動化・効率化を実現する。<br>
      </template>
    </product-top>

    <MessageBlack>
      <template #label>製品の概要</template>
      <template #title>製品ごとの処理が決まっているので、エクセルやウェブサイトなどに<br>
        毎回同じように入力しているはずが入力ミス、操作ミスにより、間違えた発注が多く行われていました。</template>
      <template #desc>自動化操作のRPAと在庫・販売管理アラジンオフィスを使用し、多くの処理を自動化することで、<br>
        作業ミスと作業時間を大幅に減らします。<br>
        パソコン操作をする必要がなくなるので、パソコンが苦手でも複雑な処理が可能です。
      </template>
    </MessageBlack>

    <ProductFeatures>
      <div class="feature-list">
        <ProductFeatureItem
          class="feature-item"
          image-position="right"
          image-src="/imgs/fa-system/rpa-robot-construction/1.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>作業工数</template>
          <template #num>25</template>
          <template #unit>％削減</template>
          <template #body>煩雑な受発注入力をRPAロボットを<br>
            用いることで自動化します。
          </template>
        </ProductFeatureItem>
        <ProductFeatureItem
          class="feature-item"
          image-position="left"
          image-src="/imgs/fa-system/rpa-robot-construction/2.jpg"
          :image-height="416"
          :image-width="625"
          attention-position="center"
        >
          <template #label>受発注処理</template>
          <template #num>2</template>
          <template #unit>時間</template>
          <template #body>発注点の適正化により無駄な在庫を持たない、<br>
            効率的な作業フローを実現できます。
          </template>
        </ProductFeatureItem>
      </div>
    </ProductFeatures>

    <ProductBeforeAfter
      :before="[
        `アラジンオフィスに受注情報を手入力`,
        `発注リストを印刷し仕入先へFAX発注`,
        `納入情報をアラジンオフィスに手入力`,
        `納品書を手入力`,
        `納品`,
      ]"
      :after="[
        [`受注情報を自動ダウンロードし、<br>アラジンオフィスに登録後、自動発注、メール送信`, true],
        [`納入品番をRPAに入力、<br>納入情報を自動登録、自動発行`,true],
        `納品`,
        false,
        false,
      ]">
      <template #boxCaption>RPA ロボット構築導入で</template>
      <template #boxText>今まで手入力で行っていた受発注の作業を自動化することにより人的ミスが格段に減少するので、納品までのスピーディーな対応を可能にさせます。</template>
    </ProductBeforeAfter>

    <ProductSpecs :list="[
      [`対応環境`,`Windows10 <br class='sp-only'>(64bit/32bit、メモリ8GB)、<br class='sp-only'>Excel2013以降、アラジンオフィス`, 'wide'],
    ]">
      <template #title>RPA ロボット構築 <br class="sp-only" />トータルパッケージ</template>
      <template #price>950,000</template>
      <template #sub>RPA Robot年間ライセンス費用：250,000円（毎年）＋<br>
        RPA開発：600,000円 （規模により変動）＋サポート費：100,000円</template>
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
